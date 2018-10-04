import { Router } from 'express';
import apiRouter from './apiRouter';
import mockRouter from './mockRouter';

interface RouteDef {
  path: string;
  router: Router;
}

const routes = [
  { path: '/api', router: apiRouter },
  { path: '/mock', router: mockRouter },
];

export default routes;

export {
  RouteDef,
};