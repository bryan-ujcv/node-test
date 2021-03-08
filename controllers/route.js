const asyncHandler = require("../middleware/asyncHandler");
const errorResponse = require("../utils/errorResponse");

//@desc   Explample route
//@route  GET   /api/route
//@access Public
exports.route = (req, res) => {
  return res.send("route");
};

//@desc   Explample route
//@route  POST    /api/route
//@access Public
exports.routeWithHandlers = asyncHandler((req, res, next) => {
  if (1) {
    return res.send("route");
  } else {
    next(
      new errorResponse("Error manually generated", 500, { msg: "err body" })
    );
  }
});
