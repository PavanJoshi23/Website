from pydantic import BaseModel, EmailStr, field_validator


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

    @field_validator("name", "subject", "message")
    @classmethod
    def not_empty(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Field cannot be empty")
        if len(v) > 2000:
            raise ValueError("Field too long")
        return v


class ContactResponse(BaseModel):
    success: bool
    message: str
