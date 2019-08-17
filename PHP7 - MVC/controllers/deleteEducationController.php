<?php

class deleteEducationController extends controller {

	private $educationData;

	public function __construct(){
		parent::__construct();

		$this->educationData = new modelEducation();
	}

	public function index(){

		/**
		 * Pegue o ID do Dado da url para ser deletado
		 */
		if(!empty($_GET['id'])){
			
			$id = $_GET['id'];
			
			$this->educationData->deleteEducationDataFromId($id);
		}

		header("Location: " . BASE_URL . "registered");
	}
}