from typing import List
from fastapi import APIRouter
from fastapi.param_functions import Depends
from sqlalchemy.orm.session import Session

from api import crud, schemas
from api.dependencies.db import get_db
from api.dependencies.auth import get_current_active_user, oauth2_scheme

router = APIRouter(
    prefix="/articles",
    dependencies=[Depends(oauth2_scheme)],
    tags=["articles"]
)

@router.get("/", response_model=List[schemas.Article])
def read_articles(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    articles = crud.get_articles(db, skip=skip, limit=limit)
    return articles

@router.get("/{article_id}", response_model=schemas.Article)
def read_article(article_id: int, db: Session = Depends(get_db)):
    article = crud.get_article(db, article_id)
    return article

@router.post("/{article_id}/like")
async def like_article(article_id: int, db: Session = Depends(get_db), user: schemas.User = Depends(get_current_active_user)):
    res = { "message": f"Successfully like article {article_id}" }

    try:
        crud.like_article(db, article_id, user_id=user.id)
    except:
        res = { "message": f"Article {article_id} has already been liked by user" }
    finally:
        return res