use ic_cdk_macros::*;

use ic_cdk::{
    export::{
        candid::{CandidType, Deserialize},
        Principal,
    },
};

mod fns;

#[pre_upgrade]
fn pre_upgrade() {
    let trades = fns::pre_upgrade();
    
    let result = ic_cdk::storage::stable_save((trades,));
    match result {
        Ok(_) => (),
        Err(e) => ic_cdk::trap(&format!("Failed to save trades: {}", e)),
    }
}

#[post_upgrade]
fn post_upgrade() {
    let trade_store = ic_cdk::storage::stable_restore::<(fns::TradeStore,)>().unwrap().0;

    fns::post_upgrade(trade_store);
}


#[update(name = "create_trade")]
fn create_trade() -> fns::Trade {
    return fns::create_trade(ic_cdk::caller());
}

#[query(name = "get_all_trades")]
fn get_all_trades() -> Vec<fns::Trade> {
    return fns::get_all_trades()
}

// #[query(name = "get_trade_by_id")]
// fn get_trade_by_id(id: String) -> fns::Trade {
//     fns::get_trade_by_id(id);
// }

// #[update(name = "delete_trade")]
// fn delete_trade(id: String) -> fns::Trade {
//     match fns::delete_trade(ic::caller(), id) {
//         Ok(trade) => trade,
//         Err(e) => ic_cdk::trap(&format!("Failed to delete trade: {}", e)),
//     }
// }

// #[update(name = "join_trade")]
// fn join_trade(id: String) -> fns::Trade {
//     match fns::join_trade(ic::caller(), id) {
//         Ok(trade) => trade,
//         Err(e) => ic_cdk::trap(&format!("Failed to join trade: {}", e)),
//     }
// }

// #[update(name = "leave_trade")]
// fn leave_trade(id: String) -> fns::Trade {
//     match fns::leave_trade(ic::caller(), id) {
//         Ok(trade) => trade,
//         Err(e) => ic_cdk::trap(&format!("Failed to leave trade: {}", e)),
//     }
// }

// #[update(name = "add_item_to_trade")]
// fn add_item_to_trade(id: String, item: Item) -> fns::Trade {
//     match fns::add_item_to_trade(ic::caller(), id, item) {
//         Ok(trade) => trade,
//         Err(e) => ic_cdk::trap(&format!("Failed to add item to trade: {}", e)),
//     }
// }

// #[update(name = "remove_item_from_trade")]
// fn remove_item_from_trade(id: String, item: Item) -> fns::Trade {
//     match fns::remove_item_from_trade(ic::caller(), id, item) {
//         Ok(trade) => trade,
//         Err(e) => ic_cdk::trap(&format!("Failed to remove item from trade: {}", e)),
//     }
// }

// #[update(name = "accept")]
// fn accept(id: String) -> fns::Trade {
//     // fns::accept returns a Result<fns::Trade>
//     // if it's an error, get the error message and trap with cdk_trap
//     // if it's a trade, return it
//     match fns::accept(ic::caller(), id) {
//         Ok(trade) => trade,
//         Err(e) => ic_cdk::trap(&format!("Failed to accept trade: {}", e)),
//     }
// }

// #[update(name = "cancel")]
// fn cancel(id: String) -> fns::Trade {
//     match fns::cancel(ic::caller(), id) {
//         Ok(trade) => trade,
//         Err(e) => ic_cdk::trap(&format!("Failed to cancel trade: {}", e)),
//     }
// }

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

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test_create_trade() {
        let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
        let trade = fns::create_trade(principal);
        assert_eq!(trade.id, "0");
    }

    #[test]
    fn test_get_all_trades() {
        let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
        let trades = fns::get_all_trades();
        assert_eq!(trades.len(), 0);

        fns::create_trade(principal);
        let trades2 = fns::get_all_trades();
        assert_eq!(trades2.len(), 1);
    }

    #[test]
    fn test_get_trade_by_id() {
        
    }

    #[test]
    fn test_delete_trade() {
        
    }

    #[test]
    fn test_join_trade() {
        
    }

    #[test]
    fn test_leave_trade() {
        
    }

    #[test]
    fn test_add_item_to_trade() {
        
    }

    #[test]
    fn test_remove_item_from_trade() {
        
    }

    #[test]
    fn test_accept() {
        
    }

    #[test]
    fn test_cancel() {
        
    }
}