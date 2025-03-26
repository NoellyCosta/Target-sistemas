const readline = require('readline');

// Criação da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter os caracteres de uma string
function inverterString(str) {
    let stringInvertida = '';

    // Loop para percorrer a string de trás para frente e construir a string invertida
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// Solicita ao usuário para digitar a string
rl.question('Digite a string que deseja inverter: ', (inputString) => {
    // Chama a função para inverter a string e exibe o resultado
    let resultado = inverterString(inputString);
    console.log(`Original: ${inputString}`);
    console.log(`Invertida: ${resultado}`);

    // Fecha a interface
    rl.close();
});
