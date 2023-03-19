import { Request, Response } from "express";
import { ListPostService } from "../../services/post/ListPostService";

class ListPostController{

    async handle(req:Request, res: Response){
        const bookId = req.body;

        const listPostService = new ListPostService();

        const post = await listPostService.execute(
            bookId
        );

        return res.json(post);
    }
}

export { ListPostController }