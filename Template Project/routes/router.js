const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/test1",controller.controller);

router.get("/test2",controller.controller2)

router.get("/test3",controller.controller3)

router.get("/test4",controller.controller4)

router.get("/test5",controller.controller5)

router.get("/test6",controller.controller6)


module.exports = router;
