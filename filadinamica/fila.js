const Elemento = require('./elemento')

class Fila{
  constructor(tamanho){
    this.tamanho = tamanho;
    this.inicio = null;
    this.fim = null;
    this.contador=0;
  } 

  getContador(){
    return this.contador;
  }
  getTamanho(){
    return this.tamanho;
  }

  getInicio(){
    return this.inicio;
  }

  setInicio(inicio){
    this.inicio=inicio;
  }

  setFim(fim){
    this.fim=fim;
  }

  setContador(contador){
    this.contador=contador;
  }

  


  enfileira(elemento){
    this.novo = new Elemento(elemento);
    if(this.getContador()<this.getTamanho()){
      if(!this.getInicio()){
        this.setInicio(this.novo);
        this.setFim(this.novo);
        this.setContador(this.getContador()+1);
      }
      else{
        this.fim.setProximo(this.novo);
        this.setFim(this.novo);
        this.setContador(this.getContador()+1);
      }
    }
    else{
      return false;
    }
  }
  
  desenfileira(){
    this.elementoRemovido = this.getInicio();
    this.setInicio(this.inicio.getProximo()); 
    return this.elementoRemovido.getValor();
  }

  mostraFila(){
    var atual = this.getInicio();
    while(atual.getProximo()!==null){
      console.log(atual.getValor());
      atual = atual.getProximo();
    }
    console.log(atual.getValor());
  }
}

module.exports = Fila
