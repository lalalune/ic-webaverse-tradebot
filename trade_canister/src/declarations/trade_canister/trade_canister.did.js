export const idlFactory = ({ IDL }) => {
  const Item = IDL.Record({
    'token_id' : IDL.Int32,
    'name' : IDL.Text,
    'canister_id' : IDL.Principal,
  });
  const Trade = IDL.Record({
    'id' : IDL.Text,
    'guest_items' : IDL.Vec(Item),
    'fulfilled' : IDL.Bool,
    'host' : IDL.Principal,
    'guest_accept' : IDL.Bool,
    'host_escrow_items' : IDL.Vec(Item),
    'guest' : IDL.Opt(IDL.Principal),
    'guest_escrow_items' : IDL.Vec(Item),
    'host_items' : IDL.Vec(Item),
    'host_accept' : IDL.Bool,
  });
  return IDL.Service({
    'accept' : IDL.Func([IDL.Text], [Trade], []),
    'add_item_to_escrow' : IDL.Func([IDL.Text, Item], [Trade], []),
    'add_item_to_trade' : IDL.Func([IDL.Text, Item], [Trade], []),
    'cancel' : IDL.Func([IDL.Text], [Trade], []),
    'create_trade' : IDL.Func([], [Trade], []),
    'delete_trade' : IDL.Func([IDL.Text], [Trade], []),
    'get_all_trades' : IDL.Func([], [IDL.Vec(Trade)], ['query']),
    'get_trade_by_id' : IDL.Func([IDL.Text], [Trade], ['query']),
    'join_trade' : IDL.Func([IDL.Text], [Trade], []),
    'leave_trade' : IDL.Func([IDL.Text], [Trade], []),
    'remove_item_from_trade' : IDL.Func([IDL.Text, Item], [Trade], []),
  });
};
export const init = ({ IDL }) => { return []; };
