use ic_cdk::api::call::CallResult;
use std::io::*;

use ic_cdk::export::{
    candid::{CandidType, Deserialize},
    Principal,
};

use std::cell::RefCell;
use std::collections::BTreeMap;

pub type TradeStore = BTreeMap<i32, Trade>;

#[derive(Clone, CandidType, Deserialize, Debug)]
pub struct Trade {
    pub id: String,
    pub host_items: Vec<Item>,
    pub guest_items: Vec<Item>,
    pub host_escrow_items: Vec<Item>,
    pub guest_escrow_items: Vec<Item>,
    pub host_accept: bool,
    pub guest_accept: bool,
    pub host: Principal,
    pub guest: Option<Principal>,
    pub fulfilled: bool,
}

#[derive(Clone, CandidType, Deserialize, Debug)]
pub struct Item {
    pub name: String,
    pub canister_id: Principal,
    pub token_id: i32,
}

thread_local! {
    pub static TRADE_STORE: RefCell<TradeStore> = RefCell::new(TradeStore::new());
}

pub fn pre_upgrade() {
    TRADE_STORE.with(|store| store.borrow().clone());
}

pub fn post_upgrade(trade_store: TradeStore) {
    TRADE_STORE.with(|store| *store.borrow_mut() = trade_store);
}

pub fn get_all_trades() -> Vec<Trade> {
    TRADE_STORE.with(|store| store.borrow().values().cloned().collect())
}

pub fn create_trade(caller: Principal) -> Trade {
    let id = TRADE_STORE.with(|store| store.borrow().len());

    let trade = Trade {
        id: id.to_string(),
        host_items: vec![],
        guest_items: vec![],
        host_escrow_items: vec![],
        guest_escrow_items: vec![],
        host_accept: false,
        guest_accept: false,
        host: caller,
        guest: None,
        fulfilled: false,
    };

    TRADE_STORE.with(|store| {
        store
            .borrow_mut()
            .insert(id.try_into().unwrap(), trade.clone())
    });

    trade
}

pub fn get_trade_by_id(id: String) -> Result<Trade> {
    // Determine whether the trade exists within TRADE_STORE
    let trade_id: i32 = id.parse().unwrap();

    // If the trade does not exist, return an Error
    if !TRADE_STORE.with(|store| store.borrow().contains_key(&trade_id)) {
        return Err(Error::new(ErrorKind::Other, "Trade does not exist"));
    }

    Ok(TRADE_STORE.with(|store| store.borrow().get(&trade_id).unwrap().clone()))
}

pub fn delete_trade(caller: Principal, id: String) -> Result<Trade> {
    let trade = TRADE_STORE.with(|store| {
        store
            .borrow()
            .get(&id.parse::<i32>().unwrap())
            .unwrap()
            .clone()
    });

    if trade.host == caller {
        TRADE_STORE.with(|store| store.borrow_mut().remove(&id.parse::<i32>().unwrap()));
        Ok(trade)
    } else {
        return Err(Error::new(ErrorKind::Other, "Trade host is not the caller"));
    }
}

// return the Trade, or an Error if there is an eror
pub fn join_trade(caller: Principal, id: String) -> Result<Trade> {
    let mut trade = TRADE_STORE.with(|store| {
        store
            .borrow_mut()
            .get_mut(&id.parse().unwrap())
            .unwrap()
            .clone()
    });

    // check if the caller is the trade host
    if trade.host == caller {
        return Err(Error::new(
            ErrorKind::Other,
            "You cannot join your own trade",
        ));
    }

    // check if the caller is already in the trade
    if trade.guest == Some(caller) {
        return Err(Error::new(
            ErrorKind::Other,
            "You are already in this trade",
        ));
    }

    trade.guest = Some(caller);
    TRADE_STORE.with(|store| {
        store
            .borrow_mut()
            .insert(id.parse().unwrap(), trade.clone())
    });
    Ok(trade)
}

pub fn leave_trade(caller: Principal, id: String) -> Result<Trade> {
    let mut trade = TRADE_STORE.with(|store| {
        store
            .borrow_mut()
            .get_mut(&id.parse().unwrap())
            .unwrap()
            .clone()
    });
    if trade.host == caller {
        delete_trade(caller, id);
        Ok(trade)
    } else if trade.guest == Some(caller) {
        trade.guest = None;
        TRADE_STORE.with(|store| {
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone())
        });
        Ok(trade)
    } else {
        return Err(Error::new(ErrorKind::Other, "You are not in this trade"));
    }
}

pub fn add_item_to_trade(caller: Principal, id: String, item: Item) -> Result<Trade> {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if caller == trade.host {
            let mut host_items = trade.host_items;
            host_items.push(item);
            let trade = Trade {
                host_items,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            Ok(trade)
        } else if Some(caller) == trade.guest {
            let mut guest_items = trade.guest_items;
            guest_items.push(item);
            let trade = Trade {
                guest_items,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            Ok(trade)
        } else {
            // throw an error
            return Err(Error::new(ErrorKind::Other, "You are not in this trade"));
        }
    })
}

pub fn remove_item_from_trade(caller: Principal, id: String, item: Item) -> Result<Trade> {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if caller == trade.host {
            let mut host_items = trade.host_items;
            host_items.retain(|i| {
                i.name != item.name
                    || i.canister_id != item.canister_id
                    || i.token_id != item.token_id
            });
            let trade = Trade {
                host_items,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            Ok(trade)
        } else if Some(caller) == trade.guest {
            let mut guest_items = trade.guest_items;
            guest_items.retain(|i| {
                i.name != item.name
                    || i.canister_id != item.canister_id
                    || i.token_id != item.token_id
            });
            let trade = Trade {
                guest_items,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            Ok(trade)
        } else {
            return Err(Error::new(ErrorKind::Other, "You are not in this trade"));
        }
    })
}

pub fn accept(caller: Principal, id: String) -> Result<Trade> {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if trade.host == caller {
            let trade = Trade {
                host_accept: true,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            Ok(trade)
        } else if trade.guest == Some(caller) {
            let trade = Trade {
                guest_accept: true,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            Ok(trade)
        } else {
            return Err(Error::new(ErrorKind::Other, "You are not in this trade"));
        }
    })
}

pub fn cancel(caller: Principal, id: String) -> Result<Trade> {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if (trade.host == caller) && !trade.guest_accept {
            let trade = Trade {
                host_accept: false,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            Ok(trade)
        } else if trade.guest == Some(caller) && !trade.host_accept {
            let trade = Trade {
                guest_accept: false,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            Ok(trade)
        } else {
            return Err(Error::new(ErrorKind::Other, "You are not in this trade"));
        }
    })
}

pub async fn add_item_to_escrow(caller: Principal, id: String, item: Item) -> Result<Trade> {
    let trade_result =
        TRADE_STORE.with(|store| store.borrow().get(&id.parse().unwrap()).unwrap().clone());
    match trade_result {
        trade if trade.host == caller => {
            let mut host_escrow_items = trade.host_escrow_items;

            // perform intercanister call to check if the item exists
            // if it does, add it to the escrow
            let canister_id = item.canister_id;
            let token_id = item.token_id;

            let result: CallResult<(Principal,)> =
                ic_cdk::api::call::call(canister_id, "ownerOf", (token_id,)).await;

            match result {
                Ok(r) => {
                    let (owner,) = r;
                    let is_canister = ic_cdk::api::id() == owner;

                    // if the canister is not the owner, return an error
                    if !is_canister {
                        return Err(Error::new(
                            ErrorKind::Other,
                            "The item was not found in escrow - please transfer before calling",
                        ));
                    }

                    host_escrow_items.push(item);
                    let trade = Trade {
                        host_escrow_items,
                        ..trade
                    };
                    TRADE_STORE.with(|store| {
                        store
                            .borrow_mut()
                            .insert(id.parse().unwrap(), trade.clone())
                    });
                    return Ok(trade);
                }
                Err(_) => {
                    return Err(Error::new(ErrorKind::Other, "Item does not exist"));
                }
            }
        }
        trade if trade.guest == Some(caller) => {
            let mut guest_escrow_items = trade.guest_escrow_items;

            // perform intercanister call to check if the item exists
            // if it does, add it to the escrow
            let canister_id = item.canister_id;
            let token_id = item.token_id;

            let result: CallResult<(Principal,)> =
                ic_cdk::api::call::call(canister_id, "ownerOf", (token_id,)).await;

            match result {
                Ok(r) => {
                    let (owner,) = r;
                    let is_canister = ic_cdk::api::id() == owner;

                    // if the canister is not the owner, return an error
                    if !is_canister {
                        return Err(Error::new(
                            ErrorKind::Other,
                            "You are not the owner of this item",
                        ));
                    }

                    guest_escrow_items.push(item);
                    let trade = Trade {
                        guest_escrow_items,
                        ..trade
                    };
                    TRADE_STORE.with(|store| {
                        store
                            .borrow_mut()
                            .insert(id.parse().unwrap(), trade.clone())
                    });
                    return Ok(trade);
                }
                Err(_) => {
                    return Err(Error::new(ErrorKind::Other, "Item does not exist"));
                }
            }
        }
        _ => {
            return Err(Error::new(ErrorKind::Other, "You are not in this trade"));
        }
    }
}

pub async fn remove_item_from_escrow(caller: Principal, id: String, item: Item) -> Result<Trade> {
    let trade_result =
        TRADE_STORE.with(|store| store.borrow().get(&id.parse().unwrap()).unwrap().clone());
    match trade_result {
        trade if trade.host == caller => {
            let mut host_escrow_items = trade.host_escrow_items;

            // perform intercanister call to check if the item exists
            // if it does, add it to the escrow
            let canister_id = item.canister_id;
            let token_id = item.token_id;

            let result: CallResult<(Principal,)> =
                ic_cdk::api::call::call(canister_id, "ownerOf", (token_id,)).await;

            match result {
                Ok(r) => {
                    let (owner,) = r;
                    let is_canister = ic_cdk::api::id() == owner;

                    // if the canister is not the owner, return an error
                    if !is_canister {
                        return Err(Error::new(
                            ErrorKind::Other,
                            "The item was not found in escrow, and cannot be transfered",
                        ));
                    }

                    // transfer the item to the caller
                    let result: CallResult<()> =
                        ic_cdk::api::call::call(canister_id, "transfer", (caller, token_id)).await;

                    // if the transfer was successful, remove the item from the escrow
                    match result {
                        Ok(_) => {
                            // remove the item from the escrow where the canister id and token id match
                            host_escrow_items
                                .retain(|i| i.canister_id != canister_id || i.token_id != token_id);
                            let trade = Trade {
                                host_escrow_items,
                                ..trade
                            };
                            TRADE_STORE.with(|store| {
                                store
                                    .borrow_mut()
                                    .insert(id.parse().unwrap(), trade.clone())
                            });
                            return Ok(trade);
                        }
                        Err(_) => {
                            return Err(Error::new(
                                ErrorKind::Other,
                                "Item could not be transfered",
                            ));
                        }
                    }
                }
                Err(_) => {
                    return Err(Error::new(ErrorKind::Other, "Item does not exist"));
                }
            }
        }
        trade if trade.guest == Some(caller) => {
            let mut guest_escrow_items = trade.guest_escrow_items;

            // perform intercanister call to check if the item exists
            // if it does, add it to the escrow
            let canister_id = item.canister_id;
            let token_id = item.token_id;

            let result: CallResult<(Principal,)> =
                ic_cdk::api::call::call(canister_id, "ownerOf", (token_id,)).await;

            match result {
                Ok(r) => {
                    let (owner,) = r;
                    let is_canister = ic_cdk::api::id() == owner;

                    // if the canister is not the owner, return an error
                    if !is_canister {
                        return Err(Error::new(
                            ErrorKind::Other,
                            "The item was not found in escrow, and cannot be transfered",
                        ));
                    }

                    // transfer the item to the caller
                    let result: CallResult<()> =
                        ic_cdk::api::call::call(canister_id, "transfer", (caller, token_id)).await;

                    // if the transfer was successful, remove the item from the escrow
                    match result {
                        Ok(_) => {
                            // remove the item from the escrow where the canister id and token id match
                            guest_escrow_items
                                .retain(|i| i.canister_id != canister_id || i.token_id != token_id);
                            let trade = Trade {
                                guest_escrow_items,
                                ..trade
                            };
                            TRADE_STORE.with(|store| {
                                store
                                    .borrow_mut()
                                    .insert(id.parse().unwrap(), trade.clone())
                            });
                            return Ok(trade);
                        }
                        Err(_) => {
                            return Err(Error::new(
                                ErrorKind::Other,
                                "Item could not be transfered",
                            ));
                        }
                    }
                }
                Err(_) => {
                    return Err(Error::new(ErrorKind::Other, "Item does not exist"));
                }
            }
        }
        _ => {
            return Err(Error::new(ErrorKind::Other, "You are not in this trade"));
        }
    }
}

pub async fn withdraw_from_escrow(caller: Principal, id: String) -> Result<Trade> {
    let trade_result =
        TRADE_STORE.with(|store| store.borrow().get(&id.parse().unwrap()).unwrap().clone());

    // check that all escrow items have been uploaded
    let trade = match trade_result {
        trade
            if trade.guest_escrow_items.len() == trade.guest_items.len()
                && trade.host_escrow_items.len() == trade.host_items.len() =>
        {
            trade
        }
        _ => {
            return Err(Error::new(
                ErrorKind::Other,
                "All items must be added to escrow before the trade can be completed",
            ));
        }
    };

    match trade {
        trade if trade.host == caller => {
            // send all items in the guest escrow to the host
            let _guest_escrow_items = trade.guest_escrow_items.clone();
            for item in _guest_escrow_items {
                let canister_id = item.canister_id;
                let token_id = item.token_id;

                let result: CallResult<()> =
                    ic_cdk::api::call::call(canister_id, "transfer", (caller, token_id)).await;

                match result {
                    Ok(_) => {}
                    Err(_) => {
                        return Err(Error::new(ErrorKind::Other, "Item could not be transfered"));
                    }
                }
            }

            // mark the trade as fulfilled
            let trade = Trade {
                fulfilled: true,
                ..trade
            };
            TRADE_STORE.with(|store| {
                store
                    .borrow_mut()
                    .insert(id.parse().unwrap(), trade.clone())
            });
            return Ok(trade);
        }
        trade if trade.guest == Some(caller) => {
            // send all items in the host escrow to the guest
            let _host_escrow_items = trade.host_escrow_items.clone();
            for item in _host_escrow_items {
                let canister_id = item.canister_id;
                let token_id = item.token_id;

                let result: CallResult<()> =
                    ic_cdk::api::call::call(canister_id, "transfer", (caller, token_id)).await;

                match result {
                    Ok(_) => {}
                    Err(_) => {
                        return Err(Error::new(ErrorKind::Other, "Item could not be transfered"));
                    }
                }
            }

            // mark the trade as fulfilled
            let trade = Trade {
                fulfilled: true,
                ..trade
            };
            TRADE_STORE.with(|store| {
                store
                    .borrow_mut()
                    .insert(id.parse().unwrap(), trade.clone())
            });
            return Ok(trade);
        }
        _ => {
            return Err(Error::new(ErrorKind::Other, "You are not in this trade"));
        }
    }
}
