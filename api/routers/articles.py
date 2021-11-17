from typing import List
from fastapi import APIRouter
from fastapi.param_functions import Depends
from sqlalchemy.orm.session import Session

from api import crud, schemas
from api.dependencies import get_db
from api import auth_dep

router = APIRouter(
    prefix="/articles",
    dependencies=[Depends(auth_dep.oauth2_scheme)],
    tags=["articles"]
)

@router.get("/", response_model=List[schemas.Article])
def read_articles(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    articles = crud.get_articles(db, skip=skip, limit=limit)
    return articles