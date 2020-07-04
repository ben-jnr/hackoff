<?php

$str1 = $_GET['str1'];
$str2 = $_GET['str2'];
if($str1 and $str2)

{ if ($str1 !== $str2 and

hash("md5", $salt.$str1) === hash("md5", $salt.$str2))

{ echo "<script>alert('hackifoff{m0d3rN_pr0b13m5_r3Quir3_m0d3rN_s0lu7i0n5}')</script>'"; 
echo "<script>document.location='check.php';</script>";
}

else

{ echo "<script>alert('Authentication failed ! Ready t0 give up ?');</script>";
  echo "<script>document.location='check.php';</script>";	
 }

exit(); }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHAR3NTH</title>
    <!-- CSS only -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</head>
<center>
<body style="background-color:black;">
    <form action="check.php" method="get" style="padding-top: 15%;" id="vortexLogin">
	<div class="text-center">
		<h2 class="text-muted mb-3">PHAR3NT</h2>
	</div>
	<div class="col-lg-4 p-2">
  	<input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" name="str1" placeholder="Mr.Blue's password">
	<input type="text" class="form-control mt-2" aria-label="Username" aria-describedby="addon-wrapping" name="str2" placeholder="Mr.Green's password">
	</div>
        <button type="submit" class="btn col-lg-3 btn-block btn-danger mt-4 p-2" value="submit" form="vortexLogin">LOGIN</button>
    </form>
	<small class="text-muted">MD5 hash protected</small>
</center>    
</body>
</html>










































<!-- 

Passwords of Mr.Nlue ams Mr.Green are not same





But theerir MD5 hashes are




Syetems checks only the hash
-->
