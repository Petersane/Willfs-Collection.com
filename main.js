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
  
const addcartbtns=document.querySelectorAll("#addtocart");
addcartbtns.forEach(button=>{
    button.addEventListener("click",event=>{
        const productbox=event.target.closest("#product");
        addtocart(productbox);
    })
})

const cartcontent=document.querySelector(".cart-content");

const addtocart=productbox=>{
    const productImgSrc=productbox.querySelector("img").src;
    const productName=productbox.querySelector("#productname").textContent;
    const productPrice=productbox.querySelector("#productprice").textContent;

    const cartItems=cartcontent.querySelectorAll(".cart-productname");
    for(let item of cartItems){
        if(item.textcontent===productName){
            alert("This item is already in the cart.");
            return;
        }
    }
    
    const cartBox=document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML=`
        <img src="${productImgSrc}" class="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-name">
                        ${productName}
                    </h2>
                    <span class="cart-price">${productPrice}</span>
                    <div class="cart-quantity">
                        <button id="decrement">-</button>
                        <span id="number">1</span>
                        <button id="increment">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-trash cart-remove"></i>
    `;
    cartcontent.appendChild(cartBox);

    cartBox.querySelector(".cart-remove").addEventListener("click",()=>{
        cartBox.remove();
    })
    cartBox.querySelector(".cart-quantity").addEventListener("click",event=>{
        const numberElement=cartBox.querySelector("#number");
        const decrementbtn=cartBox.querySelector("#decrement");
        let quantity=numberElement.textContent;

        if(event.target.id==="decrement" && quantity > 1 ){
            quantity--;
            if(quantity===1){
                decrementbtn.style.color="#999";
            }
            else if(event.target.id==="increment"){
                quantity++;
                decrementbtn.style.color="#333";

            }
            numberElement.textContent=quantity;
        }

    })
}








/*
let shoppingcart = [];

document.getElementById("addtocart").addEventListener("click", function() {
    let productImg = document.getElementById("productimg").src;
    let productName = document.getElementById("productname").innerText;
    let productPrice = document.getElementById("productprice").innerText.replace("Ksh ", ""); // Remove currency label

    let product = {
        img: productImg,
        name: productName,
        price: parseFloat(productPrice) // Convert price to number
    };

    cart.push(product);
    displayCart();
});

function displayCart() {
    let cartContainer = document.getElementById("shoppingcart");
    cartContainer.innerHTML = ""; // Clear previous items

    cart.forEach((product, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${product.img}" alt="${product.name}" width="50">
                <p>${product.name} - Ksh ${product.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart array
    displayCart(); // Update cart view
}

// Create a container to display cart contents dynamically
document.body.innerHTML += '<div id="cart"></div>';
*/