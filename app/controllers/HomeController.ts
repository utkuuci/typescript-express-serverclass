import { Request, Response, Router } from "express";
import ControllerInterface from "../core/interfaces/controller-interface";
import Controller from "../core/decorators/controller-decorator";



@Controller({
    path: '/'
})
export default class HomeController implements ControllerInterface {
    path: string;
    router: Router;
    constructor(){ 
        this.router = Router();
        this.initRoutes();
    }
    initRoutes(): void {
        this.router.route(this.path).get((_: Request, res: Response) => {
            return res.json({
                name: 'tolga',
                age: 22,
            });
        })
    }
}