function unirElementos(lista) {
    return lista.join("#");
}

13) Escreva um programa que leia uma lista de números. Eleve cada um dos números a 3 e
depois some o total de valores obtidos.
function somaCubos(lista) {
    return lista.reduce((soma, numero) => soma + Math.pow(numero, 3), 0);
}

