import { Router } from 'express';
import SessionsControllers from '../controllers/SessionsControllers';
import { sessionSchema } from '../schemas/SessionSchema';

const sessionsRouter = Router();
const sessionsController = new SessionsControllers();

sessionsRouter.post('/', sessionSchema, sessionsController.create);

export default sessionsRouter;