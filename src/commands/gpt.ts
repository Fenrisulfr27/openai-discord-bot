import { Command } from "@sapphire/framework";
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
      input: userInput,
      instructions: "Vasta lühidalt",
    });

    return await interaction.editReply(response.output_text);
  }
}
