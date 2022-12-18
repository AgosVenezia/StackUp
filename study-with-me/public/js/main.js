function loadBody () {
    let currentCards = localStorage.getItem("cards")
    if (currentCards == null) {
      currentCards = []
    }else{
      currentCards = JSON.parse(currentCards)
    }
   
    let htmlText = ""
    for (let i = 0; i < currentCards.length; i++) {
      htmlText += 
      `<div class="card" onclick="handleState(${i})">
        <h2>${currentCards[i].question}</h2>
        <div id="card-${i}">
          <p>${currentCards[i].answer}</p>
          <button onclick="handleDelete(${i})">Remove</button>
        </div>
      </div>`
    }
   
    document.getElementById("card-container").innerHTML = htmlText
  }

function handleSubmit() {
    let question = document.getElementById("questionField").value;
    let answer = document.getElementById("answerField").value;
    var currentCards = localStorage.getItem("cards")
    if (question && answer){
      if (currentCards == null) {
        currentCards = []
      } else{
        currentCards = JSON.parse(currentCards)
      }
      currentCards.push({question: question, answer: answer})
      localStorage.setItem("cards", JSON.stringify(currentCards))
      document.getElementById("questionField").value = ""
      document.getElementById("answerField").value = ""
      loadBody()
    }
  }
   
function handleState (index) {
    let card = document.getElementById(`card-${index}`)
    if (card.style.display == "none") {
      card.style.display = "block"
    }else{
      card.style.display = "none"
    }
  }
   
function handleDelete (index) {
    let currentCards = localStorage.getItem("cards")
    if (currentCards == null) {
      currentCards = []
    }else{
      currentCards = JSON.parse(currentCards)
    }
    currentCards.splice(index, 1)
    localStorage.setItem("cards", JSON.stringify(currentCards))
    loadBody()
  }

