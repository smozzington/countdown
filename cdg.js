var playing = false;
var action;
var cardSlot = 0;
var timeRemaining;

//Start countdown
document.getElementById("start_button").onclick = function(){
    if(playing == true){
        location.reload();
    }else{        
        playing = true;
        timeRemaining = 30;
        document.getElementById("start_button").innerHTML = "Reset";
        setTimeout(function(){
            startCountdown();
            play();
        }, 3000);
        genTarget();
        hide("card_selection_box");
        show("counter_box");
    }
}

//Click on small number button to generate a random small number
document.getElementById("small_number_card").onclick = function(){
    genSmallNumber();
}

//Click on large number button to generate a random small number
document.getElementById("large_number_card").onclick = function(){
    genLargeNumber();
}


//FUNCTIONS//

//Start countdown
function startCountdown(){
    action = setInterval(function(){
        timeRemaining -= 1;
        document.getElementById("counter_value").innerHTML = timeRemaining;
        if(timeRemaining == 0){
            stopCountdown();
            playing = false;
            document.getElementById("start_button").onclick = function(){
                location.reload();
            }            
        }
    }, 1000);
}

//Play countdown themetune
function play(){
    var audio = document.getElementById("audio").play();
}

//Stop countdown
function stopCountdown(){
    clearInterval(action);
}

//Generate target number between 100-999
function genTarget(){
    var targetNumber = 101+ Math.floor(Math.random()*899);
    document.getElementById("target").innerHTML = targetNumber;
}


//Generate random small number from array
function genSmallNumber(){
    var smallArray = Array(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10);
    var smallNumber = smallArray[Math.floor(Math.random()*smallArray.length)];
    cardSlot += 1;
    document.getElementById("box"+cardSlot).innerHTML = smallNumber;
}

//Generate random large number from array
function genLargeNumber(){
    var largeArray = Array(25,50,75,100);
    var largeNumber = largeArray[Math.floor(Math.random()*largeArray.length)];
    cardSlot += 1;
    document.getElementById("box"+cardSlot).innerHTML = largeNumber;
}

//Hide an element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//Show an element
function show(Id){
    document.getElementById(Id).style.display = "block";
}