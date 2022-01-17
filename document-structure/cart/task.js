let dec = document.querySelectorAll('.product__quantity-control_dec');
dec.forEach(function(el) {
    el.addEventListener("click", decFunc);
  });
let inc = document.querySelectorAll('.product__quantity-control_inc');
inc.forEach(function(el) {
    el.addEventListener("click", incFunc);
  });
 
function decFunc(event) {
    if(event.target.nextElementSibling.innerText > 1) {
        event.target.nextElementSibling.innerText --;
    };
};
function incFunc(event) {
    event.target.previousElementSibling.innerText ++;
};

let buttons = document.querySelectorAll('.product__add');
buttons.forEach(function(el) {
    el.addEventListener("click", addFunc);
  });
let cart = document.querySelector(".cart__products");  
function addFunc(event) {
    productId = event.target.closest(".product").getAttribute('data-id');
    let shoppingCart = Array.from(document.querySelectorAll(".cart__product"));
    let findProduct = shoppingCart.filter(function(product) {
        return product.getAttribute('data-id') === productId;
      });    
    if(findProduct.length === 0) {
        cart.insertAdjacentHTML('afterBegin',`<div class="cart__product" data-id=${productId}><img class="cart__product-image" src=${event.target.closest(".product").querySelector(".product__image").src}><div class="cart__product-count">${event.target.closest(".product").querySelector(".product__quantity-value").innerText}</div></div>`); 
      } else {
      console.log("Продукт уже в корзине")
      console.log(findProduct.querySelector(".cart__product-count"))
    }

}





