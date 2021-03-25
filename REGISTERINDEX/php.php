<?php

$conectar=mysql_connect('localhost','root','');

if(!$conectar){
 echo "APOCOIN No Se Pudo Conectar Con El Servidor";

}else {
  $base=mysql_select_db('registro');
  if (!$base){
    echo "APOCOIN No Encontro La Base de Datos";
  }
}
$Nombre=$_POST['Nombre'];
$Apellido=$_POST['Apellido'];
$Usuario=$_POST['Usuario'];
$Email=$_POST['Email'];
$Contraseña=$_POST['Contraseña'];
$RepContraseña=$_POST['RepContraseña'];
$Sexo=$_POST['Sexo'];

$sql="INSERT INTO datos VALUES('$Nombre',
                               '$Apellido',
                               '$Usuario',
                               '$Email',
                               '$Contraseña',
                               '$RepContraseña',
                               '$Sexo')";
$ejecutar=mysql_query($sql);
if(!$ejecutar){
  echo"Hubo Algun Error";
}else {
  echo"Datos Guardados Correctamente"<br><a href='index.html'>Volver</a>"
}



 ?>
