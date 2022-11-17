import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Item {
  'url' : string,
  'collection' : string,
  'name' : string,
  'index' : string,
  'canisterId' : string,
}
export interface Trade {
  'id' : string,
  'hostEscrow' : Array<Item>,
  'hostData' : Array<Item>,
  'fulfilled' : boolean,
  'host' : string,
  'guestData' : Array<Item>,
  'hostAccept' : boolean,
  'guestEscrow' : Array<Item>,
  'guest' : string,
  'guestAccept' : boolean,
}
export interface _SERVICE {
  'accept' : ActorMethod<[string, string], Trade>,
  'add_item_to_escrow' : ActorMethod<[string, string, Item], Trade>,
  'add_item_to_trade' : ActorMethod<[string, string, Item], Trade>,
  'cancel' : ActorMethod<[string, string], Trade>,
  'create_trade' : ActorMethod<[string], Trade>,
  'delete_trade' : ActorMethod<[string], Trade>,
  'get_all_trades' : ActorMethod<[], Array<Trade>>,
  'get_escrow_items' : ActorMethod<[string, string], Array<Item>>,
  'get_escrow_items_self' : ActorMethod<[string, string], Array<Item>>,
  'get_trade_by_id' : ActorMethod<[string], Trade>,
  'join_trade' : ActorMethod<[string, string], Trade>,
  'leave_trade' : ActorMethod<[string, string], Trade>,
  'remove_item_from_escrow' : ActorMethod<[string, string, Item], Trade>,
  'remove_item_from_trade' : ActorMethod<[string, string, Item], Trade>,
  'withdraw_from_escrow' : ActorMethod<[string, string, Item], Item>,
}
