from sqlalchemy.orm import Session
from . import models, schemas
from api.dependencies.auth import get_password_hash


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(username=user.username, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_articles(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Article).offset(skip).limit(limit).all()

def get_article(db: Session, article_id: int):
    return db.query(models.Article).filter(models.Article.id == article_id).first()

def create_article(db: Session, article: schemas.ArticleCreate, user_id: int):
    db_article = models.Article(**article.dict(), author_id=user_id)
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

def like_article(db: Session, article_id: int, user_id: int):
    db_like = models.Like(article_id=article_id, user_id=user_id)
    db.add(db_like)
    db.commit()
    db.refresh(db_like)
    return db_like