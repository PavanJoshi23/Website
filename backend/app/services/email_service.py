import logging
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from app.config import settings
from app.models.contact import ContactRequest

logger = logging.getLogger(__name__)


async def send_contact_email(payload: ContactRequest) -> None:
    """Send a contact form submission via SMTP, or log it if SMTP is not configured."""
    if not settings.smtp_host or not settings.notify_email:
        logger.info(
            "\n[CONTACT FORM — no SMTP configured]\n"
            f"From    : {payload.name} <{payload.email}>\n"
            f"Subject : {payload.subject}\n"
            f"Message :\n{payload.message}\n"
        )
        return

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Portfolio Contact] {payload.subject}"
    msg["From"] = settings.smtp_user
    msg["To"] = settings.notify_email
    msg["Reply-To"] = payload.email

    html_body = f"""
    <html><body style="font-family:sans-serif;color:#0f172a">
      <h2 style="color:#6366f1">New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px 0;font-weight:600">Name</td><td>{payload.name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600">Email</td><td>{payload.email}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600">Subject</td><td>{payload.subject}</td></tr>
      </table>
      <p style="margin-top:16px;font-weight:600">Message:</p>
      <p style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px">{payload.message}</p>
    </body></html>
    """
    msg.attach(MIMEText(html_body, "html"))

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
        server.starttls()
        server.login(settings.smtp_user, settings.smtp_password)
        server.sendmail(settings.smtp_user, settings.notify_email, msg.as_string())
        logger.info(f"Contact email sent to {settings.notify_email}")
