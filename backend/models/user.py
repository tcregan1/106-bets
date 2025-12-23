from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from config.db import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index =True)
    username = Column(String, unique = True, index=True, nullable=False)
    #Password will be hashed
    password = Column(String, nullable=False)
    balance = Column(Integer, default=1000)
    bets = relationship("UserBet", backref="user")