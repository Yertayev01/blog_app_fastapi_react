from sqlalchemy import create_engine
from dotenv import load_dotenv
from sqlalchemy.orm import sessionmaker
import os

load_dotenv()

# SQLALCHEMY_DATABASE_URL = "sqlite:///./simple_api.db"
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
# connect_args={"check_same_thread": False} is only needed for sqlite

# print(os.getenv("DATABASE_URL"))
# postgresql+psycopg2://postgres:password@:5432/methinky_db

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()