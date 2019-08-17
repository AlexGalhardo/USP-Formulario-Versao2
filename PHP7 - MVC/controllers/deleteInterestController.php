<?php

class deleteInterestController extends controller {

	private $interestData;

	public function __construct(){
		parent::__construct();

		$this->interestData = new modelInterest();
	}

	public function index(){

		/**
		 * Pegue o ID do Dado da url para ser deletado
		 */
		if(!empty($_GET['id'])){
			
			$id = $_GET['id'];
			
			$this->interestData->deleteInterestDataFromId($id);
		}

		header("Location: " . BASE_URL . "registered");
	}
}