function answer(){
    var amount_input=parseInt(document.getElementById("amount").value);
    var rate_input=parseInt(document.getElementById("rate").value);
    var time_input=parseInt(document.getElementById("time").value);
    var Intrest=amount_input*rate_input*time_input/100
    var total=Intrest + amount_input;

    // var amount_input=parseInt(document.
    // getElementById("amount").value);
    document.getElementById("output_1").innerHTML=amount_input; 
    document.getElementById("output_2").innerHTML=Intrest; 
    document.getElementById("output_3").innerHTML=total; 

}