const Elemento = require('./elemento')

class Fila{
  constructor(tamanho){
    this.tamanho = tamanho;
    this.inicio = null;
    this.fim = null;
    this.contador=0;
  } 

  enfileira(elemento){
    this.novo = new Elemento(elemento);
    if(this.contador<this.tamanho){
      if(!this.inicio){
        this.inicio = this.novo;
        this.fim =this.novo;
        this.contador=this.contador+1;
      }
      else{
        this.fim.setProximo(this.novo);
        this.fim = this.novo;
        this.contador=this.contador+1;
      }
    }
    else{
      return false;
    }
  }
  
  desenfileira(){
    this.elementoRemovido = this.inicio;
    this.inicio = this.inicio.getProximo(); 
    return this.elementoRemovido.valor;
  }

  mostraFila(){
    var atual = this.inicio;
    while(atual.getProximo()!==null){
      console.log(atual.getValor());
      atual = atual.getProximo();
    }
    console.log(atual.getValor());
  }
}

module.exports = Fila