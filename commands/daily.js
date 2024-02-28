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
  name: 'daily',
  description: '✅ Claim your daily reward',
  async run (client, interaction) {

let user = interaction.user;
let avatar = user.avatarURL({ dynamic: true });
db.set(`daily3_${user.id}`, Date.now())
    
   const embed = new EmbedBuilder()
   .setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/v4mTzw6kH4)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)
   .setColor(`#2c2f33`)
    
let start = await db.get(`start_${user.id}`)
if (start === null) { return interaction.reply({embeds: [embed] });
      }

let animecoin = await db.get(`animecoin_${user.id}`)
let daily3 = await db.get(`daily3_${user.id}`)
let daily2 = await db.get(`daily2_${user.id}`)
let adventurepass = await db.get(`adventurepass_${user.id}`)
let dailystreak = await db.get(`dailyStreak_${user.id}`)
if (dailystreak === null) dailystreak = 1;

let timeout = 86400000;
const reward = (dailystreak * 50) + 1000;
const areward = (dailystreak * 2) + 20;

let daily = await db.get(`daily_${user.id}`);

if (daily !== null && timeout - (Date.now() - daily) > 0) {
let time = (timeout - (Date.now() - daily));

const timee = time + Date.now()
  
  interaction.reply(`<a:time:933627010851430451> **| ${interaction.user.username}**, You have already claimed your daily! You may claim your daily again in <t:${Math.floor(timee / 1000)}:F> (<t:${Math.floor(timee / 1000)}:R>)`);
  
  } else {

if (daily3 > daily2) {
    const embed2 = new EmbedBuilder()
    .setColor(`#ADD8E6`)
    .setAuthor({name: `Anime Mobilization Daily Claim`, iconURL: avatar })
    .setDescription(`\n👻 *Your daily streak of **${dailystreak}** has been reset!*\n\n<:animecoin:929593554005794836> **|** ${user}, you claimed your \`1050\` <:animecoin:929593554005794836> daily credits!\n<a:tickett:956738278579654708> **|** You received additional x22 <a:tickett:956738278579654708> Adventure Pass!\n:trophy: **|** You currently at **1 streak**!\n:clock1: **|** Your next daily is in: <t:${Math.floor((Date.now() + 86400000) / 1000)}:F>\n\n <a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/W34PGSKsD7)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)
    .setFooter({ text: `Anime Mobilization®` })
    .setTimestamp(new Date());

  db.add(`animecoin_${user.id}`, 1050)
  db.add(`adventurepass_${user.id}`, 22)
  db.sub(`dailyStreak_${interaction.user.id}`, dailystreak)
  db.add(`dailyStreak_${user.id}`, 1)
  db.set(`daily2_${user.id}`, Date.now() + 172800000)
  db.set(`daily_${user.id}`, Date.now())
      
  return interaction.reply({ embeds: [embed2] })
    }

    const embed = new EmbedBuilder()
    .setColor(`#ADD8E6`)
    .setAuthor({name: `Anime Mobilization Daily Claim`, iconURL: avatar })
    .setDescription(`\n<:animecoin:929593554005794836> **|** ${user}, you claimed your \`${reward}\` <:animecoin:929593554005794836> daily credits!\n<a:tickett:956738278579654708> **|** You received additional x${areward} <a:tickett:956738278579654708> Adventure Pass!\n:trophy: **|** You currently at **${dailystreak} streak**!\n:clock1: **|** Your next daily is in: <t:${Math.floor((Date.now() + 86400000) / 1000)}:F>\n\n<a:loading:1075770212374282240> **|** [Join Support Server!](https://discord.gg/W34PGSKsD7)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)
    .setFooter({ text: `Anime Mobilization®` })
    .setTimestamp(new Date());

interaction.reply({ embeds: [embed] })

  db.add(`animecoin_${user.id}`, reward)
  db.add(`adventurepass_${user.id}`, areward)
  db.add(`dailyStreak_${user.id}`, 1)
  db.set(`daily2_${user.id}`, Date.now() + 172800000)
  db.set(`daily_${user.id}`, Date.now())
  
  }
  }
});
  