<?php
session_start(); // ①

// Conexión
$enlace = mysqli_connect("localhost","root","","usuarios");
if (!$enlace) die("Error de conexión: ".mysqli_connect_error());

// Procesamiento del formulario
if ($_SERVER["REQUEST_METHOD"]==="POST" && isset($_POST['Ingresar'])) {
    $correo    = mysqli_real_escape_string($enlace, trim($_POST['correo']));
    $contrasena= mysqli_real_escape_string($enlace, $_POST['contrasena']);

    $sql  = "SELECT nombre_apellido, password FROM registro WHERE correo='$correo' LIMIT 1";
    $res  = mysqli_query($enlace, $sql);

    if ($res && mysqli_num_rows($res)==1) {
        $row = mysqli_fetch_assoc($res);

        // Comparación texto plano
        if ($contrasena === $row['password']) {
            // ② Guardamos el nombre en la sesión
            $_SESSION['usuario'] = $row['nombre_apellido'];
            header("Location: mi_cuenta.html");
            exit;
        } else {
            echo "<script>alert('Contraseña incorrecta.'); history.back();</script>";
            exit;
        }
    } else {
        echo "<script>alert('No existe una cuenta con ese correo.'); history.back();</script>";
        exit;
    }
}

mysqli_close($enlace);
?>
