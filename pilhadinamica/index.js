const Pilha = require('./pilha')

pilha = new Pilha(5);

pilha.empilha(351);
pilha.empilha(24);
pilha.empilha(32);
pilha.empilha(489);
pilha.empilha(1000)

console.log(`Pilha de tamanho ${pilha.tamanho}:`);
pilha.mostraPilha();
console.log('\n');
console.log('Tendando adicionar um elemento à pilha cheia:');
pilha.empilha(58);

console.log('Desempilha 02 elementos.\nNova Pilha:\n');
pilha.desempilha();
pilha.desempilha();
pilha.mostraPilha();