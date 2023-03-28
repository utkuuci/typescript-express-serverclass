import express from "express";
import Init from "./core/interfaces/server-interfaces";
import HomeController from "./controllers/HomeController";
import cors from 'cors';

const inter: Init = {
    middlwares: [
        express.json(),
        express.urlencoded({extended: true}),
        cors(),      
    ],
    controller: [
        new HomeController(),
    ]
}

export default inter;