function modificarFrase(frase) {
     const palavras = frase.split(" ");

       const palavrasModificadas = palavras.map(palavra => {
        if (palavra.length < 5) {
            return palavra.toUpperCase();
        } else {
            return palavra.toLowerCase();
        }
    });

    return palavrasModificadas.join(" ");
}

