function inverterFrase(frase) {
    return frase.split("").reverse().join("");
}


9) Escreva um programa que calcule a soma dos tamanhos de todas as palavras em uma frase.
function somaTamanhosPalavras(frase) {
    const palavras = frase.split(" ");

    const somaTamanhos = palavras.reduce((soma, palavra) => soma + palavra.length, 0);

    return somaTamanhos;
}

