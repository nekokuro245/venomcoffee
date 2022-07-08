"use strict";

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
})();


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
        name: 'Lemon Waffles',
        image: './img/Lemon Waffles.jpg',
        description: 'bánh ngon có vị dịu nhẹ dễ ăn và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 3,
        name: 'Cơm sườn',
        image: './img/comsuon.png',
        description: 'Món ăn truyền thống của Việt Nam, ăn là ghiền không thê bỏ lỡ',
        price: '36.500 Đ'
    },
    {
        id: 4,
        name: 'Mì xào bò',
        image: './img/mixaobo.png',
        description: 'Mì xào bò là món ăn được chế biến kết hợp từ nhiều loại thực phẩm khác nhau. Đó là trứng, thịt, rau và gia vị. Vì kết hợp nhiều nguyên liệu nên món ăn này có hương vị thơm ngon, hấp dẫn. Và chế biến nhanh, đơn giản nên được nhiều gia đình lựa chọn cho bữa sáng.',
        price: '36.500 Đ'
    },
    {
        id: 5,
        name: 'Mì xào hải sản',
        image: './img/mixaohaisan.png',
        description: 'Mì xào hải sản là món xào thơm ngon, hấp dẫn và cực kì phù hợp để thay đổi khẩu vị cho bữa cơm gia đình thêm mới lạ.',
        price: '36.500 Đ'
    },
    {
        id: 6,
        name: 'Cà phê sữa đá',
        image: './img/caphesua.png',
        description: 'Cà phê sữa đá là một loại thức uống thông dụng ở Việt Nam. Cà phê sữa đá truyền thống được làm từ cà phê nguyên chất ',
        price: '36.500 Đ'
    },
    {
        id: 7,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 8,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 9,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 10,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 11,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
    {
        id: 12,
        name: 'Trà Ô long',
        image: './img/oolongTea.png',
        description: 'có hình viên tròn, hoàn toàn khác với các loại trà khác. Trà Oolong&nbsp;có độ oxy hoá từ 8-80% có mùi thơm nồng, nước xanh vàng, vị dịu nhẹ dễ uống và có rất nhiều công dụng với sức khỏe.',
        price: '36.500 Đ'
    },
]
let perPage = 6;
let currentPage = 0;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(newCoffee.length / perPage);
const btnNext = $(".menu-today__pagination-next");
const btnPrev = $(".menu-today__pagination-prev");

function getCurrentPage(currentPage){
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
};

function renderNewCoffee() {
    const newCoffees = newCoffee.map(function(item, index) {
        if (index >= start && index < end) 
        {
            return `<li class="menu-today__item col c-4">
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
                </button></li>`;  
        }
    });
    $(".menu-today__list").innerHTML = newCoffees.join('');
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
    const currentPages = $$('.menu-today__number-page li');
    console.log(currentPage);
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            const value = i + 1;
            currentPage = value;
            getCurrentPage(currentPage);
            renderNewCoffee();
        })
    }
}
changePage();


btnNext.addEventListener("click", function() {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    getCurrentPage(currentPage);
    renderNewCoffee(newCoffee);
});

btnPrev.addEventListener("click", function() {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    getCurrentPage(currentPage);
    renderNewCoffee(newCoffee);
});

function renderMenuCoffee() {
    const newCoffees = newCoffee.map(function(item, index) {
        if (index >= start && index < end) 
        {
            return `<li class="menu__item col c-6">
            <div class="menu__img">
                <img src="" alt="">
            </div>
            <div class="menu__title"></div>
            <div class="menu__price"></div>
            </li>`;  
        }
    });
    $(".menu-today__list").innerHTML = newCoffees.join('');
}