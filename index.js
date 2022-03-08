const Client = require("../index").Client
const { MessageEmbed } = require('discord.js')

Client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == 'DM') return
    let messageTypes = ['USER_PREMIUM_GUILD_SUBSCRIPTION', 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1', 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2', 'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3']

    if(messageTypes.includes(message.type)) {
        const Embed = new MessageEmbed()
        .setTitle("New Boost")
        .setDescription(`Thank you ${message.author} for boosting the server, now the server has ${message.guild.premiumSubscriptionCount} boosts`)
        .setColor("LUMINOUS_VIVID_PINK")
        message.channel.send({ embeds: [Embed]})
    }
})



// USER_PREMIUM_GUILD_SUBSCRIPTION
// USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1
// USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2
// USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3
