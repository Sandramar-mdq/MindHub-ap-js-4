async function tabla1(){
 try{
    let urlApi = 'https://mh-h0bh.onrender.com/api/amazing-events'
    let fetchResponse = await fetch(urlApi)
    let response = await fetchResponse.json()
    let arrayEvents = response.events;
    
    let cantidades = arrayEvents.reduce(
        (acc,each)=>{
            let asistencia = each.assistance
            let capacidad = each.capacity

            let obj_acc = {
                tot_asist: acc.tot_asist +  parseFloat(asistencia),
                tot_capac: acc.tot_capac + parseFloat(capacidad)
            }
            return obj_acc
        },

        { tot_asist: 0, tot_capac: 0 }
    )
    
 console.log (cantidades)

 let razon = (cantidades.tot_asist / cantidades.tot_capac)*100
 console.log(razon)

 //maximo ingreso %
 arrayEvents = arrayEvents.sort((e1,e2) => e2.razon - e1.razon)
 document.getElementById("tabla1namemax").innerHTML=arrayEvents[0].name
 document.getElementById("tabla1cantmax").innerHTML=arrayEvents[0].razon +" %"

 /* document.getElementById("tabla1").innerHTML=arrayEvents[arrayEvents.length-1].name
document.getElementById("tabla1").innerHTML=arrayEvents[arrayEvents.length-1].razon+"%" */

//minimo ingreso %
arrayEvents = arrayEvents.sort((e1,e2) => e1.razon - e2.razon)
document.getElementById("tabla1namemin").innerHTML=arrayEvents[0].name
document.getElementById("tabla1min").innerHTML=arrayEvents[0].razon+" %"

//maximacapacidad
arrayEvents = arrayEvents.sort((e1,e2) => e2.capacity - e1.capacity)
document.getElementById("tabla1capacname").innerHTML=arrayEvents[0].name
document.getElementById("tabla1capac").innerHTML=arrayEvents[0].razon+" %"

} catch(error){
      //  console.log(error)
    }

}
tabla1()


async function tabla2(){
    try{
       let urlApi = 'https://mh-h0bh.onrender.com/api/amazing-events?time=upcoming'
       let fetchResponse = await fetch(urlApi)
       let response = await fetchResponse.json()
       let arrayEvents = response.events;

       let categories = []
       console.log(arrayEvents.forEach(each => {
        if (!categories.includes(each.category)){
            categories.push(each.category)
        }
       }))
       console.log(categories)

       let ingresos(){
        for(let evento of arrayEvents){
            evento.ingreso = evento.estimate * evento.price
        }
       }

       let cuentas2 = []
       for (let category of categories){

        eventosxCateg = arrayEvents.filter(evento => evento.category === category)
           eventosxCateg.forEach(evento => {
               ingresos += evento.ingresos * evento.price;
               asistencia += evento.estimate;
               capacidad += evento.capacity;
           })
           
           let razon = (asistencia / capacidad) * 100;
           razon = razon.toFixed(2);

           let printabla2 = `
           <tr>
             <td>${category} </td>
             <td>${ingresos} </td>
             <td>${razon} </td>
           </tr>
           `
           cuentas2.push(printabla2)
       }
       document.getElementById("tabla2").innerHTML += printabla2.join("");








    } catch(error){
       // console.log(error)
    }

}

tabla2()