# Aplicativo de Música com Teclado

## Visão Geral

Este projeto é uma aplicação simples em JavaScript que permite aos usuários tocar sons utilizando o teclado ou clicando em elementos visuais no navegador. Os usuários também podem compor uma sequência de sons inserindo uma string de teclas.

## Funcionalidades

- **Tocar sons usando eventos do teclado**: Pressione teclas no teclado para reproduzir os sons correspondentes.
- **Tocar sons clicando**: Clique nos elementos da interface para ativar os sons.
- **Compor e reproduzir uma sequência**: Insira uma sequência de notas em um campo de entrada e toque-as.

## Como Funciona

### Event Listeners (Escutadores de Evento)

1. **Entrada pelo Teclado**:

   - Escuta eventos de `keyup` no corpo do documento.
   - Chama a função `playSound` com o código da tecla convertido para letras minúsculas.

   ```javascript
   document.body.addEventListener("keyup", (event) => {
       playSound(event.code.toLowerCase());
   });
   ```

2. **Botão de Composição**:

   - Escuta cliques no botão de composição.
   - Obtém o valor do campo de entrada, divide em notas individuais e chama `playComposition` com a lista de notas.

   ```javascript
   document.querySelector(".composer button").addEventListener("click", (event) => {
       let song = document.querySelector("#input").value;

       if (song) {
           let notes = song.split("");
           playComposition(notes);
       }
   });
   ```

3. **Cliques do Mouse**:

   - Escuta cliques no corpo do documento.
   - Verifica se o elemento clicado possui o atributo `data-key` e toca o som correspondente.

   ```javascript
   document.body.addEventListener("click", (event) => {
       let key = event.target.dataset.key;
       playSound(key);
   });
   ```

### Funções Principais

1. \`\`

   - Reproduz um som correspondente à tecla fornecida.
   - Destaca temporariamente o elemento da tecla.

   ```javascript
   function playSound(sound) {
       let audioElemnt = document.querySelector(`#s_${sound}`);
       let keyElement = document.querySelector(`div[data-key="${sound}"]`);

       if (audioElemnt) {
           audioElemnt.currentTime = 0;
           audioElemnt.play();
       }

       if (keyElement) {
           keyElement.classList.add("active");

           setTimeout(() => {
               keyElement.classList.remove("active");
           }, 300);
       }
   }
   ```

2. \`\`

   - Reproduz uma sequência de notas com um intervalo de 250ms entre cada uma.

   ```javascript
   function playComposition(notes) {
       let cooldown = 0;
       for (let note of notes) {
           setTimeout(() => {
               playSound(`key${note}`);
           }, cooldown);
           cooldown += 250;
       }
   }
   ```

## Como Usar

1. Abra a aplicação em um navegador.
2. Pressione teclas no teclado ou clique nas teclas na tela para tocar os sons.
3. Insira uma sequência de notas (ex.: "asdf") no campo de entrada e clique no botão "Compor" para reproduzi-las.

## Estrutura de Arquivos

- **HTML**: Contém a estrutura do aplicativo, incluindo os campos de entrada e elementos interativos.
- **CSS**: Gerencia o estilo, incluindo o estado ativo das teclas.
- **JavaScript**: Contém a lógica para tocar sons e gerenciar interações do usuário.

## Dependências

Nenhuma dependência externa é necessária para este projeto.

