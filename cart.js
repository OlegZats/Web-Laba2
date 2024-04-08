let cardMain = document.getElementById("bookWrapper");

function getCart() {
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    cardMain.innerHTML = '';

    if (cart.length > 0) {

        for (let i = 0; i < cart.length; i++) {
            let book = document.createElement("div");
            book.classList = "card__main-card card-main";

            let info = document.createElement("div");
            info.className = "card__main-card-info";

            let desc = document.createElement("div");
            desc.classList = "card__main-card-desc card-desc";

            let imageWrapper = document.createElement("div");
            imageWrapper.className = "card__main-card-img";
            
            let image = document.createElement("img");
            image.setAttribute('src', cart[i].image);

            let title = document.createElement("div");
            title.textContent = cart[i].title;
            title.className = "card-desc-title";

            let author = document.createElement("div");
            author.textContent = cart[i].author;
            author.className = "card-desc-subtitle";

            let price = document.createElement("div");
            price.textContent = cart[i].price;
            price.className = "card-desc-price";

            let availability = document.createElement("div");
            availability.textContent = cart[i].availability;
            availability.className = "card-desc-text";

            // let button = document.createElement("a");
            // button.textContent = "Видалити";
            // button.className = "card__main-card-button";
  
            let button = document.createElement("a");
            button.textContent = "Видалити";
            button.className = "card__main-card-button";
            button.onclick = function() { deleteBook(i); }; // Додавання обробника подій

            let counterList = document.createElement("div");
            counterList.textContent = cart[i].counterList;
            counterList.className = "card__main-counter";


            let buttonMinus = document.createElement("button");
            buttonMinus.textContent = "-";
            buttonMinus.className = "card__main-counter-ar";

            let input = document.createElement("input");
            input.textContent = cart[i].counterList;
            input.value = 1;
            input.className = "card__main-counter-in";

            let buttonPlus = document.createElement("button");
            buttonPlus.textContent = "+";
            buttonPlus.className = "card__main-counter-ar";

            

            
            book.appendChild(info);
            info.appendChild(imageWrapper);
            imageWrapper.appendChild(image);
            
            info.appendChild(desc);

            desc.appendChild(title);
            desc.appendChild(author);
            desc.appendChild(price);
            desc.appendChild(availability);
            desc.appendChild(button);

            cardMain.appendChild(book);

            book.appendChild(counterList)

            counterList.appendChild(buttonMinus)
            counterList.appendChild(input)
            counterList.appendChild(buttonPlus)
        }
        
    }
}

getCart();

function deleteBook(index) {
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    cart.splice(index, 1); // Видалення книги з масиву
    localStorage.setItem("cart", JSON.stringify(cart)); // Оновлення локального сховища
    getCart(); // Перезавантаження корзини для відображення змін
}