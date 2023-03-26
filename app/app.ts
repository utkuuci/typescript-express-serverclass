import express, {Express, NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import Server from './server';
import inter from './inter';
import path from 'path'

dotenv.config({path: path.join(__dirname, "..", ".env")});
const PORT = 3000;

const server =  new Server(PORT, inter);

server.start();