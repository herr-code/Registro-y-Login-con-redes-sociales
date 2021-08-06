<?php
session_start();
class Conectar{
    protected $dbh;

    protected function conexion() {
        try {
            $conectar = $this->dbh = new PDO("mysql:local=localhost;dbname=login", "root", "");
            return $conectar;
        } catch (Exception $e) {
            print "¡Error BD!" .  $e->getMessage() . "<br/>";
            die();
        }
    }

    //Asegurar la codificacion utf-8
    public function set_names(){
        return $this->dbh->query("SET NAMES 'utf8'");
    }

    //Aseguramos la ruta principal del proyecto, y evitar salidas inesperadas del usuario
    public function ruta (){
        return "http://localhost:80/login/";
    }
}

?>
