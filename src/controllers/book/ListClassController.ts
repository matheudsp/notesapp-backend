import { Request, Response} from 'express';
import { ListBookService } from '../../services/book/ListBookService';

class ListBookController{
    async handle(req: Request, res: Response){
        const { authorId } = req.body

        const listBookController = new ListBookService();

        const book = await listBookController.execute(
            authorId
        );
        
        return res.json(book);
    }
}

export { ListBookController }