import {Request, Response} from 'express'
import { UpdatePostService } from '../../services/post/UpdatePostService';

class UpdatePostController{
  async handle(req: Request, res: Response){
    const { postId,name,text} = req.body;

    const updatePost = new UpdatePostService();

    const post = await updatePost.execute({
        postId, name,text
    });

    return res.json(post);

  }
}

export { UpdatePostController }