function validForm() {
    var email = document.getElementById('email').value;

    if (email.trim() === '') {
        alert('Campo vazio, introduza o seu email, por favor!');
        return false;
    }

    alert('Informação enviada com sucesso!');
    return true; 

}

document.getElementById('information-form'). addEventListener('submit', function(event) {
    event.preventDefault();
    validForm();
});