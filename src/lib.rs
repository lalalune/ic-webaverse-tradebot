// define queries, updates, etc from macros
use ic_cdk_macros::*;

use ic_cdk::export::{
    candid::{CandidType, Deserialize},
    Principal,
};
use std::cell::RefCell;
use std::collections::BTreeMap;

type TradeStore = BTreeMap<i32, Trade>;

#[derive(Clone, CandidType, Deserialize)]
struct Trade {
    pub id: String,
    pub host_data: Vec<Item>,
    pub guest_data: Vec<Item>,
    pub host_escrow: Vec<Item>,
    pub guest_escrow: Vec<Item>,
    pub host_accept: bool,
    pub guest_accept: bool,
    pub host: Principal,
    pub guest: Principal,
    pub fulfilled: bool,
}

thread_local! {
    static TRADE_STORE: RefCell<TradeStore> = RefCell::default();
}

#[query(name = "create_trade")]
fn create_trade() -> Trade {
    let id = TRADE_STORE.with(|store| store.borrow().len());
    let trade = Trade {
        id: id.to_string(),
        host_data: vec![],
        guest_data: vec![],
        host_escrow: vec![],
        guest_escrow: vec![],
        host_accept: false,
        guest_accept: false,
        host: ic_cdk::caller(),
        guest: Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap(),
        fulfilled: false,
    };
    TRADE_STORE.with(|store| {
        store
            .borrow_mut()
            .insert(id.try_into().unwrap(), trade.clone())
    });
    trade
}

#[query(name = "delete_trade")]
fn delete_trade(id: String) -> Trade {
    TRADE_STORE.with(|store| store.borrow_mut().remove(&id.parse().unwrap()).unwrap())
}

#[query(name = "join_trade")]
fn join_trade(id: String) -> Trade {
    let mut trade = TRADE_STORE.with(|store| {
        store
            .borrow_mut()
            .get_mut(&id.parse().unwrap())
            .unwrap()
            .clone()
    });
    trade.guest = ic_cdk::caller();
    TRADE_STORE.with(|store| {
        store
            .borrow_mut()
            .insert(id.parse().unwrap(), trade.clone())
    });
    trade
}

#[query(name = "leave_trade")]
fn leave_trade(id: String) -> Trade {
    let mut trade = TRADE_STORE.with(|store| {
        store
            .borrow_mut()
            .get_mut(&id.parse().unwrap())
            .unwrap()
            .clone()
    });
    if trade.host == ic_cdk::caller() {
        delete_trade(id)
    } else if trade.guest == ic_cdk::caller() {
        trade.guest = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
        TRADE_STORE.with(|store| {
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone())
        });
        trade
    } else {
        trade
    }
}

#[query(name = "get_trade_by_id")]
fn get_trade_by_id(id: String) -> Trade {
    TRADE_STORE.with(|store| store.borrow().get(&id.parse().unwrap()).unwrap().clone())
}

#[query(name = "get_all_trades")]
fn get_all_trades() -> Vec<Trade> {
    TRADE_STORE.with(|store| store.borrow().values().cloned().collect())
}

#[update(name = "add_item_to_trade")]
fn add_item_to_trade(id: String, item: Item) -> Trade {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if ic_cdk::caller() == trade.host {
            let mut host_data = trade.host_data;
            host_data.push(item);
            let trade = Trade { host_data, ..trade };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else if ic_cdk::caller() == trade.guest {
            let mut guest_data = trade.guest_data;
            guest_data.push(item);
            let trade = Trade {
                guest_data,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else {
            trade
        }
    })
}

#[derive(Clone, CandidType, Deserialize)]
struct Item {
    pub name: String,
    pub canister_id: Principal,
    pub token_id: i32,
}

#[update(name = "remove_item_from_trade")]
fn remove_item_from_trade(id: String, item: Item) -> Trade {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if ic_cdk::caller() == trade.host {
            let mut host_data = trade.host_data;
            host_data.retain(|i| {
                i.name != item.name
                    || i.canister_id != item.canister_id
                    || i.token_id != item.token_id
            });
            let trade = Trade { host_data, ..trade };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else if ic_cdk::caller() == trade.guest {
            let mut guest_data = trade.guest_data;
            guest_data.retain(|i| {
                i.name != item.name
                    || i.canister_id != item.canister_id
                    || i.token_id != item.token_id
            });
            let trade = Trade {
                guest_data,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else {
            trade
        }
    })
}

#[update(name = "accept")]
fn accept(id: String) -> Trade {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if trade.host == ic_cdk::caller() {
            let trade = Trade {
                host_accept: true,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else if trade.guest == ic_cdk::caller() {
            let trade = Trade {
                guest_accept: true,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else {
            trade
        }
    })
}

#[update(name = "cancel")]
fn cancel(id: String) -> Trade {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if trade.host == ic_cdk::caller() && !trade.guest_accept {
            let trade = Trade {
                host_accept: false,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else if trade.guest == ic_cdk::caller() && !trade.host_accept {
            let trade = Trade {
                guest_accept: false,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else {
            trade
        }
    })
}

#[update(name = "add_item_to_escrow")]
fn add_item_to_escrow(id: String, item: Item) -> Trade {
    // TODO: item needs to actually be sent to escrow and validated

    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if ic_cdk::caller() == trade.host {
            let mut host_escrow = trade.host_escrow;
            host_escrow.push(item);
            let trade = Trade {
                host_escrow,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else if ic_cdk::caller() == trade.guest {
            let mut guest_escrow = trade.guest_escrow;
            guest_escrow.push(item);
            let trade = Trade {
                guest_escrow,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else {
            trade
        }
    })
}

#[update(name = "remove_item_from_escrow")]
fn remove_item_from_escrow(id: String, item: Item) -> Trade {
    // TODO: item needs to actually be removed from escrow and updated

    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if trade.fulfilled {
            trade
        } else if ic_cdk::caller() == trade.host {
            let mut host_escrow = trade.host_escrow;
            host_escrow.retain(|i| {
                i.name != item.name
                    || i.canister_id != item.canister_id
                    || i.token_id != item.token_id
            });
            let trade = Trade {
                host_escrow,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else if ic_cdk::caller() == trade.guest {
            let mut guest_escrow = trade.guest_escrow;
            guest_escrow.retain(|i| {
                i.name != item.name
                    || i.canister_id != item.canister_id
                    || i.token_id != item.token_id
            });
            let trade = Trade {
                guest_escrow,
                ..trade
            };
            store
                .borrow_mut()
                .insert(id.parse().unwrap(), trade.clone());
            trade
        } else {
            trade
        }
    })
}

#[query(name = "get_escrow_items")]
fn get_escrow_items(id: String) -> Vec<Item> {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if ic_cdk::caller() == trade.host {
            trade.guest_escrow
        } else if ic_cdk::caller() == trade.guest {
            trade.host_escrow
        } else {
            vec![]
        }
    })
}

#[query(name = "get_escrow_items_self")]
fn get_escrow_items_self(id: String) -> Vec<Item> {
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if ic_cdk::caller() == trade.guest {
            trade.guest_escrow
        } else if ic_cdk::caller() == trade.host {
            trade.host_escrow
        } else {
            vec![]
        }
    })
}

#[update(name = "withdraw_from_escrow")]
fn withdraw_from_escrow(id: String, item: Item) -> Item {
    // TODO: needs to actually handle withdrawing from escrow
    TRADE_STORE.with(|store| {
        let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
        if trade.fulfilled {
            if ic_cdk::caller() == trade.host {
                trade
                    .guest_escrow
                    .iter()
                    .find(|i| i.name == item.name)
                    .unwrap()
                    .clone()
            } else if ic_cdk::caller() == trade.guest {
                trade
                    .host_escrow
                    .iter()
                    .find(|i| i.name == item.name)
                    .unwrap()
                    .clone()
            } else {
                item
            }
        } else {
            item
        }
    })
}
