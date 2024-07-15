from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from crud import get_tasks, create_task, update_task, delete_task
from schemas import TaskCreate, Task,TaskUpdate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/api/tasks", response_model=list[Task])
def read_tasks(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    tasks = get_tasks(db, skip=skip, limit=limit)
    return tasks

@router.post("/api/tasks", response_model=Task)
def add_task(task: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db, task)

@router.put("/api/tasks/{task_id}", response_model=Task)
def update_task_status(task_id: int, task: TaskUpdate, db: Session = Depends(get_db)):
    return update_task(db, task_id, task)



@router.delete("/api/tasks/{task_id}", response_model=Task)
def remove_task(task_id: int, db: Session = Depends(get_db)):
    return delete_task(db, task_id)
