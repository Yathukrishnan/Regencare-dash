import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import engine, Base
from app.api import auth_routes

Base.metadata.create_all(bind=engine)

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
