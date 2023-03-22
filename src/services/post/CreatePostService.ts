import prismaClient from "../../prisma";

interface PostRequest{
    title: string;
    text: string;
    bookId: string;
}

class CreatePostService{
    async execute({title,text, bookId}:PostRequest){


        const post = await prismaClient.post.create({
            data:{
                title: title,
                text: text,
                bookId:bookId
            }
        })

        return post;
    }
}

export { CreatePostService };