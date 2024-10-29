function calcularAreaTriangulo(lados) {
    if (lados.length !== 3) {
        return "Informe os três valores dos lados do triângulo.";
    }

    const [a, b, c] = lados;
    
    const s = (a + b + c) / 2;

     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}
