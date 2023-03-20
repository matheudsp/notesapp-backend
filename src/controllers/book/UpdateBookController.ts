import {Request, Response} from 'express'
import { UpdateBookService } from '../../services/book/UpdateBookService';

class UpdateBookController{
  async handle(req: Request, res: Response){
    const { bookId,name,description} = req.body;

    const updateBook = new UpdateBookService();

    const Book = await updateBook.execute({
        bookId, name,description
    });

    return res.json(Book);

  }
}

export { UpdateBookController }