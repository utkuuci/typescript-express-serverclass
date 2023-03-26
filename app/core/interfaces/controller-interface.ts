import { Router } from "express"

export default interface ControllerInterface {
    initRoutes(): void
    path: string
    router: Router
}