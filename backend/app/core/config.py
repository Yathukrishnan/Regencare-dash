from pydantic_settings import BaseSettings
from pathlib import Path

_BASE = Path(__file__).parent.parent.parent
_DB_PATH = _BASE / "regencare.db"

class Settings(BaseSettings):
    SECRET_KEY: str = "regencare-secret-key-2026"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24
    DATABASE_URL: str = f"sqlite:///{_DB_PATH.resolve()}"

    class Config:
        env_file = str(_BASE / ".env")

settings = Settings()
