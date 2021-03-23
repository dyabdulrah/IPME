//----------------------------------------------------------------------------------------------------------------------------------
//Hertz Requirements
//discord.js ( with discordjs/opus as the voice handler)
//
//----------------------------------------------------------------------------------------------------------------------------------
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const config = require("./config.json");



const client = new Discord.Client();
/*
Map => [GuildId], musiqueQueue
*/
const queue = new Map();
//----------------------------------------------------------------------------------------------------------------------------------
//Hertz Functions
/*
execute(args[1], serverQueue)
===> args[1] -> the music URL
===> serverQueue -> the guild id queue
--------------------------------------|
*/
/*
skip(message, serverQueue
===> message -> Discord Message Object
===> serverQueue -> the guild id queue
--------------------------------------|
*/
//----------------------------------------------------------------------------------------------------------------------------------
