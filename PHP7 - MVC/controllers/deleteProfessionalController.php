<?php

class deleteProfessionalController extends controller {

	private $professionalData;

	public function __construct(){
		parent::__construct();

		$this->professionalData = new modelPersonal();
	}

	public function index(){

		/**
		 * Pegue o ID do Dado da url para ser deletado
		 */
		if(!empty($_GET['id'])){
			
			$id = $_GET['id'];
			
			$this->professionalData->deleteProfessionalDataFromId($id);
		}

		header("Location: " . BASE_URL . "registered");
	}
}