import { Query, Update, nat32 } from 'azle'

const nullPrincipalId = 'null-principal-id'

type Db = {
  trades: {
    [id: string]: Trade
  }
}

type Trade = {
  id: string
  hostData: Item[]
  guestData: Item[]
  hostEscrow: Item[]
  guestEscrow: Item[]
  hostAccept: boolean
  guestAccept: boolean
  host: string
  guest: string
  fulfilled: boolean
}

type Item = {
  id: string
  canisterId: string
  collection: string
  name: string
  index: string
  url: string
  slot: nat32
}

let db: Db = {
  trades: {}
}

export function get_trade_by_id(tradeId: string): Query<Trade> {
  const trade = db.trades[tradeId]
  return trade
}

export function get_all_trades(): Query<Trade[]> {
  return Object.values(db.trades)
}

export function create_trade(caller: string): Update<Trade> {
  const id = Object.keys(db.trades).length.toString()
  const trade = {
    id,
    hostData: [],
    guestData: [],
    hostEscrow: [],
    guestEscrow: [],
    hostAccept: false,
    guestAccept: false,
    host: caller,
    guest: nullPrincipalId,
    fulfilled: false
  }
  db.trades[id] = trade
  return trade
}

export function accept(caller: string, tradeId: string): Update<Trade> {
  const trade = db.trades[tradeId]
  if (trade.host === caller) {
    trade.hostAccept = true
  } else if (trade.guest === caller) {
    trade.guestAccept = true
  }
  return trade
}

export function cancel(caller: string, tradeId: string): Update<Trade> {
  const trade = db.trades[tradeId]
  if (trade.host === caller && !trade.guestAccept) {
    trade.hostAccept = false
  } else if (trade.guest === caller && !trade.hostAccept) {
    trade.guestAccept = false
  }
  return trade
}

export function delete_trade(tradeId: string): Update<Trade> {
  const trade = db.trades[tradeId]
  delete db.trades[tradeId]
  return trade
}

export function join_trade(caller: string, tradeId: string): Update<Trade> {
  const trade = db.trades[tradeId]
  if (trade.host !== caller) {
    trade.guest = caller
  }
  return trade
}

export function leave_trade(caller: string, tradeId: string): Update<Trade> {
  const trade = db.trades[tradeId]
  if (trade.host === caller) {
    return delete_trade(tradeId)
  } else if (trade.guest === caller) {
    trade.guest = nullPrincipalId
  }
  return trade
}

export function add_item_to_trade(caller: string, tradeId: string, item: Item): Update<Trade> {
  const trade = db.trades[tradeId]

  // check if the caller is the host or guest
  if (caller === trade.host) {
    trade.hostData.push(item)
  } else if (caller === trade.guest) {
    trade.guestData.push(item)
  }
  return trade
}

export function remove_item_from_trade(caller: string, tradeId: string, itemId: string): Update<Trade> {
  const trade = db.trades[tradeId]

  // check if the caller is the host or guest
  if (caller === trade.host) {
    trade.hostData = trade.hostData.filter(item => item.id !== itemId)
  } else if (caller === trade.guest) {
    trade.guestData = trade.guestData.filter(item => item.id !== itemId)
  }
  return trade
}

export function add_item_to_escrow(caller: string, tradeId: string, item: Item): Update<Trade> {
  // TODO: the user needs to upload their asset here

  const trade = db.trades[tradeId]

  // check if the caller is the host or guest
  if (caller === trade.host) {
    trade.hostEscrow.push(item)
  } else if (caller === trade.guest) {
    trade.guestEscrow.push(item)
  }
  if (trade.hostEscrow === trade.hostData && trade.guestEscrow === trade.guestData) {
    trade.fulfilled = true
  }
  return trade
}

export function remove_item_from_escrow(caller: string, tradeId: string, itemId: string): Update<Trade> {
  // TODO: the asset is returned to the user
  const trade = db.trades[tradeId]
  if (trade.fulfilled) return trade

  // check if the caller is the host or guest
  if (caller === trade.host && trade.guestEscrow !== trade.guestData) {
    trade.hostEscrow = trade.hostEscrow.filter(item => item.id !== itemId)
  } else if (caller === trade.guest && trade.hostEscrow !== trade.hostData) {
    trade.guestEscrow = trade.guestEscrow.filter(item => item.id !== itemId)
  }
  return trade
}

export function get_escrow_items(caller: string, tradeId: string): Query<Item[]> {
  const trade = db.trades[tradeId]
  if (caller === trade.host) {
    return trade.guestEscrow
  } else if (caller === trade.guest) {
    return trade.hostEscrow
  }
  return []
}

export function get_escrow_items_self(caller: string, tradeId: string): Query<Item[]> {
  const trade = db.trades[tradeId]
  if (caller === trade.guest) {
    return trade.guestEscrow
  } else if (caller === trade.host) {
    return trade.hostEscrow
  }
  return []
}

export function withdraw_from_escrow(caller: string, tradeId: string, itemId: string): Update<Item> {
  const trade = db.trades[tradeId]
  let claimedItem: Item | undefined

  if (trade.fulfilled) {
    // TODO: the asset is returned to the user

    if (caller === trade.host) {
      claimedItem = trade.guestEscrow.find(item => item.id === itemId)
    } else if (caller === trade.guest) {
      claimedItem = trade.hostEscrow.find(item => item.id === itemId)
    }
  }

  return claimedItem ?? { id: itemId, canisterId: '', collection: '', name: '', index: '', url: '', slot: 0 }
}
