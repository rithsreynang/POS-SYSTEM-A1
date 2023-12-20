let fruit = [
    { img: '../img/image.jpg', id: '001', name: 'Apple', stock: 30, price: 2.5 },
    { img: '../img/image.jpg', id: '002', name: 'Coconut', stock: 25, price: 1 },
    { img: '../img/image.jpg', id: '003', name: 'Banana', stock: 15, price: 1.5 },
    { img: '../img/image.jpg', id: '004', name: 'Mago', stock: 20, price: 2 },
    { img: '../img/image.jpg', id: '005', name: 'Papaya', stock: 10, price: 0.75 },
    { img: '../img/image.jpg', id: '006', name: 'Orange', stock: 80, price: 1.50 },
    { img: '../img/image.jpg', id: '007', name: 'Pineapple ', stock: 38, price: 1.50 },
    { img: '../img/image.jpg', id: '008', name: 'Watermelon', stock: 45, price: 2 },
]
let cake = [
    { img: '../img/image.jpg', id: '011', name: 'Hobnobs biscuits', stock: 35, price: 2 },
    { img: '../img/image.jpg', id: '012', name: 'Malted Milk Biscuits', stock: 25, price: 1 },
    { img: '../img/image.jpg', id: '013', name: 'Malted Milk Biscuits', stock: 15, price: 1.5 },
    { img: '../img/image.jpg', id: '014', name: 'Viennese whirls', stock: 20, price: 2 },
    { img: '../img/image.jpg', id: '015', name: 'Nice biscuits', stock: 10, price: 0.75 },
    { img: '../img/image.jpg', id: '016', name: 'Anmol', stock: 80, price: 1.50 },
    { img: '../img/image.jpg', id: '017', name: 'Custard Cream', stock: 38, price: 1.50 },
    { img: '../img/image.jpg', id: '018', name: 'cololate cream', stock: 45, price: 2 },

]
let drink = [
    { img: '../img/image.jpg', id: '021', name: 'water', stock: 30, price: 2.5 },
    { img: '../img/image.jpg', id: '022', name: 'Coffee', stock: 25, price: 1 },
    { img: '../img/image.jpg', id: '023', name: 'Dutch mike', stock: 15, price: 1.5 },
    { img: '../img/image.jpg', id: '024', name: 'Tea', stock: 20, price: 2 },
    { img: '../img/image.jpg', id: '025', name: 'Coca-Cola', stock: 10, price: 0.75 },
    { img: '../img/image.jpg', id: '026', name: 'Fruit Juice', stock: 80, price: 1.50 },

]
let cosmetic = [
    { img: '../img/image.jpg', id: '031', name: 'Sun cream', stock: 30, price: 2.5 },
    { img: '../img/image.jpg', id: '032', name: 'Coffee Crab', stock: 25, price: 1 },
    { img: '../img/image.jpg', id: '033', name: 'vasalin', stock: 15, price: 1.5 },
    { img: '../img/image.jpg', id: '034', name: 'Serum Ordinary', stock: 20, price: 2 },
    { img: '../img/image.jpg', id: '035', name: 'Toner', stock: 10, price: 0.75 },
    { img: '../img/image.jpg', id: '036', name: 'mask Gaol', stock: 80, price: 1.50 },
    { img: '../img/image.jpg', id: '037', name: 'Night Cream', stock: 38, price: 1.50 },
]
const cart = []
let total = 0;
number = 0;

function saveToLocal() {
    localStorage.setItem('fruit', JSON.stringify(fruit));
    localStorage.setItem('cake', JSON.stringify(cake));
    localStorage.setItem('drink', JSON.stringify(drink));
    localStorage.setItem('cosmetic', JSON.stringify(cosmetic));
}
// saveToLocal()
function load() {
    fruit = JSON.parse(localStorage.getItem('fruit'));
    cake = JSON.parse(localStorage.getItem('cake'));
    drink = JSON.parse(localStorage.getItem('drink'));
    cosmetic = JSON.parse(localStorage.getItem('cosmetic'));
}
// console.log(load());
let group_Card = document.getElementById('group-card');

// =======================card fruit=============================
function displayCardProduct_fruit() {
    load()
    group_Card.innerHTML = ''

    for (let i in fruit) {
        let card = document.createElement('div');
        card.classList = 'card';
        card.dataset.index = i


        let image = document.createElement('img');
        image.src = fruit[i].img;

        let id_product = document.createElement('h3');
        id_product.textContent = 'ID : ' + fruit[i].id;

        let name_product = document.createElement('h3');
        name_product.textContent = 'name : ' + fruit[i].name;

        let stock_product = document.createElement('h3');
        stock_product.textContent = 'stock of product : ' + fruit[i].stock;

        let price_product = document.createElement('h3');
        price_product.textContent = 'price: $' + fruit[i].price;

        let btn = document.createElement('button');
        btn.setAttribute('id', 'submits')
        btn.textContent = '+ Add to cart';
        btn.addEventListener('click', add_carts)


        card.appendChild(image);
        card.appendChild(id_product);
        card.appendChild(name_product);
        card.appendChild(stock_product);
        card.appendChild(price_product);
        card.appendChild(btn);
        group_Card.appendChild(card);
    }
}
// ======================card cake==============================
function displayCardProduct_cake() {
    load()
    group_Card.innerHTML = ''

    for (let i in cake) {
        let card = document.createElement('div');
        card.classList.add = 'card';
        card.dataset.index = i


        let image = document.createElement('img');
        image.src = cake[i].img;

        let id_product = document.createElement('h3');
        id_product.textContent = 'ID ' + cake[i].id;

        let name_product = document.createElement('h3');
        name_product.textContent = 'name ' + cake[i].name;

        let stock_product = document.createElement('h3');
        stock_product.textContent = 'stock of product ' + cake[i].stock;

        let price_product = document.createElement('h3');
        price_product.textContent = 'price: $' + cake[i].price;

        let btn = document.createElement('button');
        btn.setAttribute('id', 'submits')
        btn.textContent = '+ Add to cart';
        btn.addEventListener('click', add_carts)


        card.appendChild(image);
        card.appendChild(id_product);
        card.appendChild(name_product);
        card.appendChild(stock_product);
        card.appendChild(price_product);
        card.appendChild(btn);
        group_Card.appendChild(card);
        console.log(group_Card)
    }
}
// =======================dink==================================
function displayCardProduct_drink() {
    load()
    group_Card.innerHTML = ''

    for (let i in drink) {
        let card = document.createElement('div');
        card.classList = 'card';
        card.dataset.index = i


        let image = document.createElement('img');
        image.src = drink[i].img;

        let id_product = document.createElement('h3');
        id_product.textContent = 'ID ' + drink[i].id;

        let name_product = document.createElement('h3');
        name_product.textContent = 'name ' + drink[i].name;

        let stock_product = document.createElement('h3');
        stock_product.textContent = 'stock of product ' + drink[i].stock;

        let price_product = document.createElement('h3');
        price_product.textContent = 'price: $' + drink[i].price;

        let btn = document.createElement('button');
        btn.setAttribute('id', 'submits')
        btn.textContent = '+ Add to cart';
        btn.addEventListener('click', add_carts)

        card.appendChild(image);
        card.appendChild(id_product);
        card.appendChild(name_product);
        card.appendChild(stock_product);
        card.appendChild(price_product);
        card.appendChild(btn);
        group_Card.appendChild(card);
    }
}
// ======================card_cosmetic======================================
function displayCardProduct_cosmetic() {
    load()
    group_Card.innerHTML = ''
    for (let i in cosmetic) {
        let card = document.createElement('div');
        card.classList = 'card';
        card.dataset.index = i


        let image = document.createElement('img');
        image.src = cosmetic[i].img;

        let id_product = document.createElement('h3');
        id_product.textContent = 'ID ' + cosmetic[i].id;

        let name_product = document.createElement('h3');
        name_product.textContent = 'name ' + cosmetic[i].name;

        let stock_product = document.createElement('h3');
        stock_product.textContent = 'stock of product ' + cosmetic[i].stock;

        let price_product = document.createElement('h3');
        price_product.textContent = 'price: $' + cosmetic[i].price;

        let btn = document.createElement('button');
        btn.setAttribute('id', 'submits')
        btn.textContent = '+ Add to cart';
        btn.addEventListener('click', add_carts)

        card.appendChild(image);
        card.appendChild(id_product);
        card.appendChild(name_product);
        card.appendChild(stock_product);
        card.appendChild(price_product);
        card.appendChild(btn);
        group_Card.appendChild(card);
    }

}

let fruits = document.getElementById('fruits');
let cakes = document.getElementById('cakes');
let drinks = document.getElementById('drinks');
let cosmetics = document.getElementById('cosmetics');



// Add event listener to the 'Fruits' button

fruits.addEventListener('click', function () {
    displayCardProduct_fruit();
});

// Add event listener to the 'Cakes' button
cakes.addEventListener('click', function () {
    displayCardProduct_cake();
});

// Add event listener to the 'Drinks' button
drinks.addEventListener('click', function () {
    displayCardProduct_drink();
});

// Add event listener to the 'Cosmetics' button
cosmetics.addEventListener('click', function () {

    displayCardProduct_cosmetic();
});

displayCardProduct_fruit();

// ===================================Search_input======================================
let search_input = document.getElementById('search_input').value;
console.log(search_input);




// ================================Add_tocart============================================
let cart_container = document.querySelector('.main-right')
// let groupCarts = document.querySelector('#add_cart')
function add_carts(e) {
    let pc = e.target.parentElement.dataset.index
    const isExist = cart.filter(item => item.id === fruit[pc].id)
    if(!isExist.length){
        cart.push(fruit[pc])
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    displayCart()

}


function minus_Product(e) {
    let p = e.target.parentElement.parentElement.parentElement.children[0].textContent;
    if (number > 0) {
        number -= 1;
        document.getElementById('p' + p).textContent = number;
        console.log(document.getElementById('h3' + p).textContent = pricepc);
    } else if (number <= 0) {
        number = 0;
    }
}
function plus_Product(e) {
    let pn = e.target.parentElement.parentElement.parentElement.children[0].textContent;
    number += 1

    document.getElementById('p' + pn).textContent = number;
    document.getElementById('h3' + pn).textContent = pricepc;
}
function displayCart() {
    let groupCarts = document.querySelector('#add_cart')
    groupCarts.remove()
    const cartList = document.createElement('div')
    cartList.setAttribute('id',"add_cart") 
    const carts = JSON.parse(localStorage.getItem('cart'))
    if(!carts.length){
        for (let i in carts) {
            let image = cart[i].img;
            let namepc = cart[i].name;
            let pricepc = cart[i].price;
    
    
            let carts = document.createElement('div');
            carts.setAttribute('id', 'carts');
            carts.dataset.index = i
    
    
            let img = document.createElement('img');
            img.src = image;
            carts.appendChild(img)
    
            let cart_right = document.createElement('div');
            cart_right.classList = 'cart_right';
            carts.appendChild(cart_right)
    
    
            let name = document.createElement('h3');
            name.textContent = namepc;
            cart_right.appendChild(name);
    
    
            let prices_product = document.createElement('div');
            prices_product.classList = "price_product";
            cart_right.appendChild(prices_product);
    
            let price = document.createElement('h3');
            price.id = 'h3' + namepc;
            price.textContent = pricepc;
            prices_product.appendChild(price);
    
    
            let icon = document.createElement('div');
            icon.classList = 'group-icon';
            prices_product.appendChild(icon);
    
            let button_minus = document.createElement('button');
            button_minus.id = 'minus';
            button_minus.textContent = "-";
    
            icon.appendChild(button_minus);
            button_minus.addEventListener('click', minus_Product)
    
    
    
            let numbers = document.createElement('p');
            numbers.id = 'p' + namepc;
            numbers.textContent = number;
            icon.appendChild(numbers);
    
            let button_plus = document.createElement('button');
            button_plus.id = 'plus';
            button_plus.textContent = "+";
            icon.appendChild(button_plus);
            button_plus.addEventListener('click', plus_Product)
    
            let icondelete = document.createElement('i');
            icondelete.classList = 'bx bx-x'
            cartList.append(carts)
        }
        cart_container.insertBefore(cartList, cart_container.children[1])
    }
}
displayCart()
// =============================Total==================================================
