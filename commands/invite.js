const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = new Object({
  name: 'invite',
  description: '📨 Invite Anime Mobilization',
  async run (client, interaction) {
      const embed = new EmbedBuilder()
.setDescription(`> <a:loading:927925673379635200> [Invite Anime Mobilization!](https://discord.com/oauth2/authorize?client_id=927881381340667955&permissions=8&scope=bot%20applications.commands)`)
.setColor(`#00FFFF`)

    interaction.reply({ embeds: [embed] }).catch(() => null);
  },
});