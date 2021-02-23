class Elemento{
  constructor(valor){
    this.valor = valor;
    this.proximo=null;
  }

  getValor(){
    return this.valor;
  }
  
  getProximo(){
    return this.proximo;
  }

  setValor(valor){
    this.valor = valor;
  }

  setProximo(proximo){
    this.proximo = proximo;
  }
}

module.exports = Elemento