const Discord = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'kekw.sqlite' });
const wait = require('node:timers/promises').setTimeout;
const Topgg = require("@top-gg/sdk");
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNzg4MTM4MTM0MDY2Nzk1NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ3NzM4NjgyfQ.8ofDzLOv4VJJJc4M4Vtz0X60RUFAOt8-8FuwZ0gDbvE")
const { ModalBuilder,TextInputBuilder, TextInputStyle,ActionRowBuilder,ButtonBuilder, SelectMenuBuilder } = require('discord.js');
const Dex = require(".../../../Dex/Anime.json");
const onestar = require(".../../../Dex/1-star.json");
const fourstar = require(".../../../Dex/4-star.json");
const genshinDex = require(".../../../Dex/Genshin.json");
const promoDex = require(".../../../Dex/Promo.json");
const { EmbedBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const { CommandInteraction, ButtonInteraction, Interaction } = require('discord.js');


module.exports = new Object({
  name: 'buy',
  description: '🛍 Buy items from shop!',
  options: [
  {
  name: 'items-id',
  description: 'Select a items id to buy!',
  required: true,
  type: 10
    },
    {
      name: 'amount',
      description: 'Amount of items that you want to buy',
      required: true,
      type: 10
    }
],
  async run (client, interaction) {

  const user = interaction.user;
    const items = interaction.options.getNumber('items-id');
    const amount = interaction.options.getNumber('amount'); 
    let animecoin = await db.get(`animecoin_${user.id}`)
    let wait4 = await db.get(`wait4_${interaction.user.id}`)

      await interaction.deferReply();
      await wait(500);

    const embed = new EmbedBuilder()
  .setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/v4mTzw6kH4)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)
  .setColor(`#2c2f33`)
  let start = await db.get(`start_${user.id}`)
  if (start === null) return interaction.editReply({ embeds: [embed] })

  let timeout = 8000;
  if (wait4 !== null && timeout - (Date.now() - wait4) > 0) {
  let time = (timeout - (Date.now() - wait4));
  setTimeout(function() {
  interaction.editReply(`<a:time:933627010851430451> **| ${interaction.user.username}**, pls wait **${time / 1000}s** to use \`/buy\` command again!`);
  }, 3000);
  } else {

      if (items === 1) {
        if (animecoin < 250 * amount) {
          return interaction.editReply(`${user}, You need <:animecoin:929593554005794836> \`${amount * 250}\` to buy **x${amount} <a:tickett:956738278579654708> Adventure Pass!**\n> **Current balance:** <:animecoin:929593554005794836> \`${animecoin}\``)
        }
        db.add(`adventurepass_${user.id}`, amount)
        db.sub(`animecoin_${user.id}`, 250 * amount)
        db.set(`wait4_${interaction.user.id}`, Date.now());
        return interaction.editReply(`You spend <:animecoin:929593554005794836> \`${amount * 250}\` and **bought x${amount} <a:tickett:956738278579654708> Adventure Pass!**\n> **Current balance:** <:animecoin:929593554005794836> \`${animecoin - 250 * amount}\``)
      }
      if (items === 2) {
        if (animecoin < 10000 * amount) {
          return interaction.editReply(`${user}, You need <:animecoin:929593554005794836> \`${amount * 10000}\` to buy **x${amount} <:potion:956750903862525952> Potion!**\n> **Current balance:** <:animecoin:929593554005794836> \`${animecoin}\``)
        }
        db.set(`wait4_${interaction.user.id}`, Date.now());
        db.add(`potion_${user.id}`, amount)
        db.sub(`animecoin_${user.id}`, 10000 * amount)

        return interaction.editReply(`You spend <:animecoin:929593554005794836> \`${amount * 10000}\` and **bought x${amount} <:potion:956750903862525952> Potion!**\n> **Current balance:** <:animecoin:929593554005794836> \`${animecoin - 10000 * amount}\``)
      }
      if (items === 3) {
        if (animecoin < 100000 * amount) {
          return interaction.editReply(`${user}, You need <:animecoin:929593554005794836> \`${amount * 100000}\` to buy **x${amount} <:Intertwined:956753189263274035> Intertwined Fate!**\n> **Current balance:** <:animecoin:929593554005794836> \`${animecoin}\``)
        }
        db.set(`wait4_${interaction.user.id}`, Date.now());
        db.add(`intertwined_${user.id}`, amount)
        db.sub(`animecoin_${user.id}`, 100000 * amount)

        return interaction.editReply(`You spend <:animecoin:929593554005794836> \`${amount * 100000}\` and **bought x${amount} <:Intertwined:956753189263274035> Intertwined Fate!**\n> **Current balance:** <:animecoin:929593554005794836> \`${animecoin - 100000 * amount}\``)
      }
          if (items === 4) {
        if (animecoin < 100000 * amount) {
          return interaction.editReply(`${user}, You need <:animecoin:929593554005794836> \`${amount * 100000}\` to buy **x${amount} <:Acquaint:956753365579223090> Acquaint Fate!**\n> **Current balance:** <:animecoin:929593554005794836> \`${animecoin - 100000}\``)
        }
        db.set(`wait4_${interaction.user.id}`, Date.now());
        db.add(`acquaint_${user.id}`, amount)
        db.sub(`animecoin_${user.id}`, 100000 * amount)

        return interaction.editReply(`You spend <:animecoin:929593554005794836> \`${amount * 100000}\` and **bought x${amount} <:Acquaint:956753365579223090> Acquaint Fate!**\n> **Current balance:** <:animecoin:929593554005794836> \`${animecoin - 100000 * amount}\``)
      }
  }
  }
  })