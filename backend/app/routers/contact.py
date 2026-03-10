import logging

from fastapi import APIRouter, HTTPException

from app.models.contact import ContactRequest, ContactResponse
from app.services.email_service import send_contact_email

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("", response_model=ContactResponse)
async def submit_contact(payload: ContactRequest):
    try:
        await send_contact_email(payload)
        return ContactResponse(success=True, message="Message received! I'll get back to you soon.")
    except Exception as e:
        logger.error(f"Contact form submission failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to process message.")
