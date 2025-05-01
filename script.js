// Modal logic
const openBtn = document.getElementById('openSizeChart');
const modal = document.getElementById('sizeChartModal');
const closeBtn = document.getElementById('closeModal');
const addToCart = document.getElementById('add-to-cart');
const buyNow = document.getElementById('buy-now');


//dynamicaly changing cost for each size
const priceElement = document.getElementById('price');
const sizeElements = document.querySelectorAll('.size');

sizeElements.forEach(size => {
  size.addEventListener('click', () => {
    // remove 'selected' class from all sizes
    sizeElements.forEach(s => s.classList.remove('selected'));

    size.classList.add('selected');
    const newPrice = size.getAttribute('data-price');

    priceElement.textContent = `₹${newPrice}`;
  });
});

addToCart.onclick = () => {
  alert('Added to Cart');
};
buyNow.onclick = () => {
  alert('Buy Now');
};
openBtn.onclick = () => {
  modal.style.display = 'flex';
};
closeBtn.onclick = () => {
  modal.style.display = 'none';
};
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

// Quantity logic
const qtyValue = document.getElementById('qtyValue');
document.getElementById('increaseQty').onclick = () => {
  qtyValue.textContent = parseInt(qtyValue.textContent) + 1;
};
document.getElementById('decreaseQty').onclick = () => {
  if (parseInt(qtyValue.textContent) > 1)
    qtyValue.textContent = parseInt(qtyValue.textContent) - 1;
};

// Size selection
document.querySelectorAll('.size').forEach(size => {
  size.onclick = function() {
    document.querySelectorAll('.size').forEach(s => s.classList.remove('selected'));
    this.classList.add('selected');
  };
});