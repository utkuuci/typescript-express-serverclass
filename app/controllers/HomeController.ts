import { Request, Response, Router } from "express";
import ControllerInterface from "../core/interfaces/controller-interface";

export default class HomeController implements ControllerInterface {
    path: string;
    router: Router;
    constructor(path: string){ 
        this.path = path;
        this.router = Router();
        this.initRoutes();
    }
    initRoutes(): void {
        this.router.route(this.path).get((req: Request, res: Response) => {
            return res.json({
                name: 'tolga',
                age: 22,
            });
        })
    }
}