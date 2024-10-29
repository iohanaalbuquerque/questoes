function inverterNumero(numero) {
    const numeroInvertido = numero.toString().split("").reverse().join("");
    return parseInt(numeroInvertido, 10);
}

