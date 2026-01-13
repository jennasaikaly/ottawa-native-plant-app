import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const expiration = '2h';

//FUNCTION TO GENERATE A TOKEN
export const createSecretToken = function({ username, email, id }) {
    const payload = { username, email, id };

    return jwt.sign({ data: payload }, process.env.AUTH_SECRET, { expiresIn: expiration})
}