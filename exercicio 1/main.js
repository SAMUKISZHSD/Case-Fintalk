function isPalindrome(str) {
    // Remove caracteres não alfanuméricos e espaços, e converte para minúsculas
    str = str.replace(/[\W_]/g, '').toLowerCase();

    // Reverte a string
    const reversedStr = str.split('').reverse().join('');

    // Verifica se a string original é igual à string revertida
    return str === reversedStr;
}

function checkPalindrome() {
    // Obtém o valor do elemento com o ID 'inputTexto'
    const inputText = document.getElementById('inputTexto').value;

    // Remove espaços e caracteres não alfanuméricos, converte para minúsculas e verifica se o texto está vazio
    const processedText = inputText.replace(/[\W_]/g, '').toLowerCase();

    // Verifica se o texto está vazio ou contém apenas espaços em branco
    if (processedText.trim() === '') {
        alert('Por favor, digite uma frase...');
        return;
    }

    // Verifica se o texto é um palíndromo chamando a função isPalindrome
    if (isPalindrome(processedText)) {
        alert('É um palíndromo');
    } else {
        alert('Não é um palíndromo');
    }
}
