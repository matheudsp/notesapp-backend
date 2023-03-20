import {Request, Response} from 'express'
import { DeleteBookService } from '../../services/book/DeleteBookService';

class DeleteBookController{
  async handle(req: Request, res: Response){
    const { bookId} = req.body;

    const deleteBook = new DeleteBookService();

    const book  = await deleteBook.execute({
        bookId
    });

    return res.json(book);

  }
}

export { DeleteBookController }