<?php
session_start();
?>

<?php
include ('./model/dao.php');
	$serveur = "localhost";
	$login ="root";
	$pwd = "";
	try{
		$db = new PDO("mysql:host=$serveur;dbname=unmyote;charset=utf8", $login, $pwd);
		$dao = new Dao($db);
		$dao->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		$email = $_POST['email'];
		$dao->insertInto($email);
		$_SESSION["SUCCESSFUL"] = 1;
		echo boolval($_SESSION["SUCCESSFUL"]);
		echo  $_SESSION["RESULTSQL"];
		
		
	}
	catch(PDOException $exception){
		//echo "ECHEC : ".$exception->getMessage();
		$_SESSION["SUCCESSFUL"] = 0;
		header('Location: index.php');
	}

	header('Location: index.php');

?>
