function encontrarMaiorPalavra(frase) {
    const palavras = frase.split(" ");
    
    let maiorPalavra = "";
    
    for (let palavra of palavras) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;
        }
    }
    
    return maiorPalavra;
}


