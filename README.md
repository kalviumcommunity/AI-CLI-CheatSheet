# 📘 AI-Cheat – AI Powered Developer Cheat Sheets in Terminal

A **Command Line Interface (CLI)** tool that generates **concise cheat sheets** (React, Python, JavaScript, etc.) using **Groq LLM API**.
No more Googling → just run a command and get an instant cheat sheet inside your terminal. 🚀

---

## ✨ Features

* 🖥️ Run in terminal with `ai-cheat <topic>` (e.g., `ai-cheat react hooks`)
* ⚡ Uses **Groq LLM API** for instant AI responses
* 🎯 Supports **Zero-shot, One-shot, Multi-shot, Dynamic prompting**
* 🔑 Configurable via `.env` (API key, model, temperature)
* 📊 Logs **token usage** after each response
* 🎨 Adjustable **creativity (temperature)** via CLI flag
* 📚 Built to demonstrate **8 AI Prompting Concepts**

---

## 📂 Project Structure

```
|-- .env                 # Store your Groq API key here
|-- package.json          # Project dependencies & scripts
|-- package-lock.json
|-- bin
|   |-- ai-cheat.js       # CLI entry file (runs the tool)
|-- src
|   |-- config.js         # Loads environment variables, API config
|   |-- generator.js      # Core cheat sheet generator (API call)
|   |-- prompts.js        # Stores system + example prompts
|   |-- utils.js          # Helpers (token count, formatting, args)
```

---

## 🔑 Setup

1. **Clone repo**

   ```bash
   git clone https://github.com/kalviumcommunity/AI-CLI-CheatSheet
   cd AI-CLI-CheatSheet
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add `.env` file**

   ```
   GROQ_API_KEY=your_api_key_here
   MODEL=llama-3.1-70b-versatile
   ```

4. **Link CLI globally**

   ```bash
   npm link
   ```

5. **Run it**

   ```bash
   ai-cheat react hooks
   ```

---

## 🧪 Usage Examples

### 1. Generate React Hooks cheat sheet

```bash
ai-cheat react hooks
```

### 2. Python list comprehensions

```bash
ai-cheat python list comprehensions
```

### 3. With creativity (temperature)

```bash
ai-cheat javascript promises --temp 0.8
```

### 4. View tokens used

```bash
ai-cheat express middleware
# Output includes "Tokens used: 234"
```

---

## 🧠 8 AI Prompting Concepts Covered

This project demonstrates **8 important prompting concepts** for GenAI:

1. **Project README + Explanation** → Documentation & video demo
2. **System + User Prompt (RTFC)** → Role, Task, Format, Constraints framework
3. **Zero-Shot Prompting** → No examples, just direct query
4. **One-Shot Prompting** → With one sample cheat sheet
5. **Multi-Shot Prompting** → With 2–3 sample cheat sheets
6. **Dynamic Prompting** → User topic auto-inserted in prompt
7. **Tokens & Tokenization** → Log tokens used per query
8. **Temperature** → Control creativity of responses

---

## 📜 License

MIT License © 2025 