<div class="div_update">

	<h1>UPDATE Personal Data</h1>

	<form method="POST">

		<input type="hidden" name="id" value="<?php echo $_GET['id']; ?>">

		<h3><strong>ID: </strong><?php echo $_GET['id']; ?></h3><br>

		<label for="completeName">Name: </label>
			<input type="text" id="completeName" name="name" placeholder="Update name" value="<?php echo $olderName; ?>">
			<br><br>

			<span id="errorEmail"></span><br>
			<label for="email">Email: </label><input name="email" type="email" placeholder="Digite seu email" id="email" value="<?php echo $olderEmail ?>"><br><br>

			<span id="errorCellphone"></span><br>
			<label for="phone">Cellphone: </label>
			<input name="phone" type="number" placeholder="Digit your cellhpone" id="phone" value="<?php echo $olderCellphone ?>">
			<br><br>

			<label>Gender:</label><br>
			<input type="radio" name="gender" value="Male" checked> Male<br>
			<input type="radio" name="gender" value="Female"> Female<br>
			<input type="radio" name="gender" value="Other"> Other
			<br><br>

			<label>Marital Status</label>
			<select name="maritalStatus">
				<option  value="Single">Single</option>
				<option  value="Married">Married</option>
				<option  value="Divorced">Divorced</option>
				<option  value="Dating">Dating</option>
				<option  value="Widower">Widower</option>
			</select>
			<br><br>

			<label>Nationality:</label>
			<select name="nationality">
				<option value="Brazil">Brazil</option>
				<option value="Americano">American</option>
				<option value="Spain">Spain</option>
				<option value="England">England</option>
				<option value="Argentina">Argentina</option>
				<option value="Mexico">Mexico</option>
				<option value="Russia">Russia</option>
				<option value="India">India</option>
				<option value="France">France</option>
				<option value="Italy">Italy</option>
				<option value="Germany">Germany</option>
				<option value="Canada">Canada</option>
			</select>
			<br><br>
			
			<span id="errorNumberID"></span><br>
			<label for="numberID">NumberID:</label>
			<input type="number" name="numberID" placeholder="Enter your number ID" id="numberID" max="" value="<?php echo $olderNumberID; ?>">

			<br><br>

			<input type="submit" class="cadastrar_input" value="UPDATE Personal Data">

			<br><br>
		    <h3><a href="<?php echo BASE_URL;?>registered"><< Voltar</a></h3>

	</form>

</div>
