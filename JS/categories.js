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

