// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let quantity = product.querySelector(".quantity input").value;
  console.log(quantity);
  let price = Number.parseFloat(product.querySelector(".price span").innerText);
  console.log(price);

  const subtotal = price * quantity;

  product.querySelector(".subtotal span").innerText = subtotal;

  return subtotal;
}


/*const quantityInput = document.querySelector('#quantity');
quantityInput.addEventListener('change', updateSubtotal(1))*/

// ITERATION 2

function calculateAll() {

  const singleProduct = document.querySelectorAll('.product');
  //const products = [...singleProduct];

  let total = 0;

  singleProduct.forEach((product) => {
    const price = updateSubtotal(product);
    total += price;
  });

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
}





// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  var tr = target.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  console.log('The target in remove is:', target);
}



// ITERATION 5

function createProduct(event) {
  let productName = document.querySelector('tr.create-product td input[type="text"]');
  let productPrice = document.querySelector('tr.create-product td input[type="number"]');

  //Guards
  if (productName.value === '') throw "No se ha encontrado un nombre para el producto.";
  if (productPrice.value == 0) throw "El nuevo producto no dispone de precio asignado.";

  const target = event.currentTarget;
  console.log(target);
  const oldProduct = document.querySelector('.product');
  const newProd = oldProduct.cloneNode(true);

  newProd.setAttribute('id', document.querySelectorAll('.product').length + 1);
  newProd.querySelector('.name span').innerText = productName.value;
  newProd.querySelector('.price span').innerText = productPrice.value;
  newProd.querySelector('td.action button').addEventListener('click', removeProduct);

  productName.value = '';
  productPrice.value = 0;

  oldProduct.parentNode.appendChild(newProd);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll(".action button").forEach(o => o.addEventListener('click', removeProduct));
  //document.querySelectorAll(".quantity input").forEach(o=>o.addEventListener('change', calculateAll));
  //... your code goes here

  const newProduct = document.getElementById('create');
  newProduct.addEventListener('click', createProduct);

});