from typing import List, Optional

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from . import crud, models, schemas, auth
from .database import SessionLocal, engine
from .dependencies import get_db

from datetime import datetime, timedelta
from .secret import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES

# very simplistic way to create the tables
# should use Alembic to create tables and handle migrations
# TODO Set up Alembic
models.Base.metadata.create_all(bind=engine)

# To run:
# navigate to root folder
# run `uvicorn app.main:app --reload`
app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db, user=user)

@app.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item(user_id: int, item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_item(db, item=item, user_id=user_id)

@app.get("/items/", response_model=List[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), token: str = Depends(auth.oauth2_scheme)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items


@app.post("/token", response_model=schemas.Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = auth.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/token/user", response_model=schemas.User)
async def read_users_me(current_user: schemas.User = Depends(auth.get_current_active_user)):
    return current_user