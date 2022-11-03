<?php
    $name = $_POST['name'];
    $password = $_POST['password'];
    //database connect
    $connect = new mysqli('localhost', 'root', '', 'pjweb');
    if ($connect->connect_error)
    {
        die('Connection Failed ; '.$connect->connect_error);
    }
    else
    {
        //statement
        $stmt = $connect->prepare("INSERT INTO loginweb (name_user, password_user) value(?, ?)");
        $stmt->bind_param("ss", $name, $password);
        $stmt->execute();
        include 'index.html';
        $stmt->close();
        $connect->close();
    }
?>