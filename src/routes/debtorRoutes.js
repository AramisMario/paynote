import { Router } from "express";
import { debtorController } from "../controllers/DebtorController";

class DebtorRoutes{
    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get("/alldebtors",debtorController.allDebtors);
    }
}

const debtorRoutes = new DebtorRoutes();
export default debtorRoutes.router;