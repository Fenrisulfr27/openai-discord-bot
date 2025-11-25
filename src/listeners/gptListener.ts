import { Listener } from "@sapphire/framework";
import type { Message } from "discord.js";
import { openaiClient } from "../index.js";
export class MessageMentionListener extends Listener {
  public constructor(
    context: Listener.LoaderContext,
    options: Listener.Options
  ) {
    super(context, { ...options, event: "messageCreate" });
  }

  public async run(message: Message) {
    const bot = message.client.user;
    if (message.author.bot) return;
    const mentionedBot = message.mentions.has(bot!);
    const isReply = !!message.reference?.messageId;

    if (!mentionedBot) return;

    let userInput = message.content.replace(`<@${bot!.id}>`, "").trim();

    if (isReply) {
      try {
        const repliedMessage = await message.channel.messages.fetch(
          message.reference!.messageId!
        );
        const repliedText = repliedMessage.content;

        userInput = `${repliedText} ${userInput}`;
      } catch (err) {
        console.error("Reply fetch error:", err);
      }
      console.log(userInput);
    }
    const response = await openaiClient.responses.create({
      model: "gpt-5-nano",
      input: userInput,
      instructions: "Vasta lühidalt",
    });

    await message.reply(response.output_text || "Viga AI vastuses.");
  }
}
