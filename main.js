// ===========SEARCH============
document.addEventListener('DOMContentLoaded', function() {

    var searchInput = document.getElementById('search');

    var bookItems = document.querySelectorAll('.main-item', '.item__main');

    searchInput.addEventListener('input', function() {
        var searchTerm = searchInput.value.trim().toLowerCase();

        bookItems.forEach(function(bookItem) {
            var title = bookItem.querySelector('.main-item-title', '.main-description-title').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                bookItem.style.display = 'block';
            } else {
                bookItem.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    var searchInput = document.getElementById('search');

    var bookItems = document.querySelectorAll('.card-main');

    searchInput.addEventListener('input', function() {
        var searchTerm = searchInput.value.trim().toLowerCase();

        bookItems.forEach(function(bookItem) {
            var title = bookItem.querySelector('.card-desc-title').textContent.toLowerCase(); 

            if (title.includes(searchTerm)) {
                bookItem.style.display = 'block';
            } else {
                bookItem.style.display = 'none';
            }
        });
    });
});

// ============CATALOG-FILTER===================
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.header__info-filter');
    const priceList = document.createElement('ul');
    priceList.className = "priceList";
    priceList.innerHTML = `
        <li onclick="sortPrice('asc')">Від нижчої до вищої</li>
        <li onclick="sortPrice('desc')">Від вищої до нижчої</li>
    `;
    priceList.style.display = 'none';
    document.querySelector('.header__info').appendChild(priceList);

    filterButton.addEventListener('click', function() {
        priceList.style.display = priceList.style.display === 'none' ? 'block' : 'none';
    });

    window.sortPrice = function(order) {
        let itemsArray = Array.from(document.querySelectorAll('.body__main-item'));
        itemsArray.sort(function(a, b) {
            let priceA = parseInt(a.querySelector('.main-item-price').textContent.replace('$', ''));
            let priceB = parseInt(b.querySelector('.main-item-price').textContent.replace('$', ''));
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });

        const listContainer = document.querySelector('.body__main-list');
        listContainer.innerHTML = '';
        itemsArray.forEach(function(item) {
            listContainer.appendChild(item);
        });
    };
});


// ==========MODAL-WINDOW=========
let purchaseModal = document.getElementById('purchaseModal');

function openModal() {
  purchaseModal.style.display = 'block';
}

function closeModal() {
  purchaseModal.style.display = 'none';
}
document.querySelectorAll('.buy-book-know').forEach(button => {
  button.addEventListener('click', openModal);
});

if (purchaseModal) {
  document.querySelector('.close').addEventListener('click', closeModal);
}

window.addEventListener('click', function(event) {
  if (event.target == purchaseModal) {
    closeModal();
  }
});

// ===========ADD-TO-CART=================
function addToCart(item) {

  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  if (localStorage.getItem('cart')) {
    
  }

  cart.push(item);

  localStorage.setItem('cart', JSON.stringify(cart));
  counterBook();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    let item = {
      image: this.closest('.main-item').getElementsByTagName("img")[0].src,
      title: this.closest('.main-item').querySelector('.main-item-title').textContent,
      author: this.closest('.main-item').querySelector('.main-item-subtitle').textContent,
      price: this.closest('.main-item').querySelector('.main-item-price').textContent,
      availability: this.closest('.main-item').querySelector('.main-item-availability').textContent
    };

    addToCart(item);
  });
});

// ================= CART COUNTER ==================

function counterBook(){
  let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
  let span = document.getElementById('cartItems');
  if (cart.length > 0) {
      span.textContent = cart.length;
  }else{
      span.textContent = 0;
  }
}
counterBook();