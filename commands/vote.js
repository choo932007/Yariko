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
  name: 'vote',
  description: '🗳️ Vote Anime Mobilization!',
  async run (client, interaction) {

let user = interaction.user;
let avatar = user.avatarURL({ dynamic: true });
let voted = await topgg.hasVoted(interaction.user.id)
    
    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
    .setLabel('Vote for Anime Mobilization')
    .setURL("https://top.gg/bot/927881381340667955/vote")
    .setStyle(ButtonStyle.Link)
    .setEmoji(`<:topgg:997523632974729286>`),
    new ButtonBuilder()
    .setLabel('Join Support Server')
    .setURL("https://discord.gg/v4mTzw6kH4")
    .setStyle(ButtonStyle.Link)
    .setEmoji(`<a:loading:927925673379635200>`)
            );
    
    if(!voted) {
    const embed = new EmbedBuilder()
    .setAuthor({name: `Anime Mobilization Vote`, iconURL: avatar })
    .setDescription(`<:A_Yariko:928644263628144710> **|** Thank you for choosing Anime Mobilization!\n<a:time:933627010851430451> **|** [Click here to vote me](https://top.gg/bot/927881381340667955/vote)\n<a:loading:1075770212374282240> **|**  [Join the Support Server for lastest game updates!](https://discord.gg/W34PGSKsD7)\n\n📅 **|** **Your Vote streak:** N/A\n🏆 **|** **Total times voted:** N/A\n⏰ **|** **Last voted:** N/A`)
    .setColor(`#2c2f33`)
    .setFooter({ text: `Anime Mobilization®` })
      
  return interaction.reply({ embeds: [embed] , components: [row]})
      
      } else {
      
    const embed2 = new EmbedBuilder()
    .setAuthor({name: `Anime Mobilization Vote`, iconURL: avatar })
    .setDescription(`<:A_Yariko:928644263628144710> **|** Thank you for choosing Anime Mobilization!\n<a:time:933627010851430451> **|** You have already voted!\n<a:loading:1075770212374282240> **|**  [Join the Support Server for lastest game updates!](https://discord.gg/W34PGSKsD7)\n\n📅 **|** **Your Vote streak:** N/A\n🏆 **|** **Total times voted:** N/A\n⏰ **|** **Last voted:** N/A`)
     .setColor(`#2c2f33`)
     .setFooter({ text: `Anime Mobilization®` })
  return interaction.reply({ embeds: [embed2] , components: [row]})
      }
  }
})