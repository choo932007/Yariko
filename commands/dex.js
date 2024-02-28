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
  name: 'dex',
  description: '🆔 View the anime character!',
  options: [
  {
  name: 'anime',
  description: 'Enter a anime name or dex',
  required: false,
  type: 3
}
],
  
async run (client, interaction) {

let user =  interaction.user;
const ingame = `813204114837209109`

  await interaction.deferReply();
	await wait(800);
  
let wait8 = await db.get(`wait8_${interaction.user.id}`)
const ids = interaction.options.getString('anime');

let timeout = 12000;
if (wait8 !== null && timeout - (Date.now() - wait8) > 0) {
let time = (timeout - (Date.now() - wait8));
setTimeout(function() {
interaction.reply(`<a:time:933627010851430451> **| ${interaction.user.username}**, pls wait **${time / 1000}s** to use \`/dex\` command again!`);
}, 5000);
} else {
     
  const dexanime = new ButtonBuilder()
			.setCustomId('dexanime')
			.setLabel('Anime Name/Id')
			.setStyle(ButtonStyle.Danger)
      .setEmoji(`🔍`);

  const dexsort = new ButtonBuilder()
			.setCustomId('dexsort')
			.setLabel('Sort')
			.setStyle(ButtonStyle.Danger)
      .setEmoji(`🔍`);


  const row2 = new ActionRowBuilder()
			.addComponents(dexanime, dexsort);
  
     if (!interaction.options.getString('anime')) {
       return interaction.editReply({components: [row]})
     }
const id = ids.replace(/\s/g, '').toLowerCase();
anim = Dex.filter(anime => anime.no == id)[0];

const embed = new EmbedBuilder()
.setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n> <a:loading:927925673379635200> [Join Support Server!](https://discord.gg/v4mTzw6kH4)`)
.setColor(`#2c2f33`)
let start = await db.get(`start_${interaction.user.id}`)
      if (start === null) { return interaction.editReply({ embeds: [embed] });
      }

  
    if (anim == undefined) {
   anim = genshinDex.filter(anime => anime.no == id)[0];
		};

    if (anim == undefined) {
   anim = promoDex.filter(anime => anime.no == id)[0];
		};

    if (anim == undefined) {
   anim = Dex.filter(anime => anime.name == id)[0];
		};

    if (anim == undefined) {
   anim = genshinDex.filter(anime => anime.name == id)[0];
		};

     if (anim == undefined) {
   anim = promoDex.filter(anime => anime.name == id)[0];
		};
   
		if (anim == undefined) { 
      db.set(`wait8_${interaction.user.id}`, Date.now());
      return interaction.editReply(`${interaction.user}, Could not find that anime character!`)};

let anime = await db.get(`${anim.name}_${interaction.user.id}`);
let anime3 = await db.get(`${anim.name}_${ingame}`);
let anime2 = await db.get(`${anim.name}seen_${interaction.user.id}`);
let anime4 = await db.get(`${anim.name}seen_${ingame}`);

function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


    const embed2 = new EmbedBuilder()
    .setTitle(`Anime Mobilization Card Info`) 
    .setDescription(`**<:promo:963437868565553213> version:** ${anim.promo || `-`}\n\n__**<:stats:957960083571101737> Stats:**__\n<:animecard:957632572203089951> **Owned:** ${anime || 0} **|** 📜 **Seen:** ${anime2 || 0}\n\n🌏 **Total in-game:** ${anime3 || 0}\n<:empty:957933929648771072> **Total seen:** ${anime4 || 0}\n\n__**<a:information:957941199589740604> Information:**__`)
    .addFields(
		{ name: '**Name**:', value: `${titleCase(anim.name)}`, inline: true},
    { name: '**Dex Number**:', value: `<:pokedex:957941521750052873> ${titleCase(anim.no)}`, inline: true},
    { name: '**Gender:**', value: `${anim.gender}`, inline: true},
    { name: '**Anime:**', value: `${anim.anime}`, inline: true},
    { name: '**Name**:', value: `${titleCase(anim.name)}`, inline: true},
    { name: 'ㅤㅤㅤㅤㅤㅤㅤㅤ', value: `ㅤㅤㅤㅤㅤㅤㅤㅤ`, inline: true},
		)
  .setImage(`http://lnkiy.in/anime_${anim.img}`);

  
db.set(`wait8_${interaction.user.id}`, Date.now());
await interaction.editReply({ embeds: [embed2], components: [row2] });

}
}
});










