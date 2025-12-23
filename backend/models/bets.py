from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from config.db import Base
import datetime

class Bet(Base):
    __tablename__ = "bets"  
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String, nullable=False)
    total_pot = Column(Integer, default=0)
    status = Column(String, default="open") # open, active, settled
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    participants = relationship("UserBet", back_populates="bet")

class UserBet(Base):
    __tablename__ = "user_bets"  
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    bet_id = Column(Integer, ForeignKey("bets.id"), nullable=False)
    stake = Column(Integer, nullable=False)
    bet = relationship("Bet", back_populates="participants")