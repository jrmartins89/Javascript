const Elemento = require('./elemento')

class Pilha{
  constructor(tamanho){
    this.tamanho = tamanho;
    this.topo = null;
    this.contador = 0;
  }

  getTamanho(){
    return this.tamanho;
  }

  getTopo(){
    return this.topo;
  }

  getContador(){
    return this.contador;
  }

  setTamanho(tamanho){
    this.tamanho = tamanho;
  }

  setTopo(topo){
    this.topo=topo;
  }

  setContador(contador){
    this.contador = contador;
  }

  empilha(elemento){
    if(this.getContador()<this.getTamanho()){
    this.novo = new Elemento(elemento);
    this.novo.setProximo(this.getTopo());
    this.setTopo(this.novo);
    this.setContador(this.getContador()+1);
  }else{
    return false;
  }
}

  desempilha(){
    this.temporario = this.topo.getValor();
    this.setTopo(this.topo.getProximo());
    return this.temporario;
  }

  mostraPilha(){
    var atual = this.getTopo();
      while(atual.getProximo() !== null){
        console.log(atual.getValor());
        atual = atual.getProximo();
    }
    console.log(atual.getValor());
  }
}

module.exports = Pilha
