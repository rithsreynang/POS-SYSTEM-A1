let addcard = document.querySelector('.AddCard');
let button = document.getElementById('Add-Prooduct');
let sum = 0;
//========Add Card========//
let array = [];
function save(){
    localStorage.setItem("array", JSON.stringify(array));
};

button.addEventListener('click', function(e){
    e.preventDefault()
    let textName = document.getElementById('textName');
    let textPrice = document.getElementById('textPrice');
    let input_Number = document.getElementById('input-Number');
    
    //=====input data to array=====//
    array.push(textName.value);
    array.push(textPrice.value);
    array.push(input_Number.value);
    save()

    if(textName.value !=''&& textPrice.value !="" && input_Number.value !=""){
        let foot_card = document.getElementById('card');

        let card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('id','card');
        
        let span_h3 = document.createElement('span');
        let h3 = document.createElement('h3');
        h3.textContent = textName.value;
    
        let b = document.createElement('b');
        b.textContent = '$'+ textPrice.value;
    
        let image = document.createElement('img');
        image.src = '../Images/delete.jpg';
    
        let inpNumber = document.createElement('span');
        inpNumber.textContent = input_Number.value;
        let addnumber = document.createElement('img');
        addnumber.src = '../Images/add.png' ;
        let reMoveNumber = document.createElement('img');
        reMoveNumber.src = '../Images/remove.png';
        
        span_h3.appendChild(h3);
        card.appendChild(span_h3);
        card.appendChild(b);
        card.appendChild(reMoveNumber);
        card.appendChild(inpNumber);
        card.appendChild(addnumber);
        card.appendChild(image);
        foot_card.appendChild(card)
        addcard.appendChild(foot_card);

        textName.value= ''
        textPrice.value = ''
        input_Number.value = ''
    
        //=====add number======//
        addnumber.addEventListener('click', function(){
            sum+=1;
            inpNumber.textContent=sum;
        });
        
        //=======remove number ======//
        reMoveNumber.addEventListener('click', function(){
            if(sum > 0){
                sum-=1;
                inpNumber.textContent=sum;
            };
        });
        
        //========Delete card==========//
        image.addEventListener('click',function() {
            if (confirm('Are you delete ?')) {
                card.remove();
            };
            
        });
        
    }else{
        alert('You have not filled in correctly');
    };
});


// =====================add Categry==================//

let img_categry = document.getElementById('imgCateg');
img_categry.addEventListener('click',categry);
function categry(){
    let h1ID = document.getElementById('h1');
    h1ID.style.display= '';
    let table = document.querySelector('table');
    table.style.display = '';
    let card_categry = document.getElementById('card-categry');
    card_categry.style.display = ''
    let imgCateg = document.getElementById('img-Categry');
    imgCateg.style.display= '';
    let item_search_categry = document.getElementById('item-search');
    item_search_categry.style.display = '';
    let fooder_bloock = document.querySelector('.fooder-none');
    fooder_bloock.style.display = ''; 

    // ==== none page produce===//
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
    let bloock = document.querySelector('.fooder-none');
    bloock.style.display = 'none'; 
};


//====to add produce===//
let image_cate = document.getElementById('img-Categry');
image_cate.addEventListener('click',addProduce);
function addProduce(){
    let h1ID = document.getElementById('h1');
    h1ID.style.display= 'none';
    let table = document.querySelector('table');
    table.style.display = 'none';
    let card_categry = document.getElementById('card-categry');
    card_categry.style.display = 'none'
    let imgCateg = document.getElementById('img-Categry');
    imgCateg.style.display= 'none';
    let item_search_categry = document.getElementById('item-search');
    item_search_categry.style.display = 'none';

    let food_none = document.querySelector('.fooder-none');
    food_none.style.display = 'none'; 

    // ==== none page produce===//
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

    let fooder_bloock = document.querySelector('.fooder-none');
    fooder_bloock.style.display = ''; 
};


// ===================add table thead tr td============//
let tr_thead = document.querySelector('tr');
let table = document.querySelector('table');

let bnt = document.getElementById('Add-Categry');
bnt.addEventListener('click', addCategry);
function addCategry(){
    let textID = document.getElementById('textID');
    let categoryName = document.getElementById('categoryName');
    let action = document.getElementById('action');


    if(textID.value !=''&& categoryName.value !="" && action.value !=""){
        let tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = textID.value;
        let td2 = document.createElement('td');
        td2.textContent = categoryName.value;
        let td3 = document.createElement('td');
        td3.textContent = action.value;
        let td4 = document.createElement('td');
        let td_delete = document.createElement('img');
        td_delete.src="../Images/delete.jpg";
        td_delete.style.width = '20px';
        td4.appendChild(td_delete);
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4)
        tbody.appendChild(tr);
        table.appendChild(tbody);

        textID.value = '';
        categoryName.value = '';
        action.value = '';

        td_delete.addEventListener('click',function(){
            if (confirm('Are you delete ?')) {
                tr.remove();
            };
        });
    }else{
        alert('You have not filled in correctly');
    };
    
};


// =======Search ======//


