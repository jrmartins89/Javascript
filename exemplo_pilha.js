class Pilha{
  constructor(){
    this.pilha = [];
    this.topo = -1;
  }

  empilha(elemento){
    this.pilha[this.topo+1] = elemento;
    this.topo = this.topo+1;
    return `${elemento} empilhado`
  }
  getTopo(){
    return this.topo;
  }

  getValorTopo(){
    return this.pilha[this.topo];
  }

  desempilha(){
    if( this.getTopo()== -1){
      return `Pilha vazia!`;
    }
    else{
      this.topo = this.topo-1;
      return `Elemento ${this.pilha.pop()} desempilhado`;
      }
    }
  pilhaVazia(){
    if(this.getTopo()==-1){
      return `Pilha Vazia!`;
    }
    else{
      return `Pilha com elementos!`;
    }
  }
  }
