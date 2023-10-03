// Função para verificar se um número é primo
function isPrime(num) {
    // Verifica se o número é menor que 2 (números menores que 2 não são primos)
    if (num < 2) return false;
  
    // Itera de 2 até o número - 1 para verificar se há algum divisor
    for (let i = 2; i < num; i++) {
      // Se o número é divisível por i (ou seja, não é primo)
      if (num % i === 0) {
        return false;  // Retorna falso, pois não é um número primo
      }
    }
  
    return true;  // Retorna verdadeiro, pois é um número primo
  }
  
  // Função para encontrar números primos até o número inserido pelo usuário
  function findPrimes() {
    // Obtém o número inserido pelo usuário do elemento de entrada HTML
    const inputNumber = parseInt(document.getElementById('inputNumber').value, 10);
  
    // Verifica se o número inserido não é um número válido ou é menor que 1
    if (isNaN(inputNumber) || inputNumber < 1) {
      alert('Por favor, insira um número inteiro válido.');  // Mostra um alerta
      return;  // Retorna para encerrar a função
    }
  
    const primes = [];  // Inicializa um array para armazenar os números primos
  
    // Itera de 2 até o número inserido pelo usuário
    for (let i = 2; i <= inputNumber; i++) {
      // Se o número atual (i) é primo, adiciona ao array de primos
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    const outputElement = document.getElementById('output');  // Obtém o elemento de saída
    // Define o texto do elemento de saída com os números primos encontrados
    outputElement.textContent = 'Números primos até ' + inputNumber + ': ' + primes.join(', ');
  }
  