<?php
   $data = json_decode(file_get_contents("php://input"));
   $con = mysqli_connect("localhost","root","","3_00_WEEKEND");
   $pwd = "";
   
   for($i= 0 ; $i<strlen($data->password);$i=$i+2){
      $pwd .=$data->password[$i];
   }
   $str = "INSERT INTO users(fullname, email, mobile, password) 
   VALUES ('$data->fullname','$data->email','$data->mobile','$pwd')";
   if($data->email!="" && $data->password!=""){
    $result = mysqli_query($con,$str) or 
    die(json_encode(["class"=>"danger","error"=>mysqli_error($con),"msg"=>"Register Unsuccessful"]));
    echo json_encode(["class"=>"success","error"=>"","msg"=>"Register Successful"]);
   }else{
    echo json_encode(["class"=>"danger","error"=>"Empty Request","msg"=>"Register Unsuccessful"]);
   }
 ?>