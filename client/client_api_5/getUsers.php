<?php
    $con = mysqli_connect("localhost","root","","3_00_WEEKEND");
    $str = "SELECT * FROM users WHERE status='0'";
    $arr =[];
    $result = mysqli_query($con,$str);
    while($row = mysqli_fetch_assoc($result)){
        array_push($arr,$row);
    }
    echo json_encode($arr);


?>