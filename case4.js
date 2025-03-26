// Faturamento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o percentual de representação de cada estado
function calcularPercentuais(faturamento) {
    // Calculando o valor total do faturamento
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    // Exibindo o total do faturamento
    console.log(`Faturamento total da distribuidora: R$ ${totalFaturamento.toFixed(2)}`);

    // Calculando e exibindo o percentual de cada estado
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100;
        console.log(`${estado}: R$ ${faturamento[estado].toFixed(2)} (${percentual.toFixed(2)}%)`);
    }
}

// Chama a função para calcular os percentuais
calcularPercentuais(faturamentoPorEstado);
