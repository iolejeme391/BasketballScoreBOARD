let scoreHomeEl = document.getElementById("score--home-el")
let scoreGuestEl = document.getElementById("score--guest-el")

let freethrowEl = document.getElementById("freethrow-el")
let midrangeEl = document.getElementById("midrange-el")
let longshotEl = document.getElementById("longshot-el")

let countHome = 0
let countGuest = 0


//home counter
function freethrow(){
    countHome += 1
    scoreHomeEl.textContent = countHome
} 

function midrange(){
    countHome += 2
    scoreHomeEl.textContent = countHome
} 

function longshot(){
    countHome += 3
    scoreHomeEl.textContent = countHome
} 

//guest counter

function freethrowGuest(){
    countGuest += 1
    scoreGuestEl.textContent = countGuest
} 

function midrangeGuest(){
    countGuest += 2
    scoreGuestEl.textContent = countGuest
} 

function longshotGuest(){
    countGuest += 3
    scoreGuestEl.textContent = countGuest
} 
