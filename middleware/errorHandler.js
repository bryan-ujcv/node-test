const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //Log err
  console.log(err);

  //Handle errors
  if ((error.message = "Error manually generated")) {
    error = new ErrorResponse("error generated inside controller", 500, {
      msg: "error manually generated inside controller",
    });
  }

  return res.status(error.statusCode || 500).json({
    message: error.message,
    error: error.body,
  });
};

module.exports = errorHandler;
