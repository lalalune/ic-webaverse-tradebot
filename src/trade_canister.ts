import { ic, int, Opt, Principal, Query, Update } from 'azle';

const nullPrincipal = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');

type Db = {
  trades: {
    [id: string]: Trade;
  };
};

type Trade = {
  id: string;
  hostData: {
    [id: string]: Item;
  }
  guestData: {
    [id: string]: Item;
  }
  hostEscrow: {
    [id: string]: Item;
  }
  guestEscrow: {
    [id: string]: Item;
  }
  hostAccept: boolean;
  guestAccept: boolean;
  host: Principal;
  guest: Principal;
  fulfilled: boolean;
};

type Item = {
  name: string;
  canisterId: Principal;
  tokenId: int;
}

let db: Db = {
  trades: {}
};

export function get_trade_by_id(id: string): Query<Opt<Trade>> {
  const trade = db.trades[id] ?? null;

  return trade;
}

export function get_all_trades(): Query<Trade[]> {
  return Object.values(db.trades);
}

export function create_trade(): Update<Trade> {
  const id = Object.keys(db.trades).length.toString();

  const trade = {
    id,
    hostData: {},
    guestData: {},
    hostEscrow: {},
    guestEscrow: {},
    hostAccept: false,
    guestAccept: false,
    host: ic.caller(),
    guest: nullPrincipal,
    fulfilled: false
  };

  db.trades[id] = trade;

  return trade;
}

export function accept(id: string): Update<Trade> {
  const trade = db.trades[id];

  if (trade.host === ic.caller()) {
    trade.hostAccept = true;
  } else if (trade.guest === ic.caller()) {
    trade.guestAccept = true;
  }

  return trade;
}

export function cancel(id: string): Update<Trade> {
  const trade = db.trades[id];

  if (trade.host === ic.caller() && !trade.guestAccept) {
    trade.hostAccept = false;
  } else if (trade.guest === ic.caller() && !trade.hostAccept) {
    trade.guestAccept = false;
  }

  return trade;
}

export function delete_trade(id: string): Update<Trade> {
  const trade = db.trades[id];
  delete db.trades[id];
  return trade;
}

export function join_trade(id: string): Update<Trade> {
  const trade = db.trades[id];
  trade.guest = ic.caller();
  return trade;
}

export function leave_trade(id: string): Update<Trade> {
  const trade = db.trades[id];

  // TODO: check if caller is host or guest
  if (trade.host === ic.caller()) {
    return delete_trade(id);
  } else if (trade.guest === ic.caller()) {
    trade.guest = nullPrincipal;
  }
  return trade;
}

export function add_item_to_trade(id: string, item: Item): Update<Trade> {
  const trade = db.trades[id];
  // check if the ic.caller() is the host or guest
  if (ic.caller() === trade.host) {
    trade.hostData[item.name] = item;
  } else if (ic.caller() === trade.guest) {
    trade.guestData[item.name] = item;
  }
  return trade;
}

export function remove_item_from_trade(id: string, item: Item): Update<Trade> {
  const trade = db.trades[id];
  // check if the ic.caller() is the host or guest
  if (ic.caller() === trade.host) {
    if(trade.hostData[item.name])
      delete trade.hostData[item.name];
  } else if (ic.caller() === trade.guest) {
    if(trade.guestData[item.name])
      delete trade.guestData[item.name];
  }
  return trade;
}

export function add_item_to_escrow(id: string, item: Item): Update<Trade> {
  // TODO: the user needs to upload their asset here

  const trade = db.trades[id];
  // check if the ic.caller() is the host or guest
  if (ic.caller() === trade.host) {
    trade.hostEscrow[item.name] = item;
  } else if (ic.caller() === trade.guest) {
    trade.guestEscrow[item.name] = item;
  }

  if (trade.hostEscrow === trade.hostData && trade.guestEscrow === trade.guestData) {
    trade.fulfilled = true;
  }

  return trade;
}

export function remove_item_from_escrow(id: string, item: Item): Update<Trade> {
  // TODO: the asset is returned to the user

  const trade = db.trades[id];

  if (trade.fulfilled) return trade;

  // check if the ic.caller() is the host or guest
  if (ic.caller() === trade.host && trade.guestEscrow !== trade.guestData) {
    if(trade.hostEscrow[item.name])
      delete trade.hostEscrow[item.name];
  } else if (ic.caller() === trade.guest && trade.hostEscrow !== trade.hostData) {
    if(trade.guestEscrow[item.name])
      delete trade.guestEscrow[item.name];
  }
  return trade;
}

export function get_escrow_items(id: string): Query<Item[]> {
  const trade = db.trades[id];
  if (ic.caller() === trade.host) {
    return Object.values(trade.guestEscrow);
  } else if (ic.caller() === trade.guest) {
    return Object.values(trade.hostEscrow);
  }
  return [];
}

export function get_escrow_items_self(id: string): Query<Item[]> {
  const trade = db.trades[id];
  if (ic.caller() === trade.guest) {
    return Object.values(trade.guestEscrow);
  } else if (ic.caller() === trade.host) {
    return Object.values(trade.hostEscrow);
  }
  return [];
}

export function withdraw_from_escrow(id: string, item: Item): Update<Item> {
  const trade = db.trades[id];
  let claimedItem: Item | undefined;
  if (trade.fulfilled) {
    // TODO: the asset is returned to the user
    if (ic.caller() === trade.host) {
      claimedItem = trade.guestEscrow[item.name];
    } else if (ic.caller() === trade.guest) {
      claimedItem = trade.hostEscrow.find[item.name];
    }
  }

  return claimedItem ?? item;
}