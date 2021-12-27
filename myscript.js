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
temp = document.createElement('div');
temp.innerHTML = array;
document.getElementsByTagName('body')[0].appendChild(temp);


let secondi = 30;
const elemento = document.getElementById("orologio");

elemento.innerHTML = secondi;
let orologio = setInterval(function(){
    console.log("intervallo");
    secondi--;
    if(secondi==0){
        temp.classList.add("hide");
        clearInterval(orologio);
        let numeri=[];
        for(let i=0; i<5; i++){

        let numero = parseInt(prompt ('inserisci un numero'));
        numeri.push(numero);
        
    }
    console.log(numeri);
        
    let result=0;
for(let i = 0; i<array.length; i++){
if (array[i]==numeri[i]){
    result++;
}   
}
console.log(result);
        
    }
    else{
        elemento.innerHTML = secondi;
        
        
    }
},1000);









