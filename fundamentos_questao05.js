function checarNumeros(num1, num2, num3) {
    if (
        (num1 >= 50 && num1 <= 99) &&
        (num2 >= 50 && num2 <= 99) &&
        (num3 >= 50 && num3 <= 99)
    ) {
        console.log("Todos os números estão entre 50 e 99.");
    } else {
        console.log("Algum ou mais dos números não estão entre 50 e 99.");
    }
}

