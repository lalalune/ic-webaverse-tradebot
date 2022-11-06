import { Opt, Query, Update } from 'azle';

type Db = {
    trades: {
        [id: string]: Trade;
    };
};

type Trade = {
    id: string;
    tradedata: string;
};

let db: Db = {
    trades: {}
};

export function get_trade_by_id(id: string): Query<Opt<Trade>> {
    const trade = db.trades[id] ?? null;

    return trade;
}

export function get_all_trades(): Query<Trade[]> {
    return Object.values(db.trades);
}

export function create_trade(tradedata: string): Update<Trade> {
    const id = Object.keys(db.trades).length.toString();

    const trade = {
        id,
        tradedata
    };

    db.trades[id] = trade;

    return trade;
}
