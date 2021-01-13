
function validaIdade(idade){
    if (idade >= 18){
        return true}else{
            return false
        }
}

var idade = prompt('Qual é a sua idade?')
if (validaIdade(idade)){
    alert('Bem vindo.')}else{alert('PERISH YOUNGLIN')}
/*
function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,78))
alert(setReplace('Japão é top', 'Japão', 'Brasil'))
*/
/*
var d = new Date();
alert(d.getDay())
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count)
}
*/


/*
var count = -5;
while (count <= 5){
    console.log(count)
    count = count+1
}
*/

/*
var idade = prompt('Qual sua idade?');
if (idade>=18){
    alert('maior de idade')
}else{
    alert('menor de idade')
}
*/
/*
var frutas = [{nome: 'maça', cor: 'vermelha'}, {nome: 'banana', cor: 'amarela'}];
console.log(frutas);
alert(frutas[1].cor)
*/

/*
var fruta = {nome:'maça', cor: 'vermelha'}
console.log(fruta)
console.log(fruta.cor)
*/

//alert('y');
//var lista = ['maça', 'pera', 'laranja'];
//lista.pop()
//lista.push('uva');
//console.log(lista);
//console.log(lista.length)
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.join('_'))
//var nome = 'Adriel Jordão';
//var idade = 19;
//var idade2 = 10;
//var frase = 'Japão é top';
//alert(nome + ' tem ' + idade + ' anos');
//console.log(nome);
//console.log(idade+idade2);
//alert(frase.replace('Japão', 'Brasil'));