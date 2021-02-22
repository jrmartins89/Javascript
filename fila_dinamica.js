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

  class Fila{
    constructor(tamanho){
      this.tamanho = tamanho;
      this.inicio = null;
      this.fim = null;
    } 

    enfileira(elemento){
      this.novo = new Elemento(elemento);
      if(!this.inicio){
        this.inicio = this.novo;
        this.fim =this.novo;
        }
        else{
        this.fim.setProximo(this.novo);
        this.fim = this.novo;
        };
    }
  
    desenfileira(){
      this.elementoRemovido = this.inicio;
      this.inicio = this.inicio.getProximo(); 
    }
  }
