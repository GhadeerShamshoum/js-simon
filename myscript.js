/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/

const array = []; 
for( let i=0; i<5; i++){
    array[i] = Math.floor(Math.random() *100) + 1;
   
        
}
console.log(array)

RandomArray = document.getElementById('array');
RandomArray.innerHTML = array;


//30 secondi
let secondi = 30;
const elemento = document.getElementById("orologio");

elemento.innerHTML = secondi;
let orologio = setInterval(function(){
    console.log("intervallo");
 //cuont dwon   
    secondi--;
    
    if(secondi==0){//quando tempo è scaduto
        clearInterval(orologio, RandomArray); 
        RandomArray.innerHTML = "ricorda i cinque numeri";
        elemento.innerHTML = "tempo è scaduto";
        setTimeout(numeriUtente,1000)  
    }
   
   
    else{//numeri da 30 fino 0
        elemento.innerHTML = secondi;
        
        
    }

},1000);

function numeriUtente(){
    let numeri=[];//array numeri-utente
    let result='';
        for(let i=0; i<5; i++){
        let numero = parseInt(prompt ('inserisci un numero'));
        numeri.push(numero);
        result=0;
        for(let i = 0; i<array.length; i++){
            if (array.includes(numeri[i])){
                result++;
            }   
        }
    }      
    console.log(numeri);
    console.log(result);
    finalResult = document.getElementById('result');
    finalResult.innerHTML = 'hai idovinato' + ' '+'<br>' + result + ' ' +'<br>'+ 'numeri' ;  //resultato
    
}









