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
                item.setAttribute('src', "./assets/images/icon-arrow-down.svg")
            } else {
                item.setAttribute('src', './assets/images/icon-arrow-up.svg')
            }
        });
    });
});