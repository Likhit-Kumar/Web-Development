var carts;
carts = document.querySelectorAll('.add-to-cart');

var products = [
    {
        name: 'Sony PlayStation 5',
        tag: 'PlayStation',
        img: 'img/1.png',
        price: 675,
        inCart: 0
    },
    {
        name: 'Apple iPhone 12 Pro',
        tag: 'iPhone',
        img: 'img/2.png',
        price: 1200,
        inCart: 0
    },
    {
        name: 'OnePlus Nord 2',
        tag: 'Nord',
        img: 'img/3.png',
        price: 450,
        inCart: 0
    },
    {
        name: 'Apple MacBook Pro',
        tag: 'Laptop',
        img: 'img/4.png',
        price: 1299,
        inCart: 0
    },
    {
        name: 'OnePlus Nord 9R',
        tag: 'Nord 9R',
        img: 'img/8.png',
        price: 539,
        inCart: 0
    },
    {
        name: 'Apple iWatch',
        tag: 'Watches',
        img: 'img/5.png',
        price: 700,
        inCart: 0
    },
    {
        name: 'Apple AirPods',
        tag: 'AirPods',
        img: 'img/6.png',
        price: 199,
        inCart: 0
    },
    {
        name: 'Apple AirPods Max',
        tag: 'AirPods Max',
        img: 'img/7.png',
        price: 549,
        inCart: 0
    }
]

for(let i=0; i < carts.length;i++) {
    carts[i].addEventListener('click',() => {
        console.log("Added");
        cartNumbers(products[i]);
        TotalCost(products[i]);
    })
}

function cartNumbers(product) {
    console.log("The Product Clicked is ", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.right-menu span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.right-menu span').textContent = 1;
    }
    
    setItems(product);
}

function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        var element = document.querySelector('.right-menu span')
        if (element) {
            element.textContent = productNumbers;
        }
    }
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);
    console.log("My cart Items are", cartItems);
    
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function TotalCost(product) {
    console.log("The product price : ", product.price);

    let cartCost = localStorage.getItem('TotalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("TotalCost", cartCost + product.price);
    } else {
        localStorage.setItem("TotalCost", product.price);
    }
}

function displayCart() {
    var cartItems;
    cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('TotalCost');
    let DiscountCost = (cartCost*5)/100;
    let GrandCost = cartCost - DiscountCost;

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="fas fa-times-circle"></i>
                <img src="${item.img}"></img>
                <span>${item.name}</span>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
                <i class="fas fa-angle-left"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-angle-right"></i>
            </div>
            <div class="total">
               $${item.inCart * item.price},00
            </div>
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">$   ${cartCost},00</h4>
            </div>
            <div class="DiscountContainer">
                <h4 class="DiscountTitle">
                    Discount 5%
                </h4>
                <h4 class="DiscountTotal">$  - ${DiscountCost}</h4>
            </div>
            <div class="GrandTotalContainer">
                <h4 class="GrandTotalTitle">
                    Grand Total
                </h4>
                <h4 class="GrandTotal">$ ${GrandCost}</h4>
            </div>
        `;
    }
}



onLoadCartNumbers();
displayCart();

