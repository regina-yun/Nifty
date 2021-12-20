
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

    let datePaoBlock = document.getElementById("date-pao-block"); 
    datePaoBlock.style.visibility = "hidden";
}

function NoExpDateRadioInput() {
    let hasExpDate = document.getElementById("hasExpDate");
    hasExpDate.checked = false;  
    
    let datePaoBlock = document.getElementById("date-pao-block");
    datePaoBlock.style.visibility = "visible"; 
   
    let expBlock = document.getElementById("expiry-block");
    expBlock.style.visibility = "hidden";

}

const productList = [];

class Product {
    constructor(productName, expiryDate) {
        this.productName = productName;
        this.expiryDate = expiryDate;
    }
}

function submitInput() {

    let productName = document.getElementById("pdt-name");

    if (productName.value === "") {

        alert('There is no input. Please fill in the Product Name.');
        return;
    }

    let expiryDate = "";

    let hasExpDate = document.getElementById("hasExpDate");
    let noExpDate = document.getElementById("noExpDate");

    if (hasExpDate.checked) {
        let expDate = document.getElementById("exp-date");
        let d = new Date(expDate.value);
        expiryDate = d.toDateString();
    }
    else if (noExpDate.checked) {
        let openDate = document.getElementById("open-date");
        let pao = document.getElementById("pao");

        if (pao.value === "0") {

            alert("Invalid Selection.");
            return;
        }

        let d = new Date(openDate.value);
        d.setMonth(d.getMonth() + parseInt(pao.value));

        expiryDate = d.toDateString();
    }

    if (expiryDate !== "") {
        let newProduct = new Product(productName.value, expiryDate);
        productList.push(newProduct);

        addRow(newProduct);

        resetInput();
    }
}

function resetInput() {

    let productName = document.getElementById("pdt-name");
    let hasExpDate = document.getElementById("hasExpDate");
    let noExpDate = document.getElementById("noExpDate");
    let expDate = document.getElementById("exp-date");
    let dateOfOpening = document.getElementById('open-date');
    let pao = document.getElementById("pao");

    productName.value = "";
    hasExpDate.checked = false;
    noExpDate.checked = false;
    expDate.valueAsDate = new Date();
    dateOfOpening.valueAsDate = new Date();
    pao.value = "0";

    let expBlock = document.getElementById("expiry-block");
    expBlock.style.visibility = "hidden";

    let datePaoBlock = document.getElementById("date-pao-block"); 
    datePaoBlock.style.visibility = "hidden";

}

function addRow(newProduct) {

    let table = document.getElementById("table");
    let row = table.insertRow(-1);
   
    let cellProductName = row.insertCell(0);
    let cellExpiryDate = row.insertCell(1);
    let cellBlank = row.insertCell(2);

    cellProductName.innerHTML = newProduct.productName;
    cellExpiryDate.innerHTML = newProduct.expiryDate;
    cellBlank.innerHTML = '<i class="fa fa-trash" onClick="deleteRow(this)"/>'
}

function deleteRow(obj) {
    let index = obj.parentNode.parentNode.rowIndex;
    let table = document.getElementById("table");
    table.deleteRow(index);
}

