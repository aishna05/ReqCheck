# backend/routes/request_router.py

from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from schemas import RequestForm
from models import RequestLog
from database import SessionLocal
from sqlalchemy.orm import Session
import json


router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
@router.post("/api/requestlog")
def create_request_log(request_log: RequestForm, db: Session = Depends(get_db)):
    try:
        print("Received log:", request_log)
        db_log = RequestLog(
            method=request_log.method,
            url=request_log.url,
            request_body=json.dumps(request_log.request_body) if request_log.request_body else None,
            response_body=json.dumps(request_log.response_body) if request_log.response_body else None,
            response_code=request_log.response_code,
            timestamp=(
    datetime.strptime(request_log.timestamp.replace("Z", ""), "%Y-%m-%dT%H:%M:%S.%f")
    if request_log.timestamp else datetime.now()
),
            details=request_log.details,
            status=request_log.status
        )
        db.add(db_log)
        db.commit()
        db.refresh(db_log)
        return {"message": "Request logged", "id": db_log.id, "status": db_log.status}
    except Exception as e:
        import traceback
        print(traceback.format_exc())
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/api/request-history")
def get_all_request_logs(db: Session = Depends(get_db)):
    logs = db.query(RequestLog).order_by(RequestLog.id.desc()).all()
    return [
        {
            "id": log.id,
            "method": log.method,
            "url": log.url,
            "request_body": json.loads(log.request_body) if log.request_body else None,
            "response_body": json.loads(log.response_body) if log.response_body else None,
            "response_status": log.response_code,
            "status": log.status,
            "details": log.details,
            "timestamp": log.timestamp.isoformat() if log.timestamp else None
        }
        for log in logs
    ]
