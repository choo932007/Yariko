const Discord = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'kekw.sqlite' });
const { EmbedBuilder } = require('discord.js');

module.exports = new Object({
  name: 'start',
  description: '🏁 Start the journey',
  async run (client, interaction) {
    let user = interaction.author;
    const ingame = `813204114837209109`
    let start = await db.get(`start_${interaction.user.id}`)
    let anime = await db.get(`anime_${interaction.user.id}`)
    let animecoin = await db.get(`animecoin_${interaction.user.id}`)
    
     if (start === null) {
    const embed2 = new EmbedBuilder()
    .setAuthor({ name: `Anime Mobilization Logs Center`, url: `https://cdn.discordapp.com/attachments/927862544826253312/934081729994580039/4728869.jpeg`})
    .setDescription(`**${interaction.user.tag} (${interaction.user.id})** had joined the Anime Mobilization adventure!\n\n**Time registered:** <t:${Math.floor(Date.now() / 1000)}:F>`)
    .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
    .setFooter({ text: `Anime Mobilization®`})
    
    
           let embed = new EmbedBuilder();
        embed.setTitle(`Welcome to Anime Mobilization Wrold, ${interaction.user.username}!`)
        embed.setDescription(`<:Yariko:928644263628144710> Hi, I'm Yariko! Your Anime Mobilization assistant :3 Ooo yours looks tasty 😋 Ahh, sorry forget about it. Let me teach you how to start an adventure on this beautiful Anime Mobilization World!\n__How to play?__\n\`\`/wild\`\` - To collect materials and cute waifus\n\`\`/open box\`\` - To open mystery box\n\`\`/daily\`\` - You can claim every day!\n\`\`/dex <anime name>\`\` - To view the character info\n\nThis is all the adventure guild, easy rite? Before you begin you adventure, pls recieve this :)\n**x1 <:A_star:928825670447022140><:A_star:928825670447022140><:A_star:928825670447022140> Yariko**\n**x10,000 <:animecoin:929593554005794836>**\n\nHope you enjoy this adventure, バイバイ!\n\n<a:loading:927925673379635200> **|** [Join Support Server!](https://discord.gg/v4mTzw6kH4)\n🗳️ **|**  [Vote for Anime Mobilization](https://top.gg/bot/927881381340667955/vote)`)

db.add(`yariko_${interaction.user.id}`, 1);
        db.add(`yarikoseen_${interaction.user.id}`, 1);
db.add(`yariko_${ingame}`, 1);
db.add(`yarikoseen_${ingame}`, 1);
        db.add(`animecoin_${interaction.user.id}`, 10000);
db.add(`start_${ingame}`, 1);
db.add(`start_${interaction.user.id}`, 1);
        db.add(`datejoined_${interaction.user.id}`, Date.now())
    
await interaction.reply({embeds: [embed] }).catch(() => null);
        client.channels.cache.get('953223871006400522').send({ embeds: [embed2]} ).catch(() => null);
     }
     
      }
});