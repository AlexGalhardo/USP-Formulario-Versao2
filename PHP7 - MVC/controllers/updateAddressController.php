<?php 

class updateAddressController extends controller {

	private $addressTable;

	public function __construct(){
		parent::__construct();

		$this->addressTable = new modelAddress();
	}

	public function index() {

		if(!empty($_GET['id']) && isset($_GET['id'])){

			$id = $_GET['id'];

			/**
			 * Traz os dados deste ID da tabela Enderecos em formato de array
			 */
			$info = $this->addressTable->getAddressDataRegisteredFromId($id);

		} else {
			header("Location: " . BASE_URL . "registered");
		}
		/**
		 * Edite os data
		 */
		if(!empty($_POST['id']) && isset($_POST['id'])){

			echo "<div class='div_update'>";
			echo "<br><h1 style='text-align: center;'>Address Data Atualized</h1>";
			echo "<br><strong>ID: </strong>" . $_POST['id'] . "<br>";
			echo "<br><hr><strong>Street: </strong>" . $_POST['street'] . "<br>";
			echo "<br><hr><strong>Neighborhood: </strong>" . $_POST['neighborhood'] . "<br>";
			echo "<br><hr><strong>Residence Number: </strong>" . $_POST['residenceNumber'] . "<br>";
			echo "<hr></div><br><br>";
			
			$this->addressTable->updateAddressData( $_POST['id'],
						                            $_POST['street'],
						                            $_POST['neighborhood'],
						                            $_POST['residenceNumber']);
		}

		$headerData = array(
			"title_seo" => "UPDATE Address data",
			"meta_description" => "UPDATE Address data in database"
		);

		$addressRow = $this->addressTable->getAddressDataRegisteredFromId($_GET['id']);

		$updateAddressData = array(
			'street' => $addressRow['street'],
			'neighborhood' => $addressRow['neighborhood'],
			'residenceNumber' => $addressRow['residenceNumber']
		);
		$footerData = array();

		$this->loadHeaderInTemplate("header", $headerData);
		$this->loadViewInTemplate("update-address", $updateAddressData);
		$this->loadFooterInTemplate("footer", $footerData);
	}
}