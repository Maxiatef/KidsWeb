const express = require("express");
const router = express.Router();
const { CreateKid } = require("../Controllers/KidControllers");

router.route("/createKid").post(CreateKid);

module.exports = router;