import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import engine, Base, SessionLocal
from app.core.auth import hash_password
from app.core.config import settings
from app.models.models import User
from app.api import auth_routes

Base.metadata.create_all(bind=engine)

# Auto-seed users on first startup using credentials from .env
def _seed():
    if not settings.ADMIN_PASSWORD or not settings.VIEWER_PASSWORD:
        return
    db = SessionLocal()
    try:
        if not db.query(User).first():
            db.add_all([
                User(email=settings.ADMIN_EMAIL, name="Admin", hashed_password=hash_password(settings.ADMIN_PASSWORD), role="admin"),
                User(email=settings.VIEWER_EMAIL, name="NT Global Team", hashed_password=hash_password(settings.VIEWER_PASSWORD), role="viewer"),
            ])
            db.commit()
    finally:
        db.close()

_seed()

app = FastAPI(title="Regencare Intelligence Dashboard", version="1.0.0")

_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://regencare-dash.vercel.app",
]
if os.getenv("FRONTEND_URL"):
    _origins.append(os.getenv("FRONTEND_URL"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router)


@app.get("/")
def root():
    return {"status": "Regencare Intelligence Dashboard API running"}
