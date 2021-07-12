form.addEventListener('submit', (e) => {
    e.preventDefault();
});


function inputNumber(texto) {
    var tecla = texto.which || texto.keyCode;
    if ((tecla >= 97 && tecla <= 122) || (tecla >= 65 && tecla <= 90) || (tecla === 8)) {
        return true;
    } else {
        return false;
    }
}