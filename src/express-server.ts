import Express, {Request, Response} from 'express';
import path from 'path';
import log4js, { Logger } from 'log4js';
import log4jsextend from 'log4js-extend';
import DemoController from './controller/demo.controller';
import CourseController from './controller/course.controller';
import CoashController from './controller/coach.controller';

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

    private app: Express.Express;
    private port: number = 3000;

    constructor() {
        this.app = Express();
    }
    public run(): void {
        // new AppRouter(this.app);
        // this.app.use(KoaStatic(path.join(__dirname, '../../web/dist')));
        this.app.use('/', Express.static(path.join(__dirname, '../../web/dist')));
        this.app.listen(this.port);
        App.logger.info(`服务器启动, 端口[${this.port}]`);


        // 注册controller
        new DemoController(this.app);
        new CourseController(this.app);
        new CoashController(this.app);
    }
}

new App().run();
