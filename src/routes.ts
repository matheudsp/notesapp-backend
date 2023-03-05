import { Router} from 'express';
import { CreateBookController } from './controllers/book/CreateBookController';
import { ListBookController } from './controllers/book/ListClassController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

const router = Router()

//-- user routes --
router.post('/entrar', new AuthUserController().handle)
router.post('/usuario', new CreateUserController().handle) 
router.get('/conta', new DetailUserController().handle)

//-- class routes --
router.post('/book', new CreateBookController().handle)
router.post('/books', new ListBookController().handle)



export { router };
