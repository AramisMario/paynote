import Router from "express";
import {typesController} from "../controllers/typesController";
class TypesRoutes{

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/all',typesController.allTypes);
    }
}

const typeRoutes = new TypesRoutes();
export default typeRoutes.router;