const linkDropdown = document.querySelectorAll('.dropdown1');
const linkDropdown2 = document.querySelectorAll('.dropdown2');

linkDropdown.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const setaDropdown = document.querySelectorAll('.arrow1');
        setaDropdown.forEach((item) => {
            if (item.getAttribute('src') === "./assets/images/icon-arrow-up.svg") {
                item.setAttribute('src', "./assets/images/icon-arrow-down.svg");
                const menuDrop = document.querySelectorAll('.dropdown-itens')
                menuDrop.forEach((item) => {
                    item.classList.remove('ativo');
                })
            } else {
                item.setAttribute('src', './assets/images/icon-arrow-up.svg')
                document.querySelectorAll('.dropdown-itens').forEach((item) => {
                    item.classList.add('ativo');
                })
            }
        });
    });
});

linkDropdown2.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const setaDropdown = document.querySelectorAll('.arrow2');
        setaDropdown.forEach((item) => {
            if (item.getAttribute('src') === "./assets/images/icon-arrow-up.svg") {
                item.setAttribute('src', "./assets/images/icon-arrow-down.svg");
                const menuDrop = document.querySelector('.dropdown-itens-2');
                menuDrop.classList.remove('ativo')
            } else {
                item.setAttribute('src', './assets/images/icon-arrow-up.svg')
                document.querySelector('.dropdown-itens-2').classList.add('ativo');
            }
        });
    });
});

const dropMobile = document.querySelector('.dropdown1-mobile');
const dropMobile2 = document.querySelector('.dropdown2-mobile');

dropMobile.addEventListener('click', function(e) {
    e.preventDefault();
    const setaDropdown = document.querySelectorAll('.arrow1');
    setaDropdown.forEach((item) => {
        if (item.getAttribute('src') == "./assets/images/icon-arrow-up.svg") {
            item.setAttribute('src', "./assets/images/icon-arrow-down.svg");
            document.querySelector('.dropdown-itens-mobile').classList.remove('ativo-mobile');
        } else {
            item.setAttribute('src', './assets/images/icon-arrow-up.svg');
            document.querySelector('.dropdown-itens-mobile').classList.add('ativo-mobile');
        }
    })
});

dropMobile2.addEventListener('click', function(e) {
    e.preventDefault();
    const setaDropdown = document.querySelectorAll('.arrow2');
    setaDropdown.forEach((item) => {
        if (item.getAttribute('src') === "./assets/images/icon-arrow-up.svg") {
            item.setAttribute('src', "./assets/images/icon-arrow-down.svg");
            document.querySelector('.dropdown-itens-2-mobile').classList.remove('ativo-mobile');
        } else {
            item.setAttribute('src', './assets/images/icon-arrow-up.svg');
            document.querySelector('.dropdown-itens-2-mobile').classList.add('ativo-mobile');
        }
    })
    
});


const menuHamburguer = document.querySelector('.icon-menu');

menuHamburguer.addEventListener('click', function() {
    const navBar = document.querySelector('.navbar');
    const liPrincipal = document.querySelector('.li-principal');
    const imgHamburguer = document.querySelectorAll('.img-menu');
    const header = document.querySelector('header');
    const navMobile = document.querySelector('.mobile');
    navBar.classList.toggle('ativar');
    liPrincipal.classList.toggle('ativar');
    header.classList.toggle('ativar');
    navMobile.classList.toggle('ativar');
    imgHamburguer.forEach((item) => {
        if(item.getAttribute('src') === "./assets/images/icon-menu.svg") {
            item.setAttribute('src', "./assets/images/icon-close-menu.svg")
        } else {
            item.setAttribute("src", "./assets/images/icon-menu.svg")
        }
    })
});