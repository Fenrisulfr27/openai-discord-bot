import { Listener } from "@sapphire/framework";
import { NewsChannel, TextChannel, type Message } from "discord.js";
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

    if (message.channel.isTextBased()) {
      await (message.channel as any).sendTyping();
    }

    let userInput = message.content.replace(`<@${bot!.id}>`, "").trim();

    if (isReply) {
      try {
        const repliedMessage = await message.channel.messages.fetch(
          message.reference!.messageId!
        );
        const repliedText = repliedMessage.content;

        userInput = `${repliedMessage.member?.displayName}: ${repliedText} ${message.author.displayName}: ${userInput}`;
      } catch (err) {
        console.error("Reply fetch error:", err);
      }
      console.log(userInput);
    }
    const response = await openaiClient.responses.create({
      model: "gpt-5-nano",
      input: userInput,
      instructions: "Vasta lühidalt, sa oled Bot nimega Süsi",
    });

    await message.reply(response.output_text || "Viga AI vastuses.");
  }
}
