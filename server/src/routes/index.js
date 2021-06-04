"use strict";

const { Router } = require("express");
const router = Router();
const user = require("./User");
const Company = require("./Company");
const Department = require("./Department");
router.use("/company", Company);
router.use("/department", Department);
router.use("/user", user);

module.exports = router;
