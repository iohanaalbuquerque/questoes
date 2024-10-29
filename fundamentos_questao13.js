function somaCubos(lista) {
    return lista.reduce((soma, numero) => soma + Math.pow(numero, 3), 0);
}
