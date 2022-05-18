import {showActiveLoans} from "../queries/loanQueries";
import {Request, Response} from "express";
import {prisma} from "../../prisma/prismaInstance";
class LoanController{

    async activeLoans(req,res){
        try{
            const loan = await prisma.loan.findMany({
                where:{
                    paymentCompleteDate: null
                }
            });
            res.json(loan);
        }catch(error){
            res.json({"error":error.message});
        }
    }
}

const loanController = new LoanController();
export {loanController};