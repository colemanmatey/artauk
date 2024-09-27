// modules

// [GET] Homepage
const renderHomePage = (req, res) => {
    context = {
        title: "Homepage",
    };
    res.render("index", context);
};

// exports
module.exports = {
    renderHomePage,
};
