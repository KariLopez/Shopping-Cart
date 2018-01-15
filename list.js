var purchaseOptions=["Heels","Blouse","Ring","Lipstick"]
var itemPrices=[30,70,8,20]
var listLength= purchaseOptions.length;
var myCartTotal=0;
//creates list of all available items, creates a button with an Id to match button Id with Item Id (Array placement)
function printList(){
    for(var i=0;i<listLength;i++){
        $("ul").append("<li>"+purchaseOptions[i]+". . . . . .  $" + itemPrices[i].toFixed(2) +"  "+"</li></br>");
        $("ul").append("<input type='button' id =\""+(i)+"\""+"value='Add to Cart'>");
    }
}
//adds  item (based on index) to cart and updates cart total
function addItemZero(){
    $("#cartItems").append("<ul>"+purchaseOptions[0]+"</ul>");
    myCartTotal = myCartTotal + itemPrices[0];
    $("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));	 
}  
function addItemOne(){
    $("#cartItems").append("<ul>"+purchaseOptions[1]+"</ul>"); 
    myCartTotal = myCartTotal + itemPrices[1];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));	
}
function addItemTwo(){
    $("#cartItems").append("<ul>"+purchaseOptions[2]+"</ul>"); 
    myCartTotal = myCartTotal + itemPrices[2];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));	
}
function addItemThree(){
    $("#cartItems").append("<ul>"+purchaseOptions[3]+"</ul>");
    myCartTotal = myCartTotal + itemPrices[3];
	$("#cartTotal").text("Your new cart total is: $" + myCartTotal.toFixed(2));	
}
//event listeners for each item.
function zeroListener(){
    document.getElementById("0").addEventListener('click', addItemZero);
}
function oneListener(){
    document.getElementById("1").addEventListener('click', addItemOne);
}
function twoListener(){
    document.getElementById("2").addEventListener('click', addItemTwo);
}
function threeListener(){
    document.getElementById("3").addEventListener('click', addItemThree);
}

