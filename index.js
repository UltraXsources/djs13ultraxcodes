const discord = require('discord.js')
const { token } = require('./config.json')
const Client = new discord.Client({
    intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES ],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true } 
})

Client.on('ready', async () => {
    Client.user.setPresence({ activities: [{ name: "UltraX", type: "WATCHING"}] })
    console.log(`${Client.user.tag} is online!`)

    const data = {
        name: 'echo',
        description: 'Echo your text!',
        options: [{
            name: 'text',
            type: 'STRING',
            description: 'The input to echo back',
            required: true,
        }],
    };

    const command = await Client.guilds.cache.get('728751693503922190')?.commands.create(data);
})

Client.on('interactionCreate', async inter => {
    if(inter.isCommand()) {
        if(inter.commandName === 'echo') {
            const text = inter.options.getString('text');
            return await inter.reply({ content: text });
        }
    }
})


Client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == 'DM') return
})

Client.login(token)
