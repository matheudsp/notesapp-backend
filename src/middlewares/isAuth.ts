import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken';

interface PayLoad{
    sub: string;

}

export function isAuth(
    req: Request,
    res: Response,
    next: NextFunction
){
    // Receber o JWT Token
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();

    }

    const [, token] = authToken.split(" ")

    try{
        //validar token JWT
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;
        
        //recupera o id do token JWT e coloca dentro da varievel user_id dentro do request 
        req.user_id = sub;

        return next();
        
    }catch(err){
        return res.status(401).end()
    }
}