import {prisma} from "../../prisma/prismaInstance";

export async function allTypes(req,res){

    const types = await prisma.type.findMany();

    return types;
}