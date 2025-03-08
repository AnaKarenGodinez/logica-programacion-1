 //Pide al usuario 3 números, los muestra en consola. 
 // Si los números son iguales muestra en consola "Los numeros son igueles" y ya no hace la comparación de numeros
 //si no, hace toda la comparación. Mostrando primero de mayor a menor y despúes de menor a mayor.
let num01 = prompt("Introduce el primer número: ");
let num02 = prompt("Introduce el segundo número: ");
let num03 = prompt("Introduce el tercer número: ");

console.log(num01 + "," + num02 + "," + num03);

if ((num01==num02) &&(num02==num03) ){
    console.log("Los números son iguales")
}else {

if ((num01 >= num02) && (num01 >= num03)){
    if(num02 >= num03){
        console.log(num01 + ","+ num02 + "," + num03);
    } else {
        console.log(num01 + ","+ num03 + "," + num02);
    }
} else if ((num02 >= num01) && (num02 >= num03)){
    if(num01 >= num03){
        console.log(num02 + ","+ num01 + "," + num03);
    } else {
        console.log(num02 + ","+ num03 + "," + num01);
    }
} else if ((num03 >= num01) && (num03 >= num02)){
    if(num02 >= num03){
        console.log(num03 + ","+ num02 + "," + num01);
    } else {
        console.log(num03 + ","+ num01 + "," + num02);
    }
}

if ((num01 <= num02) && (num01 <= num03)){
    if(num02 <= num03){
        console.log(num01 + ","+ num02 + "," + num03);
    } else {
        console.log(num01 + ","+ num03 + "," + num02);
    }
} else if ((num02 <= num01) && (num02 <= num03)){
    if(num01 <= num03){
        console.log(num02 + ","+ num01 + "," + num03);
    } else {
        console.log(num02 + ","+ num03 + "," + num01);
    }
} else if ((num03 <= num01) && (num03 <= num02)){
    if(num02 <= num03){
        console.log(num03 + ","+ num02 + "," + num01);
    } else {
        console.log(num03 + ","+ num01 + "," + num02);
    }
}
}
