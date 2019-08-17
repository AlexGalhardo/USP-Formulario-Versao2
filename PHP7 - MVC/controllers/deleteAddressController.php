<?php

class deleteAddressController extends controller {

	private $addressData;

	public function __construct(){
		parent::__construct();

		$this->addressData = new modelAddress();
	}

	public function index(){

		/**
		 * Pegue o ID do Dado da url para ser deletado
		 */
		if(!empty($_GET['id'])){
			
			$id = $_GET['id'];
			
			$this->addressData->deleteAddressDataFromId($id);
		}

		header("Location: " . BASE_URL . "registered");
	}
}