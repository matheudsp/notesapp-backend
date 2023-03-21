import prismaClient from "../../prisma";

interface PostRequest{
  postId: string;
  title:string,
  text:string
}

class UpdatePostService{
  async execute( {postId,title, text}: PostRequest){
    const post = await prismaClient.post.update({
      where:{
        id: postId
      },
      data:{
        title:title,
        text:text,
        
      }
    })

    return post;

  }
}

export { UpdatePostService }