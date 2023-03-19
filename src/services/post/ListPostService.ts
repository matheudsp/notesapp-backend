import prismaClient from "../../prisma";

interface PostRequest{
    bookId: string
    
}

class ListPostService{
    async execute({bookId}: PostRequest){
        const findByBook = await prismaClient.post.findMany({
            
            where:{
                bookId:bookId
            },
            select:{
                id:true,
                name:true,
                text:true,
                bookId:true,
            }

        })

        return findByBook;
    }
}

export { ListPostService}