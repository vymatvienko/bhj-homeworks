let products = document.querySelectorAll(".product");
let increaseButton = document.querySelectorAll(".product__quantity-control_inc");
let decreaseButton = document.querySelectorAll(".product__quantity-control_dec");
let productQuantity = document.querySelectorAll(".product__quantity-value");

increaseButton.forEach((a, index) => {
    a.addEventListener("click", () => {
        productQuantity[index].textContent = (Number(productQuantity[index].textContent) + 1).toString();
    });
});

decreaseButton.forEach((a, index) => {
    a.addEventListener("click", () => {
        if (productQuantity[index].textContent > 1) {
            productQuantity[index].textContent = (Number(productQuantity[index].textContent) - 1).toString();
        };
    });
});

let productAdd = document.querySelectorAll(".product__add");
let productImage = document.querySelectorAll(".product__image");
let productCart = document.querySelector(".cart__products");

productAdd.forEach((a, index) => {
    a.addEventListener("click", () => {
        let cartProduct = Array.from(document.querySelectorAll(".cart__product"));
        if (cartProduct.length > 0) {
            let productInCart = cartProduct.find(element => element.getAttribute('data-id') == (products[index].getAttribute('data-id') - 1))
            if (productInCart) {
                productInCart.querySelector('.cart__product-count').textContent = (Number(productInCart.querySelector('.cart__product-count').textContent) + Number(productQuantity[index].textContent));
            } else {
                productCart.insertAdjacentHTML('beforeEnd', '<div class="cart__product" data-id="' + index + '">' + 
                '<img class="cart__product-image" src="' + productImage[index].getAttribute('src') + '">' +
                '<div class="cart__product-count">' + productQuantity[index].textContent + '</div></div>');
            }
        } else {
            productCart.insertAdjacentHTML('beforeEnd', '<div class="cart__product" data-id="' + index + '">' + 
            '<img class="cart__product-image" src="' + productImage[index].getAttribute('src') + '">' +
            '<div class="cart__product-count">' + productQuantity[index].textContent + '</div></div>');
        }
    });
});