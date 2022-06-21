var nota = 9;
var falta = 10;

if((nota < 5) || (falta > 5)){
    document.write("Aprovado : " + nota + "<br>" + "<br>" +" Falta " + falta + "<br>" + "<br>");
}

nota = 4;
falta = 6;
if((nota < 5) && (falta > 5)){
    document.write("Reprovado : " + nota + "<br>" + "<br>" + " Falta: " + falta + "<br>" + "<br>");
}

var situacao = !true;
document.write("Situação: " + situacao + "<br>");