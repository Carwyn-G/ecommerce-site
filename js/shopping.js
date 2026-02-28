//Array of products that can be referenced and called to rather than needing to rewrite things repeatedly
const products = [
  {
    name: "Blue Phoenix Puff Quilt",
    price: 450,
    id: "puff-phoenix",
    link: "../products/puff-phoenix.html",
    img: "../images/puff-phoenix.jpg",
    desc: "A puff quilt with a pixel art design of a phoenix in a blue chromatic color scheme",
    secondImg: "../images/puff-phoenix-detail.jpg",
    secondDesc: "Close-up of the puff quilt focused on the face of the phoenix, a variety of fabric prints make up the puffs",
    thirdImg: "../images/puff-phoenix-detail-alt.png",
    thirdDesc: "Slightly zoomed in to focus on the phoenix's body and head"
  },
  {
    name: "Transit Map Cross Stitch",
    price: 200,
    id: "xstitch-map",
    link: "../products/xstitch-map.html",
    img: "../images/xstitch-map-detail.jpeg",
    desc: "A cross-stitched transit map showing the routes throughout Walt Disney World, zoomed in to focus on Animal Kingdom",
    secondImg: "../images/xstitch-map.jpeg",
    secondDesc: "A full view of a transit map of Walt Disney World with each route stitched in different colors",
    thirdImg: "../images/xstitch-map-detail-alt.jpeg",
    thirdDesc: "A focused view of Magic Kingdom and the surrounding area with the monorail and ferry lines mapped out in different color stitching"
  },
  {
    name: "Confetti Pride Hexagon Quilt",
    price: 350,
    id: "hex-pride",
    link: "../products/hex-pride.html",
    img: "../images/hex-pride.jpg",
    desc: "A quilt made up of hexagons in a variety of LGBTQ pride prints on a white background, with scattered hexagons of solid colors of the rainbow",
    secondImg: "../images/hex-pride-reverse.jpg",
    secondDesc: "the reverse of the quilt is made up of colored hexagons laid out to resemble the progress pride flag",
    thirdImg: "../images/hex-pride-detail.jpg",
    thirdDesc: "Confetti pride hexagon quilt with one corner folded back to partially show both the face and reverse at the same time."
  },
  {
    name: "Black and Gold Hexagon Quilt",
    price: 250,
    id: "hex-blackgold",
    link: "../products/hex-blackgold.html",
    img: "../images/hex-blackgold.jpg",
    desc: "A quilt made up of black hexagons of different fabrics with golden borders around each hexagon",
    secondImg: "../images/hex-blackgold-detail.jpg",
    secondDesc: "A close up of the hexagons making up the quilt, showing different subtle prints in the black inner hexagons",
    thirdImg: "../images/hex-blackgold-reverse.jpeg",
    thirdDesc: "The quilt draped over a sofa to show the reverse of the quilt made up of metallic gold fabric"
  },
  {
    name: "Zebra Print Puff Quilt",
    price: 400,
    id: "puff-zebra",
    link: "../products/puff-zebra.html",
    img: "../images/puff-zebra.png",
    desc: "A puff quilt with a zebra print design made up of white and black squares",
    secondImg: "../images/puff-zebra-detail.png",
    secondDesc: "A close up of the quilt folded up showing some subtle different prints in the black and white puffs",
    thirdImg: "../images/puff-zebra-detail-alt.png",
    thirdDesc: "A close up of a red heart applique on one puff at the corner of the quilt"
  },
    {
    name: "Honey Bee Hexagon Quilt",
    price: 250,
    id: "hex-bee",
    link: "../products/hex-bee.html",
    img: "../images/hex-bee.jpg",
    desc: "A hexagon quilt made up of a variety of honeybee themed print fabrics in yellows and blacks",
    secondImg: "../images/hex-bee-reverse.jpg",
    secondDesc: "The reverse of the quilt shows a scattered arrangement of shades of yellow fabrics with occassional black hexagons",
    thirdImg: "../images/hex-bee-detail.jpg",
    thirdDesc: "A close up of the quilt showing different fabric prints featuring bees and flowers in shades of yellow."
  },
    {
    name: "Bi Pride Hexagon Quilt",
    price: 250,
    id: "hex-bi",
    link: "../products/hex-bi.html",
    img: "../images/hex-bi.jpg",
    desc: "A quilt made up of scattered hexagons in pink, purple, and blue to represent the bisexual pride flag, a few white hexagons dot the quilt with images of cute, celebratory animals",
    secondImg: "../images/hex-bi-reverse.jpg",
    secondDesc: "The reverse of the quilt is mostly grey with interspersed hexagons of pink, purple, and blue arranged in the stripes of the bi pride flag",
    thirdImg: "../images/hex-bi-alt.jpg",
    thirdDesc: "The bi pride hexagon quilt is shown draped over a bed"
  },
    {
    name: "Genderfluid Pride Hexagon Quilt",
    price: 275,
    id: "hex-fluid",
    link: "../products/hex-fluid.html",
    img: "../images/hex-fluid.jpg",
    desc: "A quilt made up of scattered hexagons in pink, white, purple, black, and blue to represent the genderfluid pride flag",
    secondImg: "../images/hex-fluid-reverse.jpg",
    secondDesc: "The reverse of the quilt shows the pink, white, purple, black, and blue hexagons arranged in stripes like the genderfluid pride flag",
    thirdImg: "../images/hex-fluid-detail.jpg",
    thirdDesc: "A close up shows a cross-stitched bee in the genderfluid pride colors, with the words bee proud beneath it"
  },
    {
    name: "Custom Puff Quilt",
    price: 400,
    id: "puff-custom",
    link: "../products/puff-custom.html",
    img: "../images/puff-custom-1.jpg",
    desc: "A puff quilt with a pixel art design of a forest campground with a campfire in front of a tent and a crescent moon hanging in the sky",
    secondImg: "../images/puff-custom-2.jpg",
    secondDesc: "A puff quilt with a pixel art design of a carrtoony red fox on a green background",
    thirdImg: "../images/puff-custom-3.jpeg",
    thirdDesc: "A puff quilt with a pixel art design of a bookshelf and an orange electric guitar"
  },
];
let cart = [];

if (document.getElementById("shop-main") !== null) {
  const shopMain = document.getElementById("shop-main");

  products.forEach(result => {
    // create card for each product
    const catalog = `
      <div class="product">
          <a href= "${result.link}"><img src="${result.img}" alt="${result.desc}"></a>
          <h3>${result.name}</h3>
          <h3>&dollar; ${result.price}</h3>
          <div class="border-bottom"></div>
          <a href="${result.id}"</a>
          </div>
      `;
    //Add the card to the main products page
    shopMain.innerHTML += catalog;
  });
}

function addToCart(y){
  cart.push(y);
}

if (document.getElementById("hex-pride") !== null){
  console.log("The script is running on this page")
  let productPage = document.getElementsByClassName("product-page");
  let target = "hex-pride";
  let targeted = products.findIndex(function(x){
    return x.id === target;
});

  let productInfo = `
    <div class = "product-detail">
      <img src="${products[targeted].img}" alt="${products[targeted].desc}">
      <img src="${products[targeted].secondImg}" alt="${products[targeted].secondDesc}">
      <img src="${products[targeted].thirdImg}" alt="$$products[targeted].thirdDesc">
      <h3>${products[targeted].name}</h3>
      <h3>&dollar; ${products[targeted].price}</h3>
    </div>`

  productPage.innerHTML += "productInfo";

  let addButton = document.getElementById("add")
  addButton.addEventListener('click', addToCart(products[targeted]))
}