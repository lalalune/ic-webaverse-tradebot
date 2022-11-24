use ic_cdk_macros::*;
use std::io;
use std::error::Error;

use ic_cdk::{
    export::{
        candid::{CandidType, Deserialize},
        Principal,
    },
};

use std::cell::RefCell;
use std::collections::BTreeMap;

pub type TradeStore = BTreeMap<i32, Trade>;

#[derive(Clone, CandidType, Deserialize)]
pub struct Trade {
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

#[derive(Clone, CandidType, Deserialize)]
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
    let null_principal = Principal::from_text("aaaaa-aa").expect("Could not decode the principal.");

    let trade = Trade {
        id: id.to_string(),
        host_data: vec![],
        guest_data: vec![],
        host_escrow: vec![],
        guest_escrow: vec![],
        host_accept: false,
        guest_accept: false,
        host: caller,
        guest: null_principal,
        fulfilled: false,
    };
    
    TRADE_STORE.with(|store| store.borrow_mut().insert(id.try_into().unwrap(), trade.clone()));

    trade
}

pub fn get_trade_by_id(id: String) -> Trade {
    // return trade by id
    TRADE_STORE.with(|store| store.borrow().get(&id.parse::<i32>().unwrap()).unwrap().clone())
}

pub fn delete_trade(caller: Principal, id: String) -> Trade {
    // delete a trade by it's ID
    // only the creator of the trade can delete it
    // check if the creator of the trade is the trade host
    let trade = TRADE_STORE.with(|store| store.borrow().get(&id.parse::<i32>().unwrap()).unwrap().clone());
    if trade.host == caller {
        TRADE_STORE.with(|store| store.borrow_mut().remove(&id.parse::<i32>().unwrap()));
    }
    trade
}

// return the Trade, or an Error if there is an eror
pub fn join_trade(caller: Principal, id: String) -> Result<Trade, io::Error> {
    let mut trade = TRADE_STORE.with(|store| store.borrow_mut().get_mut(&id.parse().unwrap()).unwrap().clone());

    // check if the caller is the trade host
    if trade.host == caller {
        return Err(io::Error::new(io::ErrorKind::Other, "You cannot join your own trade"));
    }

    // check if the caller is already in the trade
    if trade.guest == caller {
        return Err(io::Error::new(io::ErrorKind::Other, "You are already in this trade"));
    }

    trade.guest = caller;
    TRADE_STORE.with(|store| store.borrow_mut().insert(id.parse().unwrap(), trade.clone()));
    Ok(trade)
}

// pub fn leave_trade(caller: Principal, id: String) -> Result<Trade, io::Error> {
//     let null_principal = Principal::from_text("aaaaa-aa").expect("Could not decode the principal.");

//     let mut trade = TRADE_STORE.with(|store| store.borrow_mut().get_mut(&id.parse().unwrap()).unwrap().clone());
//     if trade.host == caller {
//         delete_trade(caller, id)
//     } else if trade.guest == caller {
//         trade.guest = null_principal;
//         TRADE_STORE.with(|store| store.borrow_mut().insert(id.parse().unwrap(), trade.clone()));
//         trade
//     } else {
//         return Err("You are not in this trade");
//     }
// }

// pub fn add_item_to_trade(caller: Principal, id: String, item: Item) -> Result<Trade, io::Error> {
//     TRADE_STORE.with(|store| {
//         let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
//         if caller == trade.host {
//             let mut host_data = trade.host_data;
//             host_data.push(item);
//             let trade = Trade {
//                 host_data,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else if caller == trade.guest {
//             let mut guest_data = trade.guest_data;
//             guest_data.push(item);
//             let trade = Trade {
//                 guest_data,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else {
//             // throw an error
//             return Err("You are not in this trade");
//         }
//     })
// }

// pub fn remove_item_from_trade(caller: Principal, id: String, item: Item) -> Result<Trade, io::Error> {
//     TRADE_STORE.with(|store| {
//         let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
//         if caller == trade.host {
//             let mut host_data = trade.host_data;
//             host_data.retain(|i| i.name != item.name || i.canister_id != item.canister_id || i.token_id != item.token_id);
//             let trade = Trade {
//                 host_data,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else if caller == trade.guest {
//             let mut guest_data = trade.guest_data;
//             guest_data.retain(|i| i.name != item.name || i.canister_id != item.canister_id || i.token_id != item.token_id);
//             let trade = Trade {
//                 guest_data,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else {
//             return Err(Error::new("You are not in this trade"));
//         }
//     })
// }

// pub fn accept(caller: Principal, id: String) -> Result<Trade, io::Error> {
//     TRADE_STORE.with(|store| {
//         let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
//         if trade.host == caller {
//             let trade = Trade {
//                 host_accept: true,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             Ok(trade)
//         } else if trade.guest == caller {
//             let trade = Trade {
//                 guest_accept: true,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             Ok(trade)
//         } else {
//             return Err(Error::new("You are not in this trade"));
//         }
//     })
// }

// pub fn cancel(caller: Principal, id: String) -> Result<Trade, io::Error> {
//     TRADE_STORE.with(|store| {
//         let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
//         if trade.host == caller && !trade.guest_accept {
//             let trade = Trade {
//                 host_accept: false,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else if trade.guest == caller && !trade.host_accept {
//             let trade = Trade {
//                 guest_accept: false,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else {
//             return Err(io::Error::new("You are not in this trade"));
//         }
//     })
// }

// pub fn add_item_to_escrow(caller: Principal, id: String, item: Item) -> Trade {

//     // TODO: item needs to actually be sent to escrow and validated
//     TRADE_STORE.with(|store| {
//         let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
//         if caller == trade.host {
//             let mut host_escrow = trade.host_escrow;
//             host_escrow.push(item);
//             let trade = Trade {
//                 host_escrow,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else if caller == trade.guest {
//             let mut guest_escrow = trade.guest_escrow;
//             guest_escrow.push(item);
//             let trade = Trade {
//                 guest_escrow,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else {
//             ic_cdk::trap("You are not in this trade");
//         }
//     })
// }

// #[update(name = "remove_item_from_escrow")]
// pub fn remove_item_from_escrow(caller: Principal, id: String, item: Item) -> Trade {

//     // TODO: item needs to actually be removed from escrow and updated

//     TRADE_STORE.with(|store| {
//         let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
//         if trade.fulfilled {
//             trade
//         } else if caller == trade.host {
//             let mut host_escrow = trade.host_escrow;
//             host_escrow.retain(|i| i.name != item.name || i.canister_id != item.canister_id || i.token_id != item.token_id);
//             let trade = Trade {
//                 host_escrow,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else if caller == trade.guest {
//             let mut guest_escrow = trade.guest_escrow;
//             guest_escrow.retain(|i| i.name != item.name || i.canister_id != item.canister_id || i.token_id != item.token_id);
//             let trade = Trade {
//                 guest_escrow,
//                 ..trade
//             };
//             store.borrow_mut().insert(id.parse().unwrap(), trade.clone());
//             trade
//         } else {
//             ic_cdk::trap("You are not in this trade");
//         }
//     })
// }
  
// pub fn get_escrow_items(caller: Principal, id: String) -> Vec<Item> {
//     TRADE_STORE.with(|store| {
//         let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
//         if caller == trade.host {
//             trade.guest_escrow
//         } else if caller == trade.guest {
//             trade.host_escrow
//         } else {
//             ic_cdk::trap("You are not in this trade");
//         }
//     })
// }

// pub fn withdraw_from_escrow(caller: Principal, id: String, item: Item) -> Item {
//     // TODO: needs to actually handle withdrawing from escrow
//     TRADE_STORE.with(|store| {
//         let trade = store.borrow().get(&id.parse().unwrap()).unwrap().clone();
//         if trade.fulfilled {
//             if caller == trade.host {
//                 trade.guest_escrow.iter().find(|i| i.name == item.name).unwrap().clone()
//             } else if caller == trade.guest {
//                 trade.host_escrow.iter().find(|i| i.name == item.name).unwrap().clone()
//             } else {
//                 ic_cdk::trap("You are not in this trade");
//             }
//         } else {
//             ic_cdk::trap("Trade has not been fulfilled");
//         }
//     })
// }