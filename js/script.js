let num1 = "";
let num2 = "";
let valor = "";
let temPonto = false;
mensagem = (msg) => console.log(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
juros_simples = (c,j) => mult(c,div(j,100));
montante_juro_simples = (c,j) => soma(juros_simples(c,j),c);

mostrar_display = (msg)=>{
  document.getElementById("resultado").value = msg;
  
}

function digitando(tecla){
  if(tecla == "."){
    if (!temPonto){
    valor += tecla;
    mostrar_display(valor);
     temPonto = true;
    }
    return;
  }
   valor += tecla;
   mostrar_display(valor);
   
}






