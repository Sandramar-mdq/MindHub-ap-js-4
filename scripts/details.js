let datos = data.events;
let query = location.search
console.log(query)
let params = new URLSearchParams(query)
let id_query = params.get(`_id`) 

function defineDetail(dato){ 
    return`
          <div class="card c-div" style="width: 18rem;">
              <img src="${dato.image}" class="c-img" alt="${dato.name}">
              <div class="card-body">
                <h5 class="c-title">${dato.name} </h5>
                <p class="c-body">${dato.date} </p>
                <p class="c-body">${dato.description} </p>
                <p class="c-body">${dato.category} </p>
                <p class="c-body">${dato.place} </p>
                <p class="c-body">${dato.capacity} </p>            
                <p class="c-body">${dato.assistance} </p>            
                <a href="#" class="d-btn d-btn:hover">Price: ${dato.price} </a>
              </div>
            </div>
          </div>
        </div>
    `
}

/* function notFound (){
  return `
  <div class="card mb-3 c-div" style="max-width: 540px;">
          <div class="row g-0 card-body">
            <div class="col-md-4">
              <img src="./assets/img/notfound.png" class="img-fluid rounded-start" alt="Details">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="c-title">We're sorry!</h5>
                <p class="c-body">It seems your search has been unsuccessful.</p>
              </div>
            </div>
          </div>
        </div>
  `
} */

function printDetail(id, dato, array_data){
  let container = document.querySelector(id)
  let dat = array_data.find(each => each._id == dato)
  let details = defineDetail(dat)
  container.innerHTML = details
}

printDetail(`#cards-container` , id_query, datos)