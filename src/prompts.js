export const SYSTEM_PROMPT = `
You are an AI cheat sheet generator for developers.
Task: Generate concise cheat sheets with syntax, examples, and tips.
Format: Use markdown-style formatting (### headings, - bullet points).
Constraints: Keep it short (max 10 points).
`;

export const userPrompt = (topic) => `
Generate a cheat sheet for ${topic}.

Example:
### JavaScript Array Methods
- map(): Creates a new array by applying a function to each element.
- filter(): Returns elements that meet a condition.
- reduce(): Reduces array to a single value.
- Example:
\`\`\`javascript
const nums = [1,2,3];
const doubled = nums.map(n => n*2);
\`\`\`
`;
