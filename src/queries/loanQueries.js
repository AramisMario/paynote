import {prisma} from "../../prisma/prismaInstance";

async function showActiveLoans(){
   return await prisma.loan.create({
        debtorId:1,
        typeId:1
    });
}

export {showActiveLoans};