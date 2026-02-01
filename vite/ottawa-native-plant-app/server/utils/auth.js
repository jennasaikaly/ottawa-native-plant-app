import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const expiration = '60m';
// const expiration = '10m';

//FUNCTION TO GENERATE A TOKEN

    export const createAccessToken = function(req, res) {
    const username = req.username;
    const email = req.email;
    const id = req.id
    const payload = { username, email, id };
    return jwt.sign({ data: payload }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: expiration})
}
//function to generate refresh token
    export const createRefreshToken = function ({username, email, id }) {
    const payload = { username, email, id };
    return jwt.sign({ data: payload }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'});
}