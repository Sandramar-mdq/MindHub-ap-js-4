let template = (image, name, description, price, _id)=>{ 
    return `
    <div class="card c-div" style="width: 18rem;">
              <img src="${image} " class="c-img" alt="">
              <div class="card-body">
                <h5 class="c-title">${name} </h5>
                <p class="c-body">${description} </p>
                <a href="#" class="c-btn c-btn:hover">Price: ${price} </a>
                <a href="./details.html?_id=${_id}" class="c-btn c-btn:hover">Details</a>
              </div>
            </div>
    
      `
    }
    
    function createTemplate(){
    //almacena los events de data
        let events = data.events
    
        //almacena los datos en un array para renderizar las tarjetas
        let templates = []
        
        const hoy = data.currentDate

        for (let reuniones of events){
            if ( hoy < reuniones.date){
              console.log(reuniones)
              template()
              templates.push(template(reuniones.image, reuniones.name, reuniones.description, reuniones.price, reuniones._id))
            }
    

           }
           
        console.log(templates)
        let selector = document.getElementById(`cards-container-upComing`)
        selector.innerHTML = templates.join("")
    }
    
    createTemplate()

   