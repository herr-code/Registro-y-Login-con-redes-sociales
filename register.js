var config = {
    apiKey: "AIzaSyBveh5t1CS7tr-sH2SWIiyMdwLuVDhUW7Q",
    authDomain: "login-1d936.firebaseapp.com",
    projectId: "login-1d936",
    storageBucket: "login-1d936.appspot.com",
    messagingSenderId: "913628436045",
    appId: "1:913628436045:web:c7094c737846edf1d06e04",
    measurementId: "G-F8XRNBM0C1"
};

firebase.initializeApp(config);
firebase.analytics();

var auth = firebase.auth();

document.getElementById('register_gmail').addEventListener('click',function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    auth.signInWithPopup(provider)
        .then(function(result){
            var user = result.user;
            // console.log(user);
            console.log(result.user.providerData[0].displayName);//usuario_nombre
            console.log(result.user.providerData[0].email);//usuario_correo
            console.log(result.user.providerData[0].photoURL);

            //mandar datos al controlador
            $.post("controller/usuario.php?op=registro",{usuario_nombre:result.user.providerData[0].displayName,usuario_correo:result.user.providerData[0].email,usuario_password:123456}, function(data){
                if (data==0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro correcto',
                        confirmButtonText: `Ok`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost:80/login/view/Home/', '_self');
                        }
                    });
                } else {
                    Swal.fire(
                        'Observación!',
                        'Correo ya existe',
                        'question',
                    );
                }
            });
        }).catch(function(error){
            console.log(error);
        });
});

document.getElementById('register_github').addEventListener('click',function(){
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user');
    auth.signInWithPopup(provider)
        .then(function(result){
            var user = result.user;
            // console.log(user);
            console.log(result.user.providerData[0].displayName);//usuario_nombre
            console.log(result.user.providerData[0].email);//usuario_correo
            console.log(result.user.providerData[0].photoURL);

            //mandar datos al controlador
            $.post("controller/usuario.php?op=registro",{usuario_nombre:result.user.providerData[0].displayName,usuario_correo:result.user.providerData[0].email,usuario_password:123456}, function(data){
                if (data==0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro correcto',
                        confirmButtonText: `Ok`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost:80/login/view/Home/', '_self');
                        }
                    });
                } else {
                    Swal.fire(
                        'Observación!',
                        'Correo ya existe',
                        'question',
                    );
                }
            });
        }).catch(function(error){
            console.log(error);
        });
});

function init() {
    
}

$(document).ready(function(){
    
});

$(document).on("click", "#btnregistrar", function(){
    var usuario_nombre = $('#nombre').val();
    var usuario_correo = $('#correo').val();
    var usuario_password = $('#password').val();
    var usuario_password1 = $('#password1').val();


    if (usuario_nombre == '' || usuario_correo == '' || usuario_password == '' || usuario_password1 == '') {
        Swal.fire(
            'Error!',
            'Campos vacíos',
            'error'
        );
    }else {

        console.log("pass: ", usuario_password, " pass 2: ", usuario_password1);
        if (usuario_password == usuario_password1) {
            //traer datos con ajax
            $.post("controller/usuario.php?op=registro",{usuario_nombre:usuario_nombre,usuario_correo:usuario_correo, usuario_password:usuario_password}, function(data){
                //Convertir formato texto en JSON
                // data = JSON.parse(data);
                // console.log(data);
                if (data == 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro correcto',
                        confirmButtonText: `Ok`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost:80/login/view/Home/', '_self');
                        }
                    });
                }else {
                    Swal.fire(
                        'Observación!',
                        'Coreo ya existe',
                        'question'
                    );
                }
            });
        }else {
            Swal.fire(
                'Error!',
                'Contraseñas incorrectas',
                'error'
            );
        }
    }
});