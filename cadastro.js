listaUsuarios = [];

document.querySelector('input[type=submit]')
.addEventListener('click', function(){
    var nomeUsuario = document.querySelector('input[name=name]').value;
    var emailUsuario = document.querySelector('input[name=email]').value;
    var confirmaEmailUsuario = document.querySelector('input[name=confirmaEmail]').value;
    var cpf = document.querySelector('input[name=cpf]').value;
    var password = document.querySelector('input[name=password]').value;
    var confirmaPasswordUsuario = document.querySelector('input[name=confirmaPassword]').value;

    //VERIFICAR EMAIL
    function verificarEmail(){
        if(emailUsuario != confirmaEmailUsuario){
            alert('Os dois enderecos de email nao condizem');
            return false;
        }else{
        return true;
        }
    }
    //verificar password
    function verificarPassword(){
        if(password != confirmaPasswordUsuario){
            alert('passwords nao condizem');
            return false;
        }else{
            return true;
        }
    }
    verificarEmail();
    verificarPassword();    

// alert(nomeUsuario);
// alert(emailUsuario);
// alert(confirmaEmailUsuario);
// alert(cpf);
// alert(password);
// alert(confirmaPasswordUsuario);

listaUsuarios.push({
    name: nomeUsuario,
    email: emailUsuario,
    cpf:cpf,
    password:passwordVerificada,
})

})