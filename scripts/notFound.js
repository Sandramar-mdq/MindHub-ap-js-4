function templateNotFound(id_etiqueta) {
    let container = document.querySelector(id_etiqueta)
    container.innerHTML = `
      <div class="c-container d-flex justify-content-around flex-wrap" id="cards-container">
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
  
    </div>  
        `
      }
