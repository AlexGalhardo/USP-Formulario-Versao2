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

class modelEducation extends model {

	public function addEducationData(  $name,
									   $schooling, 
									   $graduate, 
									   $institutionName, 
									   $courseName) {


		$sql = "INSERT INTO education_table (name,
											schooling, 
		                                    graduate, 
		                                    institutionName, 
		                                    courseName) 
		        VALUES ( :name,
		        		 :schooling, 
		                 :graduate, 
		                 :institutionName, 
		                 :courseName)";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":name", $name);
		$sql->bindValue(":schooling", $schooling);
		$sql->bindValue(":graduate", $graduate);
		$sql->bindValue(":institutionName", $institutionName);
		$sql->bindValue(":courseName", $courseName);

		$sql->execute();

		return true;
	}

	public function changeName($newName){
		$sql = "UPDATE education_table SET name = '$newName'";
		$sql = $this->db->query($sql);

		return true;
	}

	/**
	 * UPDATE education_table SET schooling = 'doutorado', graduate = '2018',institutionName = 'usp',courseName = 'bcc' WHERE id = '31';
	 */
	public function updateEducationData($id, 
		                                $schooling, 
		                                $graduate, 
		                                $institutionName, 
		                                $courseName){

		$sql = "UPDATE education_table SET 
		                              schooling = :schooling, 
		                              graduate = :graduate,
		                              institutionName = :institutionName,
		                              courseName = :courseName
		                              WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->bindValue(":schooling", $schooling);
		$sql->bindValue(":graduate", $graduate);
		$sql->bindValue(":institutionName", $institutionName);
		$sql->bindValue(":courseName", $courseName);

		$sql->execute();

		return true;
	}

	public function deleteEducationDataFromId($id){
		$sql = "DELETE FROM education_table WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}

	public function getAllEducationDataRegistered(){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM education_table";
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

	public function getEducationDataFromId($id){

		$sql = "SELECT * FROM education_table WHERE id = :id";

		$sql = $this->db->prepare($sql);

		$sql->bindValue(":id", $id);

		$sql->execute();

		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return array();
		}
	}

}