function potencia() {
    let n = parseInt(potencia.value);
    let pote = n;
    alert("oi");
    while (n>=1) {
        pote = Math.pow(2, n);
        alert(pote);
        n = n-1;
    } 
    
}
function fatorial(){
  let n = parseint(numero.value);
  let fat = n;
  
  if (n<0) {
    alert("numero negativo");
  }
  else if(n ==0){
    alert("1");
  }
  else{
    while(n>1){
        fat=fat*(n-1);
        n=n-1;
        }
    }       
}