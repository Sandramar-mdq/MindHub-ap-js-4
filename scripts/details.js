let query = location.search
console.log(query)
let params = new URLSearchParams(query)
let id_query = params.get('id') 

async function fetchApi(){
  try{
    let urlApi = 'https://mh.up.railway.app/api/amazing-events'
    let fetchResponse = await fetch(urlApi)
    let response = await fetchResponse.json()
    //console.log(response)
    let datos = response.events;
   
   // printDetail(datos)
    printDetail(`#cards-container` , id_query, response.events)
    
  } catch(error){
      //console.log('ocurrio un error')
      console.log(error)
  }

function defineDetail(dato){ 
    return`
          <div class="card c-div" style="width: 18rem;">
              <img src="${dato.image}" class="c-img" alt="${dato.name}">
              <div class="card-body">
                <h5 class="c-title">${dato.name} </h5>
                <p class="c-body">Date_ ${dato.date} </p>
                <p class="c-body">Description: ${dato.description} </p>
                <p class="c-body">Category: ${dato.category} </p>
                <p class="c-body">Place: ${dato.place} </p>
                <p class="c-body">Capacity: ${dato.capacity} </p>            
                <p class="c-body">Assistance: ${dato.assistance} </p>            
                <a href="#" class="d-btn d-btn:hover">Price: $${dato.price} </a>
              </div>
            </div>
          </div>
        </div>
    `
}

function printDetail(_id, dato, array_data){
  let container = document.querySelector(_id)
  let dat = array_data.find(each => each._id == dato)
  let details = defineDetail(dat)
  container.innerHTML = details
}


 }

 fetchApi()