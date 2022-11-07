import { _SERVICE } from './dfx_generated/trade_canister/trade_canister.did';

export const get_trade_by_id = async (id) => {
    const result =
        await trade_canister.get_trade_by_id(id);

    return result;
}

export const get_all_trades = async () => {
    const result =
        await trade_canister.get_all_trades();

    return result;
}

export const create_trade = async () => {
    const result = await trade_canister.create_trade();\
    return result
}

export const accept = async (id) => {
    const result = await trade_canister.accept(id);
    return result
}

export const cancel = async (id) => {
    const result = await trade_canister.cancel(id);
    return result
}

export const delete_trade = async (id) => {
    const result = await trade_canister.delete_trade(id);
    return result
}

export const join_trade = async (id) => {
    const result = await trade_canister.join_trade(id);
    return result
}

export const leave_trade = async (id) => {
    const result = await trade_canister.leave_trade(id);
    return result
}

export const add_item_to_trade = async (id, item) => {
    const result = await trade_canister.add_item_to_trade(id, item);
    return result
}

export const remove_item_from_trade = async (id, item) => {
    const result = await trade_canister.remove_item_from_trade(id, item);
    return result
}

export const add_item_to_escrow = (id, item) => {
    const result = await trade_canister.add_item_to_escrow(id, item);
    return result
}

export const remove_item_from_escrow = (id, item) => {
    const result = await trade_canister.remove_item_from_escrow(id, item);
    return result
}

export const get_escrow_items = (id) => {
    const result = await trade_canister.get_escrow_items(id);
    return result
}

export const get_escrow_items_self = (id) => {
    const result = await trade_canister.get_escrow_items_self(id);
    return result
}

export const withdraw_from_escrow = (id, item) => {
    const result = await trade_canister.withdraw_from_escrow(id, item);
    return result
}