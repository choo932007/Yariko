const Discord = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'kekw.sqlite' });
const wait = require('node:timers/promises').setTimeout;
const Topgg = require("@top-gg/sdk");
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNzg4MTM4MTM0MDY2Nzk1NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ3NzM4NjgyfQ.8ofDzLOv4VJJJc4M4Vtz0X60RUFAOt8-8FuwZ0gDbvE")
const { ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require('discord.js');
const Dex = require(".../../../Dex/Anime.json");
const { EmbedBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = new Object({
  name: 'wild',
  description: '🌿 Go for an adventure!',
  async run (client, interaction) {

let user =  interaction.user;
const ingame = `813204114837209109`

// DB GET //
let adventurepass = await db.get(`adventurepass_${interaction.user.id}`)
if (adventurepass === null) adventurepass = 0;
    
let level = await db.get(`level_${interaction.user.id}`)
if (level === null) level = 1;
    
let exp = await db.get(`exp_${interaction.user.id}`)
const levelup = (level * 2000) + 2500;
    
let potion = await db.get(`potion_${interaction.user.id}`)
if (potion === null) potion = 0;
    
let potionuse = await db.get(`potionuse_${interaction.user.id}`)
if (potionuse === null) potionuse = 0;
    
let cardcatch = db.get(`cardcatch_${user.id}`)
if (cardcatch === null) cardcatch = 0;
    
let waittest = await db.get(`waittest_${interaction.user.id}`)
    
let animecoin = await db.get(`animecoin_${interaction.user.id}`)

// Stater //
const embed = new EmbedBuilder()
.setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/v4mTzw6kH4)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)
.setColor(`#2c2f33`)
let start = await db.get(`start_${interaction.user.id}`)
      if (start === null) { return interaction.reply({embeds: [embed]});
      }

// NO ADVENTURE PASS //
    if (adventurepass === 0) { 
          db.set(`wait11_${interaction.user.id}`, Date.now());
          return interaction.reply(`:x: **|** You don't have any <a:tickett:956738278579654708> Adventure Pass left! **Go \`/shop\` to buy some <a:tickett:956738278579654708> Adventure Pass!**`)}

let timeout = 4000;
if (waittest !== null && timeout - (Date.now() - waittest) > 0) {
let time = (timeout - (Date.now() - waittest));
await interaction.reply(`<a:time:933627010851430451> **| ${interaction.user.username}**, you have already tired from adventure! You may adventure again in **${time / 1000}s**!`);
} else {

// CHARACTER //
    const spawnData = {
  "one_star_spawn": [
    "ichigo", "mayaya", "minori", "mobambi", "fukurou", "spandam",
    "nina", "babidi", "goh", "foxy", "karin", "eri", "hiroshi", "shinju", "miori", "sajuna", "nowa", "wakana", "kaoru", "lattifa", "eiko", "aisu", "muse", "sylphy"
  ],
  "two_star_spawn": [
    "kiyotaka", "denki", "jeanist", "edgeshot", "kamui", "mirko", "ryukyu", "orca", "shishido", "mtlady", "endeavor", "isuzu", "seiya", "naki", "kousuke", "garfiel", "petra", "meilli", "kabe-taijin", "nanami-kuon"
  ],
  "three_star_spawn": [
    "buggy", "shoko", "akari", "utahime", "aoi", "noritoshi", "momo", "masamichi", "mina", "yuga", "roswaal", "beatrice", "otto", "frederica"
  ],
  "four_star_spawn": [
    "yamato", "reiju", "kenma", "nezuko", "nobara", "toge", "maki", "megumi", "izuku", "jiro", "yaoyorozu", "eijiro", "marin", "touka", "emilia", "subaru"
  ],
  "five_star_spawn": [
    "linlin", "lumine", "keqing", "yuji", "yuta", "himiko", "shoto", "ken", "ram", "echidna", "kongming", "eiko-tsukimi"
  ]
};

// RANDOM //
    const rarityLevel = Math.random()
    
    let spawnArray;
    let itemName;
    let itemColor;

    if (rarityLevel < 0.4) {
      spawnArray = spawnData.one_star_spawn;
      itemName = '<:A_star:928825670447022140>';
      itemColor = '#FFFFFF';
      itemExp = '50';
    } else if (rarityLevel < 0.6) {
      spawnArray = spawnData.two_star_spawn;
      itemName = '<:A_star:928825670447022140><:A_star:928825670447022140>';
      itemColor = '#00FF00';
      itemExp = '100';
    } else if (rarityLevel < 0.8) {
      spawnArray = spawnData.three_star_spawn;
      itemName = '<:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140>';
      itemColor = '#00008B';
      itemExp = '500';
    } else if (rarityLevel < 0.95) {
      spawnArray = spawnData.four_star_spawn;
      itemName = '<:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140>';
      itemColor = '#ADD8E6';
      itemExp = '1000';
    } else {
      spawnArray = spawnData.five_star_spawn;
      itemName = '<:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140>';
      itemColor = '#FFD700';
      itemExp = '1500';
    }

      const spawnIndex = Math.floor(Math.random() * spawnArray.length);

 anim = Dex.filter(anime => anime.no == spawnArray[spawnIndex])[0]
if (anim == undefined) {
anim = Dex.filter(anime => anime.name == spawnArray[spawnIndex])[0];
};
if (anim == undefined) {
anim = promoDex.filter(anime => anime.no == spawnArray[spawnIndex])[0];
};
if (anim == undefined) {
anim = genshinDex.filter(anime => anime.no == spawnArray[spawnIndex])[0];
};
if (anim == undefined) {
anim = genshinDex.filter(anime => anime.name == spawnArray[spawnIndex])[0];
};
if (anim == undefined) {
anim = promoDex.filter(anime => anime.name == spawnArray[spawnIndex])[0];
};

let owned = await db.get(`${anim.name}_${interaction.user.id}`)
let seen = await db.get(`${anim.name}seen_${interaction.user.id}`)

// TITLE CASE //
function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// RESULT UNVOTED //
let voted = await topgg.hasVoted(interaction.user.id)
    
  if(!voted) {
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

   db.add(`exp_${interaction.user.id}`, `${itemExp}`);
   db.set(`waittest_${interaction.user.id}`, Date.now());
   db.add(`${(spawnArray[spawnIndex])}seen_${interaction.user.id}`, 1);
   db.add(`${(spawnArray[spawnIndex])}seen_${ingame}`, 1);
   db.add(`${(spawnArray[spawnIndex])}_${interaction.user.id}`, 1);
   db.add(`${(spawnArray[spawnIndex])}_${ingame}`, 1);
   db.sub(`adventurepass_${interaction.user.id}`, 1)

const embed2 = new EmbedBuilder()
.setTitle('Anime Mobilization Adventure')     .setDescription(`${interaction.user.username} found a ${itemName} ${titleCase(spawnArray[spawnIndex])}!\n> <:exp:934341637478445116> | You gained ${itemExp} exp! (${exp}/${levelup})\n\n**Dex no:** \`#${anim.no}\` **|** **Condition:** ${anim.condition}\n**Anime:** ${anim.anime} **|** **Gender:** ${anim.gender}`)
.setColor(itemColor) 
.setImage(`http://lnkiy.in/anime_${spawnArray[spawnIndex]}`)
.setFooter({ text: `Seen: ${seen + 1} | Owned: ${owned + 1}` })

   
   await interaction.reply({ embeds: [embed2], components: [row] });
    } else {
  
// RESULT VOTED //
   db.add(`exp_${interaction.user.id}`, `${itemExp}`);
   db.set(`waittest_${interaction.user.id}`, Date.now());
   db.add(`${(spawnArray[spawnIndex])}seen_${interaction.user.id}`, 1);
   db.add(`${(spawnArray[spawnIndex])}seen_${ingame}`, 1);
   db.add(`${(spawnArray[spawnIndex])}_${interaction.user.id}`, 1);
   db.add(`${(spawnArray[spawnIndex])}_${ingame}`, 1);
   db.sub(`adventurepass_${interaction.user.id}`, 1)
    
    const embed3 = new EmbedBuilder()
    .setTitle('Anime Mobilization Adventure')
    .setDescription(`${interaction.user.username} found a ${itemName} ${titleCase(spawnArray[spawnIndex])}!\n> <:exp:934341637478445116> | You gained ${itemExp} exp! (${exp}/${levelup})\n\n**Dex no:** \`#${anim.no}\` **|** **Condition:** ${anim.condition}\n**Anime:** ${anim.anime} **|** **Gender:** ${anim.gender}`)
    .setColor(itemColor) 
    .setImage(`http://lnkiy.in/anime_${spawnArray[spawnIndex]}`)
    .setFooter({ text: `Seen: ${seen + 1} | Owned: ${owned + 1}` })
   
  await interaction.reply({ embeds: [embed3] });

    if (itemName = `<:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140>`) {
      db.add(`fivestarcatch_${interaction.user.id}`, 1);
    }


  

  }
  }
  }
});