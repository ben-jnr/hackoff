<?php
	$path="http://192.168.43.155/main.html";
	$ourUser = $_POST['user'];
	if(!isset($ourUser) || empty($ourUser))
	{
		setcookie($cookieName,"",time() - 84600);
		echo '<script>alert("Well Mr.SmartyPants here is a fake flag for you : hackitoff{your_fake_flag_!}")</script>';
		header('refresh:0,url=main.html');
	}
	else
	{
		$cookieName   = 'aGV5X3doeV9hcmVfeW91X2RlY29kaW5nX21lXz8K';
		$cookieValue  = str_rot13($ourUser);
	
		if($ourUser === 'admin')
		{
			$cookieValue='nimda';
		}		
		setcookie($cookieName,$cookieValue,time() + 180);

		$requiredUser =  $_COOKIE[$cookieName];
		if($requiredUser === str_rot13('admin') || $ourUser == 'nqzva')
		{
			echo '<script>alert("hackitoff{rott3n_c00kies_for_my_@dmin}")</script>';
			header('refresh:0,url=main.html');
		}
		else
		{
			echo '<script>alert("You aint admin , please leave !!!")</script>';
			header('refresh:0,url=main.html');
		}
		
	}

?>

