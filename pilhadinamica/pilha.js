const Elemento = require('./elemento')

class Pilha{
  constructor(tamanho){
    this.tamanho = tamanho;
    this.topo = null;
    this.contador = 0;
  }

  empilha(elemento){
    if(this.contador<this.tamanho){
    this.novo = new Elemento(elemento);
    this.novo.setProximo(this.topo);
    this.topo = this.novo;
    this.contador=this.contador+1;
  }else{
    console.log('Pilha cheia!');
  }
}

  desempilha(){
    this.temporario = this.topo.getValor();
    this.topo = this.topo.getProximo();
    return this.temporario;
  }

  mostraPilha(){
    var atual = this.topo;
      while(atual.getProximo() !== null){
        console.log(atual.getValor());
        atual = atual.getProximo();
    }
    console.log(atual.getValor());
  }
}

module.exports = Pilha