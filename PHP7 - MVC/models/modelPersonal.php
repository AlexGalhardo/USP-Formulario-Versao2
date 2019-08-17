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

class modelPersonal extends model {

	/**
	 * Método para adicionar dados do formulário dados pessoais no banco de dados
	 * @param  [type] $name          [description]
	 * @param  [type] $email         [description]
	 * @param  [type] $cellphone       [description]
	 * @param  [type] $gender        [description]
	 * @param  [type] $maritalStatus   [description]
	 * @param  [type] $nacionalidade [description]
	 * @param  [type] $numberID           [description]
	 * @return [type]                [description]
	 */
	public function addPersonalData($name, $email, $cellphone, $gender, $maritalStatus, $nationality, $numberID) {
		
		$sql = "INSERT INTO personal_table 
					(name, email, cellphone, gender, maritalStatus, nationality, numberID) 
				VALUES 
					(:name, :email, :cellphone,:gender, :maritalStatus, :nationality, :numberID)";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":name", $name);
		$sql->bindValue(":email", $email);
		$sql->bindValue(":cellphone", $cellphone);
		$sql->bindValue(":gender", $gender);
		$sql->bindValue(":maritalStatus", $maritalStatus);
		$sql->bindValue(":nationality", $nationality);
		$sql->bindValue(":numberID", $numberID);

		$sql->execute();

		return true;
	}

	public function changeName($newName){
		$sql = "UPDATE personal_table SET name = '$newName'";
		$sql = $this->db->query($sql);

		return true;
	}

	/**
	 * Deletar uma linha inteira de um dado pessoal de acordo com o ID passado no paramêtro
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function deletePersonalDataFromId($id){
		$sql = "DELETE FROM personal_table WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}

	/**
	 * Devolve um array de arrays com todas as linhas de dados pessoais cadastrado no banco
	 * @return [type] [description]
	 */
	public function getAllPersonalDataRegistered(){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM personal_table";
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

	public function getPersonalDataRegisteredFromId($id){

		$sql = "SELECT * FROM personal_table WHERE id = :id";

		$sql = $this->db->prepare("$sql");
		$sql->bindValue(":id", $id);

		$sql->execute();

		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return array();
		}
	}

	public function updatePersonalData($id, 
		                                $name, 
		                                $email, 
		                                $cellphone, 
		                                $gender, 
		                                $maritalStatus, 
		                                $nationality, 
		                                $numberID){

		$sql = "UPDATE personal_table SET 
		                              name = :name, 
		                              email = :email,
		                              cellphone = :cellphone,
		                              gender = :gender,
		                              maritalStatus = :maritalStatus,
		                              nationality = :nationality,
		                              numberID = :numberID
		                              WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->bindValue(":name", $name);
		$sql->bindValue(":email", $email);
		$sql->bindValue(":cellphone", $cellphone);
		$sql->bindValue(":gender", $gender);
		$sql->bindValue(":maritalStatus", $maritalStatus);
		$sql->bindValue(":nationality", $nationality);
		$sql->bindValue(":numberID", $numberID);

		$sql->execute();

		return true;
	}
}
