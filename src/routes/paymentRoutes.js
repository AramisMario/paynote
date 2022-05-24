import { Router } from "express";
import {paymentController} from "../controllers/PaymentController";
class PaymentRoutes{

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.post("/create",paymentController.createPayment);
    }

}

const paymentRoutes = new PaymentRoutes();
export default paymentRoutes.router;