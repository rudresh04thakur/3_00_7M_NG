<?php
   $data = json_decode(file_get_contents("php://input"));
   $con = mysqli_connect("localhost","root","","3_00_WEEKEND");
   $pwd = "";
   
   for($i= 0 ; $i<strlen($data->password);$i=$i+2){
      $pwd .=$data->password[$i];
   }
   $str = "UPDATE users SET fullname ='$data->fullname',
    email='$data->email', mobile='$data->mobile', password='$pwd' WHERE id = '$data->id'";

   if($data->email!="" && $data->password!=""){
    $result = mysqli_query($con,$str) or 
    die(json_encode(["class"=>"danger","error"=>mysqli_error($con),"msg"=>"Update Unsuccessful"]));
    echo json_encode(["class"=>"success","error"=>"","msg"=>"Update Successful"]);
   }else{
    echo json_encode(["class"=>"danger","error"=>"Empty Request","msg"=>"Update Unsuccessful"]);
   }
 ?>