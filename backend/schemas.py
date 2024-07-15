# schemas.py
from pydantic import BaseModel
from datetime import datetime

class Task(BaseModel):
    id: int
    title: str
    description: str
    status: str  # "todo", "in_progress", or "done"
    created_at: datetime

    class Config:
        orm_mode = True

class TaskCreate(BaseModel):
    title: str
    description: str
    status: str = "todo"  # Default status


class TaskUpdate(BaseModel):
    status: str  # Must match "todo", "in_progress", or "done"

