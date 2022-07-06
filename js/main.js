
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const arr = [ "đá...", "sữa đá...", "capuchino..."];
const speed = 280;
let index = 0;
let count = 0;
let currentText = '';
let letter = '';
let countSlider = 0;

;(function type() {
    if (count === arr.length) {
        count = 0;
    }
    currentText = arr[count];
    letter = currentText.slice(0, ++index);

    $(".header__search-input").setAttribute("placeholder", "cà phê " + letter);
    if (letter.length === currentText.length) { 
        count++;
        index = 0;
    }
    setTimeout(type, speed);
}   
)()

// ;(function sliding() {
//     let x = document.getElementsByClassName("img1");
//     for (let i = 0; i < x.length; ++i) { 
//         x[i].style.display = "none";
//     }
//     countSlider++;
//     if (countSlider > x.length) {countSlider = 1}
//     x[countSlider-1].style.display = "block";
//     setTimeout(sliding, 6000);
// })()

;(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000,
            disableinteraction: false
        },
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})()


let newCoffee = [
    {
        id: 1,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 2,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 3,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 4,
        name: 'Trà Ô long',
        image: './img/smoothIcedCoffee.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 5,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 6,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
]

let perPage = 3;
let currentPage = 0;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(newCoffee.length / perPage);
const btnNext = $(".menu-today__pagination-next");
const btnPrev = $(".menu-today__pagination-prev");

function renderNewCoffee() {
    const newCoffees = newCoffee.map(function(item, index) {
        if (index >= start && index < end) {
            return `
            <li class="menu-today__item">
                <div class="menu-today__item-img">
                    <img src="${item.image}" alt="">
                </div>
                <div class="menu-today__item-name">
                    <h2>${item.name}</h2>
                </div>
                <div class="menu-today__item-desc">
                    <p>${item.description}</p>
                </div>
                <div class="menu-today__item-price">
                    <p>${item.price}</p>
                </div>
                <button class="menu-today__item-btn">
                    Mua ngay
                </button>
            </li>
            `;  
        }
    });
    $(".menu-today__list").innerHTML = newCoffees;
}
renderNewCoffee();

function renderListPage() {
    let number = "";
    number += `<li class="active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) { 
        number += `<li><a>${i}</a></li>`;
    }
    $('.menu-today__number-page').innerHTML = number;
}
renderListPage();

function changePage() {
    const currentPage = $$('.menu-today__number-page li');
    console.log(currentPage);
    for (let i = 0; i < currentPage.length; i++) {
        
    }
}
changePage();


btnNext.addEventListener("click", function() {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    renderNewCoffee(newCoffee);
});

btnPrev.addEventListener("click", function() {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    renderNewCoffee(newCoffee);
});

