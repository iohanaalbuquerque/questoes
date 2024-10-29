function contarVogaisConsoantes(frase) {
    const vogais = "aeiouAEIOU"; // Define as vogais
    let contagemVogais = 0;
    let contagemConsoantes = 0;

    for (let char of frase) {
        if (vogais.includes(char)) {
            contagemVogais++;
        } else if (char.match(/[a-zA-Z]/)) {
            contagemConsoantes++;
        }
    }

    return {
        vogais: contagemVogais,
        consoantes: contagemConsoantes
    };
}

