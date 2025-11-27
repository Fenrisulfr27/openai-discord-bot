# Discord Server Bot with OpenAI Integration

Discord bot integrated with OpenAI, allowing users to interact with advanced AI features directly within their Discord server. The bot uses the OpenAI Responses API (model gpt-4.1) and includes short conversational memory by incorporating replied messages into context. It is built with Sapphire.js and discord.js. The project also includes configuration for Fly.io and GitHub Workflows, which are used for hosting and automating the deployment of the bot.

---

## Installation & Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create an `.env` file

see [env example](.env.example).

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

## Author

[Egert Tõnström](https://www.linkedin.com/in/egert-t%C3%B5nstr%C3%B6m-1004a2389/)
