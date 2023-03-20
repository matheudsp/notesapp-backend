import {Request, Response} from 'express'
import { DeletePostService } from '../../services/post/DeletePostService';

class DeletePostController{
  async handle(req: Request, res: Response){
    const {postId} = req.body;

    const deletePost = new DeletePostService();

    const post = await deletePost.execute({
        postId, 
    });

    return res.json(post);

  }
}

export { DeletePostController }