import prismaClient from "../../prisma";

interface PostRequest{
    name: string;
    text: string;
    bookId: string;
}

class CreatePostService{
    async execute({name,text, bookId}:PostRequest){

        if(text === ""){
            throw new Error("Por favor, escreva algo")
        }

        const post = await prismaClient.post.create({
            data:{
                name: name,
                text: text,
                bookId:bookId
            }
        })

        return post;
    }
}

export { CreatePostService };