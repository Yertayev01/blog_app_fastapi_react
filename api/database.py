from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os
from database import Database

# connect_args={"check_same_thread": False} is only needed for sqlite

engine = create_engine(os.getenv("DATABASE_URL"))

database = Database(os.getenv("DATABASE_URL"))
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

