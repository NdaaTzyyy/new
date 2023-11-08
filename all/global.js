require("./module")
require("./color")
require("./settings")
require("./spinner")
require("./upload")
require("./mess")
require("./exif")
require("./style")
require("./ssweb")
require("./ttp")
require("./photooxy")
require("./textpro")
require("./binary")
require("./happymod")
require("./sticker")
require("./resep")
require("./jadibot")
require("./remini")
require("./pinterest")
require('./quote.js')
require('./formatp')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})