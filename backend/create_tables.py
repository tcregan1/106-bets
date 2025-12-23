from config.db import engine, Base
from models.user import User
from models.bets import Bet, UserBet

def create_database():
    print("Connecting to Supabase...")
    try:
        Base.metadata.create_all(bind=engine)
        print("Success: Tables created")
    except Exception as e:
        print(f"Error: {e}")
        
if __name__ == "__main__":
    create_database()