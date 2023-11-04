from typing import List, Optional
from pydantic import BaseModel, Field

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class LikeBase(BaseModel):
    user_id: int

class LikeCreate(LikeBase):
    article_id: int

class Like(LikeBase):
    
    class Config:
        orm_mode = True

class ArticleBase(BaseModel):
    title: str
    content: str

class ArticleCreate(ArticleBase):
    pass

class Article(ArticleBase):
    id: int
    author_id: int
    likes: List[Like] = []

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    username: str 

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    description: Optional[str] = None
    is_active: bool
    articles: List[Article] = []

    class Config:
        orm_mode = True