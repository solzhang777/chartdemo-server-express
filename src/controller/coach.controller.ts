import { Express, Request, Response } from 'express';
import log4js, { Logger } from 'log4js';
import CoachInfo from '../models/coach-info.model';

export default class CoachController {

    private static logger: Logger = log4js.getLogger('CoachController');
    private coachList: CoachInfo[] = [{
        year:"2014年",pass:30, noPass:10
    },{
        year:"2015年",pass:50, noPass:2
    },{
        year:"2016年",pass:60, noPass:6
    }];

    constructor(private express: Express) {
        this.dispatch();
        CoachController.logger.debug("控制器 CoachController 初始化完毕");
    }

    private dispatch(): void {
        this.express.get('/coach/api/get', (req: Request, res: Response) => { this.get(req, res); });
        this.express.get('/coach/api/add/:year/:pass/:noPass', (req: Request, res: Response) => { this.add(req, res); });
    }

    private get(req: Request, res: Response): void {
       
        res.status(200).json(this.coachList);
    }

    private add(req: Request, res: Response): void {

        this.coachList.push({
            year: req.params.year,
            pass: req.params.pass,
            noPass: req.params.noPass,
        });

        res.status(200).send("Add ok!");
    }

};
