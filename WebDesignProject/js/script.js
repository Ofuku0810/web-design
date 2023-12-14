let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let searchInput = document.querySelector('.search-form--input');
let cartItem = document.querySelector('.cart-items-container');

// Product details page script starts
let mainImage = document.getElementById("mainImage");
let smallerImage = document.getElementsByClassName("image");
smallerImage[0].onclick = () =>{
    mainImage.src = smallerImage[0].src;
}
smallerImage[1].onclick = () =>{
    mainImage.src = smallerImage[1].src;
}
smallerImage[2].onclick = () =>{
    mainImage.src = smallerImage[2].src;
}
// Product details page script ends

//category page starts
const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');
//add
const allBtn = document.getElementById('all');
const newBtn = document.getElementById('new');
const specialBtn = document.getElementById('specials');
const bestsellerBtn = document.getElementById('best-sellers');

window.addEventListener('DOMContentLoaded', () => {
    allBtn.classList.add('active-btn');
    showAllItems();
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn) {
    resetActiveBtn();
    btn.classList.add('active-btn');

    if (btn === allBtn) {
        showAllItems();
    } else {
        const category = btn.id;
        allFilterItems.forEach((item) => {
            if (item.classList.contains('all') && item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
}

function showAllItems() {
    allFilterItems.forEach((item) => {
        item.style.display = "block";
    });
}

function resetActiveBtn() {
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

// window.addEventListener('DOMContentLoaded', () => {
//     allFilterBtns[0].classList.add('active-btn');
// });

// allFilterBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         showFilteredContent(btn);
//     });
// });

// function showFilteredContent(btn){
//     allFilterItems.forEach((item) => {
//         if(item.classList.contains(btn.id)){
//             resetActiveBtn();
//             btn.classList.add('active-btn');
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }

// function resetActiveBtn(){
//     allFilterBtns.forEach((btn) => {
//         btn.classList.remove('active-btn');
//     });
// }
//category page ends

document.querySelector('#menu-btn').onclick = () => {
    console.log('Menu button clicked!');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

//Product detail add to cart button
document.querySelector('#btn_addtocart').onclick = () => {
    console.log('Menu button clicked!');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.toggle('active');
}

searchInput.addEventListener('input', () => {
    let searchTerm = searchInput.value.toLowerCase();
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        let boxTitle = box.querySelector('h3').innerText.toLowerCase();

        if (boxTitle.includes(searchTerm)) {
            box.style.display = 'block'; // show item
        } else {
            box.style.display = 'none'; // hide item
        }
    });
});


document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchButton = document.querySelector('#search-btn');

if (searchButton) {
    searchButton.onclick = () => {
        searchForm.classList.toggle('active');
        let productsSection = document.getElementById('menu');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Products section not found.');
        }
    }
} else {
    console.error('Element with ID "search-btn" not found.');
}


document.querySelector('#shipping-btn').onclick = toggleShippingOptions;

function toggleShippingOptions() {
    var shippingOptions = document.getElementById('shipping');
    shippingOptions.classList.toggle('hidden');
}


