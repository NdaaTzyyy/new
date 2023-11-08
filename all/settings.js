require("./module")

global.owner = "6285640575421"
global.creAtor = "6285640575421@s.whatsapp.net"
global.namaowner = "Ndaa"
global.namabot = "NdaaBotz-Md"
global.thumb = fs.readFileSync("./thumb.png")
global.thumbqris = fs.readFileSync("./qris.jpg")
global.packname = "NdaaBotz-Md"
global.author = `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: QyuuNee\nBot: 0895-3253-44177`
global.nameGEDE = "NDAA"
global.ovo = "-" 
global.gopay = "-"
global.shopeepay = "-"
global.pulsatri = "-"
global.phs = "•"
global.prefa = ['', '.']
global.antilink = false

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})