//*THIS DANGEROUS BUG 🐛 CODING BY ICONIC TECH ♻️ THE FATHER OF 3) THANKS FOR USING OUR PROJECT*\\

const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["923166069400@s.whatsapp.net"]
global.botnumber = "923166069400"
global.autotyping = true
global.autorecoding = true
global.botnumber = ['923166069400']
global.DevName = "Hami Hacker"
global.ownerName = "Hami hacker"
global.Botname = "Hammad Hacker Md"
global.versionBot = "𝟏"
global.packname = "iconic tech"
global.author = "powered by Hami Hacker"
global.thumb = fs.readFileSync("./TerminatorMedia/iconic.jpg")
global.ThM = 'https://files.catbox.moe/jlrljf.jpg'
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
