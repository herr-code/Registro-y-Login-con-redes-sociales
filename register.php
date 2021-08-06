<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link href="public/img/logo/logo.png" rel="icon">
  <title>RuangAdmin - Register</title>
  <link href="public/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="public/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="public/css/ruang-admin.min.css" rel="stylesheet">

</head>

<body class="bg-gradient-login">
  <!-- Register Content -->
  <div class="container-login">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">[ Regístrate ]</h1>
                  </div>
                  <form>
                    <div class="form-group">
                      <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese nombre">
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" id="correo" name="correo" aria-describedby="emailHelp"
                        placeholder="Ingrese email">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" id="password" name="password" placeholder="Ingrese contraseña">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" id="password1" name="password1" placeholder="Confirme contraseña">
                    </div>
                    <div class="form-group">
                      <button type="button"  id="btnregistrar" class="btn btn-primary btn-block">Registrarse</button>
                    </div>
                    <hr>
                    <a href="#" class="btn btn-danger btn-block" id="register_gmail">
                      <i class="fab fa-google fa-fw"></i> Login with Gmail
                    </a>
                    <a href="#" class="btn btn-dark btn-block" id="register_github">
                      <i class="fab fa-github fa-fw"></i> Login with Github
                    </a>
                  </form>
                  <hr>
                  <div class="text-center">
                    ¿Ya tienes una cuenta?<a class="font-weight-bold small" href="index.php">Acceso</a>
                  </div>
                  <div class="text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Register Content -->
  <script src="public/vendor/jquery/jquery.min.js"></script>
  <script src="public/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="public/vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="public/js/ruang-admin.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-auth.js"></script>
  <script src="register.js"></script>
</body>

</html>