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
  name: 'itemsdel',
  description: '🛠️ Developers tools',
  options: [
  {
  name: 'target',
  description: 'mention a user',
  required: true,
  type: 6
},
  {
  name: 'items',
  description: 'Enter items name',
  required: true,
  type: 3
  },
  {
    name: 'amount',
  description: 'Amount',
  required: true,
  type: 10
  }
],
  async run (client, interaction) {

if(interaction.id == "753935898122649620" && interaction.user.id ==
"904359010675859456") return;
    
const user = interaction.options.getUser('target') || interaction.user;
const items = interaction.options.getString('items');
const amount = interaction.options.getNumber('amount');
    

   db.sub(`${items}_${interaction.user.id}`, amount)
   let anime = await db.get(`${items}_${user.id}`)
   return interaction.reply({ content: `Deleted \`${amount}\` ${items} to **${user}**'s.\n> ${user}'s ${items} cards/items now have: \`${anime - amount}\`.`})

 
  } 
  });