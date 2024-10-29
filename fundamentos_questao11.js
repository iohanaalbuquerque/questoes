function ultimosElementos(lista, n) 
    if (n > lista.length) {
        return "O n deve ser menor que a quantidade de elementos da lista.";
    }
    
      return lista.slice(-n);
}

