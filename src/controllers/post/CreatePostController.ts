import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController{
    async handle(req: Request, res: Response){
        const {name, text, bookId} = req.body;

        const createPostService = new CreatePostService();

        const post = await createPostService.execute({
            name,
            text, 
            bookId
        });

        return res.json(post);
    }
}

export { CreatePostController }