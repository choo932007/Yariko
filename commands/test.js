const Discord = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'kekw.sqlite' });
const { EmbedBuilder } = require('discord.js');
const pool = [
  { name: 'Item 1', rarity: 1 },
  { name: 'Item 2', rarity: 2 },
  { name: 'Item 3', rarity: 3 },
  { name: 'Item 4', rarity: 4},
  { name: 'Item 5', rarity: 5},
  // ... other items with their rarities
];


module.exports = new Object({
  name: 'test',
  description: ':)',
  async run (client, interaction) { 

const item = performPull();
    
    // Award the obtained item to the user
    // You can customize this part based on your application's needs
    interaction.reply(`Congratulations! You obtained ${item.name} (Rarity: ${item.rarity}).`);
  }
});

function performPull() {
  const totalPulls = 100; // Example: Total number of pulls by the user
  
  let rarity;
  
  // Determine the rarity of the item/card based on the pull rates
  const randomValue = Math.random();
  
  // Check if guaranteed 5-star or 4-star
  if (totalPulls >= 80 && randomValue < 0.01) {
    rarity = 5;
  } else if (totalPulls >= 10 && randomValue < 0.05) {
    rarity = 4;
  } else {
    // Generate rarity randomly based on defined probabilities
    const probabilities = [0.6, 0.35, 0.04, 0.01];
    const randomIndex = getRandomIndexWithProbabilities(probabilities);
    rarity = randomIndex + 1;
  }
  
  // Get a random item/card from the pool with the determined rarity
  const itemsWithRarity = pool.filter(item => item.rarity === rarity);
  const randomItemIndex = Math.floor(Math.random() * itemsWithRarity.length);
  const obtainedItem = itemsWithRarity[randomItemIndex];
  
  return obtainedItem;
}

// Helper function to generate a random index based on given probabilities
function getRandomIndexWithProbabilities(probabilities) {
  const randomValue = Math.random();
  let cumulativeProbability = 0;
  
  for (let i = 0; i < probabilities.length; i++) {
    cumulativeProbability += probabilities[i];
    if (randomValue < cumulativeProbability) {
      return i;
    }
  }
  
  return probabilities.length - 1;
}
  