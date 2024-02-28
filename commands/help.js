const Discord = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'kekw.sqlite' });
const wait = require('node:timers/promises').setTimeout;
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const Topgg = require("@top-gg/sdk");
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNzg4MTM4MTM0MDY2Nzk1NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ3NzM4NjgyfQ.8ofDzLOv4VJJJc4M4Vtz0X60RUFAOt8-8FuwZ0gDbvE")

module.exports = new Object({
  name: 'help',
  description: '❓ Show all the bot command!',
  async run (client, interaction) {

const user = interaction.user

  const row = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('roles')
                .setPlaceholder('Select a category to check the commands')
                .addOptions([
                    { 
                        label: 'Adventure',
                        description: 'Adventure commands',
                        value: 'first_option',
                        emoji: '<:battle:953880646785306644> '
                    },
                    {
                        label: 'Economy',
                        description: 'Economy commands',
                        value: 'second_option',
                        emoji: '💰'
                    },
                    {
                        label: 'NSFW',
                        description: 'NSFW commands (Enable NSFW to interact!)',
                        value: 'third_option',
                        emoji: '🔞'
                    },
                ]),
        );

const embed2 = new EmbedBuilder()
.setAuthor({ name: `Anime Mobilization Help Commands`, iconURL: `https://cdn.discordapp.com/attachments/928643517713109036/971417497309950032/794fcd971d4ad9884772a2f4138d77c8.jpeg`})
.setDescription("<:Yariko:928644263628144710> Here is the Anime Mobilization avaible commands!\n\n<a:loading:927925673379635200> **|**  [Join the Support Server for lastest game updates!](https://discord.gg/W34PGSKsD7)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)\n\n<a:important:953223135606485002> **|** Enable NSFW to access more commands!") .setThumbnail('https://cdn.discordapp.com/attachments/928643517713109036/971417497309950032/794fcd971d4ad9884772a2f4138d77c8.jpeg')
.setFooter({ text: 'Anime Mobilization®'})
.setTimestamp(new Date())
.setColor('#FFC0CB')

    db.set(`waitc_${interaction.user.id}`, Date.now());
    await interaction.reply({  embeds: [embed2] ,components: [row]})

    const row2 = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('timesup')
                .setPlaceholder('⏰ Interaction time had expired!')
                .addOptions([
                    { 
                        label: 'Type /help to continue interact with the bot...',
                        description: 'ㅤ',
                        value: 'retryoption',
                        emoji: '<:slash_command:954734952493252628>'
                    },
                ]),
        );
   await wait(32000);
   await interaction.editReply({ embeds: [embed2], ephemeral: true, components: [row2]});
  

  if(interaction.isStringSelectMenu()){
      
    let choice = interaction.values[0] 
    const member = interaction.member
     if(choice == 'first_option'){
 const embed3 = new EmbedBuilder()
.setAuthor({ name:`Anime Mobilization Adventure Commands`, iconURL: `https://cdn.discordapp.com/attachments/928643517713109036/971417497309950032/794fcd971d4ad9884772a2f4138d77c8.jpeg`})
    .addFields(
        {
                    name: '<:slash_command:954734952493252628> Adventure:',
                    value: (`\`\`\`css\n/start\n/wild\n/event\n/promo\n/dex\n/daily\n/profile\n/gift\n/bag\n/release\n/use\`\`\``),
                    inline: true
                })
.setDescription("<:Yariko:928644263628144710> Here is the Anime Mobilization avaible commands!\n\n<a:loading:927925673379635200> **|**  [Join the Support Server for lastest game updates!](https://discord.gg/W34PGSKsD7)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)\n\n<a:important:953223135606485002> **|** Enable NSFW to access more commands!")     .setThumbnail('https://cdn.discordapp.com/attachments/928643517713109036/971417497309950032/794fcd971d4ad9884772a2f4138d77c8.jpeg')
      .setFooter({ text:'Anime Mobilization®'})
      .setTimestamp(new Date())
      .setColor('#FFC0CB')
      interaction.reply({embeds: [embed3] , ephemeral: true})
          
        }
else if(choice == 'second_option'){
const embed4 = new EmbedBuilder()
.setAuthor({ name: `Anime Mobilization Help Commands`, iconURL: `https://cdn.discordapp.com/attachments/928643517713109036/971417497309950032/794fcd971d4ad9884772a2f4138d77c8.jpeg`})
.addFields(
                 {
                    name: '<:slash_command:954734952493252628> Currency:',
                    value: (`\`\`\`css\n/balance\n/give\n/shop\n/buy\`\`\``),
                    inline: true
                })
     .setDescription("<:Yariko:928644263628144710> Here is the Anime Mobilization avaible commands!\n\n<a:loading:927925673379635200> **|**  [Join the Support Server for lastest game updates!](https://discord.gg/W34PGSKsD7)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)\n\n<a:important:953223135606485002> **|** Enable NSFW to access more commands!")      .setThumbnail('https://cdn.discordapp.com/attachments/928643517713109036/971417497309950032/794fcd971d4ad9884772a2f4138d77c8.jpeg')
      .setFooter({ text: 'Anime Mobilization®'})
      .setTimestamp(new Date())
      .setColor('#FFC0CB')
        interaction.reply({embeds: [embed4], ephemeral: true})
 
    }
      else if(choice == 'third_option'){
 const embed5 = new EmbedBuilder()
.setAuthor({ name: `Anime Mobilization Help Commands`, iconURL: `https://cdn.discordapp.com/attachments/928643517713109036/971417497309950032/794fcd971d4ad9884772a2f4138d77c8.jpeg`})
   .addFields(
                {
                    name: '<:slash_command:954734952493252628> NSFW Hentai:',
                    value: (`\`\`\`css/hentai\`\`\``),
                    inline: true
                },
                {
                    name: 'NSFW Wallpaper:',
                    value: (`!wallpaper <Query>\`\`\`\ndesktop\nmobile\nmobile-18\`\`\``),
                    inline: true
                })
     .setDescription("<:Yariko:928644263628144710> Here is the Anime Mobilization avaible commands!\n\n<a:loading:927925673379635200> **|**  [Join the Support Server for lastest game updates!](https://discord.gg/W34PGSKsD7)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)")
.setThumbnail('https://cdn.discordapp.com/attachments/928643517713109036/971417497309950032/794fcd971d4ad9884772a2f4138d77c8.jpeg')
      .setFooter({ text: 'Anime Mobilization®'})
      .setTimestamp(new Date())
      .setColor('#FFC0CB')

        if (!interaction.channel.nsfw) return
    interaction.reply({embeds: [embed5], ephemeral: true}) 

                  }
    }
  }
})
