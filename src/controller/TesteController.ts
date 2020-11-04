import {Request, Response} from "express";
import { Controller, Get } from '@overnightjs/core';



@Controller('login')
export default class TestController{

    @Get()
    async login(request: Request , response: Response) {}
}