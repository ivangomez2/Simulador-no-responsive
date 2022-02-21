let costo = 5325


let contador = 3;

const Tres = ()=>{
    let result = costo * 0.3;
    let pfinal = result + costo;
    let interes = pfinal / 3;
    return interes;
    }

    const Seis = ()=>{
        let result = costo * 0.4;
        let pfinal = result + costo;
        let interes = pfinal / 6;
      return interes;
    }


    
const Doce =()=>{
    let result = costo * 0.6;
    let pfinal = result + costo;
    let interes = pfinal / 12;
    return interes;
}
    
 

for (let i = 0; i <= 3; i++) {
    contador--
    let pregunta = prompt("En cuantas cuotas vas a realizar la compra? DISPONIBLES  3/6/12")
    alert("RECORDA QUE SE AGOTAN RAPIDO,solo quedan disponibles" + " " + contador + " " + "pares")
    if(contador == 0){
        alert("Lo siento, en este momento estan AGOTADAS")
        break;
    }
 
   
    if (pregunta == 3) {
     let resultado = Tres()
        alert( "Pagá en 3 cuotas C/INTERES del" + " (30%) $" + resultado );

    }else if (pregunta == 6) {
        let resultadoSeis = Seis()
        alert( "Pagá en 6 cuotas C/INTERES del" + " (40%) $" + resultadoSeis );
    }else if(pregunta == 12){
        let resultadoDoce = Doce()
        alert( "Pagá en 12 cuotas C/INTERES del" + " (60%) $" + resultadoDoce );
    }


    let consulta = prompt("deseas ver otra cantidad de cuotas? si / no")
    if(consulta == "si"){
        continue;
    }else{break;}
        
    
    
}





