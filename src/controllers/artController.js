// modules
const { artService, profileService } = require("../services");

// [GET] Add new art
const addNew = async (req, res) => {
    let user = null;

    if (req.session.username) {
        user = req.session.username;
    }

    let context = {
        title: "Add New Art",
        user: user,
    };
    res.render("addart", context);
};

// [POST] Add new art
const addNewPost = async (req, res) => {
    
};


// exports
module.exports = {
    addNew,
    addNewPost,
};