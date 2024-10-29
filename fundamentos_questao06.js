function encontraNumeroFrequente(array) {
    const frequencia = {};
    let numeroFrequente = array[0];
    let maiorOcorrencia = 0;
    for (let num of array) {
        frequencia[num] = (frequencia[num] || 0) + 1;

           if (frequencia[num] > maiorOcorrencia) {
            maiorOcorrencia = frequencia[num];
            numeroFrequente = num;
        }
    }

    return numeroFrequente;
}

