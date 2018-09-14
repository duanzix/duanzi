<?php
	
	//获取请求的参数
	$id = $_POST['id'];

	//数据库检测
	$pdo = new PDO('mysql:host=localhost;dbname=duanzi;charset=utf8','root','');

	$sql = 'insert into user(uname,pass) values(?,?)';

	$stmt = $pdo -> prepare($sql);

	$stmt -> bindValue(1,$name);
	$stmt -> bindValue(2,$pass);
	$mm = $stmt -> execute();

	if($mm){
		echo '注册成功';
	}else{
		echo '注册失败';
	}
	

	$stmt = $pdo -> prepare('select * from users where username =  ?');

	$arr = [$username];

	$stmt->execute($arr);

	$user = $stmt -> fetch();

	if($user === false){
		echo '1';
	}else{
		echo '0';
	}

	 echo $id;