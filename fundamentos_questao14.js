function verificarPresencaPalavra(frase, palavra) {
    const fraseLower = frase.toLowerCase();
    const palavraLower = palavra.toLowerCase();

    return fraseLower.includes(palavraLower);
}

