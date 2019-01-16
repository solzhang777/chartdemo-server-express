import Koa from 'koa';
import KoaStatic from 'koa-static';
import path from 'path';
import log4js, { Logger } from 'log4js';
import log4jsextend from 'log4js-extend';

log4js.configure({
    appenders: {
        logfiles: { type: 'file', filename: 'server.log' },
        consoles: { type: 'console' }
    },
    categories: { default: { appenders: ['logfiles', 'consoles'], level: 'debug' } }
});

log4jsextend(log4js, {
    path: __dirname,
    format: "at @name (@file:@line:@column)"
});

class App {

    private static logger: Logger = log4js.getLogger('App');

    private app: Koa;
    private port: number = 3001;

    constructor() {
        this.app = new Koa();
    }
    public run(): void {
        this.app.use(KoaStatic(path.join(__dirname, '../../web/dist')));
        this.app.listen(this.port);
        App.logger.info(`服务器启动, 端口[${this.port}]`);
    }
}

new App().run();
