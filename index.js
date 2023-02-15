require("dotenv").config()
const { Telegraf, Markup } = require('telegraf')
const { read_file, write_file } = require("./fs_api")

const bot = new Telegraf(process.env.BOT_TOKEN)

let menu

bot.start(

    (ctx) => {

        ctx.replyWithHTML('<b>Assalomu alaykum! <i>OSlar Bot</i>ga xush kelibsiz 😀</b>', Markup.keyboard([
            ["Operatsion sistemalar (OS)"],
            ["Arxivdan chiqarish uchun qo‘llanma"],
            ["Arxivlar paroli", "📊 Statistika"],
        ]).resize()
        )


        let user = {}
        try {
            let clients = read_file("clients.json");
            let foundedUser = clients.find(s => s.id == ctx.from.id);
            if (foundedUser) {
                console.log("Bu user ro'yxatdan o'tgan!");
                return 0;
            }
            else {
                user = {
                    id: ctx.from.id,
                    first_name: ctx.from.first_name,
                    username: ctx.from.username
                }
                clients.push(user);
            }
            write_file("clients.json", clients);
        }
        catch ( err ) {
            console.error(err)
        }
    }
)


bot.on("text", (ctx) => {


    if (ctx.update.message.text === 'Operatsion sistemalar (OS)') {
        menu = 2
        ctx.replyWithHTML("<b>Operatsion sistemalar (OS)</b>", Markup.keyboard([
            ["Windows", "Linux"],
            ["MacOS", "Android"],
            ["🔙 Orqaga"]
        ]).resize()
        )
    }


    if(ctx.update.message.text === "Windows"){
        menu = 3
        ctx.replyWithHTML("<b>Windows</b>", Markup.keyboard([
            ["X32", "X64"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Android"){
        menu = 10
        ctx.replyWithHTML("<b>Android</b>", Markup.keyboard([
            ["Android 9.0", "Prime OS"],
            ["Bliss OS"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Android 9.0"){
        menu = 11
        ctx.replyWithHTML("<b>Android</b>", Markup.keyboard([
            ["32 bit", "64 bit"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Linux"){
        menu = 8
        ctx.replyWithHTML("<b>Linux</b>", Markup.keyboard([
            ["Ubuntu", "Kali"],
            ["PureOS", "Debian"],
            ["CentOS", "Puppy"],
            ["BlackLab", "BunsenLabs"],
            ["Arch Linux", "Slackware"],
            ["Solus", "Bodhi Linux"],
            ["Xubuntu", "Fedora"],
            ["Zorin Linux", "PCLinuxOS"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "X32"){
        menu = 4
        ctx.replyWithHTML("<b>X32</b>", Markup.keyboard([
            ["Windows 10 | X32", "Windows 8 | X32"],
            ["Windows 7 | X32", "Windows Vista | X32"],
            ["Windows XP | X32", "Windows 98 | X32"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "X64"){
        menu = 6
        ctx.replyWithHTML("<b>X64</b>", Markup.keyboard([
            ["Windows 11", "Windows 10", "Windows 8"],
            ["Windows 7", "Windows Vista"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "BunsenLabs"){
        menu = 9
        ctx.replyWithHTML("<b>Bunsen Labs</b>", Markup.keyboard([
            ["X86", "amd64"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Fedora"){
        menu = 9
        ctx.replyWithHTML("<b>Fedora</b>", Markup.keyboard([
            ["IoT", "Workstation"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Windows 11"){
        menu = 7
        ctx.replyWithHTML("<b>Windows 11</b>", Markup.keyboard([
            ["Windows 11 Russian Pro 21H2"],
            ["Windows 11 by SmokieBlahBlah"],
            ["Windows 11 21H2 by Tatata"],
            ["Windows 11 21H2 by OneSmile"],
            ["Windows 11 Compact&Full by flibustier"],
            ["Windows 11 21H2 Pro Insider"],
            ["Windows 11 21H2 rus gx"],
            ["Windows 11 21H2 by Ovgorskiy"],
            ["Windows 11 21H2 Enterprice by Zosma"],
            ["Windows 11 IoT Enterprice by Xalex"],
            ["Windows 11 Pro 21H2 by OneSmile"],
            ["Windows 11 IP LTSC by Djannet"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Windows 10 | X32"){
        menu = 5
        ctx.replyWithHTML("<b>Windows 10 X32</b>", Markup.keyboard([
            ["1507", "1511", "1607", "1703"],
            ["1709", "1803", "1809", "1903"],
            ["1909", "2004", "20H2", "21H1"],
            ["21H2"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Windows 10"){
        menu = 7
        ctx.replyWithHTML("<b>Windows 10 X32</b>", Markup.keyboard([
            ["1507 | X64", "1511 | X64"], ["1607 | X64", "1703 | X64"],
            ["1709 | X64", "1803 | X64"], ["1809 | X64", "1903 | X64"],
            ["1909 | X64", "2004 | X64"], ["20H2 | X64", "21H1 | X64"],
            ["21H2 | X64"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Windows 8"){
        menu = 7
        ctx.replyWithHTML("<b>Windows 8</b>", Markup.keyboard([
            ["Professional | X64", "Enterprice | X64"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Windows 7"){
        menu = 7
        ctx.replyWithHTML("<b>Windows 7</b>", Markup.keyboard([
            ["Ultimate | X64"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Windows 8 | X32"){
        menu = 5
        ctx.replyWithHTML("<b>Windows 8 X32</b>", Markup.keyboard([
            ["Professional | X32", "Enterprice | X32"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Windows 7 | X32"){
        menu = 5
        ctx.replyWithHTML("<b>Windows 7 X32</b>", Markup.keyboard([
            ["Ultimate"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "Windows XP | X32"){
        menu = 5
        ctx.replyWithHTML("<b>Windows 7 X32</b>", Markup.keyboard([
            ["Professional", "Chip"],
            ["🔙 Orqaga", "🔝 Asosiy menyu"]
        ]).resize())
    }


    if(ctx.update.message.text === "1507" || ctx.update.message.text === "1507 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1507.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1507.txt"})
    }


    if(ctx.update.message.text === "1511" || ctx.update.message.text === "1511 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1511.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1511.txt"})
    }
    
    
    if(ctx.update.message.text === "1607" || ctx.update.message.text === "1607 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1607.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1607.txt"})
    }


    if(ctx.update.message.text === "1703" || ctx.update.message.text === "1703 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1703.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1703.txt"})
    }


    if(ctx.update.message.text === "1709" || ctx.update.message.text === "1709 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1709.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1709.txt"})
    }


    if(ctx.update.message.text === "1803" || ctx.update.message.text === "1803 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1803.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1803.txt"})
    }


    if(ctx.update.message.text === "1809" || ctx.update.message.text === "1809 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1809.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1809.txt"})
    }


    if(ctx.update.message.text === "1903" || ctx.update.message.text === "1903 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1903.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1903.txt"})
    }


    if(ctx.update.message.text === "1909" || ctx.update.message.text === "1909 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_1909.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_1909.txt"})
    }


    if(ctx.update.message.text === "2004" || ctx.update.message.text === "2004 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_2004.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_2004.txt"})
    }


    if(ctx.update.message.text === "20H2" || ctx.update.message.text === "20H2 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_20H2.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_20H2.txt"})
    }


    if(ctx.update.message.text === "21H1" || ctx.update.message.text === "21H1 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_21H1.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_21H1.txt"})
    }


    if(ctx.update.message.text === "21H2" || ctx.update.message.text === "21H2 | X64"){
        ctx.replyWithPhoto({source: "./img/win10_21H2.jpg"}) && ctx.replyWithDocument({source: "./docs/win10_21H2.txt"})
    }


    if(ctx.update.message.text === "Professional | X32" || ctx.update.message.text === "Professional | X64"){
        ctx.replyWithPhoto({source: "./img/win8_professional.jpg"}) && ctx.replyWithDocument({source: "./docs/win8_professional.txt"})
    }


    if(ctx.update.message.text === "Enterprice | X32" || ctx.update.message.text === "Enterprice | X64"){
        ctx.replyWithPhoto({source: "./img/win8_enterprice.jpg"}) && ctx.replyWithDocument({source: "./docs/win8_enterprice.txt"})
    }


    if(ctx.update.message.text === "Ultimate" || ctx.update.message.text === "Ultimate | X64"){
        ctx.replyWithPhoto({source: "./img/win7_ultimate.jpg"}) && ctx.replyWithDocument({source: "./docs/win7_ultimate.txt"})
    }


    if(ctx.update.message.text === "Windows Vista | X32" || ctx.update.message.text === "Windows Vista"){
        ctx.replyWithPhoto({source: "./img/winvista.jpg"}) && ctx.replyWithDocument({source: "./docs/winvista.txt"})
    }


    if(ctx.update.message.text === "Professional"){
        ctx.replyWithPhoto({source: "./img/winxp_professional.jpg"}) && ctx.replyWithDocument({source: "./docs/winxp_professional.txt"})
    }


    if(ctx.update.message.text === "Chip"){
        ctx.replyWithPhoto({source: "./img/winxp_chip.jpg"}) && ctx.replyWithDocument({source: "./docs/winxp_chip.txt"})
    }

    if(ctx.update.message.text === "Windows 98 | X32"){
        ctx.replyWithPhoto({source: "./img/win98.jpg"}) && ctx.replyWithDocument({source: "./docs/win98.txt"})
    }


    if(ctx.update.message.text === "Windows 11 Russian Pro 21H2"){
        ctx.replyWithPhoto({source: "./img/win11_russianpro.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_russianpro.txt"})
    }


    if(ctx.update.message.text === "Windows 11 by SmokieBlahBlah"){
        ctx.replyWithPhoto({source: "./img/win11_smokieblahblah.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_smokieblahblah.txt"})
    }


    if(ctx.update.message.text === "Windows 11 21H2 by Tatata"){
        ctx.replyWithPhoto({source: "./img/win11_tatata.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_tatata.txt"})
    }


    if(ctx.update.message.text === "Windows 11 21H2 by OneSmile"){
        ctx.replyWithPhoto({source: "./img/win11_onesmile.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_onesmile.txt"})
    }


    if(ctx.update.message.text === "Windows 11 Compact&Full by flibustier"){
        ctx.replyWithPhoto({source: "./img/win11_flibustier.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_flibustier.txt"})
    }


    if(ctx.update.message.text === "Windows 11 21H2 Pro Insider"){
        ctx.replyWithPhoto({source: "./img/win11_proinsider.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_proinsider.txt"})
    }


    if(ctx.update.message.text === "Windows 11 21H2 rus gx"){
        ctx.replyWithPhoto({source: "./img/win11_rusgx.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_rusgx.txt"})
    }


    if(ctx.update.message.text === "Windows 11 21H2 by Ovgorskiy"){
        ctx.replyWithPhoto({source: "./img/win11_ovgorskiy.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_ovgorskiy.txt"})
    }


    if(ctx.update.message.text === "Windows 11 21H2 Enterprice by Zosma"){
        ctx.replyWithPhoto({source: "./img/win11_zosma.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_zosma.txt"})
    }


    if(ctx.update.message.text === "Windows 11 IoT Enterprice by Xalex"){
        ctx.replyWithPhoto({source: "./img/win11_xalex.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_xalex.txt"})
    }


    if(ctx.update.message.text === "Windows 11 Pro 21H2 by OneSmile"){
        ctx.replyWithPhoto({source: "./img/win11_djannet.jpg"}) && ctx.replyWithDocument({source: "./docs/win11pro_onesmile.txt"})
    }


    if(ctx.update.message.text === "Windows 11 IP LTSC by Djannet"){
        ctx.replyWithPhoto({source: "./img/win11_djannet.jpg"}) && ctx.replyWithDocument({source: "./docs/win11_djannet.txt"})
    }


    if(ctx.update.message.text === "Ubuntu"){
        ctx.replyWithPhoto("https://synaptica.info/wp-content/uploads/2020/03/cropped-ubuntu.jpg") && ctx.replyWithDocument({source: "./docs/ubuntu.txt"})
    }


    if(ctx.update.message.text === "Kali"){
        ctx.replyWithPhoto("https://soft.mdco.me/i/FFThNyjTzoeVPpbRtXTc3ce0vfs.jpeg") && ctx.replyWithDocument({source: "./docs/kali.txt"})
    }


    if(ctx.update.message.text === "PureOS"){
        ctx.replyWithPhoto("https://en.wikipedia.org/wiki/PureOS#/media/File:ScreenshotPureOS8.png") && ctx.replyWithDocument({source: "./docs/pureos.txt"})
    }


    if(ctx.update.message.text === "Debian"){
        ctx.replyWithPhoto("https://img.reg.ru/faq/20210531_chto_takoe_debian_1.png") && ctx.replyWithDocument({source: "./docs/debian.txt"})
    }


    if(ctx.update.message.text === "CentOS"){
        ctx.replyWithPhoto("https://www.logolynx.com/images/logolynx/fc/fcfdee7682c7e8e8a9a10b10f770b890.png") && ctx.replyWithDocument({source: "./docs/centos.txt"})
    }


    if(ctx.update.message.text === "Puppy"){
        ctx.replyWithPhoto("https://ia600701.us.archive.org/33/items/Puppy_Linux_Lupu_Japanese/wallpaperpuppy3d-wide.jpg") && ctx.replyWithDocument({source: "./docs/puppy.txt"})
    }


    if(ctx.update.message.text === "BlackLab"){
        ctx.replyWithPhoto("https://news-cdn.softpedia.com/images/news2/Black-Lab-Linux-6-0-Beta-1-Is-Now-Based-on-a-Heavily-Modified-GNOME-3-Desktop-Gallery-458821-2.jpg") && ctx.replyWithDocument({source: "./docs/blacklab.txt"})
    }


    if(ctx.update.message.text === "X86"){
        ctx.replyWithPhoto({source: "./img/bunsenlabs_x86.jpg"}) && ctx.replyWithDocument({source: "./docs/bunsenlabs_x86.txt"})
    }


    if(ctx.update.message.text === "amd64"){
        ctx.replyWithPhoto({source: "./img/bunsenlabs_amd64.jpg"}) && ctx.replyWithDocument({source: "./docs/bunsenlabs_amd64.txt"})
    }


    if(ctx.update.message.text === "Arch Linux"){
        ctx.replyWithPhoto("https://wallpapercave.com/wp/wp3459169.png") && ctx.replyWithDocument({source: "./docs/archlinux.txt"})
    }


    if(ctx.update.message.text === "Slackware"){
        ctx.replyWithPhoto("https://pbs.twimg.com/media/FKy95vhXEAMsR0v.jpg") && ctx.replyWithDocument({source: "./docs/slackware.txt"})
    }


    if(ctx.update.message.text === "Solus"){
        ctx.replyWithPhoto("https://pingvinus.ru/cr_images/userpicture/n/2232-0.png") && ctx.replyWithDocument({source: "./docs/solus.txt"})
    }


    if(ctx.update.message.text === "Bodhi Linux"){
        ctx.replyWithPhoto("https://i.imgur.com/Gothr.jpg") && ctx.replyWithDocument({source: "./docs/bodhi.txt"})
    }


    if(ctx.update.message.text === "Xubuntu"){
        ctx.replyWithPhoto("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Xubuntu_logo.svg/2048px-Xubuntu_logo.svg.png") && ctx.replyWithDocument({source: "./docs/xubuntu.txt"})
    }


    if(ctx.update.message.text === "IoT"){
        ctx.replyWithPhoto("https://cutewallpaper.org/21/fedora-linux-wallpaper/Fedora-Linux-Wallpapers-by-mylittledemons-on-DeviantArt.png") && ctx.replyWithDocument({source: "./docs/iot.txt"})
    }


    if(ctx.update.message.text === "Workstation"){
        ctx.replyWithPhoto("https://www.linuxed.net/wp-content/uploads/2018/12/fedora-1280x720.png") && ctx.replyWithDocument({source: "./docs/workstation.txt"})
    }


    if(ctx.update.message.text === "Zorin Linux"){
        ctx.replyWithPhoto("https://img.wallpapersafari.com/desktop/1920/1080/34/27/bmxPuK.png") && ctx.replyWithDocument({source: "./docs/zorin.txt"})
    }


    if(ctx.update.message.text === "PCLinuxOS"){
        ctx.replyWithPhoto("https://mydistroreview.com/wp-content/uploads/2019/06/PCLinuxOSDesktop.jpg") && ctx.replyWithDocument({source: "./docs/pclinuxos.txt"})
    }


    if(ctx.update.message.text === "MacOS"){
        ctx.replyWithPhoto("https://4.bp.blogspot.com/-tbO5f1WBhbE/TdhnAHl55MI/AAAAAAAABW0/Tf_0AM_7zp4/s1600/1+Apple+Mac.jpg") && ctx.replyWithDocument({source: "./docs/macos.txt"})
    }


    if(ctx.update.message.text === "32 bit"){
        ctx.replyWithPhoto({source: "./img/android_32.jpg"}) && ctx.replyWithDocument({source: "./docs/android_32.txt"})
    }


    if(ctx.update.message.text === "64 bit"){
        ctx.replyWithPhoto({source: "./img/android_64.jpg"}) && ctx.replyWithDocument({source: "./docs/android_64.txt"})
    }


    if(ctx.update.message.text === "Prime OS"){
        ctx.replyWithPhoto("https://1.bp.blogspot.com/-fjtZKU1PhBc/YNruAFw16pI/AAAAAAAABwE/01VHWk8rtZwOL55z1tdhIxUee0gwgky3gCLcBGAsYHQ/s16000/primeos-logo-png.png") && ctx.replyWithDocument({source: "./docs/primeos.txt"})
    }


    if(ctx.update.message.text === "Bliss OS"){
        ctx.replyWithPhoto("https://www.ajudandroid.com.br/wp-content/uploads/2018/10/bliss-os-logo.jpg") && ctx.replyWithDocument({source: "./docs/blissos.txt"})
    }


    if (ctx.update.message.text === 'Arxivlar paroli') {
        ctx.sendPhoto("https://ru.wikipedia.org/wiki/Telegram#/media/Файл:Telegram_2019_Logo.svg")
    }


    if (ctx.update.message.text === 'Arxivdan chiqarish uchun qo‘llanma') {
        ctx.sendPhoto("https://ru.wikipedia.org/wiki/Instagram#/media/File:Instagram logo 2022.svg")
    }


    if (ctx.update.message.text === '📊 Statistika') {
        const d = new Date();
        let data = "\n<b>🗓 Bugungi sana: </b>" + d.getDate() + "." + d.getMonth() + "." + d.getFullYear()
        let clients = read_file("clients.json");
        let time = "\n<b>🕰 Vaqt: </b>" + d.getHours() + ":" + d.getMinutes()
        let anaqa = "<b>👤 Botdan foydalanuvchilar soni: </b>"
        anaqa = anaqa + clients.length
        anaqa = anaqa + data
        anaqa = anaqa + time
        ctx.replyWithHTML(anaqa)
    }


    if (ctx.update.message.text === "🔙 Orqaga") {


        if (menu == 2) {
            menu = 1
            ctx.replyWithHTML('<b>Bosh menyudasiz</b>', Markup.keyboard([
                ["Operatsion sistemalar (OS)"],
                ["Arxivdan chiqarish uchun qo‘llanma"],
                ["Arxivlar paroli", "📊 Statistika"],
            ]).resize())
        }


        if (menu == 11) {
            menu = 10
            return ctx.replyWithHTML("<b>Android</b>", Markup.keyboard([
                ["Android 9.0", "Prime OS"],
                ["Bliss OS"],
                ["🔙 Orqaga", "🔝 Asosiy menyu"]
            ]).resize())
        }


        if(menu == 5){
            menu = 4
            return ctx.replyWithHTML("<b>X32</b>", Markup.keyboard([
                ["Windows 10 | X32", "Windows 8 | X32"],
                ["Windows 7 | X32", "Windows Vista | X32"],
                ["Windows XP | X32", "Windows 98 | X32"],
                ["🔙 Orqaga", "🔝 Asosiy menyu"]
            ]).resize())
        }


        if(menu == 9){
            menu = 8
            return ctx.replyWithHTML("<b>Linux</b>", Markup.keyboard([
                ["Ubuntu", "Kali"],
                ["PureOS", "Debian"],
                ["CentOS", "Puppy"],
                ["BlackLab", "BunsenLabs"],
                ["Arch Linux", "Slackware"],
                ["Solus", "Bodhi Linux"],
                ["Xubuntu", "Fedora"],
                ["Zorin Linux", "PCLinuxOS"],
                ["🔙 Orqaga", "🔝 Asosiy menyu"]
            ]).resize())
        }


        if(menu == 7){
            menu = 6
            return ctx.replyWithHTML("<b>X64</b>", Markup.keyboard([
                ["Windows 11", "Windows 10", "Windows 8"],
                ["Windows 7", "Windows Vista"],
                ["🔙 Orqaga", "🔝 Asosiy menyu"]
            ]).resize())
        }


        if(menu == 4 || menu  == 6){
            menu = 3
            return ctx.replyWithHTML("<b>Windows</b>", Markup.keyboard([
                ["X32", "X64"],
                ["🔙 Orqaga", "🔝 Asosiy menyu"]
            ]).resize())
        }


        if(menu == 3 || menu == 8 || menu == 10){
            menu = 2
            return ctx.replyWithHTML("<b>Operatsion sistemalar (OS)</b>", Markup.keyboard([
                ["Windows", "Linux"],
                ["MacOS", "Android"],
                ["🔙 Orqaga"]
            ]).resize())
        }
    }


    if (ctx.update.message.text === "🔝 Asosiy menyu") {
        ctx.replyWithHTML('<b>Bosh menyudasiz</b>', Markup.keyboard([
            ["Operatsion sistemalar (OS)"],
            ["Arxivdan chiqarish uchun qo‘llanma"],
            ["Arxivlar paroli", "📊 Statistika"],
        ]).resize())
    }


})


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));