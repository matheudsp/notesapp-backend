import { Request, Response } from "express";
import { CreateBookService } from "../../services/book/CreateBookService";


class CreateBookController{
    async handle(req: Request, res: Response){
        const {name, description, authorId} = req.body;

        const createBookService = new CreateBookService();

        const book = await createBookService.execute({
            name,
            description,
            authorId
        });

        return res.json(book);
    }
}

export { CreateBookController }