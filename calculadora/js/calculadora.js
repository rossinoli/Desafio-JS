function insere(valor){
    switch(valor){
        case "0":
            document.getElementById("displayCalc").value += "0";
        break;
        case "1":
            document.getElementById("displayCalc").value += "1";
        break;
        case "2":
            document.getElementById("displayCalc").value += "2";
        break;
        case "3":
            document.getElementById("displayCalc").value += "3";
        break;
        case "4":
            document.getElementById("displayCalc").value += "4";
        break;
        case "5":
            document.getElementById("displayCalc").value += "5";
        break;
        case "6":
            document.getElementById("displayCalc").value += "6";
        break;
        case "7":
            document.getElementById("displayCalc").value += "7";
        break;
        case "8":
            document.getElementById("displayCalc").value += "8";
        break;
        case "9":
            document.getElementById("displayCalc").value += "9";
        break;
    }
}

function limpaDisplay(){
    document.getElementById("displayCalc").value = "";
}

function operacao(oper){
    switch(oper){
        case "+":
            document.getElementById("displayCalc").value += "+";
        break;
        case "-":
            document.getElementById("displayCalc").value += "-";
        break;
        case "*":
            document.getElementById("displayCalc").value += "*";
        break;
        case "/":
            document.getElementById("displayCalc").value += "/";
        break;

}
}

function resultado(){
    let x = document.getElementById("displayCalc").value; 
    let y = eval(x);
    document.getElementById("displayCalc").value = y;
}