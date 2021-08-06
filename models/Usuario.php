<?php

    class Usuario extends Conectar{
        
        public function get_login($usuario_correo, $usuario_password){
            $conectar = parent::conexion();
            parent::set_names();

            $sql = "SELECT * from usuarios WHERE usuario_correo = ? and usuario_password = ?";
            $sql = $conectar->prepare($sql); 

            //pasar parametros en orden de envio
            $sql->bindValue(1, $usuario_correo);
            $sql->bindValue(2, $usuario_password);

            //Ejecutar consulta
            $sql->execute();

            return $resultado = $sql->fetchAll();
        }

        public function get_login_gmail($usuario_correo){
            $conectar = parent::conexion();
            parent::set_names();

            $sql = "SELECT * from usuarios WHERE usuario_correo = ?";
            $sql = $conectar->prepare($sql); 

            //pasar parametros en orden de envio
            $sql->bindValue(1, $usuario_correo);

            //Ejecutar consulta
            $sql->execute();

            return $resultado = $sql->fetchAll();
        }

        public function register_usuario($usuario_nombre, $usuario_correo, $usuario_password){
            $conectar = parent::conexion();
            parent::set_names();

            $sql = "INSERT INTO usuarios (usuario_id,usuario_nombre,usuario_correo,usuario_password,usuario_estado) VALUES (NULL, ?, ?, ?, '1');";
            $sql = $conectar->prepare($sql); 

            //pasar parametros en orden de envio
            $sql->bindValue(1, $usuario_nombre);
            $sql->bindValue(2, $usuario_correo);
            $sql->bindValue(3, $usuario_password);

            //Ejecutar consulta
            $sql->execute();

            return $resultado = $sql->fetchAll();
        }

        public function get_correo($usuario_correo){
            $conectar = parent::conexion();
            parent::set_names();

            $sql = "SELECT * from usuarios WHERE usuario_correo = ? AND usuario_estado = '1'";
            $sql = $conectar->prepare($sql); 

            //pasar parametros en orden de envio
            $sql->bindValue(1, $usuario_correo);

            //Ejecutar consulta
            $sql->execute();

            return $resultado = $sql->fetchAll();
        }
    }
?>
