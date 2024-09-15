import { Router } from "express";
import { addItemController, deleteItemController, getAllItemsController } from "../controllers/itemController.js";


const itemRouter = Router();


itemRouter.route("/getAllItems").get(getAllItemsController);
itemRouter.route("/deleteItem/:id").delete(deleteItemController);
itemRouter.route("/addItem").post(addItemController);


export default itemRouter;