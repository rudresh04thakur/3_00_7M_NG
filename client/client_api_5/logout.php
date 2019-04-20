<?php
    session_id($_REQUEST['id']);
    session_start();
    //echo $_REQUEST['id'];
    session_destroy() or die(json_encode(["logut"=>"false"])) ;
    echo json_encode(['logout'=>"true"])
?>
