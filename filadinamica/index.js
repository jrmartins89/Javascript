const Fila = require('./fila')

fila = new Fila(10);

for(i=0;i<fila.tamanho;i++){
  var elemento = Math.round(Math.random()*1000);
  console.log(`Adicionando ${elemento} na posição ${i+1}`);
  fila.enfileira(elemento);
}

console.log(`Fila de tamanho ${fila.tamanho}.`);
console.log(`Inicio: ${fila.inicio.valor} e Fim: ${fila.fim.valor}`);
console.log(`Mostrando a Fila:`);
fila.mostraFila();

console.log('\n');
var novoElemento = Math.round(Math.random()*1000);
console.log(`Tentando adicionar ${novoElemento} à fila:`);
if(fila.enfileira(novoElemento)==false){
  console.log(`Fila cheia!`);
}

console.log(`Removendo 02 elementos`);
console.log(`Elemento ${fila.desenfileira()} removido`);
console.log(`Elemento ${fila.desenfileira()} removido`);

console.log(`Inicio: ${fila.inicio.valor} e Fim: ${fila.fim.valor}`);
console.log(`Mostrando a Fila:`);
fila.mostraFila();

