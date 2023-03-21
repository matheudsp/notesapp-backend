import prismaClient from "../../prisma";

interface PostRequest{
    postId: string
    
}

class DetailPostService{
    async execute({postId}: PostRequest){
        const post = await prismaClient.post.findMany({
            
            where:{
                id:postId
            },
            select:{
                title:true,
                text:true,
            }

        })

        return post;
    }
}

export { DetailPostService}