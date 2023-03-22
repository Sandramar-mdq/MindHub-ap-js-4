let urlApi = 'https://mh.up.railway.app/api/amazing-events'

async function tabla1(){
    try{
        let fetchResponse = await fetch(urlApi+'?time=past')
        let response = await fetchResponse.json()
        let arrayEvents = response.events;
        let stats = arrayEvents.map(each=> { //each es cada elemento del array arraEvents
            let obj ={
                name: each.name, 
                percent: 100 * (each.assistance / each.capacity)
            }
            return obj
        }).sort((e1, e2) => e1.percent - e2.percent)

        let fetchResponseAll = await fetch(urlApi)
        let responseAll = await fetchResponseAll.json()
        let arrayEventsAll = responseAll.events;
        let capacity = arrayEventsAll.map(each=> { //each es cada elemento del array arraEvents
            let obj ={
                name: each.name, 
                capac: each.capacity
            }
            return obj
        }).sort((e1, e2) => e1.capac - e2.capac)

        //console.log(capacity)
        /*    console.log (stats)
        console.log (stats[0] )
        console.log (stats[stats.length-1]) */

        document.getElementById("table1").innerHTML=templateTable1(stats[stats.length-1], stats[0], capacity[capacity.length-1] )
        
        let razon = (cantidades.tot_asist / cantidades.tot_capac)*100
        //console.log(razon)

    } catch(error){
        //  console.log(error)
    }
}
tabla1()


async function tabla2(){
    try{
        let fetchResponse = await fetch(urlApi+'?time=upcoming')
        let response = await fetchResponse.json()
        let arrayEvents = response.events;
        let categories = arrayEvents.map(each=> each.category)   //primero transforma arry de evento en array de categorias
        categories = new Set(categories)   //filtrando categorias repetidas
        categories = [...categories]   //convierto el set en un array

        //tengo que transformar el array de categorias en un array de eventos por categorias
        let arrayCategories = categories.map(each=> arrayEvents.filter(every=> every.category===each))
        //console.log(arrayCategories)
        
        //tengo que transformas el array eventos por categoria en el estadistico que necesito
        //tengo que reducir cada array de categorias en el estadistico que necesito
        arrayCategories = arrayCategories.map(each=>{    //each es un array de eventos que tengo que reducir
        return each.reduce(
            (acumulador, valorActual)=>{   //acumulador guarda las reducciones y valor actual es cada uno de los eventos de la api
                let suma = {
                    totalEstimate: acumulador.totalEstimate + valorActual.estimate,
                    totalCapacity: acumulador.totalCapacity + valorActual.capacity,
                    gain: (valorActual.estimate * valorActual.price) + acumulador.gain,
                    percentEstimate: acumulador.totalEstimate / acumulador.totalCapacity * 100,
                    category: valorActual.category
                }
                //console.log(suma)
                return suma;
            },
            {totalEstimate: 0,
            totalCapacity: 0,
            gain:0,
            percentEstimate:0,
            category:''
            }
        )
        }) 
        
        // console.log(arrayCategories)
        document.getElementById('table2').innerHTML= arrayCategories.map(each => templateTable2(each.category, each.gain, each.percentEstimate)).join('')

    } catch(error){
        // console.log(error)
    }
}
tabla2()

async function tabla3(){
    try{
        let fetchResponse = await fetch(urlApi+'?time=past')
        let response = await fetchResponse.json()
        let arrayEvents = response.events;
        let categories = arrayEvents.map(each=> each.category)   //primero transforma array de evento en array de categorias
        categories = new Set(categories)   //filtrando categorias repetidas
        categories = [...categories]   //convierto el set en un array

        //tengo que transformar el array de categorias en un array de eventos por categorias
        let arrayCategories = categories.map(each=> arrayEvents.filter(every=> every.category===each))
        //console.log(arrayCategories)
        
        //tengo que transformas el array eventos por categoria en el estadistico que necesito
        //tengo que reducir cada array de categorias en el estadistico que necesito
        arrayCategories = arrayCategories.map(each=>{    //each es un array de eventos que tengo que reducir
        return each.reduce(
            (acumulador, valorActual)=>{   //acumulador guarda las reducciones y valor actual es cada uno de los eventos de la api
                let sumaP = {
                    totalAssistance: acumulador.totalAssistance + valorActual.assistance,
                    totalCapacity: acumulador.totalCapacity + valorActual.capacity,
                    gain: (valorActual.assistance * valorActual.price) + acumulador.gain,
                    percentAssistance: acumulador.totalAssistance / acumulador.totalCapacity * 100,
                    category: valorActual.category
                }
                //console.log(suma)
                return sumaP;
            },
            {totalAssistance: 0,
            totalCapacity: 0,
            gain:0,
            percentAssistance:0,
            category:''
            }
        )
        }) 
        
        // console.log(arrayCategories)
        document.getElementById('table3').innerHTML= arrayCategories.map(each => templateTable3(each.category, each.gain, each.percentAssistance)).join('')

    } catch(error){
        // console.log(error)
    }
}
tabla3()


function templateTable1(max, min, cap){
    return`
        <tr>
            <td>${max.name} :  ${parseInt(max.percent)} % </td>
            <td>${min.name} :  ${parseInt(min.percent)} %  </td>
            <td>${cap.name} :  ${cap.capac} </td>
        </tr>
    `
}

function templateTable2(category, gain, percentEstimate){
return `
           <tr>
             <td>${category} </td>
             <td> $ ${gain.toFixed(2)} </td>
             <td>${percentEstimate.toFixed(2)} %</td>
           </tr>
           `
}

function templateTable3(category, gain, percentAssistance){
    return `
               <tr>
                 <td>${category} </td>
                 <td> $ ${gain.toFixed(2)} </td>
                 <td>${percentAssistance.toFixed(2)} %</td>
               </tr>
               `
    }
