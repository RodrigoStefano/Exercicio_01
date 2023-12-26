let numberOne = inputUser("Digite o primeiro numero:");
let numberTwo = inputUser("Digite o segundo numero:");

alert(`A soma dos dois números é: ${numberOne + numberTwo}`);
alert(`A subtação dos dois números é: ${numberOne - numberTwo}`);
alert(`A miltipicação dos dois números é: ${numberOne * numberTwo}`);
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`);
alert(`o resto da divisão dos dois números é: ${numberOne % numberTwo}`);

if((numberOne + numberTwo) % 2 === 0){
    alert("O resultado da soma é um númeor par");
}
else{
    alert("O resultado da soma não é um número par");
}

if(numberOne == numberTwo){
    alert("Os númeors informados são iguais");
}
else{
    alert("Os números informados são diferentes");
}

function inputUser(mensage){
    let input = prompt(mensage);
    while(isNaN(input)){
        input = prompt("O valor informado não é um número. Tente novamente");
    }
    input = Number(input);
    return input;
}
