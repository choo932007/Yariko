require('express')().get('/', (_, t) => t.send('haii')).listen(6969, () => console.log('webserver created'));
const { glob } = require("glob"), { promisify } = require("util");
const globPromise = promisify(glob);
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 32511 });
const Discord = require('discord.js');
const { ModalBuilder,TextInputBuilder, TextInputStyle,ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const Topgg = require("@top-gg/sdk");
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNzg4MTM4MTM0MDY2Nzk1NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ3NzM4NjgyfQ.8ofDzLOv4VJJJc4M4Vtz0X60RUFAOt8-8FuwZ0gDbvE")
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'kekw.sqlite' });
const { ButtonStyle } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const keepAlive = require('./server')


const Dex = require("./Dex/Anime.json");
const onestar = require("./Dex/1-star.json"); 
const fourstar = require("./Dex/4-star.json");
const genshinDex = require("./Dex/Genshin.json");
const promoDex = require("./Dex/Promo.json");

client.cfg = new Object({
  prefix: '!',
  token: config.TOKEN || process.env.TOKEN ,
});

process.on("unhandledRejection", _ => console.error(_.stack + '\n' + '='.repeat(20)));


client.appCommands = new Collection();
module.exports = client;

client.login(client.cfg.token)
  .catch((e) => console.log(e));
client.on('ready', async () => {
  const guilds = new Array();

  client.user.setActivity(`/help | ${client.guilds.cache.size} servers | Beta v0.9`, {
  type: "WATCHING",
});
  
  await client.guilds.fetch().then((x) => x.map(
      ({ name, id }) => guilds.push(`${name} (ID: ${id})`)));
  console.log(
    `[Client-${client.user.username}] => Ready at`, 
    guilds
  );

  client.user.setStatus('idle');
  
  const ApplicationCommands = new Array();
  const ApplicationCommandsGlobPromise = await globPromise(`${process.cwd()}/commands/*.js`);
  for (let i = 0, x = ApplicationCommandsGlobPromise.length; i < x; ++i) {
    if (!require(ApplicationCommandsGlobPromise[i]).name) return;
    client.appCommands.set(
      require(ApplicationCommandsGlobPromise[i]).name,
      require(ApplicationCommandsGlobPromise[i])
    );
    if (["MESSAGE", "USER"].includes(require(ApplicationCommandsGlobPromise[i]).type))
      delete require(ApplicationCommandsGlobPromise[i]).description;
    ApplicationCommands.push(require(ApplicationCommandsGlobPromise[i]));
    console.log(`[Client-Application] => /${require(ApplicationCommandsGlobPromise[i]).name} - registered.`)
  };
  await client.application.commands.set(ApplicationCommands)
    .then(() => console.log('[Client-Application] => Registered all application commands.'));
});

client.on('messageCreate', async (message) => {
  const { prefix } = client.cfg;
  if (!(String(message.content).startsWith(String(prefix)))) return;
  const command = String(message.content).slice(String(prefix).length, String(message.content).length);
  if (command == 'ping')
    return message.reply({
      content: `Pong! (API: ${Math.round(client.ws.ping)}ms.)`,
    }).catch(() => null);
});

client.on('interactionCreate', async (interaction) => {
  const args = new Array();
  const currentCmd = client.appCommands.get(interaction.commandName);
  if (!currentCmd) {
    return interaction.reply({
      content: 'ERROR 001: Something\'s wrong with this command.'
    }).catch(() => null);
  }
  currentCmd.run(client, interaction, args);
});


//ping message

client.on('messageCreate', async message => {
    	const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
          .setLabel('Join Support Server')
          .setURL("https://discord.gg/v4mTzw6kH4")
					.setStyle(ButtonStyle.Link)
          .setEmoji(`<a:loading:927925673379635200>`),
        new ButtonBuilder()
        .setLabel('Vote for Anime Mobilization')
    .setURL("https://top.gg/bot/927881381340667955/vote")
				.setStyle(ButtonStyle.Link)
        .setEmoji(`<:topgg:997523632974729286>`)
			);
    const prefix = '/'
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
       const embed5 = new EmbedBuilder()
      .setDescription(`Hi, <@${message.author.id}>!\n<:slash_command:954734952493252628> Anime Mobilization is now using slash command!\nType /help for more info about me!\n\n> <a:loading:1075770212374282240> [Join Support Server for latest game updates!](https://discord.gg/v4mTzw6kH4)`)
          .setColor('#FFFFFF')
        return message.reply({ embeds: [embed5], components: [row]});
    }
})




keepAlive()
