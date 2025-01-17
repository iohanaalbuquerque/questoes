function exibirDiaDaSemana() {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const data = new Date();
    return diasDaSemana[data.getDay()];
}

function exibirHoraAtual() {
    const atual= new Date();
    const horas = String(atual.getHours()).padStart(2, '0'); 
    const minutos = String(atual.getMinutes()).padStart(2, '0'); 
    const segundos = String(atual.getSeconds()).padStart(2, '0'); 
    return `${horas}:${minutos}:${segundos}`;
}

