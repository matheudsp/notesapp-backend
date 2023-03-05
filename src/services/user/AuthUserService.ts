import prismaClient from "../../prisma";
import {compare} from 'bcryptjs';

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email,password}: AuthRequest){
        
        //verifica se o email existe no bd
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            throw new Error("Email e/ou senha incorreta.")
        }

        const passwordMatch = await compare(password, user.password)
        
        if(!passwordMatch){
            throw new Error("Email e/ou senha incorreta.")
        }

        //apos cumprir as condicoes
        return{
            id: user.id,
            name: user.name,
            email:user.email,
        }
    }
}

export { AuthUserService}