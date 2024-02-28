const Discord = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'kekw.sqlite' });
const wait = require('node:timers/promises').setTimeout;
const { EmbedBuilder } = require('discord.js');

module.exports = new Object({
  name: 'inventory',
  description: '👜 Check your items inventory',
  async run (client, interaction) {
    
const user = interaction.user;
  let wait3 = await db.get(`wait3_${interaction.user.id}`)
    await interaction.deferReply();
		await wait(500);
  let avatar = user.avatarURL({ dynamic: true });
  const embed = new EmbedBuilder()
.setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/v4mTzw6kH4)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)
.setColor(`#2c2f33`)
let start = await db.get(`start_${user.id}`)
if (start === null) return interaction.editReply({ embeds: [embed] })

let timeout = 8000;
if (wait3 !== null && timeout - (Date.now() - wait3) > 0) {
let time = (timeout - (Date.now() - wait3));
setTimeout(function() {
interaction.editReply(`<a:time:933627010851430451> **| ${interaction.user.username}**, pls wait **${time / 1000}s** to use \`/bag\` command again!`);
}, 3000);
} else {
let animecoin = await db.get(`animecoin_${user.id}`)
if (animecoin === null) animecoin = 0;
let votecoin = await db.get(`votecoin_${user.id}`)
if (votecoin === null) votecoin = 0;
let intertwined = await db.get(`intertwined_${user.id}`)
if (intertwined === null) intertwined = 0;
let acquaint = await db.get(`acquaint_${user.id}`)
if (acquaint === null) acquaint = 0;
let potion = await db.get(`potion_${user.id}`)
if (potion === null) potion = 0;
let potionuse = await db.get(`potionuse_${user.id}`)
if (potionuse === null) potionuse = 0;
let adventurepass = await db.get(`adventurepass_${user.id}`)
if (adventurepass === null) adventurepass = 0;
let lootbox = await db.get(`lootbox_${user.id}`)
if (lootbox === null) lootbox = 0;

      const embed2 = new EmbedBuilder()
.setAuthor({name: `${user.username}'s item inventory`, iconURL: avatar })
.setDescription(`**Currencies**\n<:animecoin:929593554005794836> **${animecoin}**x AnimeCoin\n<:VoteToken:956719346837770281> **${votecoin}**x VoteCoin\n\n**Adventure Items**\n<a:tickett:956738278579654708> **${adventurepass}**x Adventure Pass\n<:potion:956750903862525952> **${potion}**x Potion \`- [${potionuse} left]\`\n<:lootbox:957093020623319043> **${lootbox}**x Lootbox\n\n**Wish Items**\n<:Intertwined:956753189263274035> **${intertwined}**x Intertwined\n<:Acquaint:956753365579223090> **${acquaint}**x Acquaint`)
.setColor(`#0000FF`)
.setFooter({ text: `Anime Mobilization®`})
.setTimestamp(new Date())
db.set(`wait3_${interaction.user.id}`, Date.now());
  interaction.editReply({ embeds: [embed2] }).catch(() => null);
  }
  },
});