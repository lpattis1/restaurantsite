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

      //   Remove order items from cart and update price total (clear out/reset the prices array if total price is 0)
      const orderItems = document.querySelectorAll(".order-item");
      const removeOrderItem = document.querySelectorAll(".remove-btn");
      removeOrderItem.forEach((remove) => {
        remove.addEventListener("click", function (e) {
          remove.parentElement.remove(remove.parentElement);
          count.textContent = ordersUl.children.length;
          const removed = parseInt(
            remove.parentElement.children[1].children[0].textContent
          );
          cartItems.pop();
          totalOrderPrice = totalOrderPrice - removed;
          totalOrder.textContent = totalOrderPrice;
          if (totalOrderPrice === 0) {
            cartPrices = [];
          }
        });
      });
    });
  });

  //   Open cart modal
  cart.addEventListener("click", function (e) {
    const modalBg = document.querySelector(".cart-modal-bg");
    const cartModal = document.querySelector(".cart-modal");
    modalBg.classList.add("show-modal");
    cartModal.animate(
      [
        {
          transform: "translateZ(-1400px)",
          opacity: "0",
        },
        {
          transform: "translateZ(0)",
          opacity: "1",
        },
      ],
      {
        duration: 500,
        fill: "forwards",
      }
    );
  });

  //   Close cart modal
  cartClose.addEventListener("click", function (e) {
    const modalBg = document.querySelector(".cart-modal-bg");
    const amountAlert = document.querySelector(".amount-alert");
    modalBg.classList.remove("show-modal");
    amountAlert.classList.remove("show-alert");
    modalBg.animate(
      [
        {
          opacity: "1",
        },
        {
          opacity: "0",
        },
      ],
      {
        duration: 1000,
        fill: "backwards",
      }
    );
  });
}

addRemoveCartItems();

// Checkout function - shows next two screens
function checkout() {
  const checkoutBtn = document.querySelector(".to-details-btn");

  checkoutBtn.addEventListener("click", function (e) {
    //   Cart modal
    const cartModal = document.querySelector(".cart-modal");
    const closeCartModal = document.querySelector(".cart-modal-close");

    // First cart page
    const summaryPage = document.querySelector(".summary");
    // Payment details page variables
    const paymentPage = document.querySelector(".enter-details-page");

    //   If there are no items in the cart - show popup warning
    const totalOrder = document.querySelector(".total-number");
    const amountAlert = document.querySelector(".amount-alert");
    let totalOrderPrice = parseFloat(totalOrder.textContent);
    if (totalOrderPrice <= 0) {
      amountAlert.classList.add("show-alert");
      paymentPage.classList.remove("slide-in");
    } else {
      amountAlert.classList.remove("show-alert");
      summaryPage.style.opacity = "0";
      paymentPage.classList.add("slide-in");
      cartModal.classList.add("modal-padding");
      cartModal.classList.add("modal-height");
    }

    if (paymentPage.classList.contains("slide-in")) {
      console.log(closeCartModal.children[0]);
      closeCartModal.children[0].style.color = "black";
    }
  });
}

checkout();
