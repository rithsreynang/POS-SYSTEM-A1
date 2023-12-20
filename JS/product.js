let deta_Product = [];
function saveStorage() {
    localStorage.setItem('deta_Product', JSON.stringify(deta_Product));
    cardProduct();
};
function getStorage() {
    if (JSON.parse(localStorage.getItem('deta_Product')) != null) {
        deta_Product = JSON.parse(localStorage.getItem('deta_Product'));
        cardProduct();
    };
};
sum = 0 ;

let text_name = document.getElementById('textName');
let input_Number = document.getElementById('input-Number');
let text_Price = document.getElementById('textPrice');

let buttonProduct = document.getElementById('Add-Prooduct');
buttonProduct.addEventListener('click', Add_Product);
function Add_Product(){
    let cards = {
        name: text_name.value,
        number: input_Number.value,
        print: text_Price.value
    };
    deta_Product.push(cards);
    
    text_name.value = '';
    input_Number.value = '';
    text_Price.value = '';
    saveStorage();
    
};

let tbody = document.createElement('tbody');
let tb = document.querySelector('#table');
function cardProduct(){
    tbody.innerHTML = '';
    for(addCard of deta_Product){
        let trProduct = document.createElement('tr');
        let tdProduct1 = document.createElement('td');
        tdProduct1.textContent = addCard.name;
        let tdProduct2 = document.createElement('td');
        tdProduct2.textContent = addCard.number + '$';
        tdProduct2.style.color = 'red'
        let tdProduct3 = document.createElement('td');
        tdProduct3.textContent = addCard.print;

        let tdProduct5 = document.createElement('td')
        let imgAdd = document.createElement('img');
        imgAdd.style.width = '25px';
        imgAdd.src = "../Images/add.png";
        imgAdd.addEventListener('click', function(){
            sum+=1;
            tdProduct3.textContent=sum;
        });

        tdProduct5.appendChild(imgAdd);
        let tdProduct6 = document.createElement('td');
        let imgRemovr = document.createElement('img');
        imgRemovr.style.width = '20px';
        imgRemovr.src = "../Images/remove.png";
        imgRemovr.addEventListener('click', function(){
            if(sum > 0){
                sum-=1;
                tdProduct3.textContent=sum;
            };
        });
        tdProduct6.appendChild(imgRemovr);

        let tdProduct4 = document.createElement('td');
        let deleteProduct = document.createElement('img');
        deleteProduct.style.width = '20px';
        deleteProduct.src="../Images/delete.png";
        tdProduct4.appendChild(deleteProduct);
        deleteProduct.addEventListener('click',delete_Product);
            
        trProduct.appendChild(tdProduct1);
        trProduct.appendChild(tdProduct2);
        trProduct.appendChild(tdProduct6);
        trProduct.appendChild(tdProduct3);
        trProduct.appendChild(tdProduct5);
        trProduct.appendChild(tdProduct4);
        
        tbody.appendChild(trProduct);
        tb.appendChild(tbody);   
    };
};

//========Delete cardProduct==========//
function delete_Product(e){
    let datas = JSON.parse(localStorage.getItem('deta_Product'));
    let product = e.target.parentElement.parentElement;
    for (let i = 0; i<datas.length; i++){
        if (datas[i].name === product.children[0].textContent && datas[i].print === product.children[3].textContent){
            datas.splice(i, 1)
            localStorage.setItem('deta_Product', JSON.stringify(datas));
            window.location.reload();
        };
    };
};

//======research Product=======//
let inputProduct = document.querySelector('#searchbar');
inputProduct.addEventListener('input', searchName);
function searchName(){
    let result = inputProduct.value.toLowerCase();
    for (let user of tbody.children){
        if (user.firstElementChild.textContent.toLowerCase().includes(result)){
            user.style.display = '';
        }else{
            user.style.display = 'none';
        };
    };
};


//=======deply button=====//
let img = document.getElementById('imgCateg')
img.addEventListener('click',categ);
function categ(){
    let h1ID = document.getElementById('h1');
    h1ID.style.display= '';
    let item_search = document.getElementById('item-search');
    item_search.style.display= '';
    let img_Categry =document.getElementById('img-Categry');
    img_Categry.style.display= '';
    let card_categry = document.getElementById('card-categry');
    card_categry.style.display= '';
    let table_Product = document.getElementById('tableProduct');
    table_Product.style.display= '';

    let Total = document.getElementById('Total');
    Total.style.display= 'none';
    let fooder_Card = document.querySelector('.fooderCard');
    fooder_Card.style.display= 'none';
    let card_foot = document.getElementById('card');
    card_foot.style.display= 'none';
    let img_Categ = document.getElementById('imgCateg');
    img_Categ.style.display= 'none';
    let im = document.getElementById('im');
    im.style.display = 'none';

};

let image_cate = document.getElementById('img-Categry');
image_cate.addEventListener('click',categry);
function categry(){
    
    let h1ID = document.getElementById('h1');
    h1ID.style.display= 'none';
    let item_search = document.getElementById('item-search');
    item_search.style.display= 'none';
    let img_Categry =document.getElementById('img-Categry');
    img_Categry.style.display= 'none';
    let card_categry = document.getElementById('card-categry');
    card_categry.style.display= 'none';
    let table_Product = document.getElementById('tableProduct');
    table_Product.style.display= 'none';

    let Total = document.getElementById('Total');
    Total.style.display= '';
    let fooder_Card = document.querySelector('.fooderCard');
    fooder_Card.style.display= '';
    let card_foot = document.getElementById('card');
    card_foot.style.display= '';
    let img_Categ = document.getElementById('imgCateg');
    img_Categ.style.display= '';
    let im = document.getElementById('im');
    im.style.display = '';
};

//============deta Categoage===========//
let deta_Category = [];
function save() {
    localStorage.setItem('deta_Category', JSON.stringify(deta_Category));
    addcardcategry();
};
function get() {
    if (JSON.parse(localStorage.getItem('deta_Category')) != null) {
        deta_Category = JSON.parse(localStorage.getItem('deta_Category'));
        addcardcategry();
    };
};

let category_Name = document.getElementById('categoryName');
let action = document.getElementById('action');

let Add_Categry = document.getElementById('Add-Categry');
Add_Categry.addEventListener('click', createCard);
function createCard() {
    let uniqesID = localStorage.getItem('id');
    if (uniqesID === null) {
        uniqesID = 1;
        localStorage.setItem('id', JSON.stringify(uniqesID));
    } else {
        uniqesID = parseInt(uniqesID) + 1;
        localStorage.setItem('id', JSON.stringify(uniqesID));
    };
    let cardcategry = {
        Id: uniqesID,
        name: category_Name.value,
        Taste: action.value
    };
    category_Name.value ='';
    action.value ='';
    deta_Category.push(cardcategry);
    save();
};

let tbody_Category = document.createElement('tbody');
let table_category = document.querySelector('table');
function addcardcategry(){
    tbody_Category.innerHTML = '';
    // tbody_Category  = document.createElement('tbody');
    for(categ of deta_Category){
        let trCategory = document.createElement('tr');
        let tdCategory1 = document.createElement('td');
        tdCategory1.textContent = categ.Id;
        let tdCategory2 = document.createElement('td');
        tdCategory2.textContent = categ.name;
        let tdCategory3 = document.createElement('td');
        tdCategory3.textContent = categ.Taste;
        let tdCategory4 = document.createElement('td');
        let Cate = document.createElement('img');
        Cate.style.width = '20px';
        Cate.src="../Images/delete.png";
        Cate.addEventListener('click',chick_category) 
        tdCategory4.appendChild(Cate);

        trCategory.appendChild(tdCategory1);
        trCategory.appendChild(tdCategory2);
        trCategory.appendChild(tdCategory3);
        trCategory.appendChild(tdCategory4);
        
        tbody_Category.appendChild(trCategory);
        table_category.appendChild(tbody_Category);
        
    };
};

// ========Delete card==========//
function chick_category(e){
    let category = JSON.parse(localStorage.getItem('deta_Category'));
    let cate = e.target.parentElement.parentElement;
    for (let i = 0; i < category.length; i++){
        if (category[i].name === cate.children[1].textContent && category[i].Taste === cate.children[2].textContent){
            category.splice(i, 1)
            localStorage.setItem('deta_Category', JSON.stringify(category));
            window.location.reload();
        };
    };
};

//======research Category=======//
let inputCategpry = document.querySelector('#search-Categry');
inputCategpry.addEventListener('input', searchNameCategory);
function searchNameCategory(){
    let resul = inputCategpry.value.toLowerCase();
    for (let users of tbody_Category.children){
        if (users.children[1].textContent.toLowerCase().includes(resul)){
            users.style.display = '';
        }else{
            users.style.display = 'none';
        };
    };
};

get();
getStorage();