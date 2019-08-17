<?php 

class updateEducationController extends controller {

	private $educationTable;

	public function __construct(){
		parent::__construct();

		$this->educationTable = new modelEducation();
	}

	public function index() {

		if(!empty($_GET['id']) && isset($_GET['id'])){

			$id = $_GET['id'];

			/**
			 * Traz os educationTable deste ID da tabela Educação em formato de array
			 */
			$info = $this->educationTable->getEducationDataFromId($id);

		} else {
			header("Location: " . BASE_URL . "registered");
		}
		/**
		 * Edite os data
		 */
		if(!empty($_POST['id']) && isset($_GET['id'])){
			
			echo "<div class='div_update'>";
			echo "<br><h1 style='text-align: center;'>Education Data Atualized</h1>";
			echo "<br><strong>ID: </strong>" . $_POST['id'] . "<br>";
			echo "<br><hr><strong>Schooling: </strong>" . $_POST['schooling'] . "<br>";
			echo "<br><hr><strong>Graduate: </strong>" . $_POST['graduate'] . "<br>";
			echo "<br><hr><strong>Institution Name: </strong>" . $_POST['institutionName'] . "<br>";
			echo "<br><hr><strong>Course Name: </strong>" . $_POST['courseName'] . "<br>";
			echo "<hr></div><br>";
			
			$this->educationTable->updateeducationTableEducacao($_POST['id'],
			                            $_POST['schooling'],
			                            $_POST['graduate'],
			                            $_POST['institutionName'],
			                            $_POST['courseName']);
		}

		$headerData = array(
			"title_seo" => "UPDATE Education Data",
			"meta_description" => "UPDATE Education data in database"
		);

		$updateEducationData = array();
		$footerData = array();

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("update-education", $updateEducationData);
		$this->loadFooterInTemplate("footer", $footerData);
	}
}