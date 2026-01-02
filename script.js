let looping = false;
const output = document.getElementById('output');

document.getElementById('startLoop').addEventListener('click', () =>{
    if(looping) return;
    looping = true;
    output.textContent = "Loop iniciado. Pressione ESC para parar. \n";

    const loop = () => {
        if (!looping) return;
const sitesPopulares = [
  "Facebook", "Instagram", "Twitter", "Gmail", "YouTube",
  "Netflix", "Amazon", "Google", "WhatsApp", "TikTok",
  "LinkedIn", "Reddit", "Spotify", "Zoom", "Discord",
  "Twitch", "Pinterest", "Snapchat", "Telegram", "GitHub"
];

function siteAleatorio() {
  return sitesPopulares[Math.floor(Math.random() * sitesPopulares.length)];
}
        output.textContent += `Copiando senha do ${siteAleatorio()}... \nCopiado com sucesso!\n`;
        output.scrollTop = output.scrollHeight;
        setTimeout(loop, 100);
    };
    loop();
})

document.addEventListener('keydown', (e) =>{
    if(e.key === "Escape"){
        looping = false;
        output.textContent += "Hack encerrado. \n";
    }
});