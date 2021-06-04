const express = require("express");
const router = express.Router();
const controller = require("../controllers/User");

router.post("/find", controller.find);
router.post("/find/:id", controller.findOne);
router.post("/delete/:id", controller.delete);
router.post("/update/:id", controller.update);
router.post("/create", controller.create);
router.post("/count", controller.count);

module.exports = router;
