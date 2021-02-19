class Fila{
  constructor(inicio, fim){
    this.inicio = 0;
    this.fim = fim - inicio;
    this.fila = [];  
    this.proximo = this.inicio;
  
  }

  enfileira(elemento){
    if(this.proximo == this.fim){
      console.log(`A fila está cheia!`);
    }else{
      this.fila[this.proximo]=elemento;
      this.proximo= this.proximo+1;
      console.log(`Elemento ${elemento} enfileirado!`);
   }
}

  desenfileira(){
    if(this.filaVazia()){
      console.log(`A fila está vazia!`);
    }else{
      console.log(`Elemento ${this.fila.shift()} removido!`);
    }
  }

  filaVazia(){
    if(this.proximo==this.inicio){
      return true;
    }else {
      return false;
    }
  }
}
