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
  name: 'profile',
  description: '👤 View user profile',
  options: [
  {
  name: 'target',
  description: 'mention a user',
  required: false,
  type: 6
}
],
  async run (client, interaction) {

const user = interaction.options.getUser('target') || interaction.user;
let avatar = user.avatarURL({ dynamic: true });
let wait10 = await db.get(`wait10_${interaction.user.id}`)

await interaction.deferReply();
await wait(500);

let timeout = 8000;
  
if (wait10 !== null && timeout - (Date.now() - wait10) > 0) {
  let time = (timeout - (Date.now() - wait10));
  setTimeout(function() {
  interaction.editReply(`<a:time:933627010851430451> **| ${interaction.user.username}**, pls wait **${time / 1000}s** to use \`/profile\` command again!`);
}, 3000);
  
 } else {
    
let datejoined = await db.get(`datejoined_${user.id}`)
if (datejoined === null) datejoined = 0;

let cardcatch = await db.get(`cardcatch_${user.id}`)
if (cardcatch === null) cardcatch = 0;

let fourstarcatch = await db.get(`fourstarcatch_${user.id}`)
if (fourstarcatch === null) fourstarcatch = 0;

let fivestarcatch = await db.get(`fivestarcatch_${user.id}`)
if (fivestarcatch === null) fivestarcatch = 0;

let dailyStreak = await db.get(`dailyStreak_${user.id}`)
if (dailyStreak === null) dailyStreak = 0;

let level = await db.get(`level_${user.id}`)
if (level === null) level = 1;

let exp = await db.get(`exp_${user.id}`)
const levelup = (level * 2000) + 1500;

let promo = await db.get(`promo_${user.id}`)
if (promo === null) promo = 0;

    const embed = new EmbedBuilder()
    .setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/v4mTzw6kH4)`)
    .setColor(`#2c2f33`)
  
let start = await db.get(`start_${interaction.user.id}`)
if (start === null) { return interaction.editReply({ embeds: [embed] });
}

let start2 = await db.get(`start_${user.id}`)
if (start2 === null) {
db.set(`wait10_${interaction.user.id}`, Date.now());
return interaction.editReply({ content: `:x: **|** You mentioned the user haven't register on Anime Mobilization!` });
}

    const embed2 = new EmbedBuilder()
    .setAuthor({name: `${user.username} Stats`, iconURL: avatar })
    .setThumbnail(avatar)
    .setFooter({ text: `Anime Mobilization®` })
    .setDescription(`ㅤㅤㅤㅤㅤㅤ\n\n**Username:**: ${user} (${user.id})\n**Adventure Rank:** ${level} (Exp:*${exp}*/*${levelup})*\n\n**Date registered:** <t:${Math.floor(datejoined / 1000)}:F>\n\nㅤㅤㅤ`)
    .setColor(`#2c2f33`)
    .addFields(
    { name: '**:clock1: Dalies Claimed:**', value: `\`\`\`css\n${dailyStreak}\`\`\``, inline: true},
    { name: '**<:animecard:957632572203089951> Card Caught:**', value: `\`\`\`css\n${cardcatch}\`\`\``, inline: true},
    { name: '**<:promo:963437868565553213> Promo Claimed:**', value: `\`\`\`css\n${promo}\`\`\``, inline: true},
    { name: '**<:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140> Caught:**', value: `\`\`\`css\n${fourstarcatch}\`\`\``, inline: true},
    { name: '**<:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140> Caught:**', value: `\`\`\`css\n${fivestarcatch}\`\`\``, inline: true},
    { name: '**Badges:**', value: `\`\`\`ㅤㅤㅤㅤㅤㅤㅤㅤ\`\`\``},
		)
  
db.set(`wait10_${interaction.user.id}`, Date.now());
await interaction.editReply({embeds: [embed2] })
  }
  
}
})