"""
Seed the database with initial users.
Run once: python seed.py
Credentials are read from backend/.env
"""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from app.core.database import SessionLocal, engine, Base
from app.core.auth import hash_password
from app.core.config import settings
from app.models.models import User

Base.metadata.create_all(bind=engine)
db = SessionLocal()

if not db.query(User).first():
    db.add_all([
        User(email=settings.ADMIN_EMAIL, name="Admin", hashed_password=hash_password(settings.ADMIN_PASSWORD), role="admin"),
        User(email=settings.VIEWER_EMAIL, name="NT Global Team", hashed_password=hash_password(settings.VIEWER_PASSWORD), role="viewer"),
    ])
    db.commit()
    print("[OK] Users seeded")
else:
    print("[OK] Users already exist")

db.close()
