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

  desempilha(){
    this.temporario = this.topo.getValor();
    this.topo = this.topo.getProximo();
    return this.temporario;
  }

  pilhaVazia(){
    if(this.topo==null){
      console.log(`A pilha está vazia!`);
    }
  }
}
