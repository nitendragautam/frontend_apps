var timerStatus = 0; //0:stop and 1:running
var time = 0;

function startTimer(){
    timerStatus = 1;
    //Enable the start Button 
    document.getElementById("startButton").disabled = true;
    timer();
}


function stopTimer(){
    timerStatus = 0; // When stooped status is 0
    //Disable the Start Button
    document.getElementById("startButton").disabled = false;
}


function resetTimer(){
    timerStatus = 0;
    time = 0;
    document.getElementById("startButton").disabled = false;
    document.getElementById("timerLabel").innerHTML = "00:00:00";
}


function timer(){
    
    if(timerStatus == 1) {
        setTimeout(function(){
          time++; //Increment Timer
            var minute = Math.floor(time/100/60);
            console.log(minute);
            var second = Math.floor(time/100);
            var miliSecond = time % 100;
            // For minute from (0 to 9)
            if(minute < 10 ) {
                minute = "0" + minute;
            }
            
            if(second >= 60 ){
                second = second % 60;
            }
            
            if( second < 10) {
                second ="0" + second;
            }
            //Update the Timer Label
            document.getElementById("timerLabel").innerHTML = minute +":" +second +":" +miliSecond;
            timer();
        },10)
    }
}
