<?php
    $id = $_REQUEST['id'];
    $con = mysqli_connect("localhost","root","","3_00_WEEKEND");
    $str = "DELETE FROM users WHERE id='$id'";
    $result = mysqli_query($con,$str) or die(json_encode(["class"=>"danger","error"=>mysqli_error($con),"msg"=>"Delete Unsuccessful"]));
    echo json_encode(["class"=>"success","error"=>"","msg"=>"Delete Successful"]);
?>