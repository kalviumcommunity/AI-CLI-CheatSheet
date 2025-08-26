// config.js

import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
    API_KEY: process.env.GROQ_API_KEY,
    MODEL: "llama-3.1-8b-instant",
    TEMP: 0.5 // default temperature
};
