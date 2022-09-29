const { Telegraf, Markup } = require('telegraf');
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);
const tod = require('tod-api');
bot.start((ctx) => ctx.reply('Здарова пират мира игр! \n------------------------------------------------------------------------------------ \nБот найдет тебе модификации игр по твоему запросу! \n------------------------------------------------------------------------------------ \nИпользуй команду /mod [название игры] - для поиска игр с модификацией... \n------------------------------------------------------------------------------------ \nDIMES PRODUCTION - HAPPY MOD & TODAPI'));
bot.help((ctx) => ctx.reply('Ипользуй команду /mod [название игры] - для поиска игр с модификацией'));
bot.launch();

bot.command("mod", async (ctx) => {
    try {
        async function secaget() {
            if(ctx.message.text.split(' ')[2] == undefined) {
                return
            }else {
                let seca = ctx.message.text.split(' ')[2]
                return seca
            }
        }
        await secaget().then(m => {
            if(m == undefined) {
                const query = ctx.message.text.split(" ")[1];
                if(ctx.message.text.split(' ')[1] == undefined) {
                    ctx.reply('Вы не ввели название игры...')
                }else {
                    tod.happymod(query)
                    .then(result => {
                        ctx.replyWithHTML(`Результаты по запросу(HappyMod): \n<i>${query}</i>`, Markup.inlineKeyboard(
                            [
                                [Markup.button.url(`${result[0].name} `, `${result[0].link}`)],
                                [Markup.button.url(`${result[1].name} `, `${result[1].link}`)],
                                [Markup.button.url(`${result[2].name} `, `${result[2].link}`)],
                                [Markup.button.url(`${result[3].name} `, `${result[3].link}`)],
                                [Markup.button.url(`${result[4].name} `, `${result[4].link}`)],
                                [Markup.button.url(`${result[5].name} `, `${result[5].link}`)],
                                [Markup.button.url(`${result[6].name} `, `${result[6].link}`)],
                                [Markup.button.url(`${result[7].name} `, `${result[7].link}`)],
                                [Markup.button.url(`${result[8].name} `, `${result[8].link}`)],
                                [Markup.button.url(`${result[9].name} `, `${result[9].link}`)]
                            ]
                        )); 
                    });
                } 
            }else {
                const query = `${ctx.message.text.split(" ")[1]} ` + `${m}`;
                if(ctx.message.text.split(' ')[1] == undefined) {
                    ctx.reply('Вы не ввели название игры...')
                }else {
                    tod.happymod(query)
                    .then(result => {
                        ctx.replyWithHTML(`Результаты по запросу(HappyMod): \n<i>${query}</i>`, Markup.inlineKeyboard(
                            [
                                [Markup.button.url(`${result[0].name} `, `${result[0].link}`)],
                                [Markup.button.url(`${result[1].name} `, `${result[1].link}`)],
                                [Markup.button.url(`${result[2].name} `, `${result[2].link}`)],
                                [Markup.button.url(`${result[3].name} `, `${result[3].link}`)],
                                [Markup.button.url(`${result[4].name} `, `${result[4].link}`)],
                                [Markup.button.url(`${result[5].name} `, `${result[5].link}`)],
                                [Markup.button.url(`${result[6].name} `, `${result[6].link}`)],
                                [Markup.button.url(`${result[7].name} `, `${result[7].link}`)],
                                [Markup.button.url(`${result[8].name} `, `${result[8].link}`)],
                                [Markup.button.url(`${result[9].name} `, `${result[9].link}`)]
                            ]
                        )); 
                    });
                } 
            }
               
        })
    }catch(e) {
        console.error(e);
    }
})

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));