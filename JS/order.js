let fruit = [
    { img: '../Images/image.jpg', id: '001', name: 'Apple', stock: 30, price: 2.5, totalPrice: 2.5, total: 0 },
    { img: '../Images/image.jpg', id: '002', name: 'Coconut', stock: 25, price: 1, totalPrice: 1, total: 0 },
    { img: '../Images/image.jpg', id: '003', name: 'Banana', stock: 15, price: 1.5, totalPrice: 1.5, total: 0 },
    { img: '../Images/image.jpg', id: '004', name: 'Mago', stock: 20, price: 2, totalPrice: 2, total: 0 },
    { img: '../Images/image.jpg', id: '005', name: 'Papaya', stock: 10, price: 0.75, totalPrice: 0.75, total: 0 },
    { img: '../Images/image.jpg', id: '006', name: 'Orange', stock: 80, price: 1.50, totalPrice: 1.50, total: 0 },
    { img: '../Images/image.jpg', id: '007', name: 'Pineapple ', stock: 38, price: 1.50, totalPrice: 1.50, total: 0 },
    { img: '../Images/image.jpg', id: '008', name: 'Watermelon', stock: 45, price: 2, totalPrice: 2, total: 0 },
]
let cake = [
    { img: '../Images/image.jpg', id: '011', name: 'Hobnobs biscuits', stock: 35, price: 2 },
    { img: '../Images/image.jpg', id: '012', name: 'Malted Milk Biscuits', stock: 25, price: 1 },
    { img: '../Images/image.jpg', id: '013', name: 'Malted Milk Biscuits', stock: 15, price: 1.5 },
    { img: '../Images/image.jpg', id: '014', name: 'Viennese whirls', stock: 20, price: 2 },
    { img: '../Images/image.jpg', id: '015', name: 'Nice biscuits', stock: 10, price: 0.75 },
    { img: '../Images/image.jpg', id: '016', name: 'Anmol', stock: 80, price: 1.50 },
    { img: '../Images/image.jpg', id: '017', name: 'Custard Cream', stock: 38, price: 1.50 },
    { img: '../Images/image.jpg', id: '018', name: 'cololate cream', stock: 45, price: 2 },

]
let drink = [
    { img: '../Images/image.jpg', id: '021', name: 'water', stock: 30, price: 2.5 },
    { img: '../Images/image.jpg', id: '022', name: 'Coffee', stock: 25, price: 1 },
    { img: '../Images/image.jpg', id: '023', name: 'Dutch mike', stock: 15, price: 1.5 },
    { img: '../Images/image.jpg', id: '024', name: 'Tea', stock: 20, price: 2 },
    { img: '../Images/image.jpg', id: '025', name: 'Coca-Cola', stock: 10, price: 0.75 },
    { img: '../Images/image.jpg', id: '026', name: 'Fruit Juice', stock: 80, price: 1.50 },

]
let cosmetic = [
    { img: '../Images/image.jpg', id: '031', name: 'Sun cream', stock: 30, price: 2.5 },
    { img: '../Images/image.jpg', id: '032', name: 'Coffee Crab', stock: 25, price: 1 },
    { img: '../Images/image.jpg', id: '033', name: 'vasalin', stock: 15, price: 1.5 },
    { img: '../Images/image.jpg', id: '034', name: 'Serum Ordinary', stock: 20, price: 2 },
    { img: '../Images/image.jpg', id: '035', name: 'Toner', stock: 10, price: 0.75 },
    { img: '../Images/image.jpg', id: '036', name: 'mask Gaol', stock: 80, price: 1.50 },
    { img: '../Images/image.jpg', id: '037', name: 'Night Cream', stock: 38, price: 1.50 },
]
let carts = []
let total = 0;
number = 0;

function saveToLocal() {
    localStorage.setItem('fruit', JSON.stringify(fruit));
    localStorage.setItem('cake', JSON.stringify(cake));
    localStorage.setItem('drink', JSON.stringify(drink));
    localStorage.setItem('cosmetic', JSON.stringify(cosmetic));
    localStorage.setItem('carts', JSON.stringify(carts))
}
// saveToLocal()
function load() {
    const fruitList = JSON.parse(localStorage.getItem('fruit'));
    const cakeList = JSON.parse(localStorage.getItem('cake'));
    const drinkList = JSON.parse(localStorage.getItem('drink'));
    const cosmeticList = JSON.parse(localStorage.getItem('cosmetic'));
    const cartList = JSON.parse(localStorage.getItem('carts'))
    if (cartList != null) {
        carts = cartList
    }
    if (fruitList != null) {
        fruit = fruitList
    }
    if (cakeList != null) {
        cake = cakeList
    }
    if (drinkList != null) {
        drink = drinkList
    }
    if (cosmeticList != null) {
        cosmetic = cosmeticList
    }
}
// console.log(load());
let group_Card = document.getElementById('group-card');

// =======================card fruit=============================
function displayCardProduct_fruit() {

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


// ===================================Search_input======================================
let search_input = document.getElementById('search_input').value;




// ================================Add_tocart============================================
const cart_container = document.querySelector('.main-right')
function add_carts(e) {
    let pc = e.target.parentElement.dataset.index
    const index = carts.findIndex(item => item.id === fruit[pc].id)
    
    if (index === -1) {
        fruit[pc].total = 1
        carts.push(fruit[pc])
    }
    else {
        carts[index].total += 1
        carts[index].totalPrice += carts[index].price
    }
    saveToLocal()
    displayCart()
}
function finxIndex(item) {
    return item.id === fruit[pc].id
}


function minus_Product(e) {
    const index = e.target.parentElement.dataset.index;
    if (carts[index].total > 1) {
        carts[index].total -= 1
        carts[index].totalPrice -= carts[index].price
    }
    saveToLocal()
    displayCart()
   
}
function plus_Product(e) {
    const index = e.target.parentElement.dataset.index;
    carts[index].totalPrice += carts[index].price;
    carts[index].total += 1
    saveToLocal()
    displayCart()

    
}
function displayCart() {
    const groupCarts = document.querySelector('#add_cart')
    groupCarts.remove()
    const cartList = document.createElement('div')
    cartList.setAttribute('id', 'add_cart')
    if (carts.length) {
        // console.log(groupCarts);
        for (let i in carts) {
            let image = carts[i].img;
            let namepc = carts[i].name;
            let totalPrice = carts[i].totalPrice;
            const total = carts[i].total



            let cart = document.createElement('div');
            cart.setAttribute('id', 'carts');
            cart.dataset.index = i


            let img = document.createElement('img');
            img.src = image;
            cart.appendChild(img)

            let cart_right = document.createElement('div');
            cart_right.classList = 'cart_right';
            cart.appendChild(cart_right)


            let name = document.createElement('h3');
            name.textContent = namepc;
            cart_right.appendChild(name);


            let prices_product = document.createElement('div');
            prices_product.classList = "price_product";
            cart_right.appendChild(prices_product);

            let price = document.createElement('h3');
            // price.id = 'h3' + namepc;
            price.textContent = totalPrice;
            prices_product.appendChild(price);


            let icon = document.createElement('div');
            icon.dataset.index = i
            icon.classList = 'group-icon';
            prices_product.appendChild(icon);

            let button_minus = document.createElement('button');
            button_minus.id = 'minus';
            button_minus.textContent = "-";

            icon.appendChild(button_minus);
            button_minus.addEventListener('click', minus_Product)

            let numbers = document.createElement('p');
            numbers.id = 'p' + namepc;
            numbers.textContent = total;
            icon.appendChild(numbers);

            let button_plus = document.createElement('button');
            button_plus.id = 'plus';
            button_plus.textContent = "+";
            icon.appendChild(button_plus);
            button_plus.addEventListener('click', plus_Product)

            let icondelete = document.createElement('i');
            icondelete.classList = 'bx bx-x'
            cartList.append(cart)
        }
    }
    
    cart_container.insertBefore(cartList, cart_container.childNodes[2]);function add_cart(event){
        const index = event.target.parentElement.dataset.index
        cart.push(fruit[index]);
        total += fruit[index].price
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(total);
        
    
    }
    
   
}
load()
displayCardProduct_fruit();
displayCart()
// =============================Total==================================================
let display_total=document.getElementById('Total_money');
function add_total(event){
    total += fruit[index].price
    console.log(total);
    
    display_total.textContent=total;

}
add_total()

