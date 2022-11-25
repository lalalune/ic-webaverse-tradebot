use ic_cdk_macros::*;

use ic_cdk::export::{
    candid::{CandidType, Deserialize},
    Principal,
};

mod trade;

#[cfg(test)]
mod tests;

// #[pre_upgrade]
// fn pre_upgrade() {
//     let trades = trade::pre_upgrade();

//     let result = ic_cdk::storage::stable_save((trades,));
//     match result {
//         Ok(_) => (),
//         Err(e) => ic_cdk::trap(&format!("Failed to save trades: {}", e)),
//     }
// }

// #[post_upgrade]
// fn post_upgrade() {
//     let trade_store = ic_cdk::storage::stable_restore::<(trade::TradeStore,)>()
//         .unwrap()
//         .0;

//     trade::post_upgrade(trade_store);
// }

#[update(name = "create_trade")]
fn create_trade() -> trade::Trade {
    return trade::create_trade(ic_cdk::caller());
}

#[query(name = "get_all_trades")]
fn get_all_trades() -> Vec<trade::Trade> {
    return trade::get_all_trades();
}

#[query(name = "get_trade_by_id")]
fn get_trade_by_id(id: String) -> trade::Trade {
    match trade::get_trade_by_id(id) {
        Ok(trade) => trade,
        Err(e) => ic_cdk::trap(&format!("Failed to get trade by id: {}", e)),
    }
}

#[update(name = "delete_trade")]
fn delete_trade(id: String) -> trade::Trade {
    match trade::delete_trade(ic_cdk::caller(), id) {
        Ok(trade) => trade,
        Err(e) => ic_cdk::trap(&format!("Failed to delete trade: {}", e)),
    }
}

#[update(name = "join_trade")]
fn join_trade(id: String) -> trade::Trade {
    match trade::join_trade(ic_cdk::caller(), id) {
        Ok(trade) => trade,
        Err(e) => ic_cdk::trap(&format!("Failed to join trade: {}", e)),
    }
}

#[update(name = "leave_trade")]
fn leave_trade(id: String) -> trade::Trade {
    match trade::leave_trade(ic_cdk::caller(), id) {
        Ok(trade) => trade,
        Err(e) => ic_cdk::trap(&format!("Failed to leave trade: {}", e)),
    }
}

#[update(name = "add_item_to_trade")]
fn add_item_to_trade(id: String, item: trade::Item) -> trade::Trade {
    match trade::add_item_to_trade(ic_cdk::caller(), id, item) {
        Ok(trade) => trade,
        Err(e) => ic_cdk::trap(&format!("Failed to add item to trade: {}", e)),
    }
}

#[update(name = "remove_item_from_trade")]
fn remove_item_from_trade(id: String, item: trade::Item) -> trade::Trade {
    match trade::remove_item_from_trade(ic_cdk::caller(), id, item) {
        Ok(trade) => trade,
        Err(e) => ic_cdk::trap(&format!("Failed to remove item from trade: {}", e)),
    }
}

#[update(name = "accept")]
fn accept(id: String) -> trade::Trade {
    // fns::accept returns a Result<fns::Trade>
    // if it's an error, get the error message and trap with cdk_trap
    // if it's a trade, return it
    match trade::accept(ic_cdk::caller(), id) {
        Ok(trade) => trade,
        Err(e) => ic_cdk::trap(&format!("Failed to accept trade: {}", e)),
    }
}

#[update(name = "cancel")]
fn cancel(id: String) -> trade::Trade {
    match trade::cancel(ic_cdk::caller(), id) {
        Ok(trade) => trade,
        Err(e) => ic_cdk::trap(&format!("Failed to cancel trade: {}", e)),
    }
}

// #[update(name = "add_item_to_escrow")]
// fn add_item_to_escrow(id: String, item: Item) -> fns::Trade {
// }

// #[update(name = "remove_item_from_escrow")]
// fn remove_item_from_escrow(id: String, item: Item) -> fns::Trade {
// }

// #[query(name = "get_escrow_items")]
// fn get_escrow_items(id: String) -> Vec<Item> {
// }

// #[update(name = "withdraw_from_escrow")]
// fn withdraw_from_escrow(id: String, item: Item) -> Item {
// }
