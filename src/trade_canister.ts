import { Opt, Query, Update } from 'azle';

type Db = {
    users: {
        [id: string]: Trade;
    };
};

type Trade = {
    id: string;
    tradedata: string;
};

let db: Db = {
    users: {}
};

export function get_trade_by_id(id: string): Query<Opt<Trade>> {
    const user = db.users[id] ?? null;

    return user;
}

export function get_all_trades(): Query<Trade[]> {
    return Object.values(db.users);
}

export function create_trade(tradedata: string): Update<Trade> {
    const id = Object.keys(db.users).length.toString();

    const user = {
        id,
        tradedata
    };

    db.users[id] = user;

    return user;
}
