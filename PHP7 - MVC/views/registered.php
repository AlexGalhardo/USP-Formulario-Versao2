<?php
$personalTable = new modelPersonal();
$addressTable = new modelAddress();
$interestTable = new modelInterest();
$educationTable = new modelEducation();
$professionalTable = new modelProfessional();
?>

<div class="div_registered">
	<h1 style="text-align: center;">Data Recorded in Database</h1>
	<br>
	<h3 style="text-align: center;"><a  class="button_register_new_data" href="<?php echo BASE_URL;?>">Register New Data</a></h3>
	<br>
	<h2>Personal Data Registered</h2>
	<table border='1' width="1200">

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Cellphone</th>
            <th>Gender</th>
            <th>Marital Status</th>
            <th>Nationality</th>
            <th>NumberID</th>
            <th>UPDATE</th>
            <th>DELETE</th>
        </tr>

		<?php
            $allPersonalDatasRegistered = $personalTable->getAllPersonalDataRegistered();
		    foreach($allPersonalDatasRegistered as $personalDataRegistered):
		?>
		<tr>
            <td><?php echo $personalDataRegistered['id']; ?></td>
            <td><?php echo $personalDataRegistered['name']; ?></td>
            <td><?php echo $personalDataRegistered['email']; ?></td>
            <td><?php echo $personalDataRegistered['cellphone']; ?></td>
            <td><?php echo $personalDataRegistered['gender']; ?></td>
            <td><?php echo $personalDataRegistered['maritalStatus']; ?></td>
            <td><?php echo $personalDataRegistered['nationality']; ?></td>
            <td><?php echo $personalDataRegistered['numberID']; ?></td>
            <td><a href="<?php echo BASE_URL; ?>updatePersonal?id=<?php echo $personalDataRegistered['id']; ?>">UPDATE</a></td>
            <td><a href="<?php echo BASE_URL; ?>deletePersonal?id=<?php echo $personalDataRegistered['id']; ?>">DELETE</a></td>
        </tr>

        <?php endforeach; ?>

	</table>
	<br>
	

	<h2>Address Data Registered</h2>
	<table border='1' width="1200">

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Street</th>
            <th>Neighborhood</th>
            <th>Residence Number</th>
            <th>UPDATE</th>
            <th>DELETE</th>
        </tr>

		<?php
            $allAddressDataRegistered = $addressTable->getAllAddressDataRegistered();
		    foreach($allAddressDataRegistered as $addressDataRegistered):
		?>
		<tr>
            <td><?php echo $addressDataRegistered['id']; ?></td>
            <td><?php echo $addressDataRegistered['name']; ?></td>
            <td><?php echo $addressDataRegistered['street']; ?></td>
            <td><?php echo $addressDataRegistered['neighborhood']; ?></td>
            <td><?php echo $addressDataRegistered['residenceNumber']; ?></td>
            <td><a href="<?php echo BASE_URL; ?>updateAddress?id=<?php echo $addressDataRegistered['id']; ?>">UPDATE</a></td>
            <td><a href="<?php echo BASE_URL; ?>deleteAddress?id=<?php echo $addressDataRegistered['id']; ?>">DELETE</a></td>
        </tr>

        <?php endforeach; ?>

	</table>
	<br>

	<h2>Interest Data Registered</h2>
	<table border='1' width="1200">

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cargo</th>
            <th>Experiencia</th>
            <th>Região Interesse</th>
            <th>Pretensão Salarial</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>

		<?php
            $allInterestDataRegistered = $interestTable->getAllInterestDataRegistered();
		    foreach($allInterestDataRegistered as $interestDataRegistered):
		?>
		<tr>
            <td><?php echo $interestDataRegistered['id']; ?></td>
            <td><?php echo $interestDataRegistered['name']; ?></td>
            <td><?php echo $interestDataRegistered['positionHeld']; ?></td>
            <td><?php echo $interestDataRegistered['experience']; ?></td>
            <td><?php echo $interestDataRegistered['interestRegion']; ?></td>
            <td><?php echo $interestDataRegistered['salaryPretension']; ?></td>
            <td><a href="<?php echo BASE_URL; ?>updateInterest?id=<?php echo $interestDataRegistered['id']; ?>">UPDATE</a></td>
            <td><a href="<?php echo BASE_URL; ?>deleteInterest?id=<?php echo $interestDataRegistered['id']; ?>">DELETE</a></td>
        </tr>

        <?php endforeach; ?>

	</table>
	<br>

	<h2>Education Data Registered</h2>
	<table border='1' width="1200">

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Schooling</th>
            <th>Graduate</th>
            <th>Institution Name</th>
            <th>Course Name</th>
            <th>UPDATE</th>
            <th>DELETE</th>
        </tr>

		<?php
            $allEducationDataRegistered = $educationTable->getAllEducationDataRegistered();
		    foreach($allEducationDataRegistered as $educationDataRegistered):
		?>
		<tr>
            <td><?php echo $educationDataRegistered['id']; ?></td>
            <td><?php echo $educationDataRegistered['name']; ?></td>
            <td><?php echo $educationDataRegistered['schooling']; ?></td>
            <td><?php echo $educationDataRegistered['graduate']; ?></td>
            <td><?php echo $educationDataRegistered['institutionName']; ?></td>
            <td><?php echo $educationDataRegistered['courseName']; ?></td>
            <td><a href="<?php echo BASE_URL; ?>updateEducation?id=<?php echo $educationDataRegistered['id']; ?>">UPDATE</a></td>
            <td><a href="<?php echo BASE_URL; ?>deleteEducation?id=<?php echo $educationDataRegistered['id']; ?>">DELETE</a></td>
        </tr>

        <?php endforeach; ?>

	</table>
	<br>			

	<h2>Professional Data Registered</h2>
	
	<table border='1' width="1200">

        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Has Experience?</th>
            <th>Company Name</th>
            <th>Month Start</th>
            <th>Year Start</th>
            <th>Month End</th>
            <th>Year End</th>
            <th>Business Segment</th>
            <th>Position Held</th>
            <th>Job Responsabilites</th>
            <th>UPDATE</th>
            <th>DELETE</th>
        </tr>

		<?php
            $allProfessionalDataRegistered = $professionalTable->getAllProfessionalDataRegistered();
		    foreach($allProfessionalDataRegistered as $professionalDataRegistered):
		?>
		<tr>
            <td><?php echo $professionalDataRegistered['id']; ?></td>
            <td><?php echo $professionalDataRegistered['name']; ?></td>
            <td><?php echo $professionalDataRegistered['hasExperience']; ?></td>
            <td><?php echo $professionalDataRegistered['companyName']; ?></td>
            <td><?php echo $professionalDataRegistered['monthStart']; ?></td>
            <td><?php echo $professionalDataRegistered['yearStart']; ?></td>
            <td><?php echo $professionalDataRegistered['endMonth']; ?></td>
            <td><?php echo $professionalDataRegistered['endYear']; ?></td>
            <td><?php echo $professionalDataRegistered['businessSegment']; ?></td>
            <td><?php echo $professionalDataRegistered['positionHeld']; ?></td>
            <td><?php echo $professionalDataRegistered['jobResponsabilities']; ?></td>
            <td><a href="<?php BASE_URL; ?>updateProfessional?id=<?php echo $professionalDataRegistered['id']; ?>">UPDATE</a></td>
            <td><a href="<?php BASE_URL; ?>deleteProfessional?id=<?php echo $professionalDataRegistered['id']; ?>">DELETE</a></td>
        </tr>

        <?php endforeach; ?>

	</table>
	
</div>
