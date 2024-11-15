// modules
// import { artService, profileService } from "../services/index.js";

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

// exports
export default {
    addNew,
}