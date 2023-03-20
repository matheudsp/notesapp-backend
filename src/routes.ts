import { Router} from 'express';
import { CreateBookController } from './controllers/book/CreateBookController';
import { DeleteBookController } from './controllers/book/DeleteBookController';
import { ListBookController } from './controllers/book/ListBookController';
import { UpdateBookController } from './controllers/book/UpdateBookController';
import { CreatePostController } from './controllers/post/CreatePostController';
import { DeletePostController } from './controllers/post/DeletePostController';
import { DetailPostController } from './controllers/post/DetailPostController';
import { ListPostController } from './controllers/post/ListPostController';
import { UpdatePostController } from './controllers/post/UpdatePostController';
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
router.post('/book/add',isAuth, new CreateBookController().handle)
router.post('/book',isAuth, new ListBookController().handle)

router.put('/book/update', isAuth, new UpdateBookController().handle)

router.delete('/book/remove', isAuth, new DeleteBookController().handle)

//-- post routes --
router.post('/post/add',isAuth, new CreatePostController().handle)
router.post('/post/post', isAuth,new DetailPostController().handle)
router.post('/post', isAuth,new ListPostController().handle)

router.put('/post/update', isAuth, new UpdatePostController().handle )

router.delete('/post/remove', isAuth, new DeletePostController().handle)

export { router };
 
    