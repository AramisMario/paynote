import {Request, Response} from "express";
import {activeLoans,allLoans} from "../queries/loanQueries";

class LoanController{

    async activeLoans(req,res){
        try{
            const loans = await activeLoans(req,res);
            res.json(loans);
        }catch(error){
            res.json({"error":error.message});
        }
    }

    async allLoans(req,res){
        try{
            const loans = await allLoans(req,res);
            res.json(loans);
        }catch(error){
            res.json({"error":error.message});
        }
    }
}

const loanController = new LoanController();
export {loanController};