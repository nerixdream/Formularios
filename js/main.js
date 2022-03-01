const btnSubscribe = document.querySelector('.btn');
const btnSpan = document.querySelector('.btn span');
const email = document.querySelector('.email');
const alerta = document.querySelector('.alerta');

btnSubscribe.addEventListener('click', function (e) {
    e.preventDefault();
    if (email.value == '') {
        alerta.innerHTML = 'Este campo es obligatorio';
        alerta.classList.add('visible');
        setTimeout(() => {
            alerta.classList.remove('visible');
        }, 3000);
    } else if (email.value.indexOf('@') > -1) {
        btnSpan.style.transition = '3s ease-in-out';
        btnSpan.style.width = '100%';
        if ((btnSpan.style.width = '100%')) {
            setTimeout(() => {
                btnSubscribe.innerHTML = 'Successful';
                btnSubscribe.style.background = '#435d4d';
                setTimeout(() => {
                    btnSubscribe.innerHTML = 'Subscribe';
                    email.value = '';
                    btnSubscribe.style.background = 'crimson';
                }, 2000);
            }, 3200);
        }
    } else {
        alerta.innerHTML = 'El correo debe tener una @';
        alerta.classList.add('visible');
        setTimeout(() => {
            alerta.classList.remove('visible');
        }, 3000);
    }
});
