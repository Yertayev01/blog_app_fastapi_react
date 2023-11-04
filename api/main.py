import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers import users, articles, auth
from api import models
from api import database
app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(users.router)
app.include_router(articles.router)
app.include_router(auth.router)

models.Base.metadata.create_all(bind=database.engine)