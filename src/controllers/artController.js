// modules
import { userService, profileService, artService } from "../services/index.js";

// [GET] Add new art
const addNew = async (req, res) => {
    let user = null;
    let profile = null;

    if (req.session.username) {
        user = req.session.username;
        profile = await profileService.getProfileByUsername(user);
    }

    let context = {
        title: "Add New Art",
        user: user,
        profile: profile
    };
    res.render("addart", context);
};


// [POST] Add new art
const addArt = async (req, res,) => {
	const id = req.session.userID;

	let user = await userService.getUserById(id);
    let profile = await profileService.getProfileByUsername(user.Username);
    
    await artService.createArt(profile.ProfileID, req.body, req.file);

	res.redirect("/dashboard");
};

// exports
export default {
    addNew,
    addArt,
}