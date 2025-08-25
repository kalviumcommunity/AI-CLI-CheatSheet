#!/usr/bin/env node
import { generateCheatSheet } from "../src/generator.js";
import { printCheatSheet } from "../src/utils.js";

const args = process.argv.slice(2);
const topic = args.join(" ");
const tempIndex = args.indexOf("--temp");
let temperature = null;

if (tempIndex !== -1 && args[tempIndex + 1]) {
    temperature = parseFloat(args[tempIndex + 1]);
}

if (!topic) {
    console.log("❌ Usage: ai-cheat <topic> [--temp <value>]");
    process.exit(1);
}

(async () => {
    try {
        const { output, tokens } = await generateCheatSheet(topic, temperature);
        printCheatSheet(topic, output, tokens);
    } catch (error) {
        console.error("⚠️ Error:", error.message);
    }
})();
