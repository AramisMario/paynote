import {Router} from "express";
import {loanController} from "../controllers/LoanController";

import { PrismaClient } from '@prisma/client'

let prisma = new PrismaClient();

class LoansRoutes{
   
    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/showactive',loanController.activeLoans);
        this.router.get('/allloans',loanController.allLoans)
    }
}

const routes = new LoansRoutes();
export default routes.router;