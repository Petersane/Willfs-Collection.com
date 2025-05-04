const menuicon=document.getElementById("menuicon");
const menuList=document.getElementById("menuList");
 const crossMark=document.querySelector(".CrossMark");

menuicon.addEventListener("click",()=>{
    menuList.style.display="block";
})
crossMark.addEventListener("click",()=>{
    menuList.style.display="none";
})

const carticon=document.getElementById("shoppingcart");
const cart=document.querySelector(".cart");
const cartclose=document.getElementById("cartclose");

    carticon.addEventListener("click", () => cart.classList.add("active"));
    cartclose.addEventListener("click", () => cart.classList.remove("active"));
  

const addcartbtns = document.querySelectorAll("#addtocart");
addcartbtns.forEach(button => {
    button.addEventListener("click", event => {
        const productbox = event.target.closest("#product");
        if (productbox) {
            addtocart(productbox);
        }
    });
});

const cartcontent = document.querySelector(".cart-content");

const addtocart = productbox => {
    // Safely get product details
    const productImg = productbox.querySelector("img");
    const productNameEl = productbox.querySelector("#productname");
    const productPriceEl = productbox.querySelector("#productprice");
    
    if (!productImg || !productNameEl || !productPriceEl) return;

    const productImgSrc = productImg.src;
    const productName = productNameEl.textContent.trim();
    const productPrice = productPriceEl.textContent.trim();

    // Check for duplicates with improved comparison
    const cartItems = cartcontent.querySelectorAll(".cart-product-name");
    for (let item of cartItems) {
        if (item.textContent.trim() === productName) {
            // Visual feedback instead of alert
            item.closest('.cart-box').classList.add('duplicate-highlight');
            setTimeout(() => {
                item.closest('.cart-box').classList.remove('duplicate-highlight');
            }, 1000);
            return;
        }
    }
    
    // Create cart item
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
        <img src="${productImgSrc}" class="cart-img" alt="${productName}">
        <div class="cart-detail">
            <h2 class="cart-product-name">${productName}</h2>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quantity">
                <button class="decrement">-</button>
                <span class="number">1</span>
                <button class="increment">+</button>
            </div>
        </div>
        <i class="fa-solid fa-trash cart-remove"></i>
    `;
    cartcontent.appendChild(cartBox);

    // Setup event listeners
    setupCartItemEvents(cartBox);
};

function setupCartItemEvents(cartBox) {
    // Remove item
    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
        cartBox.remove();
        updateTotalPrice(); 
    });

    // Quantity controls
    const numberElement = cartBox.querySelector(".number");
    const decrementBtn = cartBox.querySelector(".decrement");
    const incrementBtn = cartBox.querySelector(".increment");

    decrementBtn.addEventListener("click", () => {
        let quantity = parseInt(numberElement.textContent);
        if (quantity > 1) {
            quantity--;
            numberElement.textContent = quantity;
            decrementBtn.style.color = quantity === 1 ? "#999" : "#333";
        }
        updateTotalPrice(); 
    });

    incrementBtn.addEventListener("click", () => {
        let quantity = parseInt(numberElement.textContent) + 1;
        numberElement.textContent = quantity;
        decrementBtn.style.color = "#333";
        updateTotalPrice(); 
    });
    updateTotalPrice(); 
};
const updateTotalPrice =()=>{
    const totalPriceElement=document.querySelector(".total-price");
    const cartBoxes=cartcontent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox =>{
        const priceElement =cartBox.querySelector(".cart-price");
        const quantityElement =cartBox.querySelector(".number");
        const price =priceElement.textContent.replace("Ksh","");
        const quantity = quantityElement.textContent;
        total += price*quantity;
    })
    totalPriceElement.textContent=`Ksh ${total}`;

}








