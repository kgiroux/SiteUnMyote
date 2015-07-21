<?php
Class Dao
{
	protected $db;
	
	public function __construct(PDO $db)
	{
		$this->db = $db;
	}
	
	public function insertInto($email)
	{
		$request = $this->db->prepare("INSERT INTO Subscriber (email) VALUES(:email)");
		$request->bindParam(':email',$email);
		$result = $request->execute();
		$_SESSION["RESULTSQL"] = $result;
		echo $_SESSION["RESULTSQL"];
	}
	
	public function setAttribute($attribute,  $value ){
		$this->db->setAttribute($attribute,$value);
	}
}