function converterNome(nomeCompleto) {
    const partes = nomeCompleto.split(" ");

    const primeiroNome = partes.shift(); 
    const sobrenomes = partes.reverse();

    const resultado = sobrenomes.map(sobrenome => sobrenome[0].toUpperCase() + ".").join(" ") + " " + primeiroNome;

    return resultado;
}

