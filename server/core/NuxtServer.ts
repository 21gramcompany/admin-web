import express from 'express';
import {Nuxt, Builder} from 'nuxt';
import config from '../../nuxt.config.js';
import { RouteDef } from '../routes/index';

const { log } = console;

interface INuxtServer {
  run(routes: RouteDef[]): void;
}

export default class NuxtServer implements INuxtServer{

  protected app: any;
  protected host: string;
  protected port: number | string;
  private static instance: NuxtServer;

  public static getInstance(): INuxtServer {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new NuxtServer();
    return this.instance;
  }

  protected constructor() {
    this.app = express();
    this.host = process.env.HOST || '127.0.0.1';
    this.port = process.env.PORT || 3000;
  }

  public run(routes: RouteDef[]): void {
    this.app.set('port', this.port);
    routes.forEach(route => this.app.use(route.path, route.router));
    config.dev = process.env.NODE_ENV !== 'production';
    const nuxt = new Nuxt(config);
    if (config.dev) {
      const builder = new Builder(nuxt);
      builder.build();
    }
    this.app.use(nuxt.render);
    this.app.listen(this.port, this.host, () => {
      log(`server start!!! host: ${this.host}, port: ${this.port}`);
    });
    return;
  }

}
