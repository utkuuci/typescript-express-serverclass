import { NextFunction, Request, Response, Router } from "express";
import ControllerInterface from "./controller-interface";
export default interface Init {
    middlwares: Array<(req: Request, res: Response, next: NextFunction) => void>
    controller: Array<ControllerInterface>
}