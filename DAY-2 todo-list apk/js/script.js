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
  //....to open and close new task display
  popup = document.getElementById('add-button');
  popup.addEventListener('click', function(e) {
    const hiddenCard2 = document.getElementById("new-task");
    hiddenCard2.style.display = "grid";
  }
); 
document.getElementsByClassName("close-display")[0].onclick = function() {
    document.getElementById("new-task").style.display = "none";
  }
  //...to close
let cards = document.getElementsByClassName("cards");
let dropZone = document.getElementById('div1');
let dropback = document.getElementById("left");
let excess = document.getElementById('myModal')
 for(cards of cards) {
    cards.addEventListener("dragstart", function(e) {
        let selected = e.target;


    dropZone.addEventListener("dragover", function(e) {
        e.preventDefault();
    });
    if (dropZone.cards > 3) {
        dropZone.appendChild(excess);
    }
    else (dropZone.addEventListener("drop", function(E) {
        dropZone.appendChild(selected);
        selected = null;
    })
    );
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
document.getElementById('create-button').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const color = document.getElementById('cardColor').value;
    const name = document.getElementById('cardName').value;
    const info = document.getElementById('cardInfo').value;
    const deadline = document.getElementById('taskDeadline').value;

    // Create card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div style="background-color: ${color}; height:200px; width:100px">Color Display</div>
      <h3>${name}</h3>
      <p>${info}</p>
      <small>Deadline: ${deadline}</small>
      <input type="checkbox" class="doneCheckbox">
      
      
    `;

    // Append card to container
    document.getElementById('cards-small-container').appendChild(card);

    // Close modal
    document.getElementById('new-task').style.display = 'none';

    // Set a timeout for the task deadline
    const currentTime = new Date();
    const deadlineTime = new Date(deadline);
    const timeDifference = deadlineTime - currentTime;

    if (timeDifference > 0) {
        setTimeout(() => {
            if (!card.querySelector('.doneCheckbox').checked) {
                alert(`Deadline reached for task: ${name}`);
                updateOverdueCount(1); // Increment overdue count
            }
        }, timeDifference);
    }

    // Event listener for the done checkbox
    card.querySelector('.doneCheckbox').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('myModal').appendChild(card); // Move to completed container
            updateCompletedCount(1); // Increment completed count
        }
    });
});

function updateOverdueCount(increment) {
    let countElement = document.getElementById('overdueCount');
    let count = parseInt(countElement.textContent.split(": ")[1]);
    countElement.textContent = `Overdue Tasks: ${count + increment}`;
}

function updateCompletedCount(increment) {
    let countElement = document.getElementById('completedCount');
    let count = parseInt(countElement.textContent.split(": ")[1]);
    countElement.textContent = `Completed Tasks: ${count + increment}`;
}

  
  // Add logic to open the modal and close it
  
    
    document.getElementById("openModalBtn").onclick = function() {
        document.getElementById("myModal").style.display = "block";
      }
    
    
    window.onclick = function(event) {
        if(event.target == document.getElementById('new-task')) {
            document.getElementById('new-task').style.display = "none";
        }
    }
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
      