import { Express, Request, Response } from 'express';
import log4js, { Logger } from 'log4js';

export default class DemoController {

    private static logger: Logger = log4js.getLogger('DemoController');

    constructor(private express: Express) {
        this.dispatch();
        DemoController.logger.debug("控制器 DemoController 初始化完毕");
    }

    private dispatch(): void {
        this.express.get('/api/demo', (req: Request, res: Response) => { this.demo(req, res); });
    }

    private demo(req: Request, res: Response): void {
        res.status(200).send("admin api demo");
    }

};
