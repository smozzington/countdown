//Clicking start/reset button
    //If playing:
        //Reload page
    //If not playing:
        //Starts 30s timer
        //card selection box disappears
        //timer appears
        //Start button changes to reset
        //3 digit target number appears

//Selecting a small/large number
    //Game is not playing
    //Number appears in a box below target number
    
//Generate small number in a slot//
document.getElementById("small_number_card").onclick = function(){
    genSmlNumber();
}


//Generate large number in a slot// 
document.getElementById("large_number_card").onclick = function(){
    genLgeNumber();
}    
    
    
    
    
    
    
//Functions//
    
//Generate random small number (1-10)//
function genSmlNumber(){
    var smlNumber = Array(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10);
    for(i=1; i<=1; i++){
        var x = smlNumber[Math.floor(Math.random()*smlNumber.length)];
    document.getElementById("box"+i).innerHTML = x;
    }
    
}

//Generate random large number (25, 50, 75, 100)//
function genLgeNumber(){
    var lgeNumber = Array(25, 50, 75, 100);
    var x = lgeNumber[Math.floor(Math.random()*lgeNumber.length)];
    document.getElementById("box2").innerHTML = x;
}