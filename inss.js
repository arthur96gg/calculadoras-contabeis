const salariobruto = 3800
let inss = 0
if (salariobruto <= 1621){
    inss = salariobruto * 0.075
}else if(salariobruto > 1621 && salariobruto <=2902.84){
     inss = (salariobruto - 1621)*0.09 +121.58
}else if(salariobruto > 2902.84 && salariobruto <= 4354.27){
   inss = (salariobruto - 2902.84)*0.12 + 115.37 + 121.58
}

console.log(inss.toFixed(2))

