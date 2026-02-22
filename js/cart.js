let cart = document.getElementsByClassName("add-to-cart")

let cartArray;

if (localStorage.cart){
    cartArray = JSON.parse(localStorage.cart)
}
    else {
        cartArray = [];
    }

if (cartArray.length>0){
    dataset.cart.src = "images/full-cart.svg"
}

for (i=0;i<add-to-cart.length;i++){
    cart[i].addEventListener("click", addToCart);
}

function addToCart(){
    let cartItem = {
        id: this.dataset.id,
        img: this.dataset.img,
    }

for(i=0; i<cartArray.length; i++){
    if(this.dataset.id === cartArray[i].id){
        cartArray.splice(i,1,);
    }
}

    cartArray.push(cartItem);
    localStorage.cart = JSON.stringify(cartArray);
}