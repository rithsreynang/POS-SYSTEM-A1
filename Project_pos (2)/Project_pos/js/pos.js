let data = [
    {name : 'Book', stock : 100, price : '5$'},
    {name : 'pen', stock : 2000, price : '3$'},
    {name : 'Computer', stock : 1000, price : '400$'},
    {name : 'IPhone 15pro', stock : 100, price : '2000$'},
    {name : 'Mouse pad', stock : 100, price : '1$'},
    {name : 'Keyborad', stock : 100, price : '12$'},
    {name : 'Keyborad Light', stock : 100, price : '20$'},
]
let cards;
function save() {
    localStorage.setItem('data', JSON.stringify(data));
}
save()
function load() {
    data = JSON.parse(localStorage.getItem('data'));
}
function booking(event) {
    let addCard = event.target.parentElement;
    let isProducetNoExis = true;
    for (let product of container2.children) {
        if (product.children[0].textContent === addCard.children[0].textContent) {
            if (parseInt(event.target.parentElement.children[1].children[0].textContent)>0) {
                event.target.parentElement.children[1].children[0].textContent = parseInt(event.target.parentElement.children[1].children[0].textContent) - 1;
                product.children[2].children[0].textContent = parseInt(product.children[2].children[0].textContent) + 1;
                product.children[1].children[0].textContent = parseInt(event.target.parentElement.children[2].children[0].textContent) + parseInt(product.children[1].children[0].textContent) + " $";
            }else{
                alert('Here is without product')
            }
            isProducetNoExis = false;
            // console.log(addCard.children[2].children[0].textContent);
        };

    }
    if (isProducetNoExis) {
        cards = document.createElement('div');
        cards.classList = 'cards p-3 mt-3 col-15';
        cards.setAttribute('id', 'addTexte');
        let h3 = document.createElement('h3');
        h3.textContent = addCard.children[0].textContent;
        h3.classList = 'h3';
        let p2 = document.createElement('p');
        p2.textContent = 'Price: ';
        let price = document.createElement("span")
        let span = document.createElement('span');
        price.textContent = addCard.children[2].children[0].textContent
        span.textContent = 'Quantity :';
        let span2 = document.createElement('span');
        span2.textContent = 0;

        span.appendChild(span2)
        p2.appendChild(price)
        cards.appendChild(h3);
        cards.appendChild(p2);
        cards.appendChild(span);
        container2.appendChild(cards);
    }
    // console.log(event.target.children[2].textContent);
}

function diplay_product() {
    for (product of data) {
        let card = document.createElement('div');
        card.classList = 'card p-3 mt-3';
        let h3 = document.createElement('h3');
        h3.textContent = product.name;
        let pStock = document.createElement('p');
        pStock.textContent = 'Number in Stock:';
        let pPrice = document.createElement('p');
        pPrice.textContent = 'Price ';
        let button = document.createElement('button');
        button.textContent = 'Add to Cart';
        let span3 = document.createElement('span');
        span3.textContent = product.price;
        let spnaStock = document.createElement('span');
        spnaStock.textContent = product.stock;

        button.addEventListener('click', booking);

        card.appendChild(h3);
        card.appendChild(pStock);
        card.appendChild(pPrice);
        card.appendChild(button);
        pPrice.appendChild(span3);
        pStock.appendChild(spnaStock);
        displayProduct.appendChild(card);
        // console.log(pStock);

    }
}

load();
let displayProduct = document.querySelector('#displayProduct');
let container2 = document.querySelector('.container2')
// console.log(container2);
diplay_product();