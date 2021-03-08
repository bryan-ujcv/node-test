const express = require("express");
const router = express.Router();

const { route, routeWithHandlers } = require("../controllers/route");

router.get("/", route);
router.post("/", routeWithHandlers);

module.exports = router;
