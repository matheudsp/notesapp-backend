import {Request, Response} from 'express'
import { UpdatePostService } from '../../services/post/UpdatePostService';

class UpdatePostController{
  async handle(req: Request, res: Response){
    const { postId,title,text} = req.body;

    const updatePost = new UpdatePostService();

    const post = await updatePost.execute({
        postId, title,text
    });

    return res.json(post);

  }
}

export { UpdatePostController }