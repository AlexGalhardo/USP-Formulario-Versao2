<?php 

class homeController extends controller {

	public function __construct(){
		parent::__construct();
	}

	public function index() {

		$homeData = array(
			"title" => 'teste'
		);

		$headerData = array(
			"title_seo" => "Curriculum Form",
			"meta_description" => "Curriculum Form Home"
		);

		$footerData = array();

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("home", $homeData);
		$this->loadFooterInTemplate("footer", $footerData);
	}
}