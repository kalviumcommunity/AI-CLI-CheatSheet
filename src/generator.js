import Groq from "groq-sdk";
import { CONFIG } from "./config.js";
import { SYSTEM_PROMPT, userPrompt } from "./prompts.js";

const client = new Groq({ apiKey: CONFIG.API_KEY });

export async function generateCheatSheet(topic, temperature) {
    const completion = await client.chat.completions.create({
        model: CONFIG.MODEL,
        temperature: temperature ?? CONFIG.TEMP,
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt(topic) }
        ]
    });

    const output = completion.choices[0].message.content;
    const tokens = completion.usage.total_tokens;
    return { output, tokens };
}
