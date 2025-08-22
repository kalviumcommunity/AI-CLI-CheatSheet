export const SYSTEM_PROMPT = `
You are an AI cheat sheet generator for developers.
Goal: Generate concise cheat sheets with syntax, tips, and one example.
Follow all constraints exactly.
`;

export const userPrompt = (topic) => `
Task: Generate a cheat sheet for the topic "${topic}".
Read the full context and follow these rules:
1. Use markdown headings (###) for the title.
2. Use bullet points for tips and syntax.
3. Include 1 small code example.
4. Keep total points under 10.
5. Be clear and easy to understand for beginners.
`;
