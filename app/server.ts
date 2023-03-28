import express, { Application, NextFunction, Request, Response } from "express"
import Init from "./core/interfaces/server-interfaces";
import ControllerInterface from "./core/interfaces/controller-interface";

export default class Server {
    private app: Application;
    private PORT: number;
    private inter: Init;

    constructor(PORT: number, inter: Init) {
        this.app = express();
        this.PORT = PORT;
        this.inter = inter;

        this.init();
    }

    private setMiddlewares(middlewares: Array<(req: Request, res: Response, next: NextFunction) => void>) { 
        middlewares.forEach(mid => this.app.use(mid));
    }
    private routes(routes: Array<ControllerInterface>) {
        routes.forEach(route => this.app.use('/api/v1', route.router))
    }
    private init() {
      this.setMiddlewares(this.inter.middlwares);
      this.routes(this.inter.controller);  
    }
    public start() {
        this.app.listen(this.PORT, () => console.log(`This server is running on http://localhost:${this.PORT}`));
    }
}