const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
       apiapa: 'https://apaapi.herokuapp.com/api', 

}

// Other
global.owner = ['6281359352611']
global.premium = ['6281359352611']
global.youtube = 'https://youtube.com/channel/UCBDzMww5v-UE5gwLOJsVnMg'
global.ownername = 'Chy'
global.botname ='k e c e n g b o t'
global.donasi = {
    saweria: 'https://saweria.co/keceng01',
    nomor: '089680543446'
}
global.packname = 'stickerby'
global.author = 'Chy'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './image/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
