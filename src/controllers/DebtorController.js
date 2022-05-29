import {allDebtors} from "../queries/debtorQueries";
class DebtorController{

    async allDebtors(req,res){
        try{
            const debtors = await allDebtors(req,res);
            res.json(debtors);
        }catch(error){
            res.json({"error":error.message});
        }

    }

}

const debtorController = new DebtorController();
export {debtorController};