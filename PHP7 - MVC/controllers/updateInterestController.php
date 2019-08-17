<?php 

class updateInterestController extends controller {

	private $interestTable;

	public function __construct(){
		parent::__construct();

		$this->interestTable = new modelInterest();
	}

	public function index() {

		$cadastro = new FormsData();

		if(!empty($_GET['id']) && isset($_GET['id'])){

			$id = $_GET['id'];

			/**
			 * Traz os interestTable deste ID da tabela Educação em formato de array
			 */
			$info = $this->interestTable->getInterestDataFromId($id);
			//print_r($info);

		} else {
			header("Location: " . BASE_URL . "registered");
		}

		/**
		 * Edite os data
		 */
		if(!empty($_POST['id']) && isset($_GET['id'])){

			echo "<div class='div_update'>";
			echo "<br><h1 style='text-align: center;'>Interest Data Atualized</h1>";
			echo "<br><hr><strong>ID: </strong>" . $_POST['id'] . "<br>";
			echo "<br><hr><strong>Cargo: </strong>" . $_POST['cargo'] . "<br>";
			echo "<br><hr><strong>Experiencia: </strong>" . $_POST['experiencia'] . "<br>";
			echo "<br><hr><strong>Regiao Interesse: </strong>" . $_POST['regiaoInteresse'] . "<br>";
			echo "<br><hr><strong>Pretensão Salarial: </strong>" . $_POST['pretensaoSalarial'] . "<br>";
			echo "</div><br><br>";
			
			$this->interestTable->updateInterestDataRegistered($_POST['id'],
							                             $_POST['cargo'],
							                             $_POST['experiencia'],
							                             $_POST['regiaoInteresse'],
							                             $_POST['pretensaoSalarial']);
		}

		$headerData = array(
			"title_seo" => "UPDATE Interest data",
			"meta_description" => "UPDATE Interest data in database"
		);

		$updateInterestData = array();
		$footerData = array();

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("update-interest", $updateInterestData);
		$this->loadFooterInTemplate("footer", $footerData);
	}
}