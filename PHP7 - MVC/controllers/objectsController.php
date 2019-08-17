<?php 

class objectsController extends controller {

	public function __construct(){
		parent::__construct();
	}

	public function index() {

		$objectsData = array(
			"title" => 'Objects'
		);

		$headerData = array(
			"title_seo" => "Objects Version",
			"meta_description" => "Curriculum Form Home"
		);

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("objects", $objectsData);
	}
}