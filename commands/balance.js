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
  name: 'balance',
  description: '💵 Show the balance',
  async run (client, interaction) {
    
let start = await db.get(`start_${interaction.user.id}`)
let animecoin = await db.get(`animecoin_${interaction.user.id}`)
if (animecoin === null) animecoin = 0;
let wait12 = await db.get(`wait12_${interaction.user.id}`)

    await interaction.deferReply();
    await wait(500);
    
   const embed = new EmbedBuilder()
   .setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/W34PGSKsD7)`)
   .setColor(`#2c2f33`)
    
if (start === null) { return interaction.editReply({ embeds: [embed] });
      }

let timeout = 8000;
if (wait12 !== null && timeout - (Date.now() - wait12) > 0) {
let time = (timeout - (Date.now() - wait12));
  
setTimeout(function() {
interaction.editReply(`<a:time:933627010851430451> **| ${interaction.user.username}**, pls wait **${time / 1000}s** to use \`/balance\` command again!`);
}, 3000);
  
} else {
 
  db.set(`wait12_${interaction.user.id}`, Date.now());
   await interaction.editReply({ content: `**${interaction.user.tag}'s Balance**\n> Anime Coins: \`${animecoin}\` <:animecoin:929593554005794836>` })

}
        }
});