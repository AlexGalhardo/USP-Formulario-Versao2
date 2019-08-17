<div class="div_update">

	<h1>UPDATE Address Data</h1>
	<br>

	<form method="POST">

		<input type="hidden" name="id" value="<?php echo $_GET['id']; ?>">

		<h3><strong>ID: </strong><?php echo $_GET['id']; ?></h3><br>

		<label for="endereco">Street: </label>
		<input type="text" name="street" id="endereco" value="<?php echo $street; ?>" placeholder="Insira apenas o nome da rua"><br><br>

		<label for="neighborhood">Neighborhood: </label>
		<input type="text" name="neighborhood" id="neighborhood" placeholder="Digit your neighborhood" value="<?php echo $neighborhood; ?>"><br><br>

		<label for="residenceNumber">Residence Number: </label>
		<input type="number" value="<?php echo $residenceNumber; ?>" name="residenceNumber" id="residenceNumber" placeholder="Digit residence number">
		
		<br><br>

		<input type="submit" class="cadastrar_input" value="UPDATE Address Data">

		<br><br>
		<h3><a href="<?php echo BASE_URL;?>registered"><< Voltar</a></h3>

	</form>

</div>
