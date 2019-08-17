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

class modelAddress extends model {

	/**
	 * Adiciona dados do formulário Endereço dentro do banco de dados
	 * @param  [type] $street              [description]
	 * @param  [type] $neighborhood           [description]
	 * @param  [type] $residenceNumber [description]
	 * @return [type]                   [description]
	 */
	public function addAddressData($name,
								   $street, 
                                   $neighborhood, 
                                   $residenceNumber) {
		$sql = "INSERT INTO address_table (name, street, neighborhood, residenceNumber) VALUES (:name, :street, :neighborhood, :residenceNumber)";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":name", $name);
		$sql->bindValue(":street", $street);
		$sql->bindValue(":neighborhood", $neighborhood);
		$sql->bindValue(":residenceNumber", $residenceNumber);

		$sql->execute();

		return true;
	}

	public function changeName($newName){

		$sql = "UPDATE address_table SET name = :name";

		$sql = $this->db->prepare($sql);

		$sql->bindValue(":name", $newName);

		$sql->execute();

		return true;
	}

	public function deleteAddressDataFromId($id){
		$sql = "DELETE FROM address_table WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}

	public function getAddressDataRegisteredFromId($id){

		$sql = "SELECT * FROM address_table WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);

		$sql->execute();

		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return array();
		}
	}

	public function getAllAddressDataRegistered(){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM address_table";
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
	
	public function updateAddressData(  $id, 
		                                $street, 
		                                $neighborhood,
		                                $residenceNumber){

		$sql = "UPDATE 
					address_table 
		 		SET 
	                street = :street, 
	                neighborhood = :neighborhood,
	                residenceNumber = :residenceNumber
				WHERE 
					id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->bindValue(":street", $street);
		$sql->bindValue(":neighborhood", $neighborhood);
		$sql->bindValue(":residenceNumber", $residenceNumber);

		$sql->execute();

		return true;
	}

}