from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from pydantic import Field, BaseModel

Base = declarative_base()

# Migrate Databases with:
# docker compose run api alembic revision --autogenerate -m "migration_name"
# docker compose run api alembic upgrade head

# Downgrade with:
# docker compose run api alembic downgrade head


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, index=True, nullable=False)     
    description = Column(String(100))
    hashed_password = Column(String(100))
    is_active = Column(Boolean, default=True)
    articles = relationship("Article", back_populates="author")



class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), index=True)
    content = Column(String(100), index=True)
    author_id = Column(Integer, ForeignKey("users.id"))

    author = relationship("User", back_populates="articles")
    likes = relationship("Like")

class Like(Base):
    __tablename__ = "likes"

    article_id = Column(ForeignKey("articles.id"), primary_key=True)
    user_id = Column(ForeignKey("users.id"), primary_key=True)