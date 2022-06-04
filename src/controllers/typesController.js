import { allTypes } from "../queries/typesQueries";

class TypesController{

    async allTypes(req,res){
        try{
            const types = await allTypes(req,res);
            res.json(types);
        }catch(error){
            res.json({error:error.message});
        }
    }

}

const typesController = new TypesController();
export {typesController};