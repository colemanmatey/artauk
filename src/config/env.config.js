// modules
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

// root directory
const BASE_DIR = path.resolve(__dirname, "..", "..");

// function to load env vars
const loadEnv = (node_env, config) => {
    // create file path
    let envPath;    
    if (node_env.trim() == "production") {
        envPath = path.join(BASE_DIR, ".env.production");
    } else if (node_env.trim() == "staging") {
        envPath = path.join(BASE_DIR, ".env.staging");
    } else {
        envPath = path.join(BASE_DIR, ".env");
    }

    // Check if the env file exists before loading
    if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath });
        console.log(`Loading environment variables for the ${config} (${node_env.trim()})`);
    } else {
        console.warn(`Warning: ${path.basename(envPath)} file not found.`)
        console.log('Loading environment variables (development)');
        dotenv.config();
    }
};

// exports
module.exports = loadEnv;
