var cart ={};

function init(){
    $.getJSON("data/foods.json",langOut);
}
function langOut(data){
    // var lang =JSON.parse(data);
    console.log(data);
    var out ='';
    for(var key in data){
       out += "<div class='cart'>";
       out += "<p class='name'>"+data[key].name+"</p>";
       out += "<img src='"+data[key].img+"'>";
       out += "<div class='cost'>"+data[key].cost+'$'+"</div>";
       out += "<button class='add-to-cart' data-id='"+data[key].id+"'>Buy</button>";
       out += "</div>";
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click',addToCart);

}
function addToCart(){
    var id = $(this).attr('data-id');
    console.log(id);
    if(cart[id]==undefined){
      cart[id]=1; 
    }else{
      cart[id]++;
   }
   // console.log(cart)
   showMiniCart();
   saveCart();
}
function saveCart(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
function showMiniCart(){
  var out="";
  for(var key in cart){
    out+=key.name+'----'+cart[key]+'<br>';
    // console.log(cart)
  }
  $('.mini-cart').html(out)
}
function loadCart(){
  if(localStorage.cart){
    cart = JSON.parse(localStorage.cart);
    showMiniCart()
  }
}
$(document).ready(function(){
    init();
    loadCart()
})