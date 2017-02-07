

window.onload =(function(){

var shoppingCartItems=document.getElementById("ShoppingCartItems");
var itemSection=document.getElementById("itemList");
var shoppingCart=document.getElementById("shoppingCart");

var coupons=shoppingCartItems.querySelectorAll(".coupon");

var addToCart=document.getElementsByClassName("addToCart")
var qty=document.getElementsByClassName("qty");
var toggle=document.getElementById("toggle");
var keepShopping=document.querySelector(".button-left");
var i1="#item1";
var itemId=document.querySelector(i1+ " .addToCart");
var item1=document.querySelector(i1 +" .qty");

var itemIdArr=[];
var itemNumArr=[];

var cart=[];

var items=[
{
id:"001",
image:"http://placehold.it/140x100",
name:"item1",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},

{
image:"http://placehold.it/140x100",
id:"002",
name:"item2",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},
{
image:"http://placehold.it/140x100",
id:"003",
name:"item3",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},
{
image:"http://placehold.it/140x100",
id:"004",
name:"item4",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},
{
image:"http://placehold.it/140x100",
id:"005",
name:"item5",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},
{
image:"http://placehold.it/140x100",
id:"006",
name:"item6",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},
{
image:"http://placehold.it/140x100",
id:"007",
name:"item7",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},
{
image:"http://placehold.it/140x100",
id:"008",
name:"item8",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},
{
image:"http://placehold.it/140x100",
id:"009",
name:"item9",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},
{
image:"http://placehold.it/140x100",
id:"010",
name:"item10",
price:"50",
qyt:"1",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
inCart:false,
},

];

function addItem(item){
	var shoppingItems=document.getElementById("ShoppingCartItems");
	var itemDiv=document.createElement('div');
	var image=document.createElement('img');
	var descTitle=document.createElement('p');
	var titleText=document.createTextNode(item.name);
  var crElement=document.createElement('br');
  var itemDescription=document.createElement('p');
  var descriptionText=document.createTextNode(item.description);
  var reviewInfoDiv=document.createElement('div');
  var qty=document.createElement('input');
  var update=document.createElement('input');
  var coupon=document.createElement('input');
  var total=document.createElement('input');
  var upate=document.createElement('input');
  var remove=document.createElement('input');
  var horizontal=document.createElement('hr');
  var closeLabel=document.createElement('label');
  var closeIcon=document.createElement('i');

    image.src=item.image;
    descTitle.className="description";    
    itemDescription.className="description";
    itemDescription.appendChild(descriptionText);
    descTitle.appendChild(titleText);
    itemDiv.id=item.id;
    itemDiv.name=item.name;
    itemDiv.className="itemDiv";
    itemDiv.appendChild(image);
    itemDiv.appendChild(descTitle);  
    itemDiv.appendChild(itemDescription);      

    qty.className="qty";
    qty.type="number";
    qty.value=item.qyt;
    qty.setAttribute('min','1');
    qty.setAttribute('max','100');

    update.type="button";
    update.value="update";
    update.className="button-top";
    update.name=item.name;
    coupon.className="coupon";
    coupon.type="text";
    coupon.name=item.name;
    coupon.placeholder="individual item coupon code";
    remove.type="button";
    remove.value="Remove";
    remove.className="button-bottom";
    remove.setAttribute('id','button-bottomID');
    remove.name=item.name;
    closeLabel.setAttribute('for','button-bottomID');
    closeLabel.setAttribute('id','closeLabel');
    closeIcon.className='fa fa-times fa-lg';
    closeIcon.setAttribute('aria-hidden','true');
    closeLabel.appendChild(closeIcon);

    itemDiv.appendChild(closeLabel);
    

    var price=document.createElement('p');
    var priceText=document.createTextNode("$"+item.price);
    price.className="priceCart";
    price.appendChild(priceText);
    total.className="total";
    total.type="text";
    total.value="0";
    total.readOnly=true;
    reviewInfoDiv.className='reviewInfo';
    reviewInfoDiv.appendChild(qty);
    reviewInfoDiv.appendChild(update);    
  	reviewInfoDiv.appendChild(coupon);
    reviewInfoDiv.appendChild(price);    
  	reviewInfoDiv.appendChild(remove);
    reviewInfoDiv.appendChild(total);    
  	reviewInfoDiv.appendChild(horizontal);

    itemDiv.appendChild(reviewInfoDiv);
 
    shoppingItems.appendChild(itemDiv);
    itemDiv.appendChild(crElement); 

};

function objectsInCart(id,img,name,desc,qty,price,totalForItem,coupon) {
  this.id=id;
  this.img=img;
  this.name=name;
  this.desc=desc;
  this.qty=qty;
  this.price=price;
  this.totalForItem=totalForItem;
  this.coupon=coupon;
}


function removeItemFromPage(item){
      shoppingCartItems.removeChild(item);

};

function removeCartObject(item){
         var i=0;
         while(item.id!==cart[i].id){
          i++;
         };

         cart.splice(i,1);
};

function checkIndividualItemCoupons(cartObject){

var currentDiv=document.getElementById(cartObject.id);
var qty=currentDiv.querySelector(".qty");
var coupon=currentDiv.querySelector(".coupon");
var itemTotal=currentDiv.querySelector(".total");
if(coupon.value==="10PercentOffOneOnly"){
 var undiscountedTotal=0;

 var currentDiscountTotal=0;
 var undiscountedItemTotal=Number(cartObject.price)*Number(qty.value)

 for(var i=0;i<cart.length;i++){
  undiscountedTotal=undiscountedTotal+(Number(cart[i].price) * Number(cart[i].qty));
  currentDiscountTotal=currentDiscountTotal+(cart[i]).totalForItem;
 };  
 var proposedDiscount=cartObject.totalForItem-(cartObject.totalForItem*0.10);
var proposedDiscTotal=undiscountedTotal-undiscountedItemTotal+proposedDiscount;

if(proposedDiscTotal<currentDiscountTotal){

  for(var i=0;i<cart.length;i++){
    updateItemTotals(cart[i]);
    cart[i].totalForItem=Number(cart[i].price)*Number(cart[i].qty);
};
   cartObject.totalForItem=proposedDiscount;
   itemTotal.value='$'+proposedDiscount;
   updateSubTotal();

};



};
  
  };

   
function checkCouponDiscount(coupon){

  var shopCart=document.getElementById("ShoppingCartItems");
  var inCartItems=shopCart.querySelectorAll("div");
  var currentSubtotal;
    if(coupon!==""){;
      var undiscountedTotal=0;
      var proposedDiscount=0;
      var currentDiscountTotal=0;
      var undiscountedItemTotal=0;
      var singleTotal=0;
       for(var i=0;i<cart.length;i++){
       singleTotal=(Number(cart[i].price) * Number(cart[i].qty));
        undiscountedTotal=undiscountedTotal+singleTotal;
       if(coupon==="15PercentOffAllOdds"){        
        currentDiscountTotal=currentDiscountTotal+(cart[i]).totalForItem;

         if(Number(cart[i].id)%2!==0){
          undiscountedItemTotal=undiscountedItemTotal+singleTotal; 
          proposedDiscount=proposedDiscount+singleTotal-(singleTotal*0.15);

         };
       } else if(coupon==="5PercentOffWholeOrder"){;
            undiscountedItemTotal=undiscountedItemTotal+singleTotal;
            proposedDiscount=proposedDiscount+singleTotal-(singleTotal*0.05);
          };
       }; //for loop
    
       var subTotalNow=updateSubTotal(); 

       if(coupon==="15PercentOffAllOdds"){
         var proposedDiscTotal=undiscountedTotal-undiscountedItemTotal+proposedDiscount; 
       } else proposedDiscTotal=undiscountedTotal -(undiscountedTotal*0.05);
     
     
    if(proposedDiscTotal<subTotalNow && coupon==="15PercentOffAllOdds"){
      for(var j=0;j<cart.length;j++){
        if(Number(cart[j].id)%2!==0){
          var computedCartItemTot=(Number(cart[j].price) * Number(cart[j].qty));
          cart[j].totalForItem=computedCartItemTot-(computedCartItemTot*0.15);
          var currentDiv=document.getElementById(cart[j].id);
          var itemTotal=currentDiv.querySelector(".total");
          itemTotal.value='$'+cart[j].totalForItem;         
        } else {
          var computedCartItemTot=(Number(cart[j].price) * Number(cart[j].qty));
          cart[j].totalForItem=computedCartItemTot;  
          var currentDiv=document.getElementById(cart[j].id);
          var itemTotal=currentDiv.querySelector(".total");
          itemTotal.value='$'+cart[j].totalForItem;                   
        };
      };
      updateSubTotal();
    } else if(proposedDiscTotal<subTotalNow && coupon==="5PercentOffWholeOrder"){
        for(var j=0;j<cart.length;j++){

          
          cart[j].totalForItem=cart[j].totalForItem-(cart[j].totalForItem*0.05);
          var currentDiv=document.getElementById(cart[j].id);
          var itemTotal=currentDiv.querySelector(".total");
          itemTotal.value='$'+cart[j].totalForItem;               


          if(Number(cart[j].id)%2!==0){
            var computedCartItemTot=(Number(cart[j].price) * Number(cart[j].qty));
            cart[j].totalForItem=computedCartItemTot;
            cart[j].totalForItem=Number(computedCartItemTot)-Number(computedCartItemTot)*0.05;
            var currentDiv=document.getElementById(cart[j].id);
            var itemTotal=currentDiv.querySelector(".total");
            itemTotal.value='$'+cart[j].totalForItem;            
          } 


        };

        updateSubTotal();

    };


    }; 

};


function calculateTax(amt){
    return 0;
};

function calculateShipping(amt){
  return 0;
};

function getSingleDiscounts(cartObj){

    var itemPrice=cartObj.totalForItem;
    var discountedTotal=itemPrice;
      if(cartObj.coupon==="10PercentOffOneOnly"){
         discountedTotal=itemPrice-(itemPrice*0.10);


      };

  return discountedTotal;
};

function updateSubTotal(){
   var subTotalOut=document.getElementById("subTotal");
   var totalOut=document.getElementById("total")
  var subTotal=0;
     for(var i=0;i<cart.length;i++){
      subTotal=subTotal+Number(cart[i].totalForItem);
     };
     subTotalOut.value='$'+subTotal;
     totalOut.value='$'+(subTotal+calculateTax(subTotal)+calculateShipping(subTotal));
     return subTotal;
};

function flagItemOffCart(itemObj){
      var k=0;
    while(items[k].id!==itemObj.id && k<items.length){
       k++;
       }; 
       items[k].inCart=false; 
};



function updateItemTotals(items){ 

var subTotal=0;
    var currentDiv=document.getElementById(items.id);

    var itemTotal=currentDiv.querySelector(".total");

     qty=(currentDiv.querySelector(".qty")).value; 
     items.qty=qty;   
    var individualTotal=Number(items.qty)*Number(items.price);
   items.totalForItem=individualTotal;

    itemTotal.value='$'+individualTotal;


      if(qty=="0"){

        flagItemOffCart(items);
         removeItemFromPage(currentDiv);
         removeCartObject(items);

     };


      updateSubTotal();
};


itemSection.addEventListener("click", function(event){
   var i=0;
  if (event.target.type === "button") {
        var clickedItem = event.target.name;	
	
	while(items[i].name!==clickedItem && i<items.length){
		i++; 
	};
  var itemAdded=document.getElementById(items[i].name);
  qtyOfItem=itemAdded.querySelector(".qty");
  if(qtyOfItem.value<1){
    qtyOfItem.value=1;
  };
  items[i].qyt=qtyOfItem.value;

	if(!shoppingCart.style.display ||
		shoppingCart.style.display==="none"){
		shoppingCart.style.display="block";
	}; 

   if(items[i].inCart==false){
   	 items[i].inCart=true;
     var totalOfItem=Number(items[i].price)*Number(items[i].qyt);

     cart.push(new objectsInCart(items[i].id,items[i].image,items[i].name,items[i].description,
      items[i].qyt,items[i].price,totalOfItem,"")); 
   	 addItem(items[i]); var index=(cart.length)-1; 
     updateItemTotals(cart[index]);

     (document.getElementById("shoppingCart")).scrollIntoView(true);  

   } else {
      (document.getElementById("shoppingCart")).scrollIntoView(true);
   }

}
   event.stopPropagation();
}, false); 

shoppingCartItems.addEventListener("click", function(event){
   var shoppingCartItems=document.getElementById("ShoppingCartItems");
   var clickedItem="";
  if (event.target.value === "Remove" ||
      event.target.value === "update") { //IF REMOVE or Update BUTTONS CLICKED
         clickedItem = event.target.name;	
	var i=0;
	while(cart[i].name!==clickedItem && i<cart.length){
		i++; 
	}; 
  
  var itemId=cart[i].id;
  if(event.target.value==="Remove"){


    var child=document.getElementById(cart[i].id);

    var k=0;
    while(items[k].id!==cart[i].id && k<items.length){
       k++;
       };
       items[k].inCart=false;
    removeItemFromPage(child);
    removeCartObject(cart[i]);



    updateSubTotal();

  } else { 


       updateItemTotals(cart[i]);
       if(cart[i] && cart[i].id===itemId){
      checkIndividualItemCoupons(cart[i]);
       };
  };


   }  
   event.stopPropagation();


}, false);


summary.addEventListener("click", function(event){

   var summaryCoupon=summary.querySelector(".promo");
   var clickedItem="";
  if (event.target.value === "Update") { //IF Update BUTTON CLICKED
         clickedItem = event.target.name;
         document.querySelector('.coupon').value=""; 
    if(summaryCoupon.value==="15PercentOffAllOdds"){
           checkCouponDiscount(summaryCoupon.value);
    } else if(summaryCoupon.value==="5PercentOffWholeOrder"){
           checkCouponDiscount(summaryCoupon.value);
    }
   


   }  
   event.stopPropagation();


}, false);



toggle.addEventListener("click",function(event){
  if(shoppingCart.style.display==="block") {
  	shoppingCart.style.display="none";

  } else {
    shoppingCart.style.display="block";

    (document.getElementById("shoppingCart")).scrollIntoView(true);
  }
});

keepShopping.addEventListener('click',function(event){
    shoppingCart.style.display="none";

});


});