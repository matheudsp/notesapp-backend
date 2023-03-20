import prismaClient from "../../prisma";

interface PostRequest{
  postId: string;

}

class DeletePostService{
  async execute( {postId}: PostRequest){
    const post = await prismaClient.post.delete({
      where:{
        id: postId
      }
    })

    return post;

  }
}

export { DeletePostService }