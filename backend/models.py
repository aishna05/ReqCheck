from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from backend.database import Base

class RequestLog(Base):
    __tablename__ = "request_logs"

    id = Column(Integer, primary_key=True, index=True)
    method = Column(String(10))
    url = Column(String(755))
    request_body = Column(Text, nullable=True)
    response_body = Column(Text, nullable=True)
    response_code = Column(Integer, nullable=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    details = Column(Text, nullable=True)
    status = Column(String(50), nullable=True)

class MockEndpoint(Base):
    __tablename__ = "mock_endpoints"

    id = Column(Integer, primary_key=True, index=True)
    route = Column(String(755), unique=True)
    method = Column(String(10))
    response_json = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
