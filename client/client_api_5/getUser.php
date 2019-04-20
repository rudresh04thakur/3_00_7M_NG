<?php
    $id = $_REQUEST['id'];
    $con = mysqli_connect("localhost","root","","3_00_WEEKEND");
    $str = "SELECT * FROM users WHERE id='$id'";
    $result = mysqli_query($con,$str) or die(json_encode(["class"=>"danger","error"=>mysqli_error($con),"data"=>"","msg"=>"View Unsuccessful"]));
    echo json_encode(
    ["class"=>"success",
    "data"=>mysqli_fetch_assoc($result),
    "error"=>"",
    "msg"=>"View Successful"]
);
?>