import { Express, Request, Response } from 'express';
import log4js, { Logger } from 'log4js';
import CoachInfo from '../models/coach-info.model';

export default class CourseController {

    private static logger: Logger = log4js.getLogger('CourseController');
    private data: string;

    constructor(private express: Express) {
        this.dispatch();
        CourseController.logger.debug("控制器 CourseController 初始化完毕");
    }

    private dispatch(): void {
        this.express.get('/api/course/categories', (req: Request, res: Response) => { this.getCategory(req, res); });
    }

    private getCategory(req: Request, res: Response): void {
        const data = [{
            name: "开发"
        }, {
            name: "UI"
        }];
        res.status(200).json(data);
    }

};
