# Discord Server Bot with OpenAI Integration

Discord bot integrated with OpenAI, allowing users to interact with advanced AI features directly within their Discord server. The bot uses the OpenAI Responses API (model gpt-4.1) and includes short conversational memory by incorporating replied messages into context. It is built with Sapphire.js and discord.js. The project also includes configuration for Fly.io and GitHub Workflows, which are used for hosting and automating the deployment of the bot.

---

## ✨ Features

- Responds **only when the bot is mentioned**.
- Includes reply context:
  - If the replied message is from the bot → marked as `assistant`
  - If it's from a user → marked as `user`
- Sends a **typing indicator** while generating a response.
- Uses the OpenAI Responses API with:
  - Model: `gpt-4.1`
  - Instructions/persona: _“You are an art-server bot named Süsi, answer briefly.”_
- Replies directly to the user in Discord.

---

## 🚀 Installation & Setup

### 1. Install dependencies

```bash
npm install
```

Required packages include:

- `@sapphire/framework`
- `discord.js`
- `openai`
- `typescript` (if using TS)

### 2. Create an `.env` file

### 3. Run the bot

For production:

```bash
npm run build
npm start
```

For development:

```bash
npm run dev
```

---

## 📌 Notes

- The Responses API uses **input blocks**, so each message (assistant/user) is added as a separate block.
- The bot’s personality is defined through the `instructions` field.
- The typing indicator is refreshed every 8 seconds until a response is received.

---

## 🧩 Customization

You can easily modify:

### Bot personality

Change the instructions:

> “You are an art-server bot named Süsi, answer briefly.”

### Model

Swap out the model used in the API request:

> `gpt-4.1`

---

## Author

[Egert Tõnström](https://www.linkedin.com/in/egert-t%C3%B5nstr%C3%B6m-1004a2389/)

---
