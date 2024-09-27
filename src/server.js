// modules
const config = require("./config");
const app = require("./app");

// start server
app.listen(config.server.port, () => {
    console.log(
        `Server running at ${config.server.host}:${config.server.port}`
    );
});
