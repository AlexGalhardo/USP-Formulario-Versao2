<?php 

class updateProfessionalController extends controller {

	protected $professionalTable;

	public function __construct(){
		parent::__construct();

		$this->professionalTable = new modelProfessional();
	}

	public function index() {

		$cadastro = new FormsData();

		if(!empty($_GET['id']) && isset($_GET['id'])){

			$id = $_GET['id'];

			/**
			 * Traz os professionalTable deste ID da tabela Educação em formato de array
			 */
			$info = $this->professionalTable->deleteProfessionalDataFromId($id);
			//print_r($info);

		} else {
			header("Location: " . BASE_URL . "registered");
		}

		/**
		 * Edite os data
		 */
		if(!empty($_POST['id']) && isset($_GET['id'])){
			
			echo "<div class='div_update'>";
			echo "<br><h1 style='text-align: center;'>Professional Data Atualized</h1>";
			echo "<br><hr><strong>ID: </strong>" . $_POST['id'] . "<br>";
			echo "<br><hr><strong>Has Experience: </strong>" . $_POST['hasExperience'] . "<br>";
			echo "<br><hr><strong>Company Name: </strong>" . $_POST['companyName'] . "<br>";
			echo "<br><hr><strong>Start Month: </strong>" . $_POST['monthStart'] . "<br>";
			echo "<br><hr><strong>Start Year: </strong>" . $_POST['yearStart'] . "<br>";
			echo "<br><hr><strong>End Year: </strong>" . $_POST['endMonth'] . "<br>";
			echo "<br><hr><strong>End Year: </strong>" . $_POST['endYear'] . "<br>";
			echo "<br><hr><strong>Business Segment: </strong>" . $_POST['businessSegment'] . "<br>";
			echo "<br><hr><strong>Position Held: </strong>" . $_POST['positionHeld'] . "<br>";
			echo "<br><hr><strong>Texto Responsabilidades: </strong>" . $_POST['jobResponsabilities'] . "<br>";
			echo "</div><br><br>";
			
			$this->professionalTable->updateProfessionalData($_POST['id'],
							                            $_POST['hasExprience'],
							                            $_POST['companyName'],
							                            $_POST['monthStart'],
							                            $_POST['yearStart'],
														$_POST['endMonth'],
							                            $_POST['endYear'],
							                            $_POST['businessSegment'],
							                            $_POST['positionHeld'],
														$_POST['jobResponsabilities']);
		}

		$headerData = array(
			"title_seo" => "Update Professional",
			"meta_description" => "Update Professional in database"
		);

		$updateProfessionalData = array();

		$footerData = array();

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("update-professional", $updateProfessionalData);
		$this->loadFooterInTemplate("footer", $footerData);
	}
}