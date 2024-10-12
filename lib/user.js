import db from "./db";

export function createUser(email, password) {
    // Prepare and execute the SQL statement
    const result = db.prepare('INSERT INTO users(email, password) VALUES(?, ?)').run(email, password);

    // Return the `lastInsertRowid` from the result, which is the newly created user's id
    return result.lastInsertRowid;
}


export function getUserByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email)
}