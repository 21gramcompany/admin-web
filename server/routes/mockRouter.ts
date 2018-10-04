import { Router } from 'express';
import users from '../../common/mock/users';

const mockRouter = Router();
const { log } = console;

mockRouter.get('/users', function (req, res) {
  log(JSON.stringify(req.query));
  res.status(200).json({ users, count: 7 });
});

export default mockRouter;
