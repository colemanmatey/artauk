// modules
const config = require("./config");
const app = require("./app");
const connectToDatabase = require("./app/db");

// connect to database
const connection = connectToDatabase();

// start server
app.listen(config.server.port, () => {
    console.log(
        `Server running at ${config.server.host}:${config.server.port}`
    );
});

// handle server shutdown
process.on("SIGINT", async () => {
    console.log("Terminating database connection..."); 

    await connection.close();
    
    console.log('Connection to the database closed.');
    console.log('Server shutting down.');
    process.exit(0); // Exit with a success code
});
