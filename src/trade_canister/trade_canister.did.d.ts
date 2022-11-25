import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Item {
  'token_id' : bigint,
  'name' : string,
  'canister_id' : Principal,
}
export interface Trade {
  'id' : string,
  'host_escrow_items' : Array<Item>,
  'host_items' : Array<Item>,
  'fulfilled' : boolean,
  'host' : Principal,
  'guest_items' : Array<Item>,
  'host_accept' : boolean,
  'guest_escrow_items' : Array<Item>,
  'guest' : Principal,
  'guest_accept' : boolean,
}
export interface _SERVICE {
  'accept' : ActorMethod<[string], Trade>,
  'add_item_to_escrow' : ActorMethod<[string, Item], Trade>,
  'add_item_to_trade' : ActorMethod<[string, Item], Trade>,
  'cancel' : ActorMethod<[string], Trade>,
  'create_trade' : ActorMethod<[], Trade>,
  'delete_trade' : ActorMethod<[string], Trade>,
  'get_all_trades' : ActorMethod<[], Array<Trade>>,
  'get_escrow_items' : ActorMethod<[string], Array<Item>>,
  'get_escrow_items_self' : ActorMethod<[string], Array<Item>>,
  'get_trade_by_id' : ActorMethod<[string], [] | [Trade]>,
  'join_trade' : ActorMethod<[string], Trade>,
  'leave_trade' : ActorMethod<[string], Trade>,
  'remove_item_from_escrow' : ActorMethod<[string, Item], Trade>,
  'remove_item_from_trade' : ActorMethod<[string, Item], Trade>,
  'withdraw_from_escrow' : ActorMethod<[string, Item], Item>,
}
