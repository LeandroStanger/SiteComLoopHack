# 🔁 Site com Loop Hack

Um projeto web minimalista e interativo que demonstra um efeito visual ou animação em loop ativado por uma simples ação do usuário.

**🔗 Demonstração Online:** [https://leandrostanger.github.io/SiteComLoopHack/](https://leandrostanger.github.io/SiteComLoopHack/)

**📦 Repositório:** [https://github.com/LeandroStanger/SiteComLoopHack](https://github.com/LeandroStanger/SiteComLoopHack)

## ✨ Funcionalidades

- **Interface Ultra Minimalista**: Design limpo com apenas os elementos essenciais
- **Interação por Um Único Botão**: Todo o efeito é acionado através de um botão central
- **Efeito Visual em Loop**: Implementação de animação ou efeito que se repete continuamente
- **Responsividade**: Funciona em diferentes tamanhos de tela e dispositivos
- **Código Leve**: Carregamento rápido sem dependências externas

## 🖱️ Como Usar

1. **Acesse a página**: [https://leandrostanger.github.io/SiteComLoopHack/](https://leandrostanger.github.io/SiteComLoopHack/)
2. **Clique no botão "Clique Aqui"** para iniciar o efeito
3. **Observe a animação/efeito** que será executado em loop
4. **Experimente diferentes interações**:
   - Cliques adicionais podem modificar o efeito
   - Tente recarregar a página para resetar
   - Use as ferramentas de desenvolvedor (F12) para inspecionar

## 📁 Estrutura do Projeto

```
SiteComLoopHack/
├── index.html          # Página HTML principal
├── style.css           # Estilos CSS da aplicação
├── script.js           # Lógica JavaScript do loop/hack
└── LICENSE             # Licença do projeto (MIT)
```

### Detalhamento dos Arquivos:

| Arquivo | Propósito | Conteúdo Principal |
|---------|-----------|-------------------|
| **index.html** | Estrutura da página | Título, botão de interação, links para CSS/JS |
| **style.css** | Estilização visual | Estilos do botão, animações CSS, layout responsivo |
| **script.js** | Lógica interativa | Event listeners, funções de loop, manipulação DOM |

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página web
- **CSS3**: Estilização, animações e efeitos visuais
- **JavaScript (ES6+)**: Implementação do comportamento interativo
- **GitHub Pages**: Hospedagem estática gratuita

## 💻 Execução Local

Siga estas etapas para executar o projeto em sua máquina local:

### Método 1: Abrir diretamente no navegador
```bash
# Clone o repositório
git clone https://github.com/LeandroStanger/SiteComLoopHack.git

# Navegue até a pasta do projeto
cd SiteComLoopHack

# Abra o arquivo index.html no navegador
# (Duplo clique no arquivo ou arraste para o navegador)
```

### Método 2: Usar um servidor local
```bash
# Com Python 3
python3 -m http.server

# Com PHP
php -S localhost:8000

# Com Node.js (instale http-server primeiro)
npm install -g http-server
http-server
```

Após iniciar o servidor, acesse `http://localhost:8000` (ou porta correspondente) no navegador.

## 🔧 Personalização

### Modificando o Efeito Visual
Para alterar o comportamento do loop, edite o arquivo `script.js`:

```javascript
// Exemplo de estrutura de loop possível
function startLoop() {
    // Implementação do efeito
    // Possivelmente usando:
    // - setInterval()
    // - requestAnimationFrame()
    // - Manipulação de classes CSS
}

// Event listener para o botão
document.getElementById('hack-button').addEventListener('click', startLoop);
```

### Ajustando a Estética
Edite `style.css` para personalizar:
- Cores do botão e fundo
- Animações CSS (@keyframes)
- Tipografia e tamanhos
- Efeitos de transição

### Alterando o Texto
Modifique `index.html` para:
- Mudar o título da página
- Alterar o texto do botão
- Adicionar instruções ou descrições

## 🔍 Possíveis Implementações

Baseado no nome do projeto, o "Loop Hack" pode se referir a:

### 1. **Loop de Animação CSS**
```css
@keyframes hackEffect {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

### 2. **Loop com JavaScript**
```javascript
// Usando requestAnimationFrame para animação fluida
function animate() {
    // Atualiza efeito visual
    requestAnimationFrame(animate);
}
```

### 3. **Efeito Visual "Glitch"**
- Distorção de elementos
- Mudanças rápidas de cores
- Deslocamento de pixels

### 4. **Manipulação de DOM em Loop**
- Criação/remoção contínua de elementos
- Modificação de estilos em sequência
- Efeitos de partículas ou elementos dinâmicos

## 🧩 Dicas para Exploração

1. **Inspecione o Código**: Use F12 para ver o console e depurar
2. **Experimente Modificações**: Tente alterar valores no CSS/JS ao vivo
3. **Teste em Diferentes Dispositivos**: Verifique a responsividade
4. **Analise a Performance**: Monitore o uso de CPU/GPU durante o loop

## 📝 Considerações Técnicas

- **Performance**: Loops infinitos devem ser otimizados para não travar o navegador
- **Acessibilidade**: Considerar usuários com sensibilidade a efeitos visuais
- **Compatibilidade**: Testar em diferentes navegadores e versões

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona feature incrível'`)
4. Push para a branch (`git push origin feature/incrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Autor**: [Leandro Stanger](https://github.com/LeandroStanger)  

*Para entender completamente o efeito implementado, recomenda-se clicar no botão e explorar o código-fonte!*
