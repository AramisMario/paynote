import {prisma} from "../../prisma/prismaInstance";

export async function createLoan(req,res){
    const loan = prisma.loan.create({
        data:{
            debtorId:Number.parseInt(req.body.debtorId),
            typeId:Number.parseInt(req.body.typeId),
            interest_percentage:req.body.percent,
            amount:Number.parseFloat(req.body.amount),
            description:req.body.description   
        }
    });
    return loan;
}

export async function activeLoans(req,res){
    const loans = await prisma.loan.findMany({
        where:{
            paymentCompleteDate: null
        },
        include:{
            debtor:true,
            payments:{
                orderBy:{
                        paymentDate:'desc'
                }
            }
        }
    });
    loans.forEach(element => {
        element.amount = Number.parseFloat(element.amount);
        element.current_debt = Number.parseFloat(element.amount - element ?. payments.reduce((acum,current) => acum + Number.parseFloat(current.amount) ,0));
        element.hasPayments = (element.amount !== element.current_debt) ? true : false;
        element.interest_amount = (element.amount*Number.parseFloat(element.interest_percentage))/100;
    });
    return loans;
}

export async function allLoans(req,res){
    const loans = await prisma.loan.findMany({
        include:{
            debtor:true,
            payments:{
                orderBy:{
                        paymentDate:'desc'
                }
            }
        }
    });

    loans.forEach(element => {
        element.amount = Number.parseFloat(element.amount);
        element.current_debt = Number.parseFloat(element.amount - element ?. payments.reduce((acum,current) => acum + Number.parseFloat(current.amount) ,0));
        element.hasPayments = (element.amount !== element.current_debt) ? true : false;
    });
    return loans;

}
