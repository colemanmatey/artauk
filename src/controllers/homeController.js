// modules
import { userService, profileService, artService } from "../services/index.js";

// [GET] Homepage
const homepage = async (req, res) => {
	let user = null;

	if (req.session.username) {
		user = req.session.username;
	}

	let context = {
		title: "Homepage",
		user: user,
	};
	res.render("index", context);
};

// [GET] Dashboard
const dashboard = async (req, res) => {
	try {
	  // Fetch user by ID
	  const user = await userService.getUserById(req.session.userID);
	  const profile = await profileService.getProfileByUsername(user.Username);
  
	  // Fetch the user's artwork in parallel to optimize performance
	  const [pendingArtwork, approvedArtwork, rejectedArtwork] = await Promise.all([
		artService.getUserArtworkByApprovalStatus(profile.ProfileID, null),
		artService.getUserArtworkByApprovalStatus(profile.ProfileID, true),
		artService.getUserArtworkByApprovalStatus(profile.ProfileID, false),
	  ]);
  
	  // Prepare the context for rendering the dashboard
	  const context = {
		title: "Dashboard",
		user: req.session.username,
		profile: profile.dataValues,
		pendingArtwork: pendingArtwork || [],
		approvedArtwork: approvedArtwork || [],
		rejectedArtwork: rejectedArtwork || [],
	  };
  
	  // Render the dashboard page
	  res.render("dashboard", context);
	} catch (err) {
	  // Log error and render the login page with error message
	  console.error("Error fetching dashboard data:", err);
	  const context = {
		title: "Login", // The title should probably stay "Login" for login error handling
		user: null,
		error: err.message,
		pendingArtwork: null,
		approvedArtwork: null,
		rejectedArtwork: null,
	  };
	  res.render("auth/login", context);
	}
  };


// [GET] Showcase
const showcase = async (req, res) => {
	let user = null;

	const allArtwork = await artService.getArtworkByStatus(true);

	if (req.session.username) {
		user = req.session.username;	}

	let context = {
		title: "Showcase",
		user: user,
		artwork: allArtwork,
	};
	res.render("showcase", context);
};
  

// exports
export default {
	homepage,
	dashboard,
	showcase,
};
