from pydantic import BaseModel
from fastapi.param_functions import Query
from typing import Optional

class CreateGameData(BaseModel):
    bank_id: str = Query(...)
    admin_wallet_id: str = Query(...)
    max_players_count: int
    available_player_names: str =  Query(...)

class CreateFirstPlayerData(BaseModel):
    bank_id: str = Query(...)
    user_id: str = Query(...)

class UpdateFirstPlayerData(BaseModel):
    bank_id: str = Query(...)
    player_wallet_id: str = Query(...)

class UpdateFirstPlayerName(BaseModel):
    player_wallet_id: str = Query(...)
    player_wallet_name: str = Query(...)

class UpdatePlayerName(BaseModel):
    player_wallet_id: str = Query(...)
    player_wallet_name: str = Query(...)

class UpdateBankBalanceData(BaseModel):
    bank_id: str = Query(...)
    balance: int

class UpdateGameFundingData(BaseModel):
    bank_id: str = Query(...)
    initial_funding: int
    initial_player_balance: int

class StartGameData(BaseModel):
   bank_id: str = Query(...)
   started: bool

class UpdateGameVoucherData(BaseModel):
    bank_id: str = Query(...)
    voucher_id: str = Query(...)

class UpdateGamePayLinkData(BaseModel):
    bank_id: str = Query(...)
    pay_link_id: str = Query(...)
    pay_link: str = Query(...)

class UpdateGameInvoiceData(BaseModel):
    bank_id: str = Query(...)
    payment_req: str = Query(...)
    payment_hash : str = Query(...)

class UpdatePlayerBalance(BaseModel):
    player_wallet_id: str = Query(...)
    player_balance: int

class CreatePlayerData(BaseModel):
    player_wallet_id: str = Query(...)
    player_wallet_name: str = Query(...)
    player_wallet_inkey: str = Query(...)
    player_balance: int
    bank_id: str = Query(...)

class InvitePlayerData(BaseModel):
    game_id: str = Query(...)

class Game(BaseModel):
    bank_id: str = Query(...)
    admin_wallet_id: str = Query(...)
    max_players_count: int

class BankBalance(BaseModel):
    bank_balance: int

class PlayerBalance(BaseModel):
   player_balance: int

class GameFunding(BaseModel):
    initial_funding: int
    initial_player_balance: int

class GameStarted(BaseModel):
    started: bool

class Voucher(BaseModel):
    voucher_id: str = Query(...)

class PayLink(BaseModel):
    pay_link_id: str = Query(...)
    pay_link: str = Query(...)

class Invoice(BaseModel):
    payment_req: str = Query(...)
    payment_hash : str = Query(...)

class GameWithPayLink(BaseModel):
    bank_id: str = Query(...)
    admin_wallet_id: str = Query(...)
    initial_funding: int
    initial_player_balance: int
    max_players_count: int
    pay_link_id: str = Query(...)
    pay_link: str = Query(...)

class GameWithInvoice(BaseModel):
    bank_id: str = Query(...)
    admin_wallet_id: str = Query(...)
    payment_req: str = Query(...)
    payment_hash : str = Query(...)

class Player(BaseModel):
    player_wallet_id: str
    player_wallet_name: str
    player_wallet_inkey: str
    player_balance: int
    bank_id: str