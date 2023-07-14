let homePoint = 0
homePointEl = document.getElementById("home-point")

let guestPoint = 0
guestPointEl = document.getElementById("guest-point")

 function addOneHome() {
     homePoint += 1
     homePointEl.innerText = homePoint
}

 function addOneGuest() {
     guestPoint += 1
     guestPointEl.innerText = guestPoint
}


 function addTwoHome() {
     homePoint += 2
     homePointEl.innerText = homePoint
}

 function addTwoGuest() {
     guestPoint += 2
     guestPointEl.innerText = guestPoint
}


 function addThreeHome() {
     homePoint += 3
     homePointEl.innerText = homePoint
}

 function addThreeGuest() {
     guestPoint += 3
     guestPointEl.innerText = guestPoint
}

function reset() {
    homePoint = 0
    guestPoint = 0
    homePointEl.innerText = 0
    guestPointEl.innerText = 0
}