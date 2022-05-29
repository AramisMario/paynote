import {createPayment,historical} from "../queries/paymentQueries";
class PaymentController{

    async createPayment(req,res){
        try{

            const loans = await createPayment(req,res);
            res.json(loans);

        }catch(error){
            res.json({error:error.message});
        }
    }

    async historical(req,res){
        try{
            const payments = await historical(req,res);
            res.json(payments);
        }catch(error){
            res.json({error:error.message});
        }
    }
}

const paymentController = new PaymentController();
export {paymentController};