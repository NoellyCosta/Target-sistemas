const fs = require('fs');
const path = require('path');

// Função para ler e processar o arquivo JSON
function processarFaturamento() {
    // Caminho absoluto para o arquivo JSON
    const caminhoCompleto = path.join(__dirname, 'dados.json');
    console.log("Caminho do arquivo JSON:", caminhoCompleto);

    // Lê o arquivo JSON contendo os dados de faturamento
    fs.readFile(caminhoCompleto, 'utf8', (err, data) => {
        if (err) {
            console.log("Erro ao ler o arquivo:", err);
            return;
        }

        const faturamento = JSON.parse(data); // Parse do JSON para um objeto
        let menorFaturamento = Infinity;
        let maiorFaturamento = -Infinity;
        let somaFaturamento = 0;
        let diasComFaturamento = 0;
        let diasAcimaDaMedia = 0;

        // Processa os dados para calcular o menor e maior faturamento, soma dos faturamentos e contagem de dias com faturamento
        faturamento.forEach(dia => {
            if (dia.valor > 0) { // Ignora os dias sem faturamento (faturamento = 0)
                somaFaturamento += dia.valor;
                diasComFaturamento++;

                if (dia.valor < menorFaturamento) {
                    menorFaturamento = dia.valor;
                }

                if (dia.valor > maiorFaturamento) {
                    maiorFaturamento = dia.valor;
                }
            }
        });

        // Calcula a média de faturamento diário (ignorando os dias sem faturamento)
        const mediaFaturamento = somaFaturamento / diasComFaturamento;

        // Conta os dias em que o faturamento foi superior à média
        faturamento.forEach(dia => {
            if (dia.valor > mediaFaturamento) {
                diasAcimaDaMedia++;
            }
        });

        // Exibe os resultados
        console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
        console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
        console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);
    });
}

// Chama a função para processar o faturamento
processarFaturamento();
