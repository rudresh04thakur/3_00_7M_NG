<?php
   session_start();
   $sessionId = session_id();
   $data = json_decode(file_get_contents("php://input"));
   $con = mysqli_connect("localhost","root","","3_00_WEEKEND");
   if($data->email!="" && $data->password!=""){
    $str = "SELECT * FROM users WHERE email='$data->email' AND password='$data->password'";
    $result = mysqli_query($con,$str) or 
    die(json_encode(["class"=>"danger","error"=>mysqli_error($con),"msg"=>"Login Unsuccessful"]));
    if(mysqli_num_rows($result)>0){
        $_SESSION['user']=mysqli_fetch_assoc($result);
        echo json_encode(["class"=>"success","error"=>"","msg"=>"Login Successful","sessionId"=>$sessionId,"data"=>json_encode(mysqli_fetch_assoc($result))]);
    }else{
        echo json_encode(["class"=>"danger","error"=>"ID or PWD Wrong","msg"=>"Login unsuccessful",'data'=>'']);
    }
   }else{
    echo json_encode(["class"=>"danger","error"=>"Empty Request","msg"=>"Register Unsuccessful",'data'=>'']);
   }
 ?>