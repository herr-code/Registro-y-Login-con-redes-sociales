<?php
    require_once("../config/conexion.php");
    require_once("../models/Usuario.php");

    $usuario = new Usuario();

    switch ($_GET["op"]) {
        case "acceso":
            $datos = $usuario->get_login($_POST["usuario_correo"], $_POST["usuario_password"]);

            //verificar que $datos obtuvo datos correctamente
            if (is_array($datos) == true and count($datos)>0) {
                // echo json_encode($datos);
                echo "1";
            }else{
                // echo json_encode("Error");
                echo "0";
            }
            break;
        
        case "accesogmail":
            $datos = $usuario->get_login_gmail($_POST["usuario_correo"]);
    
            //verificar que $datos obtuvo datos correctamente
            if (is_array($datos) == true and count($datos)>0) {
            // echo json_encode($datos);
                echo "1";
            }else{
                // echo json_encode("Error");
                echo "0";
            }
            break;

        case "registro":
            $datos = $usuario->get_correo($_POST["usuario_correo"]);

            //get_correo verifica si ya existe el email en la bd
            if (is_array($datos) == true and count($datos)>0) {
                echo "1";
            } else {
                $usuario->register_usuario($_POST["usuario_nombre"], $_POST["usuario_correo"], $_POST["usuario_password"]);
                echo "0";
            }
            break;
    }
?>