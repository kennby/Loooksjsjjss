import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51902247905', 'kenn', true],
  ['51902247905', 'kenxn', false],

] //Numeros de owner 

global.mods = ['']
global.prems = ['', '', '']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  KasuApi: 'https://apikasu.onrender.com',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://apikasu.onrender.com': 'SebastianDevelop',
  'https://zenzapis.xyz': '675e34de8a',
  'https://api.fgmods.xyz': 'Rex6QGQI'
}

// CONEXION CON CODIGO DE 8 DIGITOS

global.KasumaCode = "" 
global.confirmCode = ""


// KASU API
global.apikasu = "https://apikasu.onrender.com"
global.apikeykasu = "SebastianDevelop"

//APIS
global.tiktokkey = ['GIf4o4qJ']
global.soundcloudID = ["iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX"]
global.apikeyocr = ["8e65f273cd88957"]
global.githubapi = ["https://api.github.com/repos"]
global.drop = ["https://dropmail.me"]
global.dropmail = ["https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D"]
global.apiocr = ["https://api.ocr.space"]
global.api2 = ["https://api-brunosobrino.onrender.com"]
global.soundcloud = ["https://api-v2.soundcloud.com"]
global.lolhuman = ["https://api.lolhuman.xyz"]
global.akuari = ["https://api.akuari.my.id"]
global.xnxx = ["xnxx.com"]
global.tunyurl = ["https://tinyurl.com"]
global.peliplus = ["https://pelisplushd.cx/search/"]
global.apiconversion = ["https://api.exchangerate-api.com"]
global.conversiondocs = ["https://www.easymarkets.com/int/es/learn-centre/discover-trading/currency-acronyms-and-abbreviations/"]

// Sticker WM
global.packname = 'ᴏɴʏx ʙᴏᴛ'
global.author = 'ᴋᴇɴɴ'
global.waig = 'Sígueme en Instagram\nhttps://www.instagram.com/kennxds/\n'
global.wagp = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.wagit = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.wayt = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.wapyp = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'

global.fglog = 'https://telegra.ph/file/6085ce3b2ebf6b98df55b.jpg'
global.numero = ['51902247905']
global.wait = 'ɢᴀʀɢᴀɴᴅᴏ..'
global.rwait = '👌'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
