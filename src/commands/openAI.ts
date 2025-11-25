import { Command } from "@sapphire/framework";
import { EmbedBuilder } from "discord.js";
import { openaiClient } from "../index.js";

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, { ...options });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName("gpt")
        .setDescription("Küsi gpt'lt")
        .addStringOption((option) =>
          option
            .setName("tekst")
            .setRequired(true)
            .setDescription("sisesta tekst")
        )
    );
  }

  public override async chatInputRun(
    interaction: Command.ChatInputCommandInteraction
  ) {
    const userInput = interaction.options.getString("tekst", true);

    await interaction.deferReply();
    const response = await openaiClient.responses.create({
      model: "gpt-5-nano",
      input: `${userInput}`,
    });
    const embed = new EmbedBuilder()
      .setDescription(`${response.output_text}`)
      .setColor("#317991");

    return await interaction.editReply({ embeds: [embed] });
  }
}
