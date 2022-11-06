let db = {
    users: {}
};

export function get_trade_by_id(id) {
    const user = db.users[id] ?? null;

    return user;
}

export function get_all_trades() {
    return Object.values(db.users);
}

export function create_trade(tradedata) {
    const id = Object.keys(db.users).length.toString();

    const user = {
        id,
        tradedata
    };

    db.users[id] = user;

    return user;
}
