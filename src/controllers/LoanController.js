import {activeLoans,allLoans,createLoan} from "../queries/loanQueries";

class LoanController{

    async createLoan(req,res){
        try{
            await createLoan(req,res);
            const loans = await activeLoans();
            res.json(loans);
        }catch(error){
            res.json({"error":error.message});
        }
    }

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