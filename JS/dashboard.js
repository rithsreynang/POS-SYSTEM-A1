
var myData = JSON.parse(localStorage.getItem('deta_Product'));
let deta_Product = JSON.parse(localStorage.getItem('myData'));
if (localStorage.getItem(myData) != null){
    deta_Product = JSON.parse(localStorage.getItem('deta_Product'))
}
let cartstorage = JSON.parse(localStorage.getItem(deta_Product));

let sumNumber = 0;
for(go of myData){
    sumNumber += parseInt(go.print);
    let h4 = document.querySelector('h4');
    h4.textContent = sumNumber;

};

//=========Date Category===========//
var Data = JSON.parse(localStorage.getItem('deta_Category'));
let deta_Category = JSON.parse(localStorage.getItem('Data'));
if (localStorage.getItem(Data) != null){
    deta_Category = JSON.parse(localStorage.getItem('deta_Category'))
}
let cartstorag = JSON.parse(localStorage.getItem(deta_Category));

let sum = 0;
for(so of Data){
    sum = so.Id;
    let h = document.getElementById('h4');
    h.textContent = sum;

};


