import ApiResponse from "../utils/apiResponse.js";
import ErrorResponse from "../utils/errorResponse.js";
import errorHandler from "../utils/asyncErrorHandler.js";
import fs from "fs";

const getAllItemsController = errorHandler((req,res)=>{
    const content = fs.readFileSync("src/data/data.json","utf-8");
    const data = JSON.parse(content);
    res
    .status(200)
    .json(new ApiResponse(200,"Fetched All Data",data));
    }
)

const deleteItemController = errorHandler((req,res)=>{
    const id = req.params.id;
    if(!id || !Number.isInteger(parseInt(id))){
        res
        .status(400)
        .json(new ErrorResponse(400,"Please a valid id",null))
    }
    else{
        const content = fs.readFileSync("src/data/data.json","utf-8");
        const data = JSON.parse(content);
        const existingItem = data.find((item)=>item.id === parseInt(id));

        // checking wheather a item with corresponding id exits or not
        if(!existingItem){
            return res
            .status(400)
            .json(new ErrorResponse(400,`Item with id ${id} doesnot exists`,null));
        }

        // filtering the data based on provided id
        const newData = data.filter((item)=>item.id !== parseInt(id));
        // writing the new file content after removing item based on id
        fs.writeFileSync("src/data/data.json",JSON.stringify(newData));
        res
        .status(200)
        .json(new ApiResponse(200,`Item with id ${id} deleted`,newData));
    }
 }
)

const addItemController = errorHandler((req,res)=>{
    const {id,itemName} = req.body;
    if([id,itemName].some((e)=>typeof e === "undefined")){
        res
        .status(400)
        .json(new ErrorResponse(400,"All fields are required",null))
    }
    else{
        const content = fs.readFileSync("src/data/data.json","utf-8");
        const data = JSON.parse(content);

        const duplicate = data.find((item)=>item.id === parseInt(id));
        // checking whether a item of particular id already exists or not
        if(duplicate){
            return res
            .status(400)
            .json(new ErrorResponse(400,`Item with id ${id} already exists`,null));
        }
        const itemTobeAdded = {id,itemName};
        data.push(itemTobeAdded);
        fs.writeFileSync("src/data/data.json",JSON.stringify(data));
        res
        .status(200)
        .json(new ApiResponse(200,"New Item added",data));
    }
  }
);

export {
    getAllItemsController,
    deleteItemController,
    addItemController,
};