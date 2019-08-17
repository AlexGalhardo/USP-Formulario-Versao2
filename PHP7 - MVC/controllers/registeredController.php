<?php 

class registeredController extends controller {

	private $personalTable;
	private $addressTable;
	private $interestTable;
	private $educationTable;
	private $professionalTable;

	public function __construct(){
		parent::__construct();

		$this->personalTable = new modelPersonal();
		$this->addressTable = new modelAddress();
		$this->interestTable = new modelInterest();
		$this->educationTable = new modelEducation();
		$this->professionalTable = new modelProfessional();
	}

	public function index() {

		if(isset($_POST['name']) && !empty($_POST['name'])

		   /**
		   isset($_POST['email']) && !empty($_POST['email']) &&
		   isset($_POST['cellphone']) && !empty($_POST['cellphone']) &&
		   isset($_POST['gender']) && !empty($_POST['gender']) &&
		   isset($_POST['maritalStatus']) && !empty($_POST['cellphone']) &&
		   isset($_POST['nationality']) && !empty($_POST['nationality']) &&
		   isset($_POST['numberID']) && !empty($_POST['numberID'])**/){

			echo "<div class='div_home'>";
			echo "<h1>Data Registered By The POST Method</h1>";
			/**
			 * Adicionar dados pessoais no Banco de Dados
			 */
			echo "<br><br><strong>POST Name: </strong>" . $_POST['name'] . "<br><br>";
			echo "<hr><br><strong>POST Cellphone: </strong>" . $_POST['cellphone'] . "<br><br>";
			echo "<hr><br><strong>POST Email:: </strong>" . $_POST['email'] . "<br><br>";
			echo "<hr><br><strong>POST Gender: </strong>" . $_POST['gender'] . "<br><br>";
			echo "<hr><br><strong>POST Marital Status: </strong>" . $_POST['maritalStatus'] . "<br><br>";
			echo "<hr><br><strong>POST Nationality: </strong>" . $_POST['nationality'] . "<br><br>";
			echo "<hr><br><strong>POST NumberID: </strong>" . $_POST['numberID'] . "<br><br>";

			$this->personalTable->addPersonalData($_POST['name'],
			                                  $_POST['email'],
			                                  $_POST['cellphone'],
			                                  $_POST['gender'],
			                                  $_POST['maritalStatus'],
			                                  $_POST['nationality'],
			                                  $_POST['numberID']);

			/**
			 * Adicionar dados de Endereço no Banco de Dados
			 */
			echo "<hr><br><strong>POST Street: </strong>" . $_POST['street'] . "<br><br>";
			echo "<hr><br><strong>POST Neighborhood: </strong>" . $_POST['neighborhood'] . "<br><br>";
			echo "<hr><br><strong>POST Residence Number: </strong>" . $_POST['residenceNumber'] . "<br><br>";

			$this->addressTable->addAddressData($_POST['name'],
											    $_POST['street'], 
				                                $_POST['neighborhood'], 
				                                $_POST['residenceNumber']);

			/**
			 * Adicionar dados de Interesse de Vaga no Banco de Dados
			 */
			echo "<hr><br><strong>POST Post: </strong>" . $_POST['post'] . "<br><br>";
			echo "<hr><br><strong>POST Experience: </strong>" . $_POST['experience'] . "<br><br>";
			echo "<hr><br><strong>POST Interest Region: </strong>" . $_POST['interestRegion'] . "<br><br>";
			echo "<hr><br><strong>POST Salary Pretension: </strong>" . $_POST['salaryPretension'] . "<br><br>";

			$this->interestTable->addInterestData($_POST['name'],
											      $_POST['post'], 
					                              $_POST['experience'], 
					                              $_POST['interestRegion'], 
					                              $_POST['salaryPretension']);

			
			/**
			 * Se o usuário não ingressou no ensino superior,
			 * sete a variavel ensinoSuperior para FALSE
			 */
			echo "<hr><br><strong>POST Schooling: </strong>" . $_POST['schooling'] . "<br><br>";
			echo "<hr><br><strong>POST University Graduate: </strong>" . $_POST['graduate'] . "<br><br>";
			echo "<hr><br><strong>POST Institution Name: </strong>" . $_POST['institutionName'] . "<br><br>";
			echo "<hr><br><strong>POST Course Name: </strong>" . $_POST['courseName'] . "<br><br>";

			/**
			 * $ensinoSuperior, 
			   $schooling, 
			   $anoFormacao, 
			   $institutionName, 
			   $nameCurso
			 */
			$this->educationTable->addEducationData($_POST['name'],
													$_POST['schooling'], 
					                                $_POST['graduate'], 
					                                $_POST['institutionName'],
					                                $_POST['courseName']);

			/**
			 * Adicionar dados de Experiência Profissional no Banco de Dados
			 */
			echo "<hr><br><strong>POST Professional Experience: </strong>" . $_POST['name'] . "<br><br>";
			echo "<hr><br><strong>POST Professional Experience: </strong>" . $_POST['hasExperience'] . "<br><br>";
			echo "<hr><br><strong>POST Institution Name: </strong>" . $_POST['institutionName'] . "<br><br>";
			echo "<hr><br><strong>POST Start Month: </strong>" . $_POST['monthStart'] . "<br><br>";
			echo "<hr><br><strong>POST Start Year: </strong>" . $_POST['yearStart'] . "<br><br>";
			echo "<hr><br><strong>POST End Month: </strong>" . $_POST['endMonth'] . "<br><br>";
			echo "<hr><br><strong>POST End Year: </strong>" . $_POST['endYear'] . "<br><br>";
			echo "<hr><br><strong>POST Business Segment: </strong>" . $_POST['businessSegment'] . "<br><br>";
			echo "<hr><br><strong>POST Position Held: </strong>" . $_POST['positionHeld'] . "<br><br>";
			echo "<hr><br><strong>POST Job Responsabilites: </strong>" . $_POST['jobResponsabilities'] . "<br><br>";

			echo "<hr></div><br><br>";

			/**
			$possuiExperiencia, 
			$institutionName, 
			$startMonth, 
			$startYear, 
			$endMonth, 
			$endYear, 
			$businessSegment, 
			$positionHeld, 
			$jobResponsabilites
			 */
			$this->professionalTable->addProfessionalExperienceData($_POST['name'],
																    $_POST['hasExperience'], 
								                                   $_POST['institutionName'], 
								                                   $_POST['monthStart'], 
								                                   $_POST['yearStart'],
								                                   $_POST['endMonth'],
								                                   $_POST['endYear'], 
								                                   $_POST['businessSegment'], 
								                                   $_POST['positionHeld'],
								                                   $_POST['jobResponsabilities']);

		}



		$registeredData = array();

		$headerData = array(
			'title_seo' => 'Data Registered',
			'meta_description' => 'Data Registered in Database'
		);

		$footerData = array();

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("registered", $registeredData);
		$this->loadFooterInTemplate("footer", $footerData);
	}
}