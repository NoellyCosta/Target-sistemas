//2 

function fibonacci(num) {
    let fibSequence = [0, 1]; // Inicia a sequência com 0 e 1

    // Gera a sequência de Fibonacci até o número informado
    while (fibSequence[fibSequence.length - 1] < num) {
        const nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }

    // Verifica se o número informado está na sequência
    if (fibSequence.includes(num)) {
        alert(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        alert(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

// Solicita ao usuário que digite um número
const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"), 10);

// Chama a função fibonacci com o número informado
fibonacci(numero);
