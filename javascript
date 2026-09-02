// 1. SELEÇÃO DE ELEMENTOS: O código abaixo busca os elementos do HTML usando o 'id' e os guarda em variáveis.
const botao = document.getElementById('botao-reacao');
const icone = document.getElementById('icone-reacao');
const contador = document.getElementById('contador-reacoes');

// Criamos uma variável de controle para saber se o usuário já reagiu (começa como falso/não reagiu)
let reagido = false;

// 2. ESCUTADOR DE EVENTOS: Diz ao navegador para "ficar ouvindo" e disparar uma ação toda vez que o botão for clicado.
botao.addEventListener('click', () => {
  
  // Pegamos o número atual que está escrito no contador e o transformamos em um número inteiro
  let quantidadeAtual = parseInt(contador.textContent);

  // 3. LÓGICA DO CLIQUE: Se o usuário ainda NÃO reagiu...
  if (!reagido) {
    contador.textContent = quantidadeAtual + 1; // Aumenta o contador em 1
    botao.classList.add('ativo');               // Adiciona uma classe CSS para mudar a cor do botão (ex: azul)
    icone.style.transform = 'scale(1.3)';       // Faz o emoji dar um leve "pulo" (efeito visual no span)
    reagido = true;                             // Muda o estado para "reagido"
    
  } else { 
    // Se o usuário JÁ tinha reagido e clicou de novo (para desmanchar a reação)...
    contador.textContent = quantityAtual - 1;   // Diminui o contador em 1
    botao.classList.remove('ativo');            // Remove a classe CSS de cor ativa
    icone.style.transform = 'scale(1)';         // Faz o emoji voltar ao tamanho normal
    reagido = false;                            // Muda o estado de volta para "não reagido"
  }
});
