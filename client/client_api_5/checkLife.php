<?php
    session_id($_REQUEST['id']);
    session_start();
    if(isset($_SESSION['user'])){
    echo json_encode($_SESSION['user']);
    }else{
        echo json_encode(['logout'=>"true"]);
    }
?>