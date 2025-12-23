from config.db import engine, Base
import models.user

Base.metadata.create_all(bind=engine)