function showTime() {
    let date = new Date();
    let hours = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds(); // 0 - 59

    let formatHours = hours >= 12 ? hours - 12 : hours;
    let am_pm = hours >= 12 ? 'PM' : 'AM';

    hours = formatHours < 10 ? "0" + formatHours : formatHours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    let time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    
    document.getElementById("MyClockDisplay").innerText = time;
    
    setTimeout(showTime, 1000); // Schedule the showTime function to be called after 1000 milliseconds (1 second)
}

document.addEventListener('DOMContentLoaded', (event) => {
    showTime();
});

let cards = document.getElementsByClassName("cards");
let dropZone = document.getElementById('div1');
let dropback = document.getElementById("left");
 for(cards of cards) {
    cards.addEventListener("dragstart", function(e) {
        let selected = e.target;


    dropZone.addEventListener("dragover", function(e) {
        e.preventDefault();
    });
    dropZone.addEventListener("drop", function(E) {
        dropZone.appendChild(selected);
        selected = null;
    });
    dropback.addEventListener("dragover", function(e) {
        e.preventDefault();
    });
    dropback.addEventListener("drop", function(E) {
        dropback.appendChild(selected);
        selected = null;
    });
    
    })
 }
 let droppedCardsContainer = document.getElementById("droppedCardsContainer");
    let cardCopy = cards.cloneNode(true); // Create a copy of the task to show in the modal
    droppedCardsContainer.appendChild(cardCopy);
// When the user clicks the button, open the modal
document.getElementById("openModalBtn").onclick = function() {
  document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
  document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}

// Function to handle the dropping of cards and updating the modal content
function drop(ev) {
  // ... existing drop function ...

  // Add the dropped card to the modal
}

//function to add task


    let add = document.getElementById("add-button");
    let input = document.getElementById("input-new-task");
    
    document.getElementById("openModalBtn").onclick = function() {
        document.getElementById("myModal").style.display = "block";
      }
        
    add.addEventListener('click', function(e) {
        const hiddenCard2 = document.getElementById("new-task");
        hiddenCard2.style.display = "grid";
      }
    ); 
      
    addEventListener('click', function(e) {
        const createCard = this.document.getElementById('create-button');

    });
    window.onclick = function(event) {
        if(event.target == document.getElementById("close-display")) {
            document.getElementById("close-display").style.display = "none";
        }
    };
      function getFormattedTime() {
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
        let day = date.getDate().toString().padStart(2, '0');
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');
        // Format the date and time as you like here
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }
      
      // Example usage when a new card needs to be created:
      