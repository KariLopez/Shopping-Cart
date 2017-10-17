var purchaseOptions=[
    {
        name:"Heels",
        price:30,
        itemId:0
    },
    {
        name:"Blouse",
        price:70,
        itemId:1
    },
    {
        name:"Ring",
        price:8,
        itemId:2
    },
    {
        name:"Lipstick",
        price:20,
        itemId:3
    }
];
//Adds table of purchase options to <avail-items> with button 'add to cart'
var text = "<table><tr><th>Item</th><th>Price</th></tr>"
for (var i=0;i<purchaseOptions.length;i++)
{
    text+="<tr><td>"+purchaseOptions[i].name+"</td><td>"+purchaseOptions[i].price+"</td>"+"<td><button>Add to Cart</button></td>"+"</tr>"               
    num=i;
}
   text+="</table>";
   $("avail-items").append(text);
  
  //listens for click on button to append items to shopping cart. Can't get it to grab data from the row the button exists in.
  $("button").click(function() 
  {
      $("shopping-cart").append("<div>"+purchaseOptions[num].name+" "+purchaseOptions[num].price+"</div>"); 
  })