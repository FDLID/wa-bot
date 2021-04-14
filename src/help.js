const help = (pushname, prefix, time) => {
	return ` HAI ${pushname}👋
	
Lib : BAILYES
Waktu : ${time}

▬▭▬▭▬▭▬▭▬▭▬▭▬▭
 *WHATSAPP BOT*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

╔════════════════════
║          *STICKER MENU*
╠════════════════════
╠◪ *${prefix}sticker*
╠◪ *${prefix}stickergif*
╠◪ *${prefix}toimg*
╠◪ *${prefix}ocr*
╠◪ *${prefix}tts* text
╠◪ *${prefix}gtts* text
╠◪ *${prefix}attp* text
╠◪ *${prefix}img2url*
╠◪ *${prefix}emoji2img*
╠════════════════════
║         *WHATSAPP BOT*
╠════════════════════
╠◪ *${prefix}menu*
╠◪ *${prefix}info*
╠◪ *${prefix}owner*
╠◪ *${prefix}offcgroup*
╠◪ *${prefix}installbot*
╠◪ *${prefix}bug* Masalah
╠◪ *${prefix}blocklist*
╠◪ *${prefix}wait*
╠════════════════════
║          *AGAMA MENU*
╠════════════════════
╠◪ *${prefix}quran*
╠◪ *${prefix}quran1*
╠◪ *${prefix}jsholat*
╠◪ *${prefix}doawitir*
╠◪ *${prefix}kisahnabi*
╠◪ *${prefix}niatshalat*
╠◪ *${prefix}wallmuslim*
╠◪ *${prefix}quransurah*
╠◪ *${prefix}randomquran*
╠◪ *${prefix}bacaanshalat*
╠════════════════════
║      *DOWNLOADER MENU*
╠════════════════════
╠◪ *${prefix}play*
╠◪ *${prefix}joox*
╠◪ *${prefix}ytmp4*
╠◪ *${prefix}ytmp3*
╠◪ *${prefix}igvideo*
╠◪ *${prefix}igphoto*
╠◪ *${prefix}mediafire*
╠◪ *${prefix}tiktodmusik*
╠◪ *${prefix}tiktoknowm*
╠════════════════════
║           *MEDIA MENU*
╠════════════════════
╠◪ *${prefix}tiktokstalk*
╠◪ *${prefix}igstalk*
╠◪ *${prefix}igsearch*
╠◪ *${prefix}pinterest*
╠◪ *${prefix}apkmod*
╠◪ *${prefix}apkpure*
╠◪ *${prefix}liputan*
╠◪ *${prefix}foxnews*
╠◪ *${prefix}tribunnews*
╠◪ *${prefix}phcomment*
╠◪ *${prefix}quotemaker*
╠◪ *${prefix}resepmasakan*
╠◪ *${prefix}nulis* text
╠◪ *${prefix}nulis2* text
╠◪ *${prefix}nulis2* nama|kls|text
╠════════════════════
║         *STORAGE MENU*
╠════════════════════
╠◪ *${prefix}fast*
╠◪ *${prefix}bass*
╠◪ *${prefix}blub*
╠◪ *${prefix}toptt*
╠◪ *${prefix}tupai*
╠◪ *${prefix}ghost*
╠◪ *${prefix}gemuk*
╠◪ *${prefix}fasttesf*
╠◪ *${prefix}slowmo*
╠◪ *${prefix}slowmo1*
╠◪ *${prefix}nightcore*
╠════════════════════
║         *MARKER MENU*
╠════════════════════
╠◪ *${prefix}film*
╠◪ *${prefix}jam*
╠◪ *${prefix}wiki*
╠◪ *${prefix}lirik*
╠◪ *${prefix}bitly*
╠◪ *${prefix}quotes*
╠◪ *${prefix}bpfont*
╠◪ *${prefix}pantun*
╠◪ *${prefix}artijodoh*
╠◪ *${prefix}urlshort*
╠◪ *${prefix}qrcode*
╠◪ *${prefix}barcode*
╠◪ *${prefix}pastebin*
╠◪ *${prefix}simi* text
╠◪ *${prefix}memeindo*
╠◪ *${prefix}happymod*
╠◪ *${prefix}bacakomik*
╠════════════════════
║           *RANDOM IMG*
╠════════════════════
╠◪ *${prefix}randomff*
╠◪ *${prefix}randombts*
╠◪ *${prefix}randomwaifu*
╠◪ *${prefix}randomshota*
╠◪ *${prefix}randomhentai*
╠════════════════════
║           *LOGO MENU*
╠════════════════════
╠◪ *${prefix}fakeserti*
╠◪ *${prefix}water*
╠◪ *${prefix}heker*
╠◪ *${prefix}fft*
╠◪ *${prefix}fft1*
╠◪ *${prefix}fft2*
╠◪ *${prefix}fft3*
╠◪ *${prefix}fft4
╠◪ *${prefix}pserti*
╠◪ *${prefix}pserti1*
╠◪ *${prefix}pserti2*
╠◪ *${prefix}pserti3*
╠◪ *${prefix}pserti4*
╠◪ *${prefix}mltserti*
╠◪ *${prefix}mltserti2*
╠◪ *${prefix}mltserti3*
╠◪ *${prefix}mltserti4*
╠◪ *${prefix}mltserti5*
╠◪ *${prefix}wolflogo*
╠◪ *${prefix}darkneon*
╠◪ *${prefix}glitchtext*
╠◪ *${prefix}tweetfake*
╠◪ *${prefix}anakharam*
╠◪ *${prefix}goldbutton*
╠◪ *${prefix}silverbutton*
╠════════════════════
║           *GAME MENU*
╠════════════════════
╠◪ *${prefix}slot*
╠◪ *${prefix}slot1*
╠◪ *${prefix}wa.me*
╠◪ *${prefix}readmore*
╠◪ *${prefix}tebakgambar*
╠════════════════════
║           *GROUP MENU*
╠════════════════════
╠◪ *${prefix}delete*
╠◪ *${prefix}add*
╠◪ *${prefix}kick*
╠◪ *${prefix}clone*
╠◪ *${prefix}leave*
╠◪ *${prefix}groupinfo*
╠◪ *${prefix}promote*
╠◪ *${prefix}demote*
╠◪ *${prefix}listonline*
╠◪ *${prefix}listadmins*
╠◪ *${prefix}linkgroup*
╠◪ *${prefix}tagall*
╠◪ *${prefix}mentionall*
╠◪ *${prefix}ownergroup*
╠◪ *${prefix}tutup*
╠◪ *${prefix}kickall*
╠◪ *${prefix}hidetag*
╠◪ *${prefix}group* open|close
╠◪ *${prefix}closetime*
╠◪ *${prefix}opentime*
╠◪ *${prefix}welcome* 1/0
╠◪ *${prefix}antilink* enable/disable
╠════════════════════
║       *OWNER COMANDD*
╠════════════════════
╠◪ *${prefix}bc*
╠◪ *${prefix}setcr*
╠◪ *${prefix}setprefix*
╠◪ *${prefix}return*
╠◪ *${prefix}clearall*
╠════════════════════
║ *CRATOR FDL & RR-018*
╚════════════════════`
}

exports.help = help
