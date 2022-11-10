export const idlFactory = ({ IDL }) => {
  const Item = IDL.Record({
    'tokenId' : IDL.Int,
    'name' : IDL.Text,
    'canisterId' : IDL.Principal,
  });
  const Trade = IDL.Record({
    'id' : IDL.Text,
    'hostEscrow' : IDL.Vec(Item),
    'hostData' : IDL.Vec(Item),
    'fulfilled' : IDL.Bool,
    'host' : IDL.Principal,
    'guestData' : IDL.Vec(Item),
    'hostAccept' : IDL.Bool,
    'guestEscrow' : IDL.Vec(Item),
    'guest' : IDL.Principal,
    'guestAccept' : IDL.Bool,
  });
  return IDL.Service({
    'accept' : IDL.Func([IDL.Text], [Trade], []),
    'add_item_to_escrow' : IDL.Func([IDL.Text, Item], [Trade], []),
    'add_item_to_trade' : IDL.Func([IDL.Text, Item], [Trade], []),
    'cancel' : IDL.Func([IDL.Text], [Trade], []),
    'create_trade' : IDL.Func([], [Trade], []),
    'delete_trade' : IDL.Func([IDL.Text], [Trade], []),
    'get_all_trades' : IDL.Func([], [IDL.Vec(Trade)], ['query']),
    'get_escrow_items' : IDL.Func([IDL.Text], [IDL.Vec(Item)], ['query']),
    'get_escrow_items_self' : IDL.Func([IDL.Text], [IDL.Vec(Item)], ['query']),
    'get_trade_by_id' : IDL.Func([IDL.Text], [IDL.Opt(Trade)], ['query']),
    'join_trade' : IDL.Func([IDL.Text], [Trade], []),
    'leave_trade' : IDL.Func([IDL.Text], [Trade], []),
    'remove_item_from_escrow' : IDL.Func([IDL.Text, Item], [Trade], []),
    'remove_item_from_trade' : IDL.Func([IDL.Text, Item], [Trade], []),
    'withdraw_from_escrow' : IDL.Func([IDL.Text, Item], [Item], []),
  });
};
export const init = ({ IDL }) => { return []; };
