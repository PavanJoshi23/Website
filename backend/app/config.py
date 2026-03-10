from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Portfolio API"
    debug: bool = True
    allowed_origins: list[str] = ["http://localhost:5175"]

    # Optional SMTP — leave blank to just log contact submissions
    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    notify_email: str = ""

    model_config = {"env_file": ".env"}


settings = Settings()
