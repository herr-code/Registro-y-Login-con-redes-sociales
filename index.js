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

document.getElementById('login_gmail').addEventListener('click',function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    auth.signInWithPopup(provider)
        .then(function(result){
            var user = result.user;
            // console.log(user);
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

            //mandar datos al controlador
            $.post("controller/usuario.php?op=accesogmail",{usuario_correo:result.user.providerData[0].email}, function(data){
                if (data==0) {
                    $('#lblerror').hide();
                    $('#lblmensaje').hide();
                    $('#lblregistro').show();
                } else {
                    window.open('http://localhost:80/login/view/Home/', '_self');
                }
            });
        }).catch(function(error){
            console.log(error);
        });
});

document.getElementById('login_github').addEventListener('click',function(){
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user');
    auth.signInWithPopup(provider)
        .then(function(result){
            var user = result.user;
            console.log(user);
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

            //mandar datos al controlador
            $.post("controller/usuario.php?op=accesogmail",{usuario_correo:result.user.providerData[0].email}, function(data){
                if (data==0) {
                    $('#lblerror').hide();
                    $('#lblmensaje').hide();
                    $('#lblregistro').show();
                } else {
                    // window.open('http://localhost:80/login/view/Home/', '_self');
                }
            });
        }).catch(function(error){
            console.log(error);
        });
});

function init() {
    
}

$(document).ready(function(){
    $('#lblmensaje').hide();
    $('#lblerror').hide();
    $('#lblregistro').hide();
});

$(document).on("click", "#btnlogin", function(){
   
    var usuario_correo = $('#correo').val();
    var usuario_password = $('#password').val();

    if (usuario_correo == '' || usuario_password == '') {
        console.log("Vacios");
        $('#lblmensaje').show();
        $('#lblerror').hide();
    }else {
        //traer datos con ajax
        $.post("controller/usuario.php?op=acceso",{usuario_correo:usuario_correo, usuario_password:usuario_password}, function(data){
            //Convertir formato texto en JSON
            // data = JSON.parse(data);
            // console.log(data);
            if (data == 0) {
                $('#lblerror').show();
                $('#lblmensaje').hide();
            }else {
                window.open('http://localhost:80/login/view/Home/', '_self');
            }
        });
    }
});