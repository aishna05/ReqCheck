from pydantic import BaseModel
from typing import Dict, Any , Optional

class MockCreate(BaseModel):
    route: str
    method: str
    response_json: Dict[str, Any]


class RequestForm(BaseModel):
    method: str
    url: str
    timestamp: Optional[str] = None        # Optional if frontend sends it
    details: Optional[str] = None
    status: Optional[str] = None           # use Optional to avoid missing field issues
    request_body: Optional[Dict[str, Any]] = None
    response_body: Optional[Dict[str, Any]] = None
    response_code: Optional[int] = None

    class Config:
        extra = "ignore"  # ignores unexpected fields
        populate_by_name = True  # allows snake_case keys from frontend