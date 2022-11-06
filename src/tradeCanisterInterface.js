import { _SERVICE } from './dfx_generated/trade_canister/trade_canister.did';

const get_trade_by_id = async (id) => {
    const result =
        await trade_canister.get_trade_by_id(id);

    return result;
}

const get_all_trades = async () => {
    const result =
        await trade_canister.get_all_trades();

    return result;
}

const create_trade = async () => {
    const result = await trade_canister.create_trade(
        'test'
    );

    return result
}