<?php

class deletePersonalController extends controller {

	private $personalData;

	public function __construct(){
		parent::__construct();

		$this->personaldata = new modelPersonal();
	}

	public function index(){

		/**
		 * Pegue o ID do Dado da url para ser deletado
		 */
		if(!empty($_GET['id'])){
			
			$id = $_GET['id'];
			
			$this->personaldata->deletePersonalDataFromId($id);
		}

		header("Location: " . BASE_URL . "registered");
	}
}