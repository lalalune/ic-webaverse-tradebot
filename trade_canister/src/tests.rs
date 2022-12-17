// Note this useful idiom: importing names from outer (for mod tests) scope.
use super::*;

#[test]
fn test_create_trade() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let trade = trade::create_trade(principal);
    assert_eq!(trade.id, "0");
}

#[test]
fn test_get_all_trades() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let trades = trade::get_all_trades();
    assert_eq!(trades.len(), 0);

    trade::create_trade(principal);
    let trades2 = trade::get_all_trades();
    assert_eq!(trades2.len(), 1);
}

#[test]
fn test_get_trade_by_id() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    // create the create and make sure we have one
    trade::create_trade(principal);
    let trade = trade::get_trade_by_id(String::from("0")).unwrap();
    assert_eq!(trade.id, "0");
}

#[test]
fn test_delete_trade() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let zero = String::from("0");

    // create the create and make sure we have one
    trade::create_trade(principal);
    let trades = trade::get_all_trades();
    assert_eq!(trades.len(), 1);
    trade::delete_trade(principal, zero);
    let trades2 = trade::get_all_trades();
    assert_eq!(trades2.len(), 0)
}

#[test]
fn test_join_trade() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let principal2 =
        Principal::from_text("bxt3g-6lxsl-twdrf-xmslv-qkb5w-p4hor-3getx-min6t-q36af-5eqqa-cqe")
            .unwrap();
    let zero = String::from("0");

    // create the create and make sure we have one
    trade::create_trade(principal);

    let result = trade::join_trade(principal, zero.clone());
    assert!(result.is_err());

    let result2 = trade::join_trade(principal2, zero.clone());
    println!("Result: {:?}", result2);
    assert!(result2.is_ok());

    let guest = result2.unwrap().guest;
    assert!(Some(principal2) == guest);
}

#[test]
fn test_leave_trade() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let principal2 =
        Principal::from_text("bxt3g-6lxsl-twdrf-xmslv-qkb5w-p4hor-3getx-min6t-q36af-5eqqa-cqe")
            .unwrap();
    let zero = String::from("0");

    // create the create and make sure we have one
    trade::create_trade(principal);

    let result = trade::join_trade(principal, zero.clone());
    assert!(result.is_err());

    let result2 = trade::join_trade(principal2, zero.clone());
    println!("Result: {:?}", result2);
    assert!(result2.is_ok());

    let guest = result2.unwrap().guest;
    assert!(Some(principal2) == guest);

    let result3 = trade::leave_trade(principal2, zero.clone());
    println!("Result: {:?}", result3);
    assert!(result3.is_ok());

    let guest2 = result3.unwrap().guest;
    assert!(Some(principal2) != guest2);
}

#[test]
fn test_add_item_to_trade() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let principal2 =
        Principal::from_text("bxt3g-6lxsl-twdrf-xmslv-qkb5w-p4hor-3getx-min6t-q36af-5eqqa-cqe")
            .unwrap();
    let zero = String::from("0");

    // create the create and make sure we have one
    trade::create_trade(principal);

    let result2 = trade::join_trade(principal2, zero.clone());
    println!("Result: {:?}", result2);
    assert!(result2.is_ok());

    let guest = result2.unwrap().guest;
    assert!(Some(principal2) == guest);

    let item: trade::Item = trade::Item {
        name: String::from("test"),
        canister_id: Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap(),
        token_id: 0,
    };

    let result3 = trade::add_item_to_trade(principal2, zero.clone(), item);
    println!("Result: {:?}", result3);
    assert!(result3.is_ok());

    let guest_items = result3.unwrap().guest_items;
    assert!(guest_items.len() > 0);
}

#[test]
fn test_remove_item_from_trade() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let principal2 =
        Principal::from_text("bxt3g-6lxsl-twdrf-xmslv-qkb5w-p4hor-3getx-min6t-q36af-5eqqa-cqe")
            .unwrap();
    let zero = String::from("0");

    // create the create and make sure we have one
    trade::create_trade(principal);

    let result2 = trade::join_trade(principal2, zero.clone());
    println!("Result: {:?}", result2);
    assert!(result2.is_ok());

    let guest = result2.unwrap().guest;
    assert!(Some(principal2) == guest);

    let item: trade::Item = trade::Item {
        name: String::from("test"),
        canister_id: Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap(),
        token_id: 0,
    };

    let result3 = trade::add_item_to_trade(principal2, zero.clone(), item.clone());
    println!("Result: {:?}", result3);
    assert!(result3.is_ok());

    let guest_items = result3.unwrap().guest_items;
    assert!(guest_items.len() > 0);

    let result4 = trade::remove_item_from_trade(principal2, zero.clone(), item.clone());
    println!("Result: {:?}", result4);
    assert!(result4.is_ok());

    let guest_items = result4.unwrap().guest_items;
    assert!(guest_items.len() == 0);
}

#[test]
fn test_accept() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let principal2 =
        Principal::from_text("bxt3g-6lxsl-twdrf-xmslv-qkb5w-p4hor-3getx-min6t-q36af-5eqqa-cqe")
            .unwrap();
    let zero = String::from("0");

    // create the create and make sure we have one
    trade::create_trade(principal);

    let result2 = trade::join_trade(principal2, zero.clone());
    println!("Result: {:?}", result2);
    assert!(result2.is_ok());

    let guest = result2.unwrap().guest;
    assert!(Some(principal2) == guest);

    let item: trade::Item = trade::Item {
        name: String::from("test"),
        canister_id: Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap(),
        token_id: 0,
    };

    let result3 = trade::add_item_to_trade(principal2, zero.clone(), item.clone());
    println!("Result: {:?}", result3);
    assert!(result3.is_ok());

    // accept for host
    let host_accept_result = trade::accept(principal, zero.clone());
    assert!(host_accept_result.is_ok());

    // accept for guest
    let guest_accept_result = trade::accept(principal2, zero.clone());
    assert!(guest_accept_result.is_ok());

    let trade = trade::get_trade_by_id(String::from("0")).unwrap();
    assert!(trade.host_accept && trade.guest_accept)
}

#[test]
fn test_cancel() {
    let principal = Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap();
    let principal2 =
        Principal::from_text("bxt3g-6lxsl-twdrf-xmslv-qkb5w-p4hor-3getx-min6t-q36af-5eqqa-cqe")
            .unwrap();
    let zero = String::from("0");

    // create the create and make sure we have one
    trade::create_trade(principal);

    let result2 = trade::join_trade(principal2, zero.clone());
    println!("Result: {:?}", result2);
    assert!(result2.is_ok());

    let guest = result2.unwrap().guest;
    assert!(Some(principal2) == guest);

    let item: trade::Item = trade::Item {
        name: String::from("test"),
        canister_id: Principal::from_text("rrkah-fqaaa-aaaaa-aaaaq-cai").unwrap(),
        token_id: 0,
    };

    let result3 = trade::add_item_to_trade(principal2, zero.clone(), item.clone());
    println!("Result: {:?}", result3);
    assert!(result3.is_ok());

    // accept for host
    let host_accept_result = trade::accept(principal, zero.clone());
    assert!(host_accept_result.is_ok());

    let host_cancel_result = trade::cancel(principal, zero.clone());
    assert!(host_cancel_result.is_ok());

    let trade = trade::get_trade_by_id(String::from("0")).unwrap();
    assert!(!trade.host_accept && !trade.guest_accept)
}
