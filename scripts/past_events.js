
async function fetchApi(){
  try{
    let urlApi = 'https://mh-h0bh.onrender.com/api/amazing-events?time=past'
    let fetchResponse = await fetch(urlApi)
/*     console.log(fetchResponse)
 */    let response = await fetchResponse.json()
/*     console.log(response)
 */    
    createTemplate(response.events)
    
  } catch(error){
      console.log('ocurrio un error')
      //console.log(error)
  }

  function template(image, name, description, price, id){ 
    return `
    <div class="card c-div" style="width: 18rem;">
              <img src="${image} " class="c-img" alt="">
              <div class="card-body">
                <h5 class="c-title">${name} </h5>
                <p class="c-body">${description} </p>
                <a href="#" class="c-btn c-btn:hover">Price: ${price} </a>
                <a href="./details.html?_id=${id} " class="c-btn c-btn:hover">Details</a> 
              </div>
            </div>
      `
    }
    
    function createTemplate(arrayEvents){
    //almacena los events de data
        /* let events = data.events */
    
        //almacena los datos en un array para renderizar las tarjetas
        let templates = []
        
        for (let reunion of arrayEvents){
    /*         console.log(reunion)
     */        templates.push(template(reunion.image, reunion.name, reunion.description, reunion.price, reunion.id))
        }
    
      /*   console.log(templates) */
        let selector = document.getElementById(`cards-container-past`)
        selector.innerHTML = templates.join("")
    }
    
    
   /*  createTemplate() */
    

}

fetchApi()
  