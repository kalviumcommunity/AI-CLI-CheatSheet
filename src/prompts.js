export const SYSTEM_PROMPT = `
You are an AI cheat sheet generator for developers.
Goal: Generate concise cheat sheets with syntax, tips, and one example.
Follow all constraints exactly.
Use multi-shot prompting: always show 2–3 sample cheat sheets before generating the requested one.
`;

export const userPrompt = (topic) => `
Task: Generate a cheat sheet for the topic "${topic}".
Read the full context and follow these rules:
1. Use markdown headings (###) for the title.
2. Use bullet points for tips and syntax.
3. Include 1 small code example.
4. Keep total points under 10.
5. Be clear and easy to understand for beginners.
6. Always show at least 2 sample cheat sheets first, then generate for "${topic}".

### Example Cheat Sheet 1: JS Array Methods
- **map()** – transforms each element.
- **filter()** – keeps elements that match condition.
- **reduce()** – reduces array to single value.
\`\`\`js
const nums = [1,2,3];
const doubled = nums.map(n => n*2);
\`\`\`

### Example Cheat Sheet 2: Python List Comprehension
- Short syntax for creating lists.
- Can apply conditionals.
- More readable than loops.
\`\`\`python
nums = [1,2,3]
squares = [n*n for n in nums if n > 1]
\`\`\`

Now generate cheat sheet for: "${topic}" in the same format.
`;
