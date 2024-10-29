function encontrarMaiorMenor(lista) {
valores
    const maior = Math.max(...lista);
    const menor = Math.min(...lista);

    return {
        maior: maior,
        menor: menor
    };
}

