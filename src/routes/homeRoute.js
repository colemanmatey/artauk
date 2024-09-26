// modules
const express = require("express");

// router
const router = express.Router();

// route
router.get("/", (req, res) => {
    context = {
        title: "Homepage",
    };
    res.render("index", context);
});

module.exports = router;
