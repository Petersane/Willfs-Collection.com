const menuicon=document.getElementById("menuicon");
const menuList=document.getElementById("menuList");
 const crossMark=document.querySelector(".CrossMark");

menuicon.addEventListener("click",()=>{
    menuList.style.display="block";
})
crossMark.addEventListener("click",()=>{
    menuList.style.display="none";
})

const AddtoCart=document.querySelectorAll("#addtocart");


AddtoCart.addEventListener("click",()=>{

})







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