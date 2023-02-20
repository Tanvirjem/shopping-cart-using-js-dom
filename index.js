// For first card

let serial = 0;
document.getElementById('first-card').addEventListener('click', function () {

    // Get the data from html using id
    serial = serial + 1;
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    // console.log(firstElement, productPrice, productQuantity)

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    // console.log(priceTotal, typeof priceTotal);
    displayData(productName, productPrice, productQuantity, priceTotal);
});

// For second card
// Using event object from browser
document.getElementById('second-card').addEventListener('click', function (e) {

    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    serial = serial + 1;
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(productName, productPrice, productQuantity);
    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);

    displayData(pName, pPrice, pQuantity, sumTotal);

});

// Third card
document.getElementById('third-card').addEventListener('click', function () {

    // Get the data from html using id
    serial = serial + 1;
    const productName = document.getElementById('third-title').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;
    // console.log(firstElement, productPrice, productQuantity)

    const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
    // console.log(priceTotal, typeof priceTotal);
    displayData(productName, productPrice, productQuantity, priceTotal);
});

// Fourth card
document.getElementById('fourth-card').addEventListener('click', function () {

    // Get the data from html using id
    serial = serial + 1;
    const productName = document.getElementById('fourth-title').innerText;
    const productPrice = document.getElementById('fourth-price').innerText;
    const productQuantity = document.getElementById('fourth-quantity').innerText;
    // console.log(firstElement, productPrice, productQuantity)

    const priceTotal = parseInt(productPrice) / parseInt(productQuantity);
    // console.log(priceTotal, typeof priceTotal);
    displayData(productName, productPrice, productQuantity, priceTotal);
});

// Last card
document.getElementById('last-card').addEventListener('click', function () {

    serial = serial + 1;
    const productName = document.getElementById('last-title').innerText;
    const productPrice = document.getElementById('first-input').value;
    const productQuantity = document.getElementById('second-input').value;

    if (productPrice == " " || productQuantity == " " || productPrice <= 0 || productQuantity <= 0 || isNaN(productPrice) || isNaN(productQuantity)) {
        return alert('Please inter a valid number');
    }

    const total = parseInt(productPrice) / parseInt(productQuantity);

    displayData(productName, productPrice, productQuantity, total);
});

function displayData(nameOfP, priceOfP, quantityOfP, resultP) {
    // Show the data
    const container = document.getElementById('table-container')

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${nameOfP}</td>
        <td>${priceOfP}</td>
        <td>${quantityOfP}</td>
        <td>${resultP}</td>
        `;
    container.appendChild(tr);
}