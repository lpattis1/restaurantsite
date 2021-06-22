// Cart arrays
let cartItems = [];
let cartPrices = [];
let cartImages = [];
// Cart state
const userCart = {
  img: "/img/fishandchips.png",
  name: "",
  price: "",
};

// Add and remove items from cart function
function addRemoveCartItems() {
  // Variables:

  // Cart
  const cart = document.querySelector(".cart");
  const cartClose = document.querySelector(".cart-modal-close");
  const count = document.querySelector(".count");
  let countNum = parseInt(count.textContent);
  const orders = document.querySelectorAll(".order-btn");
  const ordersUl = document.querySelector(".orders");
  const totalOrder = document.querySelector(".total-number");
  let totalOrderPrice = parseFloat(totalOrder.textContent);

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
      // Added and manipulated cart variables
      const cartItem = order.parentElement;
      const cartItemName = cartItem.children[1].textContent;
      const cartItemPrice = cartItem.children[1].dataset.price;
      const cartItemImg = cartItem.children[0].src;
      userCart.name = cartItemName;
      userCart.img = cartItemImg;
      userCart.price = parseInt(cartItemPrice);

      //   --------------------------

      //   Adding cart properties to the cart array
      cartItems.push(userCart.name);
      cartPrices.push(userCart.price);
      cartImages.push(userCart.img);
      countNum += cartItems.length;

      //   Show how many items are in the cart currently
      if (countNum > 0) {
        count.classList.add("count-active");
        count.textContent = cartItems.length;
      } else {
        count.classList.remove("count-active");
      }

      //   Append cart items to the cart modal
      let html = "";
      html = `
      <li class="order-item">
      <img src="${userCart.img}" alt=""> ${userCart.name} 
      <span class ="item-price">$<p>${userCart.price}</p></span>
      <button class="remove-btn">Remove</button>
      </li>
      `;
      ordersUl.innerHTML += html;

      //   Add up total price in cart
      totalOrderPrice = cartPrices.reduce((a, b) => {
        return a + b;
      });
      totalOrder.textContent = totalOrderPrice;

      //   Remove order items from cart and update price total
      const orderItems = document.querySelectorAll(".order-item");
      const removeOrderItem = document.querySelectorAll(".remove-btn");
      removeOrderItem.forEach((remove) => {
        remove.addEventListener("click", function (e) {
          remove.parentElement.remove(remove.parentElement);
          const removed =
            remove.parentElement.children[1].children[0].textContent;
          totalOrder.textContent = parseInt(totalOrder.textContent - removed);
        });
      });
    });
  });

  //   Open cart modal
  cart.addEventListener("click", function (e) {
    const modalBg = document.querySelector(".cart-modal-bg");
    modalBg.classList.add("show-modal");
  });

  //   Close cart modal
  cartClose.addEventListener("click", function (e) {
    const modalBg = document.querySelector(".cart-modal-bg");
    modalBg.classList.remove("show-modal");
  });
}

addRemoveCartItems();

// Checkout function - shows next two screens
function checkout() {
  const checkoutBtn = document.querySelector(".to-details-btn");

  checkoutBtn.addEventListener("click", function (e) {
    const totalOrder = document.querySelector(".total-number");
    const amountAlert = document.querySelector(".amount-alert");
    console.log(totalOrder);
    let totalOrderPrice = parseFloat(totalOrder.textContent);
    if (totalOrderPrice <= 0) {
      amountAlert.classList.add("show-alert");
    } else {
      amountAlert.classList.remove("show-alert");
    }
  });
}

checkout();
