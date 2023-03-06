import prismaClient from "../../prisma";

interface PostRequest{
    bookId: string;
}

class ListPostService{
    async execute({bookId}: PostRequest){
        const post = await prismaClient.post.findMany({
            where:{
                bookId:bookId
            },
            select:{
                id:true,
                name: true,
                bookId: true
            }
        })

        return post;
    }

    
}

export { ListPostService }