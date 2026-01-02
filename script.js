// Configurações iniciais
const output = document.getElementById('output');
let looping = true;
let speed = 100;
let attempts = 0;
let statusText = document.getElementById('statusText');
let counter = document.getElementById('counter');
let speedDisplay = document.getElementById('speed');

// Sites para simulação
const sitesPopulares = [
    "Facebook", "Instagram", "Twitter", "Gmail", "YouTube",
    "Netflix", "Amazon", "Google", "WhatsApp", "TikTok",
    "LinkedIn", "Reddit", "Spotify", "Zoom", "Discord",
    "Twitch", "Pinterest", "Snapchat", "Telegram", "GitHub",
    "Microsoft", "Apple", "PayPal", "eBay", "Dropbox",
    "Adobe", "Steam", "Origin", "Uplay", "Epic Games"
];

// Ações de hack
const acoesHack = [
    "Copiando senhas",
    "Roubando cookies de sessão",
    "Extraindo dados bancários",
    "Quebrando criptografia AES-256",
    "Bypass de firewall",
    "Injetando malware RAT",
    "Clonando identidade digital",
    "Explorando vulnerabilidade zero-day",
    "Interceptando tráfego HTTPS",
    "Bruteforce de credenciais",
    "SQL Injection em progresso",
    "Cross-site scripting ativo",
    "Envenenamento de cache DNS",
    "Exploração de buffer overflow",
    "Ataque de negação de serviço",
    "Phishing credentials capture",
    "Keylogger ativo",
    "Remote code execution",
    "Privilege escalation",
    "Data exfiltration"
];

// Logs de sistema
const systemLogs = [
    "Sistema de detecção de intrusos: OFFLINE",
    "Firewall: COMPROMETIDO",
    "Antivírus: DESATIVADO",
    "Logs de segurança: APAGADOS",
    "Conexão criptografada: ESTABELECIDA",
    "Proxy anônimo: ATIVO",
    "VPN: CONECTADO (Servidor: anonymous.r00t)",
    "IP Spoofing: ATIVO",
    "MAC Address: RANDOMIZADO",
    "User-Agent: CAMUFLADO"
];

// Funções auxiliares
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomIP() {
    return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
}

function getRandomHex(length) {
    const chars = '0123456789ABCDEF';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function addGlitchEffect() {
    if (Math.random() > 0.7) {
        const glitchChars = ['█', '▓', '▒', '░', '║', '═', '╬', '╩', '╦', '╠', '╣', '╔', '╗', '╚', '╝'];
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        const randomPosition = Math.floor(Math.random() * output.textContent.length);
        output.textContent = output.textContent.substring(0, randomPosition) + 
                           randomChar + 
                           output.textContent.substring(randomPosition + 1);
        
        // Efeito visual temporário
        output.style.color = `#${getRandomHex(6)}`;
        setTimeout(() => {
            output.style.color = '#0f0';
        }, 50);
    }
}

// Inicialização do sistema
function initSystem() {
    output.textContent = "═══════════════════════════════════════════════════\n";
    output.textContent += "          Site com Loop Hackv1.0 - INICIALIZANDO\n";
    output.textContent += "═══════════════════════════════════════════════════\n\n";
    
    // Logs do sistema
    systemLogs.forEach((log, index) => {
        setTimeout(() => {
            output.textContent += `[SYSTEM] ${log}\n`;
            output.scrollTop = output.scrollHeight;
        }, index * 200);
    });
    
    setTimeout(() => {
        output.textContent += "\n[✓] SISTEMA PRONTO PARA HACK\n";
        output.textContent += `[✓] IP DE ORIGEM: ${getRandomIP()}\n`;
        output.textContent += `[✓] SESSÃO: ${getRandomHex(16)}\n`;
        output.textContent += "═══════════════════════════════════════════════════\n\n";
        output.scrollTop = output.scrollHeight;
        
        // Inicia o loop automático
        setTimeout(loop, 1000);
    }, systemLogs.length * 200 + 500);
}

// Loop principal
function loop() {
    if (!looping) return;
    
    attempts++;
    counter.textContent = attempts;
    
    const acao = getRandomElement(acoesHack);
    const site = getRandomElement(sitesPopulares);
    const ip = getRandomIP();
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    
    // Log com formatação
    output.textContent += `[${timestamp}] ${acao}...\n`;
    output.textContent += `   ↳ ALVO: ${site}\n`;
    output.textContent += `   ↳ IP: ${ip}\n`;
    output.textContent += `   ↳ STATUS: `;
    
    // 80% de sucesso, 20% de falha (para realismo)
    if (Math.random() > 0.2) {
        output.textContent += `SUCESSO (${getRandomHex(8)})\n`;
        output.textContent += `   ↳ DADOS: ${Math.floor(Math.random() * 1000)} MB transferidos\n\n`;
    } else {
        output.textContent += `FALHA - Tentando novamente...\n`;
        output.textContent += `   ↳ ERRO: 0x${getRandomHex(8)}\n\n`;
    }
    
    // Adiciona efeito de glitch ocasional
    addGlitchEffect();
    
    // Scroll automático
    output.scrollTop = output.scrollHeight;
    
    // Tempo variável entre execuções
    const delay = speed + Math.random() * 200 - 100;
    setTimeout(loop, delay);
}

// Controles
document.getElementById('pauseBtn').addEventListener('click', () => {
    looping = !looping;
    statusText.textContent = looping ? "ATIVO" : "PAUSADO";
    document.getElementById('pauseBtn').textContent = looping ? "PAUSE [P]" : "RESUME [P]";
    
    if (looping) {
        output.textContent += `\n[${new Date().toISOString().split('T')[1].split('.')[0]}] HACK RETOMADO\n\n`;
        loop();
    } else {
        output.textContent += `\n[${new Date().toISOString().split('T')[1].split('.')[0]}] HACK PAUSADO\n\n`;
    }
    output.scrollTop = output.scrollHeight;
});

document.getElementById('speedUpBtn').addEventListener('click', () => {
    if (speed > 20) {
        speed -= 20;
        speedDisplay.textContent = speed;
        output.textContent += `[SYSTEM] Velocidade aumentada: ${speed}ms\n`;
        output.scrollTop = output.scrollHeight;
    }
});

document.getElementById('speedDownBtn').addEventListener('click', () => {
    speed += 20;
    speedDisplay.textContent = speed;
    output.textContent += `[SYSTEM] Velocidade reduzida: ${speed}ms\n`;
    output.scrollTop = output.scrollHeight;
});

document.getElementById('clearBtn').addEventListener('click', () => {
    output.textContent = "";
    output.textContent += `[${new Date().toISOString().split('T')[1].split('.')[0]}] TERMINAL LIMPO\n`;
    output.textContent += "═══════════════════════════════════════════════════\n\n";
    output.scrollTop = output.scrollHeight;
});

// Controles por teclado
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "Escape":
            if (looping) {
                looping = false;
                statusText.textContent = "PARADO";
                document.getElementById('pauseBtn').textContent = "START [P]";
                
                output.textContent += "\n═══════════════════════════════════════════════════\n";
                output.textContent += "                   HACK ENCERRADO\n";
                output.textContent += "═══════════════════════════════════════════════════\n\n";
                
                // Estatísticas
                const dadosColetados = Math.floor(attempts * Math.random() * 1000);
                const sucessos = Math.floor(attempts * 0.8);
                
                output.textContent += "📊 RELATÓRIO FINAL:\n";
                output.textContent += `• Tentativas: ${attempts}\n`;
                output.textContent += `• Ataques bem-sucedidos: ${sucessos}\n`;
                output.textContent += `• Dados coletados: ${dadosColetados} MB\n`;
                output.textContent += `• IPs comprometidos: ${Math.floor(attempts * 0.6)}\n`;
                output.textContent += `• Tempo total: ${Math.floor(attempts * speed / 1000)} segundos\n`;
                output.textContent += "═══════════════════════════════════════════════════\n";
            }
            break;
            
        case "r":
        case "R":
            if (!looping) {
                output.textContent += `\n[${new Date().toISOString().split('T')[1].split('.')[0]}] REINICIANDO SISTEMA...\n`;
                output.textContent += "═══════════════════════════════════════════════════\n\n";
                attempts = 0;
                counter.textContent = "0";
                looping = true;
                statusText.textContent = "ATIVO";
                document.getElementById('pauseBtn').textContent = "PAUSE [P]";
                setTimeout(loop, 500);
            }
            break;
            
        case "p":
        case "P":
            looping = !looping;
            statusText.textContent = looping ? "ATIVO" : "PAUSADO";
            document.getElementById('pauseBtn').textContent = looping ? "PAUSE [P]" : "RESUME [P]";
            
            if (looping) {
                output.textContent += `\n[${new Date().toISOString().split('T')[1].split('.')[0]}] HACK RETOMADO\n\n`;
                loop();
            } else {
                output.textContent += `\n[${new Date().toISOString().split('T')[1].split('.')[0]}] HACK PAUSADO\n\n`;
            }
            break;
            
        case "c":
        case "C":
            output.textContent = "";
            output.textContent += `[${new Date().toISOString().split('T')[1].split('.')[0]}] TERMINAL LIMPO\n`;
            output.textContent += "═══════════════════════════════════════════════════\n\n";
            break;
            
        case "ArrowUp":
            if (speed > 20) {
                speed -= 20;
                speedDisplay.textContent = speed;
                output.textContent += `[SYSTEM] Velocidade aumentada: ${speed}ms\n`;
            }
            break;
            
        case "ArrowDown":
            speed += 20;
            speedDisplay.textContent = speed;
            output.textContent += `[SYSTEM] Velocidade reduzida: ${speed}ms\n`;
            break;
    }
    
    output.scrollTop = output.scrollHeight;
});

// Inicializa partículas
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição e tamanho aleatórios
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 2 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Inicialização completa
window.onload = function() {
    initParticles();
    initSystem();
    
    // Adiciona instruções
    setTimeout(() => {
        output.textContent += "[INFO] CONTROLES DISPONÍVEIS:\n";
        output.textContent += "  • ESC: Encerrar hack\n";
        output.textContent += "  • P: Pausar/Retomar\n";
        output.textContent += "  • R: Reiniciar\n";
        output.textContent += "  • C: Limpar terminal\n";
        output.textContent += "  ↑/↓: Ajustar velocidade\n";
        output.textContent += "═══════════════════════════════════════════════════\n\n";
        output.scrollTop = output.scrollHeight;
    }, 3000);
};