const shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// Produktdatat finns i variabeln shopData (se data.js)
// Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()
//
// Använd denna markup för varje produktkort - den korresponderar mot CSS:en
const generateShop = () => {
  const markup = shopData
    .map((shoping) => {
      //istället för skriva shopping.id kan vi skriva bara ${id}
      let { id, title, desription, price, image } = shoping;
      // den kollar genom om den hittar var id och mängden items den här visar på skärmen om den inte hittar returner tom array
      let search = basket.find((shopping) => shopping.id === id) || [];
      return `<div id="product" ${id} class="item">
            <img width="220" src=${image} alt="citems"> 
             <div class="details">
             <h3>${title}</h3>
             <p>${desription}</p>
             <div class="price-quantity">
             <h2>${price}</h2>
             <div class="buttons">
                 <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                 <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
                 <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
             </div>
            </div>
        </div>
     </div>`;
    })
    .join(" ");

  //om vi inte hittar det returnerar vi 0 om vi hittar returnerar vi mängden av iteams

  shop.innerHTML = markup;
};
generateShop();

const increment = (id) => {
  //id som används i data js för indentifera läggs till i variable för senare använding
  let selectedValue = id;

  //kollar om det vi klickade egentligen existerar i vår array selactedValue det vi klickade shoppind.id om den finns redan
  let search = basket.find((shopping) => {
    return shopping.id === selectedValue;
  });

  //om vi inte hittar det som vi söker då kan vilägga till
  if (search === undefined) {
    //selecterar och lägger till i vår array det som vi klickade
    basket.push({
      id: selectedValue,
      item: 1,
    });
  } else {
    //om vi hittar det som vi är ute efter +1
    search.item += 1;
  }

  localStorage.setItem("data", JSON.stringify(basket));

  // Vill att uptade funktions körs när det blir klikad
  uptade(selectedValue);
};

const decrement = (id) => {
  //id som används i data js för indentifera läggs till i variable för senare använding
  let selectedValue = id;

  //kollar om det vi klickade egentligen existerar i vår  i vårt fal id
  let search = basket.find((shopping) => {
    return shopping.id === selectedValue;
  });

  //stoppar var funktion om vi har 0 items i var array/korg
  if (search.item === 0) {
  } else {
    //om vi hittar det som vi är ute efter -1
    search.item -= 1;
  }

  localStorage.setItem("data", JSON.stringify(basket));

  //varje gång när jag klippar på knappen vill jag att uptadera funktione körs
  uptade(selectedValue);
};

// om item/id existerar redan då blii det +1 och minus -1
const uptade = (id) => {
  //kollar om det vi klickade egentligen existerar.
  let search = basket.find((shopping) => {
    return shopping.id === id;
  });
  //för bara se var item asså mängden av våran
  document.getElementById(id).innerHTML = search.item;

  //gör att var funktionen körs bara när vi klickar + och minus
  calc();
};

let calc = () => {
  let total = document.getElementById("cartAmount");
  total.innerHTML = basket
    .map((shopping) => shopping.item)
    .reduce((shopping, total) => shopping + total, 0);
};

calc();

/* function totalAmount() {
  //hämtar från local storage
  localStorage.getItem("cart-amount");
  //Hämtar från local storage visar på skrämen
  document.getElementById("cartAmount").textContent =
    localStorage.getItem("data");
}

window.onload = totalAmount; */
