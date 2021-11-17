from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# Migrate Databases with:
# docker compose run api alembic revision --autogenerate -m "migration_name"
# docker compose run api alembic upgrade head

# Downgrade with:
# docker compose run api alembic downgrade head

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True)
    description = Column(String)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    articles = relationship("Article", back_populates="author")


class Article(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(String, index=True)
    author_id = Column(Integer, ForeignKey("users.id"))

    author = relationship("User", back_populates="articles")