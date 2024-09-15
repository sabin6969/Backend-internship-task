import ErrorResponse from "./errorResponse.js";

const errorHandler = (func) => (req,res,next)=>{
    try {
        func(req,res,next);
    } catch (error) {
        res.
        status(500)
        .json(new ErrorResponse(500,error.message,error.stack.split("\n")[0]));
    }
}

export default errorHandler;