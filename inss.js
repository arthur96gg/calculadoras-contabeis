const salariobruto = 2800
let inss = 0
if (salariobruto <= 1621){
    inss = salariobruto * 0.075
}else if(salariobruto > 1621 && salariobruto <=2902.84){
     inss = (salariobruto - 1621)*0.09 +121.58
}

console.log(inss)