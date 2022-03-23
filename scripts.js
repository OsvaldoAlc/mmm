const mainID = "home"

const buyID = "buy_btn"

const contactID = "contact_btn"


function onElClicked() {
    var id = event.srcElement.id

    switch(id) {
        case mainID:
          
          toggleMain(true)
          toggleBuy(false)
          toggleContact(false)
          break;
        case buyID:
            toggleMain(false)
          toggleBuy(true)
          toggleContact(false)
          
          break;

          case contactID: 

          toggleMain(false)
          toggleBuy(false)
          toggleContact(true)
          break
        default:
          
      }
}

function toggleMain(show) {
    var id = "main_info"
    if(show) {
        document.getElementById(id).style.display = "block";

    } else {
        document.getElementById(id).style.display = "none";
    }
} 

function toggleBuy(show) {
    var id = "history"
    if(show) {
        document.getElementById(id).style.display = "flex";

    } else {
        document.getElementById(id).style.display = "none";
    }
} 

function toggleContact(show) {
    var id = "contact"
    if(show) {
        document.getElementById(id).style.display = "block";

    } else {
        document.getElementById(id).style.display = "none";
    }
} 


toggleBuy(false)
toggleContact(false)
