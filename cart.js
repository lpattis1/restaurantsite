let cartItems = [];
let cartPrices = [];
const userCart = {
  img: "/img/fishandchips.png",
  name: "",
  price: "",
};

function addToCart() {
  // Variables:

  // Cart
  const cart = document.querySelector(".cart");
  const count = document.querySelector(".count");
  let countNum = parseInt(count.textContent);

  const orders = document.querySelectorAll(".order-btn");

  // Item Categories
  const categories = document.querySelectorAll(".category");
  const hoveredCategories = document.querySelectorAll(".hovered-category");

  // Buttons
  const orderNowBtns = document.querySelectorAll(".order-btn");

  // Items
  const items = document.querySelectorAll(".item");

  // Item names
  const itemNames = document.querySelectorAll(".item-name");

  //   ----------------------------

  orderNowBtns.forEach((order) => {
    order.addEventListener("click", function (e) {
      const ordersUl = document.querySelector(".orders");
      const cartItem = order.parentElement;
      const cartItemName = cartItem.children[1].textContent;
      const cartItemPrice = cartItem.children[1].dataset.price;
      const cartItemImg = cartItem.children[0].src;
      userCart.name = cartItemName;
      userCart.img = cartItemImg;
      userCart.price = parseInt(cartItemPrice);
      //   --------------------------
      cartItems.push(userCart.name);
      cartPrices.push(userCart.price);
      countNum += cartItems.length;

      if (countNum > 0) {
        count.classList.add("count-active");
        count.textContent = cartItems.length;
      } else {
        count.classList.remove("count-active");
      }
      console.log(cartItems);
      console.log(cartPrices);

      //   <li><img src="/img/coleslaw.png" alt=""> gfgf</li>
    });
  });
}

addToCart();
