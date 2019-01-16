import Router, { IRouterContext } from 'koa-router';
import Koa from 'koa';

export default class AppRouter {

    private router: Router;

    constructor(app: Koa) {
        this.router = new Router();

        this.router.get('/api/demo', async (ctx: Koa.ParameterizedContext<{}, IRouterContext>, next: () => Promise<any>) => {
            ctx.status = 200;
            ctx.body = "admin api demo";
        });

        app.use(this.router.routes)
            .use(this.router.allowedMethods());
    }
}

