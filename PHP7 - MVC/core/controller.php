<?php 

class controller {

	protected $db;

	public function __construct(){
		global $config;
		$this->db = new PDO("mysql:dbname=".$config['dbname'].';host='.$config['host'],$config['dbuser'],$config['dbpass']);
	}

	public function loadView($viewName, $viewData = array()){

		// essa função transforma a chave do array em uma váriavel de mesmo nome, onde seu valor vai ser o valor da chave
		extract($viewData);

		require 'views/' . $viewName. '.php';
	}

	public function loadTemplate($viewName, $viewData = array()){

		require 'views/template.php';
	}

	public function loadViewInTemplate($viewName, $viewData = array()){

		extract($viewData);
		require 'views/'.$viewName. '.php';
	}

	public function loadHeaderInTemplate($headerName, $headerData = array()){

		extract($headerData);
		require 'views/'.$headerName. '.php';
	}

	public function loadFooterInTemplate($footerName, $footerData = array()){

		extract($footerData);
		require 'views/'.$footerName. '.php';
	}
}