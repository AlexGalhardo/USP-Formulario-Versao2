<?php

/**
 * Projeto Desenvolvido para a Atividade 1 - Formulário de Cadastro
 *
 * Curso Sistemas Interativos WEB
 *
 * Prof. Rudinei Goularte (rudinei@icmc.usp.br)
 *
 * ICMC USP 2018
 *
 * Preview Project: https://forms.galhardoo.com
 *
 * Source Code: https://github.com/AlexGalhardo/Trabalho-Formulario
 *
 * Alex Galhardo Vieira
 * Github: https://github.com/AlexGalhardo	
 * Email: aleexgvieira@gmail.com / alexgalhardo@usp.br
 * Site: https://galhardoo.com
 */

class modelInterest extends model {

	public function addInterestData($name,
								    $positionHeld, 
                                    $experience, 
                                    $interestRegion, 
                                    $salaryPretension='000') {

		$sql = "INSERT INTO interest_table 
					(name, positionHeld, experience, interestRegion, salaryPretension) 
				VALUES 
					(:name, :positionHeld, :experience, :interestRegion, :salaryPretension)";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":name", $name);
		$sql->bindValue(":positionHeld", $positionHeld);
		$sql->bindValue(":experience", $experience);
		$sql->bindValue(":interestRegion", $interestRegion);
		$sql->bindValue(":salaryPretension", $salaryPretension);

		$sql->execute();

		return true;
	}

	public function changeName($newName){
		$sql = "UPDATE interest_table SET name = '$newName'";
		$sql = $this->db->query($sql);

		return true;
	}

	public function deleteInterestDataFromId($id){
		$sql = "DELETE FROM interest_table WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}

	public function getAllInterestDataRegistered(){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM interest_table";
		/**
		 * Faça essa query no banco de dados
		 */
		$sql = $this->db->query($sql);
		if($sql->rowCount() > 0){
			return $sql->fetchAll();
		} else {
			return array();
		}
	}

	public function getInterestDataFromId($id){

		$sql = "SELECT * FROM interest_table WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();

		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return array();
		}
	}

	public function updateInterestDataRegistered($id,
                                                 $positionHeld, 
                                                 $experience, 
                                                 $interestRegion, 
                                                 $salaryPretension){

		$sql = "UPDATE interest_table SET
	                                       positionHeld = :positionHeld, 
	                                       experience = :experience,
	                                       interestRegion = :interestRegion,
	                                       salaryPretension = :salaryPretension
		                                    WHERE id = :id";
        
        $sql = $this->db->prepare($sql);

        $sql->bindValue(":id", $id);
        $sql->bindValue(":positionHeld", $positionHeld);
        $sql->bindValue(":experience", $experience);
        $sql->bindValue(":interestRegion", $interestRegion);
        $sql->bindValue(":salaryPretension", $salaryPretension);

        $sql->execute();

        return true;
	}
}