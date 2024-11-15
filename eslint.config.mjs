import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	// For ES6 Modules
	{
		files: ["**/*.js"], // Apply to JavaScript files
		languageOptions: {
			sourceType: "module", // Enable ES6 module syntax
			globals: globals.node, // Include Node.js globals
		},
	},
	pluginJs.configs.recommended, // Base recommended ESLint settings
	eslintConfigPrettier, // Prettier integration to avoid conflicts with formatting
];
