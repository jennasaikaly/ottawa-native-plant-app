import jwt from 'jsonwebtoken';
dotenv.config()

const expiration = '2h';

//FUNCTION TO GENERATE A TOKEN
export const signToken = function({ username, email, id }) {
    const payload = { username, email, id };

    return jwt.sign({ data: payload }, process.env.AUTH_SECRET, { expiresIn: expiration})
}