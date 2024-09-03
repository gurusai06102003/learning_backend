class apiError extends Error{
    constructor(
        statusCode,
        message='somehting went wrong',
        error = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.error = error;
        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
//like this we can standardise the errors and simply we can use this util to handle errors 
export {apiError};