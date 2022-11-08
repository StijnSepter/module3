let shop = document.getElementById("Shop");

// let shopItemData = [
//   {
//     id: "helkajlf",
//     name: "Casual  shirt",
//     price: 40,
//     desc: "lorem7",
//     img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqI-oG98YM1zu5Oe9e5633pQvmPcfRFaRs7BfVuEnbYvivt2-58X34DVhkINH2GS3xWsBicAbp6tirUT3k4scKGkioJyUuEqaDFe19nI3eDX87Af5ZXTe3og&usqp=CAE",
//   },
//   { id: "kflaj", },
//   { id: "lkfaja" },
//   { id: "fkjafa" },
// ];

// let basket = [
//   {
//     id: "klajfljek",
//     item: 1,
//   },
// ];

let generateShop = () => {
  return (shop.innerHTML = `
  <div id=product-id-${(id, name, price, desc, img)} class="item">
  <img
    width="100%"
    src=${img}
    alt=" T-shirts"
  />
  <div class="details">
    <h3 class="name_item">${name}</h3>
    <p class="text_item">
      ${desc}
    </p>
    <div class="price-quantity">
      <h2 class="price">€${price}</h2>
      <div class="buttons">
        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
        <div id=${id} class="quantity">0</div>
        <i onclick"increment(${id})" class="bi bi-plus-lg"></i>
      </div>
    </div>
  </div>
</div>
  `);
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
};
let decrement = () => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item -= 1;
  }

  console.log(basket);
};
let update = () => {};

function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-green";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-green", "");
  }
}

function myDropFunc() {
  var x = document.getElementById("demoDrop");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-green";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-green", "");
  }
}
