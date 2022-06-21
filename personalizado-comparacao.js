var valorUm = 10;
var valorDois = 10;

document.write("<h2>Operador de comparação igual a: </h2>");
if(valorUm == valorDois){
    document.write(valorUm + " é igual a " + valorDois);
}else{
    document.write(valorUm + " é diferente de " + valorDois);
}

valorUm = 5;
valorDois = 10;
document.write("<h2>Operador de comparação diferente de: </h2>");
if(valorUm != valorDois){
    document.write(valorUm + " é diferente de " + valorDois);
}else{
    document.write(valorUm + " é igual a " + valorDois);
}

valorUm = 5;
valorDois = 10;
document.write("<h2>Operador de comparação menor que: </h2>");
if(valorUm < valorDois){
    document.write(valorUm + " é menor " + valorDois);
}else{
    document.write(valorUm + " é maior " + valorDois);
}

valorUm = 10;
valorDois = 5;
document.write("<h2>Operador de comparação maior que: </h2>");
if(valorUm > valorDois){
    document.write(valorUm + " é maior " + valorDois);
}else{
    document.write(valorUm + " é menor " + valorDois);
}

valorUm = 5;
valorDois = 10;
document.write("<h2>Operador de comparação menor ou igual a: </h2>");
if(valorUm <= valorDois){
    document.write(valorUm + " é menor ou igual a " + valorDois);
}else{
    document.write(valorUm + " é maior ou igual a " + valorDois);
}

valorUm = 15;
valorDois = 10;
document.write("<h2>Operador de comparação maior ou igual a: </h2>");
if(valorUm >= valorDois){
    document.write(valorUm + " é maior ou igual a " + valorDois);
}else{
    document.write(valorUm + " é menor ou igual a " + valorDois);
}