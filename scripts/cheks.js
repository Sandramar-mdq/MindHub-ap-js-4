let data;

async function fetchApi(){
  try{
    let urlApi = 'https://mh-h0bh.onrender.com/api/amazing-events'
    let fetchResponse = await fetch(urlApi)
    /* console.log(fetchResponse) */
    let response = await fetchResponse.json()
    data = response
    /* console.log(response) */

    createCategories(response.events)
    printChecks('checks_container', createCategories(response.events))

    /* console.log(categories) */

  } catch(error){
      console.log('ocurrio un error')
      console.log(error)
  }
  
  
  function createCategories(arrayEvents) {
      let categories = []

      arrayEvents.forEach(each =>{
          if(!categories.includes(each.category)){
              categories.push(each.category)
            }
        })
        return categories
    }
    

function templateChecks (category){
    return`
    <span>
          <input class="checks" type="checkbox" onclick='captureData("name", "checks", data.events)' name="category" id="${category}" value="${category}"> 
          <label class="label-text" for="${category}">${category}</label>
    </span>
    `
}

function printChecks (id_html, categories) {
    let selector = document.querySelector(`#${id_html}`)
    let templates = categories.map(templateChecks)
    selector.innerHTML = templates.join('')
    /* console.log(templates) */
}

 }

 fetchApi()