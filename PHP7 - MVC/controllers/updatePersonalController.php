<?php 

class updatePersonalController extends controller {

	private $personalTable;
	private $interestTable;
	private $educationTable;
	private $professionalTable;
	private $addressTable;

	public function __construct(){
		parent::__construct();

		$this->personalTable = new modelPersonal();
		$this->interestTable = new modelInterest();
		$this->educationTable = new modelEducation();
		$this->professionalTable = new modelProfessional();
		$this->addressTable = new modelAddress();
	}

	public function index() {

		if(!empty($_GET['id']) && isset($_GET['id'])){

			$id = $_GET['id'];

			/**
			 * Traz os personalTable deste ID da tabela Educação em formato de array
			 */
			$info = $this->personalTable->getPersonalDataRegisteredFromId($id);
			//print_r($info);

		} else {
			header("Location: " . BASE_URL . "registered");
		}

		/**
		 * Edite os data
		 */
		if(!empty($_POST['id']) && isset($_GET['id'])){
			
			echo "<div class='div_update'>";
			echo "<br><h1 style='text-align: center;'>Personal Data Atualized</h1>";
			echo "<br><strong>ID: </strong>" . $_POST['id'] . "<br>";
			echo "<br><hr><strong>Name: </strong>" . $_POST['name'] . "<br>";
			echo "<br><hr><strong>Email: </strong>" . $_POST['email'] . "<br>";
			echo "<br><hr><strong>Cellphone: </strong>" . $_POST['phone'] . "<br>";
			echo "<br><hr><strong>Gender: </strong>" . $_POST['gender'] . "<br>";
			echo "<br><hr><strong>Marital Status: </strong>" . $_POST['maritalStatus'] . "<br>";
			echo "<br><hr><strong>Nationality: </strong>" . $_POST['nationality'] . "<br>";
			echo "<br><hr><strong>NumberID: </strong>" . $_POST['numberID'] . "<br>";
			echo "<hr></div><br><br>";
			
			$this->personalTable->updatePersonalData($_POST['id'],
						                            $_POST['name'],
						                            $_POST['email'],
						                            $_POST['phone'],
						                            $_POST['gender'],
						                            $_POST['maritalStatus'],
						                            $_POST['nationality'],
						                            $_POST['numberID']);

			$this->addressTable->changeName($_POST['name']);
			$this->interestTable->changeName($_POST['name']);
			$this->professionalTable->changeName($_POST['name']);
			$this->educationTable->changeName($_POST['name']);
		}

		$headerData = array(
			"title_seo" => "UPDATE Personal data",
			"meta_description" => "UPDATE Personal data in database"
		);

		$personalRow = $this->personalTable->getPersonalDataRegisteredFromId($_GET['id']);

		$updatePersonalData = array(
			'olderName' => $personalRow['name'],
			'olderEmail' => $personalRow['email'],
			'olderCellphone' => $personalRow['cellphone'],
			'olderNumberID' => $personalRow['numberID']
		);
		$footerData = array();

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("update-personal", $updatePersonalData);
		$this->loadFooterInTemplate("footer", $footerData);
	}
}