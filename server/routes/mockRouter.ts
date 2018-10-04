import { Router } from 'express';
import users from '../../common/mock/users';

const mockRouter = Router();
const { log } = console;

mockRouter.get('/users', (req, res) => {
  console.log(req.query);
  res.status(200).json({ users, count: 7 });
});

export default mockRouter;
