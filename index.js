
function popup1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}


function popup2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}


function popup3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}

function ExpDateRadioInput() {
    let noExpDate = document.getElementById("noExpDate");
    noExpDate.checked = false;

    let expBlock = document.getElementById("expiry-block");
    expBlock.style.visibility = "visible"; 
}

function NoExpDateRadioInput() {
    let hasExpDate = document.getElementById("hasExpDate");
    hasExpDate.checked = false;  
    
    let datePaoBlock = document.getElementById("date-pao-block");
    datePaoBlock.style.visibility = "visible"; 
}

function submitInput() {
    let productName = document.getElementById("pdt-name");
    let openExpDate = document.getElementById("open-exp-date");
    let pao = document.getElementById("pao");

    let newProduct = new Product(productName.value, openExpDate.value, pao.value);
    productList.push(newProduct);

    console.log(productList);
}

const productList = [];

class Product {
    constructor(productName, openExpDate, pao) {
        this.productName = productName;
        this.expiryDate = openExpDate;
        this.productAfterOpening = pao;
    }
}

