//SELECCIONAR

let templateCard = (data)=>{ 
    return `
    <div class="card c-div" style="width: 18rem;">
              <img src="${data.image} " class="c-img" alt="cinema">
              <div class="card-body">
                <h5 class="c-title">${data.name} </h5>
                <p class="c-body">${data.description} </p>
                <a href="#" class="c-btn c-btn:hover">Price: ${data.price} </a>
                <a href="./details.html?_id=${data._id} " class="c-btn c-btn:hover">Details</a> 
              </div>
            </div>
      `
    }

let printEvents = (id_html, array_events) => {
    let selector = document.querySelector(`#${id_html}`)
    let templates = array_events.map(templateCard).join('')
    selector.innerHTML = templates
    //console.log(templates)
}

let captureData = (id_text, id_checks, array_events) => {
    let inputText = document.querySelector(`#${id_text}`).value
    let inputChecks = Array.from(document.querySelectorAll(`.${id_checks}:checked`)).map(each =>each.value)
    console.log(inputText)
    
    let eventFiltered = array_events.filter(each =>{
        return (( 
            each.name.toLowerCase().includes(inputText.toLowerCase().trim())
        )&&( 
            each.length === 0 || inputChecks.includes(each.category
        )&&(
            each.date < data.currentDate
        )))
    })

    if (eventFiltered.length>0) {
        printEvents("cards-container-past", eventFiltered)
      } else {
        templateNotFound('#cards-container-past')
      }
}

document.querySelector("#name").addEventListener("keyup", ()=> captureData("name", "checks", data.events))

