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
  name: 'event',
  description: '❗️ View the current event',
  async run (client, interaction) {
    let user = interaction.user;
    let wait9 = await db.get(`wait9_${interaction.user.id}`)

    await interaction.deferReply();
    await wait(500);

    const embed2 = new Discord.EmbedBuilder()
    .setDescription(`Oh? New adventurer! Type \`/start\` before you start your Anime Mobilization Adventure! <a:happy:927931068852617326>\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/v4mTzw6kH4)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)
    .setColor(`#2c2f33`)
    let start = await db.get(`start_${user.id}`)
    if (start === null) { return interaction.editReply(embed2);
          }

    let timeout = 8000;
    if (wait9 !== null && timeout - (Date.now() - wait9) > 0) {
    let time = (timeout - (Date.now() - wait9));
    setTimeout(function() {
    interaction.editReply(`<a:time:933627010851430451> **| ${interaction.user.username}**, pls wait **${time / 1000}s** to use \`/event\` command again!`);
    }, 3000);
    } else {

    let animecoin = await db.get(`animecoin_${user.id}`)

          const progress = new ButtonBuilder()
          .addComponents(
            new MessageButton()
              .setCustomId('progress')
              .setStyle('PRIMARY')
              .setEmoji(`<a:time:933627010851430451>`)
              .setDisabled(true),
          );

         const row = new ActionRowBuilder()
         .addComponents(progress);

        let embed = new EmbedBuilder()
        .setColor(`#00FFFF`)
        .setAuthor({name: `Anime Mobilization Event`, iconURL: `https://cdn.discordapp.com/attachments/927862544826253312/934081729994580039/4728869.jpeg`})
      .setDescription(`\n<a:loading:927925673379635200> **|**  [Join the Support Server for lastest game updates!](https://discord.gg/W34PGSKsD7)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)\n\n**__🟢 Re:Zero 1st Banner is now live!__**\n**⭐️⭐️⭐️⭐️⭐️⭐️ Rem is obtainable!**\n> Type \`/promo\` for more information about how to obtain it\n\n**11 new Re:Zero card had released!**\n⭐️⭐️⭐️⭐️⭐️ - Ram and Echidna\n⭐️⭐️⭐️⭐️ - Emilia and Subaru\n⭐️⭐️⭐️ - Roswaal, Beatrice and Otto\n⭐️⭐️ - Frederica,Garfiel,Petra and Meilli\n\n🎁 Obtain Rem,Ram and Echidna to get a ⭐️⭐️⭐️⭐️⭐️ Kirito!\n> Click button below to view your progress\n\n**Event ends in** <t:1651147200> (<t:1651147200:R>)`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/928826397680627755/964114726776897586/pngegg.png`)
    .setImage(`https://cdn.discordapp.com/attachments/928826397680627755/964075972561342464/Screenshot_2022-04-14_at_4.07.47_PM.png`)

    db.set(`wait9_${interaction.user.id}`, Date.now());
    await interaction.editReply({ content: `❌ **|** There's currently no active event!`, components: [row]})

              const progressx = new ButtonBuilder()
          .addComponents(
            new MessageButton()
              .setCustomId('progress')
              .setStyle('PRIMARY')
              .setEmoji(`<a:time:933627010851430451>`)
              .setDisabled(true),
          );

        const row2 = new ActionRowBuilder()
        .addComponents(progressx);

        await wait(8000);
         await interaction.editReply({ content: `❌ **|** There's currently no active event!`, components: [row2]});
    }
  }
});