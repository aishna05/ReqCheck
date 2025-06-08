from fastapi import FastAPI
import models
from database import engine, Base
from models import Base, RequestLog, MockEndpoint
from routes import mock_router
from models import RequestLog, MockEndpoint
from routes import mock_router , request_router
from schemas import RequestForm
from fastapi.middleware.cors import CORSMiddleware
from database import SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://req-check-three.vercel.app/"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the ReqCheck API!"}

app.include_router(mock_router.router, prefix="", tags=["mock_endpoints"])
app.include_router(request_router.router, prefix="/request", tags=["request_logs"])
@app.get("/api/request-history")
def get_request_history():
    db = SessionLocal()
    try:
        logs = db.query(RequestLog).all()
        return logs
    finally:
        db.close()

# @app.post("/api/RequestLog")
# def create_request_log(request_log: RequestForm):
#     db = SessionLocal()
#     try:
#         db_log = RequestLog(**request_log.dict())
#         db.add(db_log)
#         db.commit()
#         db.refresh(db_log)
#         return db_log
#     finally:
#         db.close()
