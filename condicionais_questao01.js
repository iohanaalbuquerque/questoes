function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return `${num1} é maior que ${num2}`;
    } else if (num2 > num1) {
        return `${num2} é maior que ${num1}`;
    } else {
        return `${num1} e ${num2} são iguais`;
    }
}

