  // Get Canvas Id from Html Page
//Create a canvas Object from Html Create Element
var canvas = document.getElementById("canvas");

// Get Canvas 2 Dimensional Context
//create a 2D drawing object for canvas object 
var canvasContext = canvas.getContext("2d");

//We calculate the Clock radius using the height of canvas
var clockRadius = canvas.height/2;

//Remapping the (0,0) position of the drawing object to the center of the canvas
canvasContext.translate(clockRadius,clockRadius);

//Reducing the lock radius so that it fits inside the canvas
clockRadius = clockRadius * 0.90;

//Call the drawClock functions at intervals
setInterval(drawClock,1000);


function drawClock(){
    drawFace(canvasContext ,clockRadius);
    drawClockNumbers(canvasContext ,clockRadius);
    getClockTime(canvasContext, clockRadius);
}

// Draws the Clock Face
function drawFace( canvasContext, clockRadius){
    
    var gradient;
    canvasContext.beginPath();
    canvasContext.arc(0,0, clockRadius ,0 ,2 * Math.PI);
    canvasContext.fillStyle = "white"; //Fill with white colour
    canvasContext.fill();
    
    //Create a radial Gradient (95 % and 105 % Clock Radius)
    gradient = canvasContext.createRadialGradient
    (0,0,clockRadius *0.95 ,0 ,0, clockRadius * 1.05);
    
    //Now we create a 3 Color Stops which corresponds to the inner ,middle and outer edges of arc
    
    gradient.addColorStop(0 ,'#333');
    gradient.addColorStop(0.5 ,'white');
    gradient.addColorStop(1 ,'#333');
    
    //Defining the Gradient as the stroke Style of the drawing Object
    canvasContext.strokeStyle = gradient;
    
    //Now we define the line width of the drawing Object
    
    canvasContext.lineWidth = clockRadius * 0.1;
    
    // Drawing the Circle
    canvasContext.stroke();
    
    //Now we draw the Clock center
    canvasContext.beginPath();
    canvasContext.arc(0,0,clockRadius * 0.1 ,0 ,2 * Math.PI);
    canvasContext.fillStyle = '#333';
    canvasContext.fill();
}

//Draws clock Numbers 
function drawClockNumbers(canvasContext ,clockRadius) {
    
    var angle;
    var number;
    //Set he font size of the drawing object (which is 15 % of radius)
    canvasContext.font = clockRadius *0.15 +"px arial";
    
    //Set the text Allignment to the middle and center of the print position 
    canvasContext.textBaseline = "middle";
    canvasContext.textAlign="center";
    
    // Calculate the print position for 12 numbers to 85% of the radius 
    for(number = 1; number <13 ;number ++){
        angle = number * Math.PI /6;
        canvasContext.rotate(angle);
        canvasContext.translate(0 ,-clockRadius*0.85);
        canvasContext.rotate(-angle);
        canvasContext.fillText(number.toString(),0 ,0);
        canvasContext.rotate(angle);
        canvasContext.translate(0 ,clockRadius * 0.85);
        //Rotating the angle to allign with circle  
        canvasContext.rotate(-angle); 
    }
}
    
    //Gets Clock Time
    //Calculates the angle of the hour hand 
    function getClockTime(canvasContext ,clockRadius){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        
        //Calculate Hour
        hour = hour%12;
        hour=(hour *Math.PI/6) +(minute * Math.PI/(6*60))+
            (second*Math.PI/(360*60));
        //Draw hour hand
        drawHand(canvasContext ,hour ,clockRadius *0.5 ,clockRadius * 0.07);
        
        //Draw Minute Hand
        minute = (minute *Math.PI/30) + (second * Math.PI/(30*60));
        drawHand( canvasContext ,minute ,clockRadius * 0.8 ,clockRadius*0.07);
        
        //draw second
        second = (second*Math.PI/30);
        drawHand(canvasContext ,second ,clockRadius * 0.9 ,clockRadius *0.02);
        
    }
    
    //draws Hand
    
    function drawHand(canvasContext, position ,length ,width){
        canvasContext.beginPath();
        canvasContext.lineWidth = width;
        canvasContext.lineCap="round";
        canvasContext.moveTo(0,0);
        canvasContext.rotate(position);
        canvasContext.lineTo(0, -length);
        canvasContext.stroke();
        canvasContext.rotate(-position); 
    }



