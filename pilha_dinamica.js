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

class Pilha{
  constructor(tamanho){
    this.tamanho = tamanho;
    this.topo = null;
  }

  empilha(elemento){
    this.novo = new Elemento(elemento);
    this.novo.setProximo(this.topo);
    this.topo = this.novo;
  }
}
