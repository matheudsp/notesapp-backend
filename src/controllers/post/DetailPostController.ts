import { Request, Response } from "express";
import { DetailPostService } from "../../services/post/DetailPostService";

class DetailPostController{

    async handle(req:Request, res: Response){
        const postId = req.body;

        const detailPostController = new DetailPostService();

        const post = await detailPostController.execute(
            postId
        );

        return res.json(post);
    }
}

export { DetailPostController }