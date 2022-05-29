import {prisma} from "../../prisma/prismaInstance";
import {activeLoans} from "../queries/loanQueries";

export async function createPayment(req,res){
    
    const {loanId,payType,paymentDate,amount} = req.body;
    const payment = await prisma.payment.create({
        data:{
            loanId:loanId,
            payType:payType,
            paymentDate:paymentDate,
            amount:Number.parseFloat(amount)
        }
    });

    const loans = await activeLoans(req,res);
    return loans;
}

export async function historical(req,res){
    const payments = await prisma.payment.findMany({
        orderBy:{
            paymentDate: 'desc'
        },
        include:{
            loan:{
                include:{
                    debtor:true
                }
            }
        } 
    });

    return payments;
}