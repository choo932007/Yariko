const Discord = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'kekw.sqlite' });
const wait = require('node:timers/promises').setTimeout;
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const Topgg = require("@top-gg/sdk");
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNzg4MTM4MTM0MDY2Nzk1NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ3NzM4NjgyfQ.8ofDzLOv4VJJJc4M4Vtz0X60RUFAOt8-8FuwZ0gDbvE")

module.exports = new Object({
  name: 'shop',
  description: '🛍 View the shop!',
  async run (client, interaction) {

    const user = interaction.user;
    let animecoin = await db.get(`animecoin_${interaction.user.id}`)
    let votecoin = await 
    db.get(`votecoin_${interaction.user.id}`)
    let wait5 = await db.get(`wait5_${interaction.user.id}`)

    await interaction.deferReply();
        await wait(500);

    const embed = new EmbedBuilder()
    .setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/v4mTzw6kH4)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)
    .setColor(`#2c2f33`)
    let start = await db.get(`start_${user.id}`)
    if (start === null) return interaction.editReply({ embeds: [embed] })

    let timeout = 8000;
    if (wait5 !== null && timeout - (Date.now() - wait5) > 0) {
    let time = (timeout - (Date.now() - wait5));
    setTimeout(function() {
    interaction.editReply(`<a:time:933627010851430451> **| ${interaction.user.username}**, pls wait **${time / 1000}s** to use \`/shop\` command again!`);
    }, 3000);
    } else {

      const embed = new EmbedBuilder()
    .setTitle(`Anime Mobilization Shop`)
    .setDescription(`**${interaction.user.username} Anime Coin:** <:animecoin:929593554005794836> ${animecoin || 0}\n**${interaction.user.username} Vote Coin:** <:VoteToken:956719346837770281> ${votecoin || 0}\n\` \`╔════════ **Anime Coin** ═════════\n\`1\`║ <a:tickett:956738278579654708> \`Adventure Pass              250\` <:animecoin:929593554005794836>\n\`2\`║ <:potion:956750903862525952> \`Potion                   10,000\` <:animecoin:929593554005794836>\n\`3\`║ <:Intertwined:956753189263274035> \`Intertwined Fate        100,000\` <:animecoin:929593554005794836>\n\`4\`║ <:Acquaint:956753365579223090> \`Acquaint Fate           100,000\` <:animecoin:929593554005794836>\n\` \`╚═════════════════════════\n\` \`╔═════════  **Vote Coin** ═════════\n\` \`║ \`Not Available Yet!                \`\n\` \`╚═════════════════════════\n\` \`╔═══════  **Adventure Pack** ════════\n\` \`║ \`Not Available Yet!                \`\n\` \`╚═════════════════════════\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/W34PGSKsD7)\n\n*Use Command \`/buy\` to buy any item*`)
    .setColor(`#FF69B4`)
    .setFooter({ text: `Anime Mobilization®` })
    .setTimestamp(new Date())

    db.set(`wait5_${interaction.user.id}`, Date.now());
    await interaction.editReply({ embeds: [embed] })
    }
      }
    });