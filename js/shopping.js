//Array of products that can be referenced and called to rather than needing to rewrite things repeatedly
const products = [
  {
    name: "Confetti Pride Hexagon Quilt",
    total: 350,
    id: "hex-pride",
    link: "./products/hex-pride.html",
    img: "./images/hex-pride.jpg",
    desc: "A quilt made up of hexagons in a variety of LGBTQ pride prints on a white background, with scattered hexagons of solid colors of the rainbow",
    secondImg: "./images/hex-pride-reverse.jpg",
    secondDesc:
      "the reverse of the quilt is made up of colored hexagons laid out to resemble the progress pride flag",
    thirdImg: "./images/hex-pride-detail.jpg",
    thirdDesc:
      "Confetti pride hexagon quilt with one corner folded back to partially show both the face and reverse at the same time.",
    quantity: 0,
    longDesc: "This throw quilt was created to celebrate Pride Month and be a joyful, cozy representation of the love the LGBTQ community shares. Made of 100% cotton, this lightweight quilt is easy to clean and folds up small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Transit Map Cross Stitch",
    total: 200,
    id: "xstitch-map",
    link: "./products/xstitch-map.html",
    img: "./images/xstitch-map-detail.jpeg",
    desc: "A cross-stitched transit map showing the routes throughout Walt Disney World, zoomed in to focus on Animal Kingdom",
    secondImg: "./images/xstitch-map.jpeg",
    secondDesc:
      "A full view of a transit map of Walt Disney World with each route stitched in different colors",
    thirdImg: "./images/xstitch-map-detail-alt.jpeg",
    thirdDesc:
      "A focused view of Magic Kingdom and the surrounding area with the monorail and ferry lines mapped out in different color stitching",
    quantity: 0,
    longDesc: "This cross-stitched artwork features a map of transit routes throughout Walt Disney World and measures approximately 15\"\ by 12\"\ (38 by 30 cm). The parks and bodies of water are dyed onto the cloth while the transit routes are stitched in different colors. A key in the bottom right corner labels each color with the corresponding monorail, bus line, or other route. The artwork comes premounted on a dark navy mat board to be easily hung in a frame of your choice."
  },
  {
    name: "Blue Phoenix Puff Quilt",
    total: 450,
    id: "puff-phoenix",
    link: "./products/puff-phoenix.html",
    img: "./images/puff-phoenix.jpg",
    desc: "A puff quilt with a pixel art design of a phoenix in a blue chromatic color scheme",
    secondImg: "./images/puff-phoenix-detail.jpg",
    secondDesc:
      "Close-up of the puff quilt focused on the face of the phoenix, a variety of fabric prints make up the puffs",
    thirdImg: "./images/puff-phoenix-detail-alt.png",
    thirdDesc: "Slightly zoomed in to focus on the phoenix's body and head",
    quantity: 0,
    longDesc: "This puff quilt uses a pixel art style to represent a phoenix in shades of blue. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown. The face of the quilt is made up of cotton fabric and each puff is stuffed with fluffy polyester filling. The backing is a light blue flannel to make this quilt nice and cozy to snuggle up under. Please see the FAQ for care instructions for washing puff quilts."
  },
  {
    name: "Black and Gold Hexagon Quilt",
    total: 250,
    id: "hex-blackgold",
    link: "./products/hex-blackgold.html",
    img: "./images/hex-blackgold.jpg",
    desc: "A quilt made up of black hexagons of different fabrics with golden borders around each hexagon",
    secondImg: "./images/hex-blackgold-detail.jpg",
    secondDesc:
      "A close up of the hexagons making up the quilt, showing different subtle prints in the black inner hexagons",
    thirdImg: "./images/hex-blackgold-reverse.jpeg",
    thirdDesc:
      "The quilt draped over a sofa to show the reverse of the quilt made up of metallic gold fabric",
    quantity: 0,
    longDesc: "This throw quilt has a bold black and gold. Made of 100% cotton, this lightweight quilt is easy to clean and small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Zebra Print Puff Quilt",
    total: 400,
    id: "puff-zebra",
    link: "./products/puff-zebra.html",
    img: "./images/puff-zebra.png",
    desc: "A puff quilt with a zebra print design made up of white and black squares",
    secondImg: "./images/puff-zebra-detail.png",
    secondDesc:
      "A close up of the quilt folded up showing some subtle different prints in the black and white puffs",
    thirdImg: "./images/puff-zebra-detail-alt.png",
    thirdDesc:
      "A close up of a red heart applique on one puff at the corner of the quilt",
    quantity: 0,
    longDesc: "This puff quilt is designed with a zebra print pattern in an assortment of different white and black fabrics. It also has a red heart appliqued onto one puff in the top left corner. This quilt has extra length compared to the typical throws available and measures approximately 50\"\ by 80\"\ (127 by 203 cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown. The face of the quilt is made up of cotton fabric and each puff is stuffed with fluffy polyester filling. The backing is a zebra print fleece to make this quilt as warm and cozy as possible to snuggle up under. Please see the FAQ for care instructions for washing puff quilts."
  },
  {
    name: "Bi Pride Hexagon Quilt",
    total: 250,
    id: "hex-bi",
    link: "./products/hex-bi.html",
    img: "./images/hex-bi.jpg",
    desc: "A quilt made up of scattered hexagons in pink, purple, and blue to represent the bisexual pride flag, a few white hexagons dot the quilt with images of cute, celebratory animals",
    secondImg: "./images/hex-bi-reverse.jpg",
    secondDesc:
      "The reverse of the quilt is mostly grey with interspersed hexagons of pink, purple, and blue arranged in the stripes of the bi pride flag",
    thirdImg: "./images/hex-bi-alt.jpg",
    thirdDesc: "The bi pride hexagon quilt is shown draped over a bed",
    quantity: 0,
    longDesc: "This throw quilt was created to celebrate Pride Month and in particular bi pride. Made of 100% cotton, this lightweight quilt is easy to clean and small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Genderfluid Pride Hexagon Quilt",
    total: 275,
    id: "hex-fluid",
    link: "./products/hex-fluid.html",
    img: "./images/hex-fluid.jpg",
    desc: "A quilt made up of scattered hexagons in pink, white, purple, black, and blue to represent the genderfluid pride flag",
    secondImg: "./images/hex-fluid-reverse.jpg",
    secondDesc:
      "The reverse of the quilt shows the pink, white, purple, black, and blue hexagons arranged in stripes like the genderfluid pride flag",
    thirdImg: "./images/hex-fluid-detail.jpg",
    thirdDesc:
      "A close up shows a cross-stitched bee in the genderfluid pride colors, with the words bee proud beneath it",
    quantity: 0,
    longDesc: "This throw quilt was created to celebrate Pride Month and in particular genderfluid pride. On one hexagon, it features a cross-stitched bee, also in the genderfluid pride flag colors, along with the words \"\Bee Proud\"\. Made of 100% cotton, this lightweight quilt is easy to clean and small enough to take on the go for use as a picnic blanket or to warm up with at outdoor events. The quilt measures approximately 50\"\ by 65\"\ (127 by 165cm), but due to the handmade nature of the quilt there may be slight variations in the final product compared to the photos shown."
  },
  {
    name: "Custom Puff Quilt",
    total: 400,
    id: "puff-custom",
    link: "./products/puff-custom.html",
    img: "./images/puff-custom-1.jpeg",
    desc: "A puff quilt with a pixel art design of a bookshelf and an orange electric guitar",
    secondImg: "./images/puff-custom-2.jpeg",
    secondDesc: "A puff quilt with a spiral design in vibrant rainbow tie-dyed fabrics",
    thirdImg: "./images/puff-custom-3.jpg",
    thirdDesc: "A puff quilt with a pixel art design of a carrtoony red fox on a green background",
    quantity: 0,
    longDesc: `If you're looking for something personal, custom quilts are available and can be made with cotton, flannel, or fleece backings, and in different sizes. To help you realize what sorts of designs are possible, please see the <a href= "../designer.html"><b>Design</b></a> page where you'll find a tool to help you play around with possible designs. Please keep in mind that the starting price for custom quilts is based on a cotton backing and only 6 fabrics used for the face, additional fabric requirements will incur additional costs. It's recommended to first reach out via the contact page to discuss your design ideas in detail before placing an order, to best ensure that your vision can be made reality. Please see the FAQ for care instructions for washing puff quilts.`,
    price: 400,
    size: "throw",
    sizePrice: 0,
    backing: "cotton",
    backingPrice: 0,
    colors: 6,
    colorsPrice: 0,
    note: "Here you can describe how you'd like your quilt to look (colors, patterns, etc)"
  },
  {
    name: "Custom Hexagon Quilt",
    total: 250,
    id: "hex-custom",
    link: "./products/hex-custom.html",
    img: "./images/hex-custom.jpg",
    desc: "A hexagon quilt with a variety of nature themed fabrics in greens and browns, arranged in an ombré",
    secondImg: "./images/hex-custom-2.jpg",
    secondDesc:
      "A hexagon quilt of a hillside against a blue sky with fluffy white clouds made of faux fur",
    thirdImg: "./images/hex-custom-3.jpg",
    thirdDesc:
      "A hexagon quilt made up of a variety of honeybee themed print fabrics in yellows and blacks",
    quantity: 0,
    longDesc: `If you're looking for something personal, custom quilts are available and can be made with cotton, flannel, or fleece backings, and in different sizes. To help you realize what sorts of designs are possible, please see the <a href= "../designer.html"><b>Design</b></a> page where you'll find a tool to help you play around with possible designs. Please keep in mind that the starting price for custom quilts is based on a cotton backing and 6 fabrics, additional fabric requirements will incur additional costs. It's recommended to first reach out via the contact page to discuss your design ideas in detail before placing an order, to best ensure that your vision can be made reality.`,
    price: 250,
    size: "throw",
    sizePrice: 0,
    hexsize: "standard",
    hexPrice: 0,
    backing: "cotton",
    backingPrice: 0,
    colors: 6,
    colorsPrice: 0,
    note: "Here you can describe how you'd like your quilt to look (colors, patterns, etc)"
  },
];

const hexQuilts = products.filter(isHexQuilt);
const puffQuilts = products.filter(isPuffQuilt);
const customQuilts = products.filter(isCustom);
const other = products.filter(isOther);


let cartTotal = 0;

//update cart indicator
  if (localStorage.getItem("quantity") !== null){
    cartQuantity = JSON.parse(localStorage.getItem("quantity"));
    let cartIndicator = document.getElementById("cart-indicator");
    if (cartQuantity <=0){
        cartIndicator.innerHTML = "";
    }
    else {
      cartIndicator.innerHTML = cartQuantity;
    }
  }

//Generate home page
if (document.getElementById("home-main") !== null) {
  const homeMain = document.getElementById("home-main");
  for (i = 0; i < 3; i++) {
    // create card for each product
    let feature = `
      <div class="feature">
          <a href= "${products[i].link}"><img src="${products[i].img}" alt="${products[i].desc}"></a>
          <h2>${products[i].name}</h2>
          <h2>&dollar; ${products[i].total}</h2>
          </div>
      `;
    //Add the first three cards to the main products page

    homeMain.innerHTML += feature;
  }
}

//Generate shop page
if (document.getElementById("shop-main") !== null) {
  const shopMain = document.getElementById("shop-main");
  shopMain.innerHTML = `
    <div id="filters-container">
      <div class = "filter"><label for="hex-quilts">Hexagon Quilts (${hexQuilts.length})</label>
      <input type="checkbox" id="hex-quilts" onchange="filterProducts()"></div>
      <div class = "filter"><label for="puff-quilts">Puff Quilts (${puffQuilts.length})</label>
      <input type="checkbox" id="puff-quilts" onchange="filterProducts()"></div>
      <div class = "filter"><label for="custom-quilts">Customizable (${customQuilts.length})</label>
      <input type="checkbox" id="custom-quilts" onchange="filterProducts()"></div>
      <div class = "filter"><label for="other">Other Products (${other.length})</label>
      <input type="checkbox" id="other" onchange="filterProducts()"></div>
    </div>
    <div id="product-cards"></div>`
  
  const productCards = document.getElementById("product-cards");
    products.forEach((result) => {
    // create card for each product
    const catalog = `
      <div class="product">
        <a href= "${result.link}"><img src="${result.img}" alt="${result.desc}"></a>
        <h2>${result.name}</h2>
        <h2 class= "product-price">&dollar; ${result.total}</h2>
      </div>`;
    //Add the card to the main products page
    productCards.innerHTML += catalog;
    });
  }

//Generate product pages
let currentID = undefined;
getIdFromPage();

if (document.getElementById(currentID) !== null) {
  let productPage = document.getElementById(currentID);
  let targeted = products.findIndex(function (x) {
    return x.id === currentID;
  });
  let productInfo = `
    <div class = "product-images">
      <img src=".${products[targeted].img}" alt="${products[targeted].desc}">
      <img src=".${products[targeted].secondImg}" alt="${products[targeted].secondDesc}">
      <img src=".${products[targeted].thirdImg}" alt="${products[targeted].thirdDesc}">
    </div>
    <div class = "product-details">
      <h1>${products[targeted].name}</h1>
      <div id = "add-to-cart">
        <h2 id="price">&dollar; ${products[targeted].total}</h2>
        <button class="button cart-add" id="add-${products[targeted].id}">Add To Cart</button>
      </div>
      <div class="long desc">
        <p>${products[targeted].longDesc}</p>
      </div>
    </div>`;

  productPage.innerHTML += productInfo;

  if (currentID == "hex-custom") {
    let targeted = products.findIndex(function (x) {
      return x.id === currentID;
    });
    let cartAddDetails = document.getElementById("add-to-cart");
    let customOptions = `
      <label for="quilt-size">Choose your quilt size:</label>
      <select name="quilt-size" id="quilt-size" onchange="hexquiltSizePrice(this.value)">
        <option value="throw">Throw Size (50x65"/127x165cm)</option>
        <option value="baby">Baby Size (32x40"/81x101cm)(-$80)</option>
        <option value="twin">Twin (70x90"/178x228cm)(+$40)</option>
        <option value="queen">Queen (90x108"/228x274cm)(+$80)</option>
        <option value="king">King (110x108"/279x274cm)(+$100)</option>
      </select>
      <label for="hex-size">Choose your hexagon size:</label>
      <select name="hex-size" id="hex-size" onchange="hexSizePrice(this.value)">
        <option value="standard">Standard (5"/13cm)</option>
        <option value="mini">Mini (3"/8cm)(+$50)</option>
      </select>
      <label for="backing">Choose your backing material:</label>
      <select name="backing" id="backing" onchange="hexBackingPrice(this.value)">
        <option value="cotton">Cotton</option>
        <option value="flannel">Flannel (+$50)</option>
        <option value="fleece">Fleece (+$50)</option>
      </select>
      <label for="color-adjuster">Choose additional colors:</label>
      <div class = "color-adjuster">
        <button class="button" onclick="colorDecrease(${targeted})" id="decrease">-</button>
        <p id="color-quantity">${products[targeted].colors}</p>
        <button class="button" onclick="colorIncrease(${targeted})" id="increase">+</button>
      </div>
      <label for="notes">Describe your quilt:</label>
      <textarea id="notes" name="notes" rows="5" cols="40" onfocusout="storeNotes(this.value, ${targeted})">Here you can describe how you'd like your quilt to look (colors, patterns, etc)</textarea>`
    cartAddDetails.innerHTML += customOptions;
  }

  if (currentID == "puff-custom") {
    let targeted = products.findIndex(function (x) {
      return x.id === currentID;
    });
    let cartAddDetails = document.getElementById("add-to-cart");
    let customOptions = `
      <label for="quilt-size">Choose your quilt size:</label>
      <select name="quilt-size" id="quilt-size" onchange="puffSizePrice(this.value)">
        <option value="throw">Throw Size (50x65"/127x165cm)</option>
        <option value="baby">Baby Size (32x40"/81x101cm)(-$80)</option>
        <option value="twin">Twin (70x90"/178x228cm)(+$50)</option>
      </select>
      <label for="backing">Choose your backing material:</label>
      <select name="backing" id="backing" onchange="puffBackingPrice(this.value)">
        <option value="cotton">Cotton</option>
        <option value="flannel">Flannel (+$50)</option>
        <option value="fleece">Fleece (+$50)</option>
      </select>
      <label for="color-adjuster">Choose additional colors:</label>
      <div class = "color-adjuster">
        <button class="button" onclick="colorDecrease(${targeted})" id="decrease">-</button>
        <p id="color-quantity">${products[targeted].colors}</p>
        <button class="button" onclick="colorIncrease(${targeted})" id="increase">+</button>
      </div>
      <label for="notes">Describe your quilt:</label>
      <textarea id="notes" name="notes" rows="5" cols="40" onfocusout="storeNotes(this.value, ${targeted})">Here you can describe how you'd like your quilt to look (colors, patterns, etc)</textarea>`
    cartAddDetails.innerHTML += customOptions;
  }

  let addButton = document.getElementById(`add-${products[targeted].id}`);
  addButton.addEventListener("click", function () {
      addToCart(products[targeted]);
    });
}


// Generate cart page
if (document.getElementById("shopping-cart") !== null) { //check that we're on the cart page
  const shoppingCart = document.getElementById("shopping-cart");
  if (localStorage.getItem("cart") !== null) { //check that the cart exists
    cartArr = JSON.parse(localStorage.getItem("cart"));
    if (cartArr.length === 0){ //check that the cart contains things
      shoppingCart.innerHTML = `
        <div id=empty-cart>
          <h1>Shopping Cart</h1>
          <h2>Looks like there's nothing in your cart :(</h2>
          <br>
          <h2><a href="products.html" class="fake-button">Return to the Store</a></h2>
        </div>`
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
        let itemTotal=(cartArr[i].quantity*cartArr[i].total);
        cartTotal += itemTotal;
        const cartItem = `
        <tr id="item-${i}">
          <td><img src = "${cartArr[i].img}" alt = "${cartArr[i].desc}" </td>
          <td><a href = "${cartArr[i].link}">${cartArr[i].name}</a></td>
          <td><div id = "quantity-adjuster" >
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
    shoppingCart.innerHTML = `
        <div id=empty-cart>
          <h1>Shopping Cart</h1>
          <h2>Looks like there's nothing in your cart :(</h2>
          <br>
          <h2><a href="products.html"  class="fake-button">Return to the Store</a></h2>
        </div>`
  }
}

//Generate design tool controls
if (document.getElementById("tool-controls") !== null) {
  document.getElementById("tool-controls").innerHTML = `
    <div id="designer-buttons">
        <button class="button design-type" id="puff-designer">Puff Quilt</button>
        <button class="button design-type" id="hex-designer">Standard Hex Quilt</button>
        <button class="button design-type" id="minihex-designer">Mini Hex Quilt</button>
    </div>
    <div id="size-buttons"></div>
    <div id="p5"></div>`

  let puffButton = document.getElementById("puff-designer");
  puffButton.addEventListener("click", function () {
    setPuff();
  });

  let hexButton = document.getElementById("hex-designer");
  hexButton.addEventListener("click", function () {
    setHex();
  });

  let minihexButton = document.getElementById("minihex-designer");
  minihexButton.addEventListener("click", function () {
    setMinihex();
  });
}

//Functions for filtering products
function isHexQuilt(i){
  if(i.id.includes("hex")) {
    return true;
  }
}

function isPuffQuilt(i){
  if(i.id.includes("puff")) {
    return true;
  }
}

function isCustom(i){
  if(i.id.includes("custom")) {
    return true;
  }
}

function isOther(i){
  if((i.id.includes("hex") == false) && (i.id.includes("puff")==false) &&(i.id.includes("custom")==false)) {
    return true;
  }
}

function filterProducts(){
  let isChecked = document.querySelectorAll('input:checked').length
    console.log (isChecked);
    const productCards = document.getElementById("product-cards");
    productCards.innerHTML="";
    if (isChecked === 0){
      products.forEach((result) => {
        // create card for each product
        const catalog = `
          <div class="product">
              <a href= "${result.link}"><img src="${result.img}" alt="${result.desc}"></a>
              <h2>${result.name}</h2>
              <h2>&dollar; ${result.total}</h2>
              </div>
          `;
        //Add the card to the main products page
        productCards.innerHTML += catalog;
      });
    }
    else {
      productCards.innerHTML="";
      if (document.getElementById("hex-quilts").checked == true){
        hexQuilts.forEach((result) => {
          // create card for each product
          const catalog = `
            <div class="product">
                <a href= "${result.link}"><img src="${result.img}" alt="${result.desc}"></a>
                <h2>${result.name}</h2>
                <h2>&dollar; ${result.total}</h2>
                </div>
            `;
          //Add the card to the main products page
          productCards.innerHTML += catalog;
        });
      }
        if (document.getElementById("puff-quilts").checked == true){
        puffQuilts.forEach((result) => {
          // create card for each product
          const catalog = `
            <div class="product">
                <a href= "${result.link}"><img src="${result.img}" alt="${result.desc}"></a>
                <h2>${result.name}</h2>
                <h2>&dollar; ${result.total}</h2>
                </div>
            `;
          //Add the card to the main products page
          productCards.innerHTML += catalog;
        });
      }
        if (document.getElementById("custom-quilts").checked == true){
        customQuilts.forEach((result) => {
          // create card for each product
          const catalog = `
            <div class="product">
                <a href= "${result.link}"><img src="${result.img}" alt="${result.desc}"></a>
                <h2>${result.name}</h2>
                <h2>&dollar; ${result.total}</h2>
                </div>
            `;
          //Add the card to the main products page
          productCards.innerHTML += catalog;
        });
      }
        if (document.getElementById("other").checked == true){
        other.forEach((result) => {
          // create card for each product
          const catalog = `
            <div class="product">
                <a href= "${result.link}"><img src="${result.img}" alt="${result.desc}"></a>
                <h2>${result.name}</h2>
                <h2>&dollar; ${result.total}</h2>
                </div>
            `;
          //Add the card to the main products page
          productCards.innerHTML += catalog;
        });
      }
    }
}

//Functions for managing cart
function getIdFromPage(){ //Feels like a silly solution but lets me guarantee that the content I'm populating and pulling from matches the page I'm on
  let path = window.location.pathname;
  console.log(path);
  let shortPath = (path.replace("/ecommerce-site/products/", ""));
  console.log(shortPath);
  currentID = (shortPath.replace(".html", ""));
  console.log(currentID);
}

function addToCart(y) {
  if (localStorage.getItem("cart") !== null) { //check if cart already exists
    getIdFromPage();
    cartArr = JSON.parse(localStorage.getItem("cart"));
    cartQuantity = JSON.parse(localStorage.getItem("quantity"));
    if(currentID === "hex-custom" || currentID === "puff-custom"){ //custom quilts get added to the cart separately rather than just increasing quantity
      y.quantity = 1;
      cartArr.push(y);
      localStorage.setItem("cart", JSON.stringify(cartArr));
      cartQuantity++;
      let cartIndicator = document.getElementById("cart-indicator");
      cartIndicator.innerHTML = cartQuantity;
      localStorage.setItem("quantity", JSON.stringify(cartQuantity));
    }
    else {
      let foundItem = cartArr.findIndex(function(z) {
        return z.id === currentID;
        });
      if (foundItem > -1) { //If the product to be added to the cart already exists in the cart, only increase the quantity, don't push a new copy to the array
        cartArr[foundItem].quantity++;
        localStorage.setItem("cart", JSON.stringify(cartArr));
        cartQuantity++;
        let cartIndicator = document.getElementById("cart-indicator");
        cartIndicator.innerHTML = cartQuantity;
        localStorage.setItem("quantity", JSON.stringify(cartQuantity));
        }
      else {
        y.quantity++;
        cartArr.push(y);
        localStorage.setItem("cart", JSON.stringify(cartArr));
        cartQuantity++;
        let cartIndicator = document.getElementById("cart-indicator");
        cartIndicator.innerHTML = cartQuantity;
        localStorage.setItem("quantity", JSON.stringify(cartQuantity));
      }
    }
  }
  else { //if cart doesn't already exist, create it
    let cartArr=[];
    y.quantity++;
    cartArr.push(y);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    let cartQuantity = 0;
    cartQuantity++;
    let cartIndicator = document.getElementById("cart-indicator");
    cartIndicator.innerHTML = cartQuantity;
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
      let cartIndicator = document.getElementById("cart-indicator");
      cartIndicator.innerHTML = cartQuantity;
      localStorage.setItem("quantity", JSON.stringify(cartQuantity));
      window.location.reload();
    }
  }
  else{
    cartArr[position].quantity--;
    document.getElementById(`quantity-${position}`).innerText = cartArr[position].quantity;
    document.getElementById(`subtotal-${position}`).innerText = (cartArr[position].quantity*cartArr[position].total);
    cartTotal-=cartArr[position].total;
    document.getElementById("cart-total").innerText = `Total: $${cartTotal}`;
    localStorage.setItem("cart", JSON.stringify(cartArr));
    cartQuantity--;
    let cartIndicator = document.getElementById("cart-indicator");
    cartIndicator.innerHTML = cartQuantity;
    localStorage.setItem("quantity", JSON.stringify(cartQuantity));
  }
}

function productIncrease(position){
  cartArr = JSON.parse(localStorage.getItem("cart"));
  cartQuantity = JSON.parse(localStorage.getItem("quantity"));
  cartArr[position].quantity++;
  document.getElementById(`quantity-${position}`).innerText = cartArr[position].quantity;
  document.getElementById(`subtotal-${position}`).innerText = (cartArr[position].quantity*cartArr[position].total);
  cartTotal+=cartArr[position].total;
  document.getElementById("cart-total").innerText = `Total: $${cartTotal}`;
  localStorage.setItem("cart", JSON.stringify(cartArr));
  cartQuantity++;
  let cartIndicator = document.getElementById("cart-indicator");
  cartIndicator.innerHTML = cartQuantity;
  localStorage.setItem("quantity", JSON.stringify(cartQuantity));
}

//Functions for managing custom design tool page
function setPuff(){
  document.getElementById("size-buttons").innerHTML = `
    <button onclick="setPuffSize(0)" class="button" id="baby-puff">Baby Puff Quilt</button>
    <button onclick="setPuffSize(1)" class="button" id="throw-puff">Throw Puff Quilt</button>
    <button onclick="setPuffSize(2)" class="button" id="twin-puff">Twin Puff Quilt</button>`
}

let puffQuiltSizes = [{width: 10, height: 14},{width: 17, height: 22},{width: 24, height: 30}];
function setPuffSize(z){
  let query = new URLSearchParams(puffQuiltSizes[z]);
  let queryString = query.toString();
  let iframePath = `./puff-designer.html?${queryString}`;
  document.getElementById("p5").innerHTML = `
    <iframe src="${iframePath}"></iframe>`
}

function setHex(){
  document.getElementById("size-buttons").innerHTML = `
    <button onclick="setHexSize(0)" class="button" id="baby-hex">Baby Hexagon Quilt</button>
    <button onclick="setHexSize(1)" class="button" id="throw-hex">Throw Hexagon Quilt</button>
    <button onclick="setHexSize(2)" class="button" id="twin-hex">Twin Hexagon Quilt</button>
    <button onclick="setHexSize(3)" class="button" id="queen-hex">Queen Hexagon Quilt</button>
    <button onclick="setHexSize(4)" class="button" id="king-hex">King Hexagon Quilt</button>`
}

let hexQuiltSizes = [{width: 8, height: 10},{width: 11, height: 15},{width: 15, height: 21},{width: 19, height: 25},{width: 23, height: 25}];
function setHexSize(z){
  let query = new URLSearchParams(hexQuiltSizes[z]);
  let queryString = query.toString();
  let iframePath = `./hex-designer.html?${queryString}`;
  document.getElementById("p5").innerHTML = `
    <iframe src="${iframePath}"></iframe>`
}

function setMinihex(){

  document.getElementById("size-buttons").innerHTML = `
    <button onclick="setMinihexSize(0)" class="button" id="baby-minihex">Baby Mini Hexagon Quilt</button>
    <button onclick="setMinihexSize(1)" class="button" id="throw-minihex">Throw Mini Hexagon Quilt</button>
    <button onclick="setMinihexSize(2)" class="button" id="twin-minihex">Twin Mini Hexagon Quilt</button>
    <button onclick="setMinihexSize(3)" class="button" id="queen-minihex">Queen Mini Hexagon Quilt</button>
    <button onclick="setMinihexSize(4)" class="button" id="king-minihex">King Mini Hexagon Quilt</button>`
}

let minihexQuiltSizes = [{width: 13, height: 16},{width: 18, height: 25},{width: 25, height: 35},{width: 32, height: 41},{width: 37, height: 41}];
function setMinihexSize(z){
  let query = new URLSearchParams(minihexQuiltSizes[z]);
  let queryString = query.toString();
  let iframePath = `./minihex-designer.html?${queryString}`;
  document.getElementById("p5").innerHTML = `
    <iframe src="${iframePath}"></iframe>`
}

//Functions for choosing custom quilt options
function hexquiltSizePrice(a){
  let targeted = products.findIndex(function (x) {
    return x.id === currentID;
  });
  products[targeted].size = a;
  switch (a){
  case "baby":
    products[targeted].sizePrice = -80;
    break;
  case "twin":
    products[targeted].sizePrice = 40;
    break;
  case "queen":
    products[targeted].sizePrice = 80;
    break;
  case "king":
    products[targeted].sizePrice = 100;
    break;
  default:
    products[targeted].sizePrice = 0;
  }
  products[targeted].total = (products[targeted].price + products[targeted].sizePrice + products[targeted].hexPrice + products[targeted].backingPrice + products[targeted].colorsPrice);
  document.getElementById("price").innerHTML = `&dollar; ${products[targeted].total}`
  return products[targeted].sizePrice; 
}

function hexSizePrice(b){
 let targeted = products.findIndex(function (x) {
    return x.id === currentID;
  });
  products[targeted].hexsize = b;
  if (b == "mini"){
    products[targeted].hexPrice = 50;
  }
  else {
    products[targeted].hexPrice = 0;
  }
  products[targeted].total = (products[targeted].price + products[targeted].sizePrice + products[targeted].hexPrice + products[targeted].backingPrice + products[targeted].colorsPrice);
  document.getElementById("price").innerHTML = `&dollar; ${products[targeted].total}`
  return products[targeted].hexPrice; 
}

function hexBackingPrice(c){
  let targeted = products.findIndex(function (x) {
    return x.id === currentID;
  });
  products[targeted].backing = c;
  switch (c){
  case "flannel":
    products[targeted].backingPrice = 50;
    break;
  case "fleece":
    products[targeted].backingPrice = 50;
    break;
  default:
    products[targeted].backingPrice = 0;
  }
  products[targeted].total = (products[targeted].price + products[targeted].sizePrice + products[targeted].hexPrice + products[targeted].backingPrice + products[targeted].colorsPrice);
  document.getElementById("price").innerHTML = `&dollar; ${products[targeted].total}`
  return products[targeted].backingPrice; 
}

function puffSizePrice(d){
  let targeted = products.findIndex(function (x) {
    return x.id === currentID;
  });
  products[targeted].size = d;
  switch (d){
  case "baby":
    products[targeted].sizePrice = -80;
    break;
  case "twin":
    products[targeted].sizePrice = 50;
    break;
  default:
    products[targeted].sizePrice = 0;
  }
  products[targeted].total = (products[targeted].price + products[targeted].sizePrice + products[targeted].backingPrice + products[targeted].colorsPrice);
  document.getElementById("price").innerHTML = `&dollar; ${products[targeted].total}`
  return products[targeted].total; 
}

function puffBackingPrice(e){
  let targeted = products.findIndex(function (x) {
    return x.id === currentID;
  });
  products[targeted].backing = e;
  switch (e){
  case "flannel":
    products[targeted].backingPrice = 50;
    break;
  case "fleece":
    products[targeted].backingPrice = 50;
    break;
  default:
    products[targeted].backingPrice = 0;
  }
  products[targeted].total = (products[targeted].price + products[targeted].sizePrice + products[targeted].backingPrice + products[targeted].colorsPrice);
  document.getElementById("price").innerHTML = `&dollar; ${products[targeted].total}`
  return products[targeted].backingPrice; 
}

function colorDecrease(f){
  products[f].colors--;
  document.getElementById("color-quantity").innerHTML = `${products[f].colors}`;
  if (products[f].colors >= 6){
    products[f].colorsPrice = (products[f].colors * 10)
  }
  else {
    products[f].colorsPrice = 0;
  }
  products[f].total = (products[f].price + products[f].sizePrice + products[f].backingPrice + products[f].colorsPrice);
  document.getElementById("price").innerHTML = `&dollar; ${products[f].total}`
}

function colorIncrease(g){
  products[g].colors++;
  document.getElementById("color-quantity").innerHTML = `${products[g].colors}`;
  if (products[g].colors >= 6){
    products[g].colorsPrice = ((products[g].colors - 6) * 10)
  }
  else {
    products[g].colorsPrice = 0;
  }
  products[g].total = (products[g].price + products[g].sizePrice + products[g].backingPrice + products[g].colorsPrice);
  document.getElementById("price").innerHTML = `&dollar; ${products[g].total}`
}

function storeNotes(h, targeted){
  products[targeted].note = h;
}