import Groq from "groq-sdk";
import { CONFIG } from "./config.js";
import { SYSTEM_PROMPT, userPrompt } from "./prompts.js";

const client = new Groq({ apiKey: CONFIG.API_KEY });

export async function generateCheatSheet(topic, temperature) {
    const tempToUse = temperature ?? CONFIG.TEMP;

    const completion = await client.chat.completions.create({
        model: CONFIG.MODEL,
        temperature: tempToUse,
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
                role: "user",
                content: userPrompt(topic) + `
Important Notes:
- Read the full context carefully before answering.
- Always provide markdown-style cheat sheet.
- Include syntax, tips, and one example.
- Limit to 8-10 points maximum.
- Ensure it is beginner-friendly and well structured.
`
            }
        ]
    });

    const output = completion.choices[0].message.content;

    const usage = completion.usage || {};
    const tokens = {
        prompt_tokens: usage.prompt_tokens ?? null,
        completion_tokens: usage.completion_tokens ?? null,
        total_tokens: usage.total_tokens ?? null,
    };

    return { output, tokens, raw: completion };
}
