import { User } from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  debugger;
  const authHeader = req.headers.authorization || '';
  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Missing or invalid Authorization header' });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = { id: decoded.data.id, email: decoded.data.email };
    next();
  } catch (err) {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("decoded is", decoded)
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Access token expired' });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }
}

// export const auth = (req, res) => {

//      const authHeader = req.headers.authorization || '';
//     // console.log("req is", req)
//      const [scheme, token] = authHeader.split(' ');
//   if (!token) {
//     return res.json({ message: "no token" })
//   }
//   console.log("i am verifying")
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, data) => {
    
//     if (err) {
//      return res.json({ message: "could not verify" })
//     } else {
//       console.log("the data id is ", data.id)
//       const user = await User.findById(data.id)
//       console.log("the user is the use is", user)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }