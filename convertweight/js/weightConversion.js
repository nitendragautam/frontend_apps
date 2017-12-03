
//Hide the output at first
document.getElementById('output').style.visibility = 'hidden';
//Get the Elements
var poundInputElement = document.getElementById('poundInput');
    
//Add the EventListener to capture the value
    poundInputElement.addEventListener('input',
                                       function(event){
        document.getElementById('output').style.visibility = 'visible';
    let pounds=event.target.value;
    
        var gramsOutput = document.getElementById('gramsOutput');
        
        //Add to the Output by converting pounds to Grams
        gramsOutput.innerHTML= pounds/0.0022046;
        
        var kgOutput = document.getElementById('kgOutput');
        
        //Convert pounds to Kg
        kgOutput.innerHTML = pounds/2.20;
        
        var ounceOutput = document.getElementById('ounceOutput');
        
        //Convert Pounds to Ounce
        
        ounceOutput.innerHTML = pounds * 16;
        
        
});