from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import MockEndpoint
from ..schemas import MockCreate
import json

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/api/mock")
def create_mock(mock: MockCreate, db: Session = Depends(get_db)):
    existing = db.query(MockEndpoint).filter_by(route=mock.route, method=mock.method).first()
    if existing:
        raise HTTPException(status_code=409, detail="Mock already exists")

    new_mock = MockEndpoint(
        route=mock.route,
        method=mock.method,
        response_json=json.dumps(mock.response_json)
    )
    db.add(new_mock)
    db.commit()
    db.refresh(new_mock)
    return {"id": new_mock.id}

@router.delete("/api/mock/{mock_id}")
def delete_mock(mock_id: int, db: Session = Depends(get_db)):
    mock = db.query(MockEndpoint).filter(MockEndpoint.id == mock_id).first()
    if not mock:
        raise HTTPException(status_code=404, detail="Mock not found")

    db.delete(mock)
    db.commit()
    return {"detail": "Mock deleted successfully"}

@router.get("/api/mocks")
def get_all_mocks():
    db = SessionLocal()
    try:
        mocks = db.query(MockEndpoint).all()
        return [{"id": m.id, "route": m.route, "method": m.method} for m in mocks]
    finally:
        db.close()
