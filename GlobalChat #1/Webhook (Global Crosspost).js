const Discord = require("discord.js")
const client = require('../index.js');

client.on('messageCreate', async(message) => {

    if (message.author.bot) return;

    let url = ""
    message.attachments.forEach(a => {
        url = a.attachment
    });

    let channelID1 = "CHANNEL_ID"
    const webhookClient1 = new Discord.WebhookClient({ 
        id: "WEBHOOK_ID", token: "WEBHOOK_TOKEN"
    })

    let channelID2 = "CHANNEL_ID2"
    const webhookClient2 = new Discord.WebhookClient({
        id: "WEBHOOK_ID", token: "WEBHOOK_TOKEN"
    });

    if (message.channel.id == channelID2) {
        message.delete()
        if (message.content.includes('@everyone')) return;
        if (message.content.includes('@here')) return;

        if (url == "") {
            webhookClient2.send({ content: `${message.content}`, username: `${message.author.tag} (${message.author.id})`,
                avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`
            });
        } 
        else {
            webhookClient2.send({ content: `${message.content}`, username: `${message.author.tag} (${message.author.id})`,
                avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                files: [url]
            });
        }
        if (url == "") {
            webhookClient1.send({ content: `${message.content}`,
                username: `${message.author.tag} (${message.author.id})`,
                avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
            });
        }
        else {
            webhookClient1.send({ content: `${message.content}`,
                username: `${message.author.tag} (${message.author.id})`,
                avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                files: [url]
            });
           
        }
    }
    if (message.channel.id == channelID1) {
        if (message.content.includes('@everyone')) return
        if (message.content.includes('@here')) return

        message.delete()

        if (url == "") {
            webhookClient1.send({ content: `${message.content}`,
                username: `${message.author.tag} (${message.author.id})`,
                avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
            });
        }
        else {
            webhookClient1.send({ content: `${message.content}`,
                username: `${message.author.tag} (${message.author.id})`,
                avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                files: [url]
            });
            
        }
        if (url == "") {
            webhookClient2.send({ content: `${message.content}`,
                username: `${message.author.tag} (${message.author.id})`,
                avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
            });
           
        }
        else {
            webhookClient2.send({ content: `${message.content}`,
                username: `${message.author.tag} (${message.author.id})`,
                avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`,
                files: [url]
            });
            
        }
    }
})