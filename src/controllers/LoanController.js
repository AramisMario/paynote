import {showActiveLoans} from "../queries/loanQueries";
import {Request, Response} from "express";
import {prisma} from "../../prisma/prismaInstance";
class LoanController{

    async activeLoans(req,res){
        try{
            const loan = await prisma.loan.findMany({
                where:{
                    paymentCompleteDate: null
                },
                include:{
                    debtor:true,
                    payments:true
                }
            });
            loan.forEach(element => {
                element.amount = Number.parseFloat(element.amount);
                element.current_debt = Number.parseFloat(element.amount - element ?. payments.reduce((acum,current) => acum + current.amount ,0));

                element.hasPayments = (element.amount !== element.current_debt) ? true : false;
                
            });
            res.json(loan);
        }catch(error){
            res.json({"error":error.message});
        }
    }
}

const loanController = new LoanController();
export {loanController};