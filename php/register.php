<?php
    $user_name = $_POST['user_name'];
    $user_email = $_POST['user_email'];
    $user_numberphone = $_POST['user_numberphone'];
    $user_birthday = $_POST['user_birthday'];
    $user_password = $_POST['user_password'];
    //database connect
    $connect = new mysqli('localhost', 'root', '', 'pjweb');
    if ($connect->connect_error)
    {
        die('Connection Failed : ' .$connect->connect_error);
    }
    else{
        $stmt = $connect->prepare("INSERT INTO register (user_name, user_email, user_numberphone, user_birthday, user_password) value(?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiss", $user_name, $user_email, $user_numberphone, $user_birthday, $user_password);
        $stmt->execute();
        echo 'thanh cong';
        $stmt->close();
        $connect->close();
    }
?>