from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime

from ..core.database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    name = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="viewer")  # admin | viewer
    created_at = Column(DateTime, default=datetime.utcnow)


class Keyword(Base):
    __tablename__ = "keywords"
    id = Column(Integer, primary_key=True)
    keyword = Column(String, nullable=False)
    category = Column(String)        # Medical Procedure | Brand | Local SEO | Cost/Price | Conversational
    branch = Column(String)          # Kochi | Calicut | Chennai | Kerala | UAE | All
    volume = Column(Integer)
    intent = Column(String)          # Informational | Commercial | Transactional | Navigational
    current_rank = Column(Integer, nullable=True)
    best_rank = Column(Integer, nullable=True)
    target_rank = Column(Integer, default=1)
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    rank_history = relationship("RankHistory", back_populates="keyword", cascade="all, delete-orphan")


class RankHistory(Base):
    __tablename__ = "rank_history"
    id = Column(Integer, primary_key=True)
    keyword_id = Column(Integer, ForeignKey("keywords.id"))
    rank = Column(Integer, nullable=True)
    date = Column(DateTime, default=datetime.utcnow)
    keyword = relationship("Keyword", back_populates="rank_history")


class Competitor(Base):
    __tablename__ = "competitors"
    id = Column(Integer, primary_key=True)
    domain = Column(String, nullable=False)
    name = Column(String, nullable=False)
    type = Column(String)            # Local | Hospital
    da_score = Column(Integer)
    category = Column(String)
    description = Column(Text)
    content_score = Column(Integer)
    schema_level = Column(String)    # None | Basic | Moderate | Advanced | Full Graph
    mobile_score = Column(Integer)
    gbp_rating = Column(Float)
    key_strengths = Column(Text)     # pipe-separated list
    keywords_ranking = Column(Text)  # pipe-separated list
    created_at = Column(DateTime, default=datetime.utcnow)


class AuditItem(Base):
    __tablename__ = "audit_items"
    id = Column(Integer, primary_key=True)
    pillar = Column(String, nullable=False)
    item = Column(Text, nullable=False)
    priority = Column(String)        # Critical | High | Medium | Low
    status = Column(String, default="Pending")  # Pending | In Progress | Done
    owner = Column(String, nullable=True)
    due_date = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)


class AiMessage(Base):
    __tablename__ = "ai_messages"
    id = Column(Integer, primary_key=True)
    session_id = Column(String, nullable=False)
    role = Column(String)            # user | assistant
    content = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
