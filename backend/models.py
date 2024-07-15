from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from datetime import datetime

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    status = Column(String, default="todo")  # Options: "todo", "in_progress", "done"
    created_at = Column(DateTime, default=datetime.utcnow)
