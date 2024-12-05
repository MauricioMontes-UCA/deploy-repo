import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    const {token} = req.cookies;
    if (!token)return res.status(401).json({error: 'You must be logged in to access this resource'});

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "invalid token" });
        
        req.user = user;

        next();
    });

};