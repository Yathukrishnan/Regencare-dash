"""
Seed the database with initial users.
Run once: python seed.py
"""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from app.core.database import SessionLocal, engine, Base
from app.core.auth import hash_password
from app.models.models import User

Base.metadata.create_all(bind=engine)
db = SessionLocal()

if not db.query(User).first():
    db.add_all([
        User(email="admin@regencare.in", name="Admin", hashed_password=hash_password("regencare2026"), role="admin"),
        User(email="team@ntglobal.net", name="NT Global Team", hashed_password=hash_password("ntglobal2026"), role="viewer"),
    ])
    db.commit()
    print("[OK] Users seeded")
    print("     admin@regencare.in / regencare2026")
    print("     team@ntglobal.net  / ntglobal2026")
else:
    print("[OK] Users already exist")

db.close()
