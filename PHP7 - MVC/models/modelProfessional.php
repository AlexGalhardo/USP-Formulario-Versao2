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

class modelProfessional extends model {

	public function addProfessionalExperienceData ( $name, 
													$hasExperience, 
										            $companyName, 
										            $monthStart, 
										            $yearStart, 
										            $endMonth, 
										            $endYear, 
										            $businessSegment, 
										            $positionHeld, 
										            $jobResponsabilities='Dont send') {

		/**
		 * Se o usuário possui experiencia, adicione também os dados da experiência
		 */
		if($hasExperience == 'Has Professional Experience'){

			$sql = "INSERT INTO professional_table (            name,
																hasExperience, 
			                                                    companyName, 
			                                                    monthStart, 
			                                                    yearStart, 
			                                                    endMonth, 
			                                                    endYear, 
			                                                    businessSegment, 
			                                                    positionHeld, 
			                                                    jobResponsabilities) 
			        VALUES (:name, 
			        		:hasExperience, 
			                :companyName, 
			                :monthStart, 
			                :yearStart, 
			                :endMonth, 
			                :endYear, 
			                :businessSegment, 
			                :positionHeld, 
			                :jobResponsabilities)";

			$sql = $this->db->prepare($sql);

			$sql->bindValue(":name", $name);
			$sql->bindValue(":hasExperience", $hasExperience);
			$sql->bindValue(":companyName", $companyName);
			$sql->bindValue(":monthStart", $monthStart);
			$sql->bindValue(":yearStart", $yearStart);
			$sql->bindValue(":endMonth", $endMonth);
			$sql->bindValue(":endYear", $endYear);
			$sql->bindValue(":businessSegment", $businessSegment);
			$sql->bindValue(":positionHeld", $positionHeld);
			$sql->bindValue(":jobResponsabilities", $jobResponsabilities);

			$sql->execute();

			return true;

		/**
		 * Se ele não possuir experiência, adicione apenas esta informação
		 */
		} else {
			$sql = "INSERT INTO professional_table (hasExperience) VALUES (:hasExperience)";

			$sql = $this->db->prepare($sql);
			$sql->bindValue(":hasExperience", $hasExperience);

			$sql->execute();

			return true;
		}
	}

	public function changeName($newName){
		$sql = "UPDATE professional_table SET name = '$newName'";
		$sql = $this->db->query($sql);

		return true;
	}

	public function updateProfessionalData($id, 
		                                				 $hasExperience, 
											             $companyName, 
											             $monthStart, 
											             $yearStart, 
											             $endMonth, 
											             $endYear, 
											             $businessSegment, 
											             $positionHeld, 
											             $jobResponsabilities){

		$sql = "UPDATE professional_table SET 
						                              hasExperience = :hasExperience, 
						                              companyName = :companyName,
						                              monthStart = :monthStart,
						                              yearStart = :yearStart,
						                              endMonth = :endMonth,
						                              endYear = :endYear,
						                              businessSegment = :businessSegment,
						                              positionHeld = :positionHeld,
						                              jobResponsabilities = :jobResponsabilities
						                              WHERE id = :id";

		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->bindValue(":hasExperience", $hasExperience);
		$sql->bindValue(":companyName", $companyName);
		$sql->bindValue(":monthStart", $monthStart);
		$sql->bindValue(":yearStart", $yearStart);
		$sql->bindValue(":endMonth", $endMonth);
		$sql->bindValue(":endYear", $endYear);
		$sql->bindValue(":businessSegment", $businessSegment);
		$sql->bindValue(":positionHeld", $positionHeld);
		$sql->bindValue(":jobResponsabilities", $jobResponsabilities);

		$sql->execute();

		return true;
	}


	public function deleteProfessionalDataFromId($id){
		$sql = "DELETE FROM professional_table WHERE id = :id";
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
	}


	/**
	 * Essa função devolve todas as linhas da tabela Experiencias Profissionais
	 * @return [array de arrays] [todas as linhas da tabela experiencia profissionais]
	 */
	public function getAllProfessionalDataRegistered(){

		$sql = "SELECT * FROM professional_table";

		$sql = $this->db->query($sql);
		if($sql->rowCount() > 0){
			return $sql->fetchAll();
		} else {
			return array();
		}
	}

	/**
	 * Essa função devolve um array com os dados de acordo com o ID
	 * @return  [array] [returna a linha da tabela que possuir o id do paramêtro]
	 */
	public function getProfessionalDataFromId($id){
		/**
		 * Pegue todas as linhas com todas as colunas do banco de dados
		 * @var $sql == array()
		 */
		$sql = "SELECT * FROM professional_table WHERE id = :id";
		/**
		 * Faça essa query no banco de dados
		 */
		$sql = $this->db->prepare($sql);
		$sql->bindValue(":id", $id);
		$sql->execute();
		//$sql = $this->db->query($sql);
		if($sql->rowCount() == 1){
			return $sql->fetch();
		} else {
			return false;
		}
	}
}