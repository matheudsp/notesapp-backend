import { Router} from 'express';
import { CreateBookController } from './controllers/book/CreateBookController';
import { ListBookController } from './controllers/book/ListBookController';
import { CreatePostController } from './controllers/post/CreatePostController';
import { ListPostController } from './controllers/post/ListPostController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuth } from './middlewares/isAuth';

const router = Router()

//-- user routes --
router.post('/entrar', new AuthUserController().handle)
router.post('/usuario', new CreateUserController().handle) 
router.get('/conta',isAuth, new DetailUserController().handle)

//-- book routes --
router.post('/book',isAuth, new CreateBookController().handle)
router.post('/books',isAuth, new ListBookController().handle)

//-- post routes --
router.post('/post',isAuth, new CreatePostController().handle)
router.post('/posts', isAuth,new ListPostController().handle)

export { router };
 
    