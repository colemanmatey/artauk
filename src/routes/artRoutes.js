// modules
const express = require("express");
const { artController } = require("../controllers");

// router
const router = express.Router();

// routes
router.route("/add/new")
    .get(artController.addNew)
    .post(artController.addNewPost);

// exports
module.exports = router;
