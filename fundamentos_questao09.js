function somaTamanhosPalavras(frase) {
    const palavras = frase.split(" ");

    const somaTamanhos = palavras.reduce((soma, palavra) => soma + palavra.length, 0);

    return somaTamanhos;
}
