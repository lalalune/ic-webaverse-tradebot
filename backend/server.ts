import { Principal, ic } from "azle"
import express from 'express';
const nullPrincipal = Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai")

// set up express
const app = express()
app.use(express.json())

let db = {
  trades: {},
}

function get_trade_by_id(id) {
  const trade = db.trades[id] ?? null

  return trade
}

// express route to call get_trade_by_id
app.use("/get_trade_by_id", async (req, res) => {
  const id = req.body.id
  const trade = get_trade_by_id(id)
  // return the result
  res.json(trade)
})

function get_all_trades() {
  return Object.values(db.trades)
}

app.use("/get_all_trades", async (req, res) => {
  const trades = get_all_trades()
  res.json(trades)
})

function create_trade() {
  const id = Object.keys(db.trades).length.toString()

  const trade = {
    id,
    hostData: [],
    guestData: [],
    hostEscrow: [],
    guestEscrow: [],
    hostAccept: false,
    guestAccept: false,
    host: ic.caller(),
    guest: nullPrincipal,
    fulfilled: false,
  }

  db.trades[id] = trade

  return trade
}

app.use("/create_trade", async (req, res) => {
  const trade = create_trade()
  res.json(trade)
})

const accept = (id) => {
  const trade = db.trades[id]

  if (trade.host === ic.caller()) {
    trade.hostAccept = true
  } else if (trade.guest === ic.caller()) {
    trade.guestAccept = true
  }

  return trade
}

app.use("/accept", async (req, res) => {
  const id = req.body.id
  const trade = accept(id)
  res.json(trade)
})

function cancel(id) {
  const trade = db.trades[id]

  if (trade.host === ic.caller() && !trade.guestAccept) {
    trade.hostAccept = false
  } else if (trade.guest === ic.caller() && !trade.hostAccept) {
    trade.guestAccept = false
  }

  return trade
}

app.use("/cancel", async (req, res) => {
  const id = req.body.id
  const trade = cancel(id)
  res.json(trade)
})

function delete_trade(id) {
  const trade = db.trades[id]
  delete db.trades[id]
  return trade
}

app.use("/delete_trade", async (req, res) => {
  const id = req.body.id
  const trade = delete_trade(id)
  res.json(trade)
})

function join_trade(id) {
  const trade = db.trades[id]
  trade.guest = ic.caller()
  return trade
}

app.use("/join_trade", async (req, res) => {
  const id = req.body.id
  const trade = join_trade(id)
  res.json(trade)
})

function leave_trade(id) {
  const trade = db.trades[id]

  // TODO: check if caller is host or guest
  if (trade.host === ic.caller()) {
    return delete_trade(id)
  } else if (trade.guest === ic.caller()) {
    trade.guest = nullPrincipal
  }
  return trade
}

app.use("/leave_trade", async (req, res) => {
  const id = req.body.id
  const trade = leave_trade(id)
  res.json(trade)
})

function add_item_to_trade(id, item) {
  const trade = db.trades[id]
  // check if the ic.caller() is the host or guest
  if (ic.caller() === trade.host) {
    trade.hostData.push(item)
  } else if (ic.caller() === trade.guest) {
    trade.guestData.push(item)
  }
  return trade
}

app.use("/add_item_to_trade", async (req, res) => {
  const id = req.body.id
  const item = req.body.item
  const trade = add_item_to_trade(id, item)
  res.json(trade)
})

function remove_item_from_trade(id, item) {
  const trade = db.trades[id]
  // check if the ic.caller() is the host or guest
  if (ic.caller() === trade.host) {
    trade.hostData = trade.hostData.filter((i) => i !== item)
  } else if (ic.caller() === trade.guest) {
    trade.guestData = trade.guestData.filter((i) => i !== item)
  }
  return trade
}

app.use("/remove_item_from_trade", async (req, res) => {
  const id = req.body.id
  const item = req.body.item
  const trade = remove_item_from_trade(id, item)
  res.json(trade)
})

function add_item_to_escrow(id, item) {
  // TODO: the user needs to upload their asset here

  const trade = db.trades[id]
  // check if the ic.caller() is the host or guest
  if (ic.caller() === trade.host) {
    trade.hostEscrow.push(item)
  } else if (ic.caller() === trade.guest) {
    trade.guestEscrow.push(item)
  }

  if (
    trade.hostEscrow === trade.hostData &&
    trade.guestEscrow === trade.guestData
  ) {
    trade.fulfilled = true
  }

  return trade
}

app.use("/add_item_to_escrow", async (req, res) => {
  const id = req.body.id
  const item = req.body.item
  const trade = add_item_to_escrow(id, item)
  res.json(trade)
})

function remove_item_from_escrow(id, item) {
  // TODO: the asset is returned to the user

  const trade = db.trades[id]

  if (trade.fulfilled) return trade

  // check if the ic.caller() is the host or guest
  if (ic.caller() === trade.host && trade.guestEscrow !== trade.guestData) {
    trade.hostEscrow = trade.hostEscrow.filter((i) => i !== item)
  } else if (
    ic.caller() === trade.guest &&
    trade.hostEscrow !== trade.hostData
  ) {
    trade.guestEscrow = trade.guestEscrow.filter((i) => i !== item)
  }
  return trade
}

app.use("/remove_item_from_escrow", async (req, res) => {
  const id = req.body.id
  const item = req.body.item
  const trade = remove_item_from_escrow(id, item)
  res.json(trade)
})

function get_escrow_items(id) {
  const trade = db.trades[id]
  if (ic.caller() === trade.host) {
    return trade.guestEscrow
  } else if (ic.caller() === trade.guest) {
    return trade.hostEscrow
  }
  return []
}

app.use("/get_escrow_items", async (req, res) => {
  const id = req.body.id
  const items = get_escrow_items(id)
  res.json(items)
})

function get_escrow_items_self(id) {
  const trade = db.trades[id]
  if (ic.caller() === trade.guest) {
    return trade.guestEscrow
  } else if (ic.caller() === trade.host) {
    return trade.hostEscrow
  }
  return []
}

app.use("/get_escrow_items_self", async (req, res) => {
  const id = req.body.id
  const items = get_escrow_items_self(id)
  res.json(items)
})

function withdraw_from_escrow(id, item) {
  const trade = db.trades[id]
  let claimedItem
  if (trade.fulfilled) {
    // TODO: the asset is returned to the user
    if (ic.caller() === trade.host) {
      claimedItem = trade.guestEscrow.find((i) => i === item)
    } else if (ic.caller() === trade.guest) {
      claimedItem = trade.hostEscrow.find((i) => i === item)
    }
  }

  return claimedItem ?? item
}

app.use("/withdraw_from_escrow", async (req, res) => {
  const id = req.body.id
  const item = req.body.item
  const claimedItem = withdraw_from_escrow(id, item)
  res.json(claimedItem)
})

// listen on port 8080
app.listen(8080, () => console.log("listening on port 8080"))
