<?php 

class prototypesController extends controller {

	public function __construct(){
		parent::__construct();
	}

	public function index() {

		$prototypesData = array(
			"title" => 'Prototypes'
		);

		$headerData = array(
			"title_seo" => "Prototypes Version",
			"meta_description" => "Curriculum Form Home"
		);

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("prototypes", $prototypesData);
	}
}