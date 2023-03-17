function captureDataPers() {
    let name = document.getElementById('idName').value
    let mail = document.getElementById('idMail').value
    let userMsg = document.getElementById('idMsg').value

    /* console.log(userMsg)
 */
      let dataPers = {
        'name': name,
        'mail' : mail,
        'userMsg' : userMsg
    }
   
    console.log(dataPers)
   
    alert( 
      `USER DATA SEND:  
    Nombre: ${dataPers.name}
    Email: ${dataPers.name}
    Mesagge: ${dataPers.name}
    `)
}


const handleForm = (event) => {
    event.preventDefault()
    captureDataPers()

}

let buttonForm = document.getElementById('button-Form')

buttonForm.addEventListener(
  'click', 
  handleForm
  )
