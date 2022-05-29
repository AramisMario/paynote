import {prisma} from "../../prisma/prismaInstance";

export async function allDebtors(req,res){

    const debtors = await prisma.debtor.findMany();
    return debtors;
    
}