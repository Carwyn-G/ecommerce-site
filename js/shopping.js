//Array of products that can be referenced and called to rather than needing to rewrite things repeatedly
const products = [
  {
    name: "Confetti Pride Hexagon Quilt",
    price: 350,
    id: "hex-pride",
    link: "../products/hex-pride.html",
    img: "../images/hex-pride.jpg",
    desc: "A quilt made up of hexagons in a variety of LGBTQ pride prints on a white background, with scattered hexagons of solid colors of the rainbow",
    secondImg: "../images/hex-pride-reverse.jpg",
    secondDesc:
      "the reverse of the quilt is made up of colored hexagons laid out to resemble the progress pride flag",
    thirdImg: "../images/hex-pride-detail.jpg",
    thirdDesc:
      "Confetti pride hexagon quilt with one corner folded back to partially show both the face and reverse at the same time.",
    quantity: 0,
    longDesc: "This throw quilt was created to celebrate Pride Month and be a joyful, cozy representation of the love the LGBTQ community shares. Made of 100% cotton, this lightweight quilt is easy to clean and folds up small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Transit Map Cross Stitch",
    price: 200,
    id: "xstitch-map",
    link: "../products/xstitch-map.html",
    img: "../images/xstitch-map-detail.jpeg",
    desc: "A cross-stitched transit map showing the routes throughout Walt Disney World, zoomed in to focus on Animal Kingdom",
    secondImg: "../images/xstitch-map.jpeg",
    secondDesc:
      "A full view of a transit map of Walt Disney World with each route stitched in different colors",
    thirdImg: "../images/xstitch-map-detail-alt.jpeg",
    thirdDesc:
      "A focused view of Magic Kingdom and the surrounding area with the monorail and ferry lines mapped out in different color stitching",
    quantity: 0,
    longDesc: "This cross-stitched artwork features a map of transit routes throughout Walt Disney World and measures approximately 15\"\ by 12\"\ (38 by 30 cm). The parks and bodies of water are dyed onto the cloth while the transit routes are stitched in different colors. A key in the bottom right corner labels each color with the corresponding monorail, bus line, or other route. The artwork comes premounted on a dark navy mat board to be easily hung in a frame of your choice."
  },
  {
    name: "Blue Phoenix Puff Quilt",
    price: 450,
    id: "puff-phoenix",
    link: "../products/puff-phoenix.html",
    img: "../images/puff-phoenix.jpg",
    desc: "A puff quilt with a pixel art design of a phoenix in a blue chromatic color scheme",
    secondImg: "../images/puff-phoenix-detail.jpg",
    secondDesc:
      "Close-up of the puff quilt focused on the face of the phoenix, a variety of fabric prints make up the puffs",
    thirdImg: "../images/puff-phoenix-detail-alt.png",
    thirdDesc: "Slightly zoomed in to focus on the phoenix's body and head",
    quantity: 0,
    longDesc: "This puff quilt uses a pixel art style to represent a phoenix in shades of blue. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown. The face of the quilt is made up of cotton fabric and each puff is stuffed with fluffy polyester filling. The backing is a light blue flannel to make this quilt nice and cozy to snuggle up under. Please see the FAQ for care instructions for washing puff quilts."
  },
  {
    name: "Black and Gold Hexagon Quilt",
    price: 250,
    id: "hex-blackgold",
    link: "../products/hex-blackgold.html",
    img: "../images/hex-blackgold.jpg",
    desc: "A quilt made up of black hexagons of different fabrics with golden borders around each hexagon",
    secondImg: "../images/hex-blackgold-detail.jpg",
    secondDesc:
      "A close up of the hexagons making up the quilt, showing different subtle prints in the black inner hexagons",
    thirdImg: "../images/hex-blackgold-reverse.jpeg",
    thirdDesc:
      "The quilt draped over a sofa to show the reverse of the quilt made up of metallic gold fabric",
    quantity: 0,
    longDesc: "This throw quilt has a bold black and gold. Made of 100% cotton, this lightweight quilt is easy to clean and small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Zebra Print Puff Quilt",
    price: 400,
    id: "puff-zebra",
    link: "../products/puff-zebra.html",
    img: "../images/puff-zebra.png",
    desc: "A puff quilt with a zebra print design made up of white and black squares",
    secondImg: "../images/puff-zebra-detail.png",
    secondDesc:
      "A close up of the quilt folded up showing some subtle different prints in the black and white puffs",
    thirdImg: "../images/puff-zebra-detail-alt.png",
    thirdDesc:
      "A close up of a red heart applique on one puff at the corner of the quilt",
    quantity: 0,
    longDesc: "This puff quilt is designed with a zebra print pattern in an assortment of different white and black fabrics. It also has a red heart appliqued onto one puff in the top left corner. This quilt has extra length compared to the typical throws available and measures approximately 50\"\ by 80\"\ (127 by 203 cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown. The face of the quilt is made up of cotton fabric and each puff is stuffed with fluffy polyester filling. The backing is a zebra print fleece to make this quilt as warm and cozy as possible to snuggle up under. Please see the FAQ for care instructions for washing puff quilts."
  },
  {
    name: "Honey Bee Hexagon Quilt",
    price: 250,
    id: "hex-bee",
    link: "../products/hex-bee.html",
    img: "../images/hex-bee.jpg",
    desc: "A hexagon quilt made up of a variety of honeybee themed print fabrics in yellows and blacks",
    secondImg: "../images/hex-bee-reverse.jpg",
    secondDesc:
      "The reverse of the quilt shows a scattered arrangement of shades of yellow fabrics with occassional black hexagons",
    thirdImg: "../images/hex-bee-detail.jpg",
    thirdDesc:
      "A close up of the quilt showing different fabric prints featuring bees and flowers in shades of yellow.",
    quantity: 0,
    longDesc: "This throw quilt features a lively assortment of floral and bumblebee prints in yellows and blacks. Made of 100% cotton, this lightweight quilt is easy to clean and small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Bi Pride Hexagon Quilt",
    price: 250,
    id: "hex-bi",
    link: "../products/hex-bi.html",
    img: "../images/hex-bi.jpg",
    desc: "A quilt made up of scattered hexagons in pink, purple, and blue to represent the bisexual pride flag, a few white hexagons dot the quilt with images of cute, celebratory animals",
    secondImg: "../images/hex-bi-reverse.jpg",
    secondDesc:
      "The reverse of the quilt is mostly grey with interspersed hexagons of pink, purple, and blue arranged in the stripes of the bi pride flag",
    thirdImg: "../images/hex-bi-alt.jpg",
    thirdDesc: "The bi pride hexagon quilt is shown draped over a bed",
    quantity: 0,
    longDesc: "This throw quilt was created to celebrate Pride Month and in particular bi pride. Made of 100% cotton, this lightweight quilt is easy to clean and small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Genderfluid Pride Hexagon Quilt",
    price: 275,
    id: "hex-fluid",
    link: "../products/hex-fluid.html",
    img: "../images/hex-fluid.jpg",
    desc: "A quilt made up of scattered hexagons in pink, white, purple, black, and blue to represent the genderfluid pride flag",
    secondImg: "../images/hex-fluid-reverse.jpg",
    secondDesc:
      "The reverse of the quilt shows the pink, white, purple, black, and blue hexagons arranged in stripes like the genderfluid pride flag",
    thirdImg: "../images/hex-fluid-detail.jpg",
    thirdDesc:
      "A close up shows a cross-stitched bee in the genderfluid pride colors, with the words bee proud beneath it",
    quantity: 0,
    longDesc: "This throw quilt was created to celebrate Pride Month and in particular genderfluid pride. On one hexagon, it features a cross-stitched bee, also in the genderfluid pride flag colors, along with the words \"\Bee Proud\"\. Made of 100% cotton, this lightweight quilt is easy to clean and small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Custom Puff Quilt",
    price: 400,
    id: "puff-custom",
    link: "../products/puff-custom.html",
    img: "../images/puff-custom-1.jpg",
    desc: "A puff quilt with a pixel art design of a forest campground with a campfire in front of a tent and a crescent moon hanging in the sky",
    secondImg: "../images/puff-custom-2.jpg",
    secondDesc:
      "A puff quilt with a pixel art design of a carrtoony red fox on a green background",
    thirdImg: "../images/puff-custom-3.jpeg",
    thirdDesc:
      "A puff quilt with a pixel art design of a bookshelf and an orange electric guitar",
    quantity: 0,
    longDesc: "If you're looking for something personal, custom quilts are available and can be designed with cotton, flannel, or fleece backings, and in different sizes. To help you realize what sorts of designs are possible, please see the \"\Design\"\ page where you'll find a tool to help you play around with possible designs. Please keep in mind that the starting price for custom quilts is based on a cotton backing and only 6 fabrics used for the face, additional fabric requirements will incur additional costs. It's recommended to first reach out via the contact page to discuss your design ideas in detail before placing an order, to best ensure that your vision can be made reality. Please see the FAQ for care instructions for washing puff quilts."
  },
];

let cartTotal = 0;

//update cart indicator
  if (localStorage.getItem("quantity") !== null){
    cartQuantity = JSON.parse(localStorage.getItem("quantity"));
    let cartIndicators = document.getElementsByClassName("cart-indicator");
    if (cartQuantity <=0){
      for(i=0; i<cartIndicators.length; i++){
        cartIndicators[i].innerHTML = "";
      }
    }
    else {
        for(i=0; i<cartIndicators.length; i++){
        cartIndicators[i].innerHTML = cartQuantity;
      }
    }
  }

//Generate home page
if (document.getElementById("home-main") !== null) {
  const homeMain = document.getElementById("home-main");
  console.log("this is the home page");
  for (i = 0; i < 3; i++) {
    // create card for each product
    let feature = `
      <div class="feature">
          <a href= "${products[i].link}"><img src="${products[i].img}" alt="${products[i].desc}"></a>
          <h2>${products[i].name}</h2>
          <h2>&dollar; ${products[i].price}</h2>
          </div>
      `;
    //Add the first three cards to the main products page

    homeMain.innerHTML += feature;
  }
}

//Generate shop page
if (document.getElementById("shop-main") !== null) {
  const shopMain = document.getElementById("shop-main");

  products.forEach((result) => {
    // create card for each product
    const catalog = `
      <div class="product">
          <a href= "${result.link}"><img src="${result.img}" alt="${result.desc}"></a>
          <h2>${result.name}</h2>
          <h2>&dollar; ${result.price}</h2>
          </div>
      `;
    //Add the card to the main products page
    shopMain.innerHTML += catalog;
  });
}

//Generate product pages
let currentID = undefined;
getIdFromPage();
console.log(currentID);

if (document.getElementById(currentID) !== null) {
  console.log(`This is the ${currentID} page`);
  let productPage = document.getElementById(currentID);
  let targeted = products.findIndex(function (x) {
    return x.id === currentID;
  });
  console.log(targeted);
  let productInfo = `
    <div class = "product-images">
      <img src="${products[targeted].img}" alt="${products[targeted].desc}">
      <img src="${products[targeted].secondImg}" alt="${products[targeted].secondDesc}">
      <img src="${products[targeted].thirdImg}" alt="${products[targeted].thirdDesc}">
    </div>
    <div class = "product-details">
      <h1>${products[targeted].name}</h1>
      <div class = "add-to-cart">
        <h2>&dollar; ${products[targeted].price}</h2>
        <button class="button" id="add-${products[targeted].id}">Add To Cart</button>
      </div>
      <div class="long desc">
        <p>${products[targeted].longDesc}</p>
      </div>
    </div>`;

  console.log(productInfo);
  productPage.innerHTML += productInfo;

  let addButton = document.getElementById(`add-${products[targeted].id}`);
  addButton.addEventListener("click", function () {
      addToCart(products[targeted]);
    });
}

// Generate cart page
if (document.getElementById("shopping-cart") !== null) { //check that we're on the cart page
  const shoppingCart = document.getElementById("shopping-cart");
  console.log("this is the cart page");
  if (localStorage.getItem("cart") !== null) { //check that the cart exists
    console.log("cart exists")
    cartArr = JSON.parse(localStorage.getItem("cart"));
    if (cartArr.length === 0){ //check that the cart contains things
      console.log ("Cart is empty")
      shoppingCart.innerHTML = `
        <h1>Shopping Cart</h1>
        <h2>Looks like there's nothing in your cart :(</h2>
        <h2><a href="products.html">Return to the Store</a></h2>`
    }
    else { //details to load for cart content
      shoppingCart.innerHTML = `
        <h1 class="cart-heading">Shopping Cart</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody id="cart-contents">
          </tbody>
        </table>`;  
      for(i=0; i<cartArr.length; i++){
        let itemTotal=(cartArr[i].quantity*cartArr[i].price)
        cartTotal += itemTotal;
        const cartItem = `
        <tr id="item-${i}">
          <td><img src = "${cartArr[i].img}" alt = "${cartArr[i].desc}" </td>
          <td><a href = "${cartArr[i].link}">${cartArr[i].name}</a></td>
          <td><div class = "quantity-adjuster" >
            <button class="button" onclick="productDecrease(${i})" id="decrease-${i}">-</button>
            <p id="quantity-${i}">${cartArr[i].quantity}</p>
            <button class="button" onclick="productIncrease(${i})" id="increase-${i}">+</button>
          </div></td>  
          <td><p id="subtotal-${i}">&dollar;${itemTotal}</p></td>             
        </tr>
        `
        const cartContents = document.getElementById("cart-contents")
        cartContents.innerHTML += cartItem;
      }

      const orderSummary = `
        <div id= "order-summary">
          <h1>Order Summary</h1>
          <h2 id="cart-total">Total: &dollar;${cartTotal}</h2>
          <p>Taxes and shipping fees are included</p>
          <a href="products.html"><h2>Continue Shopping</h2></a>
          <button class="button" id="checkout">Checkout</button>
        </div>
      `
      shoppingCart.innerHTML += orderSummary;
    }
  }
  else {
    console.log("Cart does not exist")
    shoppingCart.innerHTML = `
      <h1>Shopping Cart</h1>
      <h2>Looks like there's nothing in your cart :(</h2>
      <h2><a href="products.html">Return to the Store</a></h2>`
  }
}


//Functions for managing cart
function getIdFromPage(){ //Feels like a silly solution but lets me guarantee that the content I'm populating and pulling from matches the page I'm on
  let path = window.location.pathname;
  let shortPath = (path.replace("/products/", ""));
  currentID = (shortPath.replace(".html", ""));
}

function addToCart(y) {
  if (localStorage.getItem("cart") !== null) { //check if cart already exists
    getIdFromPage();
    cartArr = JSON.parse(localStorage.getItem("cart"));
    cartQuantity = JSON.parse(localStorage.getItem("quantity"));
    let foundItem = cartArr.findIndex(function(z) {
      return z.id === currentID;
      });
    console.log(foundItem);
    if (foundItem > -1) { //If the product to be added to the cart already exists in the cart, only increase the quantity, don't push a new copy to the array
      cartArr[foundItem].quantity++;
      localStorage.setItem("cart", JSON.stringify(cartArr));
      cartQuantity++;
      let cartIndicators = document.getElementsByClassName("cart-indicator");
        for(i=0; i<cartIndicators.length; i++){
          cartIndicators[i].innerHTML = cartQuantity;
        }
      localStorage.setItem("quantity", JSON.stringify(cartQuantity));
      }
    else {
      y.quantity++;
      cartArr.push(y);
      localStorage.setItem("cart", JSON.stringify(cartArr));
      cartQuantity++;
      let cartIndicators = document.getElementsByClassName("cart-indicator");
      for(i=0; i<cartIndicators.length; i++){
          cartIndicators[i].innerHTML = cartQuantity;
        }
      localStorage.setItem("quantity", JSON.stringify(cartQuantity));
    }
  }
  else {
    console.log("Cart does not exist")
    let cartArr=[];
    y.quantity++;
    cartArr.push(y);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    let cartQuantity = 0;
    cartQuantity++;
    let cartIndicators = document.getElementsByClassName("cart-indicator");
      for(i=0; i<cartIndicators.length; i++){
        cartIndicators[i].innerHTML = cartQuantity;
      }
    localStorage.setItem("quantity", JSON.stringify(cartQuantity));
  }
}

function productDecrease(position){
  cartArr = JSON.parse(localStorage.getItem("cart"));
  cartQuantity = JSON.parse(localStorage.getItem("quantity"));
  if(cartArr[position].quantity <= 1){
    if (window.confirm("Are you sure you want to remove this from your cart?")){    
      cartArr[position].quantity--;
      cartArr.splice(position, 1);
      localStorage.setItem("cart", JSON.stringify(cartArr));
      cartQuantity--;
      let cartIndicators = document.getElementsByClassName("cart-indicator");
      for(i=0; i<cartIndicators.length; i++){
        cartIndicators[i].innerHTML = cartQuantity;
      }
      localStorage.setItem("quantity", JSON.stringify(cartQuantity));
      window.location.reload();
    }
  }
  else{
    console.log(cartArr[position].quantity);
    cartArr[position].quantity--;
    console.log(cartArr[position].quantity)
    document.getElementById(`quantity-${position}`).innerText = cartArr[position].quantity;
    document.getElementById(`subtotal-${position}`).innerText = (cartArr[position].quantity*cartArr[position].price);
    cartTotal-=cartArr[position].price;
    document.getElementById("cart-total").innerText = `Total: $${cartTotal}`;
    localStorage.setItem("cart", JSON.stringify(cartArr));
    cartQuantity--;
    let cartIndicators = document.getElementsByClassName("cart-indicator");
    for(i=0; i<cartIndicators.length; i++){
      cartIndicators[i].innerHTML = cartQuantity;
    }
    localStorage.setItem("quantity", JSON.stringify(cartQuantity));
  }
}

function productIncrease(position){
  cartArr = JSON.parse(localStorage.getItem("cart"));
  cartQuantity = JSON.parse(localStorage.getItem("quantity"));
  console.log(cartArr[position].quantity);
  cartArr[position].quantity++;
  console.log(cartArr[position].quantity)
  document.getElementById(`quantity-${position}`).innerText = cartArr[position].quantity;
  document.getElementById(`subtotal-${position}`).innerText = (cartArr[position].quantity*cartArr[position].price);
  cartTotal+=cartArr[position].price;
  document.getElementById("cart-total").innerText = `Total: $${cartTotal}`;
  localStorage.setItem("cart", JSON.stringify(cartArr));
  cartQuantity++;
  let cartIndicators = document.getElementsByClassName("cart-indicator");
  for(i=0; i<cartIndicators.length; i++){
    cartIndicators[i].innerHTML = cartQuantity;
  }
  localStorage.setItem("quantity", JSON.stringify(cartQuantity));
}