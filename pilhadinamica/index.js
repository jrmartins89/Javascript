const Pilha = require('./pilha')

pilha = new Pilha(10);

for(i=0;i<10;i++){
  var elemento = Math.round(Math.random()*1000);
  console.log(`Adicionando ${elemento} na posição ${i+1}`);
  pilha.empilha(elemento);
}

console.log(`Pilha de tamanho ${pilha.tamanho}. Topo:${pilha.topo.valor}. Valores:`);
pilha.mostraPilha();
console.log('\n');
var novoElemento = Math.round(Math.random()*1000);
console.log(`Tentando adicionar ${novoElemento} à pilha:`);
if(pilha.empilha(novoElemento)==false){
  console.log(`Pilha cheia!`);
}

console.log(`Desempilha 02 elementos.`);
console.log(`Elemento ${pilha.desempilha()} removido`);
console.log(`Elemento ${pilha.desempilha()} removido`);

console.log(`Pilha de tamanho ${pilha.tamanho}. Topo:${pilha.topo.valor}. Valores:`);
pilha.mostraPilha();