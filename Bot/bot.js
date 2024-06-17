// const { Telegraf } = require('telegraf')
import { Telegraf } from 'telegraf';
const TOKEN = '7246810629:AAHP3yKh3_etqP1N1Y3Tg3mo2bvoxYciAVM';
const bot = new Telegraf(TOKEN)

const web_link = 'https://immanueljnr.github.io/mila-game/'
bot.start((ctx) => ctx.reply('Welcome: )))))', {
    reply_markup:{keyboard:[[{text: 'web app',web_app: {url: web_link}}]]}}))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()