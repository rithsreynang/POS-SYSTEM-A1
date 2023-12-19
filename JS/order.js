let fruit = [
    { img: '../img/image.jpg', id: '001', name: 'Apple', stock: 30, price: 2.5 },
    { img: '../img/image.jpg', id: '002', name: 'Coconut', stock: 25, price: 1  },
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
let total = 0

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
        card.dataset.index=i


        let image = document.createElement('img');
        image.src = fruit[i].img;

        let id_product = document.createElement('h3');
        id_product.textContent = 'ID : ' + fruit[i].id;

        let name_product = document.createElement('h3');
        name_product.textContent = 'name : ' + fruit[i].name;

        let stock_product = document.createElement('h3');
        stock_product.textContent = 'stock of product : ' + fruit[i].stock;

        let price_product = document.createElement('h3');
        price_product.textContent = 'price: $' +fruit[i].price;

        let btn = document.createElement('button');
        btn.setAttribute('id', 'submits')
        btn.textContent = '+ Add to cart';
        btn.addEventListener('click',add_cart)


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
        card.dataset.index=i

        
        let image = document.createElement('img');
        image.src = product.img;

        let id_product = document.createElement('h3');
        id_product.textContent = 'ID ' + cake[i].id;

        let name_product = document.createElement('h3');
        name_product.textContent = 'name ' +cake[i].name;

        let stock_product = document.createElement('h3');
        stock_product.textContent = 'stock of product ' + cake[i].stock;

        let price_product = document.createElement('h3');
        price_product.textContent ='price: $' + cake[i].price;

        let btn = document.createElement('button');
        btn.setAttribute('id', 'submits')
        btn.textContent = '+ Add to cart';
        btn.addEventListener('click',add_cart)


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

    for (let i in  drink) {
        let card = document.createElement('div');
        card.classList = 'card';
        card.dataset.index=i


        let image = document.createElement('img');
        image.src = product.img;

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
        card.dataset.index=i


        let image = document.createElement('img');
        image.src = product.img;

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
        btn.addEventListener('click',add_cart)

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

fruits.addEventListener('click', function(){
    displayCardProduct_fruit();
});

// Add event listener to the 'Cakes' button
cakes.addEventListener('click', function() {
    displayCardProduct_cake();
});

// Add event listener to the 'Drinks' button
drinks.addEventListener('click', function() {
    displayCardProduct_drink();
});

// Add event listener to the 'Cosmetics' button
cosmetics.addEventListener('click', function() {
    displayCardProduct_cosmetic();
});

displayCardProduct_fruit();

// ===================================Search_input======================================
let search_input=document.getElementById('search_input').value;
console.log(search_input);




// ================================Add_tocart============================================
function add_cart(event){
    const index = event.target.parentElement.dataset.index
    cart.push(fruit[index]);
    total += fruit[index].price
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(total);
    

}
