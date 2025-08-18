# 📘 AI-Cheat — AI-Powered Cheat Sheets in Your Terminal

🚀 **AI-Cheat** is a command-line tool that instantly generates **developer cheat sheets** in your terminal using AI. No need to Google docs or search StackOverflow — just run one command and get what you need!

---

## ✨ Features

* ⚡ Instant cheat sheets for any topic (React, Python, Linux, etc.)
* 🎨 Beautiful output with syntax highlighting (powered by `rich`)
* 📂 Offline history caching (previous cheat sheets stored locally)
* 🔄 Works with multiple AI backends (OpenAI, Groq, Ollama, etc.)
* 🛠️ Simple CLI tool — run anywhere in your terminal

---

## 🛠️ Tech Stack

* **Language:** Python 3
* **Libraries:**

  * `argparse` → CLI parsing
  * `requests` → API calls
  * `rich` → terminal formatting
  * `openai` (or Groq) → AI backend
* **Packaging:** `pip` (install globally for CLI use)

---

## 📦 Installation

1. Clone this repo:

   ```bash
   git clone https://github.com/techabbayi/ai-cheat.git
   cd ai-cheat
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Add your **API Key** (Groq):

   ```bash
   export API_KEY="your_api_key_here"
   ```

4. Install as CLI:

   ```bash
   pip install .
   ```

Now you can run `ai-cheat` globally in your terminal 🚀

---

## 🚀 Usage

### Basic command:

```bash
ai-cheat react hooks
```

---

## 🔄 Workflow

1. User runs `ai-cheat <topic> <subtopic>`.
2. CLI parses input with `argparse`.
3. Sends prompt → AI backend.
4. AI generates a **short cheat sheet** (syntax, examples, tips).
5. Output is formatted beautifully with `rich`.
6. Saved in local history (`~/.ai-cheat-history.json`) for offline use.

---

## 🎯 Who Can Use This?

* 👨‍💻 Developers (quick syntax recall)
* 🎓 Students (learning new languages)
* ⚡ Hackathon coders (fast lookups without docs)
* 🖥️ Sysadmins (Linux commands cheat sheets)

---


## 📜 License

MIT License. Free to use, modify, and share.