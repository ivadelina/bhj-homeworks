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
        product.getAttribute('data-id') === productId;
        console.log(product.getAttribute('data-id') === productId) // true
      });
      console.log(shoppingCart)
      console.log(findProduct) // почему тут полчучается пустой массив?
      
    if(findProduct.length === 0) {
        console.log("Надо добавить продукт в корзину");
        cart.insertAdjacentHTML('afterBegin','<div class="cart__product" data-id="1"><img class="cart__product-image" src="image.png"><div class="cart__product-count">20</div></div>'); 
        let id = document.querySelector(".cart__product").getAttribute('data-id');
        id = productId;
        let number = document.querySelector(".cart__product-count").innerText;
        number = event.target.previousElementSibling.children[1].innerText;
        console.log(number) // Почему-то всё правильно находит, но в корзине остается количество по умолчанию
        let image = document.querySelector(".cart__product-image").src;
        // Как достать до ссылки на картинку добавляемого объекта?()

    } else {
      console.log("Продукт уже в корзине")
    }

}





