 //slider output
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
};


    
function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()
    var futureDate = parseInt(year) + parseInt(years);
    var interest = principal * years * rate/100;
    if(principal <= 0 || principal === ""){
        alert("Enter a positive number");
        principal.focus();
    }else{
        let amount = interest;
        parseFloat(amount);
        let computeInterest = document.getElementById("result").innerHTML="If you deposit " + principal +  "," + "at an interest rate of " + rate + "%. You will receive an amount of " + amount + ", in the year " + futureDate + ".";
        
    };
};


 


        

    
 
    


        
    
        


        
    
        
        
    
        