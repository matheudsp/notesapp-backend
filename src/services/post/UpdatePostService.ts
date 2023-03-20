import prismaClient from "../../prisma";

interface PostRequest{
  postId: string;
  name:string,
  text:string
}

class UpdatePostService{
  async execute( {postId,name, text}: PostRequest){
    const post = await prismaClient.post.update({
      where:{
        id: postId
      },
      data:{
        name:name,
        text:text,
        
      }
    })

    return post;

  }
}

export { UpdatePostService }