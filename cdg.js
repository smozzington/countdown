var cardSlot;

document.getElementById("small_number_card").onclick = function(){
    genSmlNumber();
}





//Generate small number in next available card slot
function genSmlNumber(){
    var smlNumber = Array(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10);
    var x = smlNumber[Math.floor(Math.random()*smlNumber.length)];
        var cardSlot = 1;
        document.getElementById("box"+cardSlot).innerHTML = x;
}

        
        
        
      
