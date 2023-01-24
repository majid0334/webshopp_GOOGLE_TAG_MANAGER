let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// Produktdatat finns i variabeln shopData (se data.js)
// Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()
//
// Använd denna markup för varje produktkort - den korresponderar mot CSS:en
const generateCartItems = () => {
  const markupCrt = shopData.map((cart) => {
    let { image, title, price } = cart;
    return `<div class="cart-item">
     <img width="100" src=${image} alt="image" />
     <div class="details">
         <div class="title-price-x">
         <h4 class="title-price">
         <p>${title}</p
             <p class="cart-item-price"> ${price}</p>
         </h4>
         <i onclick="removeItem()" class="bi bi-x-lg"></i>
         </div>
         <div class="cart-buttons">
         <div class="buttons">
             <i onclick="decrement()" class="bi bi-dash-lg"></i>
             <div id="quantity" class="quantity">{--total--}</div>
             <i onclick="increment()" class="bi bi-plus-lg"></i>
         </div>
         </div>
         <h3> {--total * price--}</h3>
      </div>
     </div>`;
  });
  shoppingCart.innerHTML = markupCrt;
};

generateCartItems();

function showTotal() {
  localStorage.getItem("data");
  let displayAmount = shopData
    .map((shopping) => shopping.item).so
    console.log("items ran");
}
