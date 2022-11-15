const debug = true;
// make a random 5-letter/number string
const clientId = Math.random().toString(36).substring(2, 7);

export const get_trade_by_id = async (id) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/get_trade_by_id`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, caller: clientId})
        });
        return result;
    }
    const result =
        await trade_canister.get_trade_by_id(id);

    return result;
}

export const get_all_trades = async () => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/get_all_trades`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return result;
    }
    const result =
        await trade_canister.get_all_trades();

    return result;
}

export const create_trade = async () => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/create_trade`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.create_trade();
    return result
}

export const accept = async (id) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/accept`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.accept(id);
    return result
}

export const cancel = async (id) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/cancel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.cancel(id);
    return result
}

export const delete_trade = async (id) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/delete_trade`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.delete_trade(id);
    return result
}

export const join_trade = async (id) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/join_trade`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.join_trade(id);
    return result
}

export const leave_trade = async (id) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/leave_trade`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.leave_trade(id);
    return result
}

export const add_item_to_trade = async (id, item) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/add_item_to_trade`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, item, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.add_item_to_trade(id, item);
    return result
}

export const remove_item_from_trade = async (id, item) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/remove_item_from_trade`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, item, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.remove_item_from_trade(id, item);
    return result
}

export const add_item_to_escrow = async (id, item) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/add_item_to_escrow`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, item, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.add_item_to_escrow(id, item);
    return result
}

export const remove_item_from_escrow = async (id, item) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/remove_item_from_escrow`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, item, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.remove_item_from_escrow(id, item);
    return result
}

export const get_escrow_items = async (id) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/get_escrow_items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.get_escrow_items(id);
    return result
}

export const get_escrow_items_self = async (id) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/get_escrow_items_self`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, item, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.get_escrow_items_self(id);
    return result
}

export const withdraw_from_escrow = async (id, item) => {
    if(debug) {
        const result = await fetch(`http://localhost:8081/get_escrow_items_self`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, item, caller: clientId})
        });
        return result;
    }
    const result = await trade_canister.withdraw_from_escrow(id, item);
    return result
}