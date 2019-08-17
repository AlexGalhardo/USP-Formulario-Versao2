<div class="div_update">

	<h1>UPDATE Education Data</h1>

	<form method="POST">

		<input type="hidden" name="id" value="<?php echo $_GET['id']; ?>">

		<h3><strong>ID: </strong><?php echo $_GET['id']; ?></h3><br>

		<label>Formação Acadêmica</label><br>

			<input type="radio" name="escolaridade" value="Ensino Médio Incompleto" id="medio-incompleto" onclick="hiddenDivEducacao()">  Ensino Médio Incompleto <br>

			<input type="radio" name="escolaridade" value="Ensino Médio Completo" id="medio-completo" onclick="hiddenDivEducacao()">  Ensino Médio Completo<br>

			<input type="radio" name="escolaridade" value="Superior Incompleto" onclick="showDivEducacao()">  Superior Incompleto<br>

			<input type="radio" name="escolaridade" value="Cursando Ensino Superior" onclick="showDivEducacao()">  Cursando Ensino Superior<br>

			<input type="radio" name="escolaridade" value="Superior Completo" onclick="showDivEducacao()">  Superior Completo<br>

			<input type="radio" name="escolaridade" value="Mestrado" onclick="showDivEducacao()">  Mestrado</option><br>

			<input type="radio" name="escolaridade" value="Doutorado" onclick="showDivEducacao()">  Doutorado

			<br><br>

			<div id="div-educacao" hidden>

				<span id="errorNomeCurso"></span><br>
				<label>Nome do Curso: </label>
				<input type="text" placeholder="Digite o nome do curso" name="nomeCurso" id="nomeCurso"><br><br>

                <span id="errorNomeInstituicao"></span><br>
				<label>Nome da Instituição: </label>
				<input type="text" placeholder="Digite o nome da instituição" name="nomeInstituicao" id="nomeInstituicao"><br><br>

			</div>

			<span id="errorAnoFormacao"></span>
			<br>
			<label>Ano de Formação: </label>
			
			<select name="anoFormacao" id="anoFormacao">
				<option value="2018">2023</option>
				<option value="2017">2022</option>
				<option value="2016">2021</option>
				<option value="2015">2020</option>
				<option value="2014">2019</option>
				<option value="2018">2018</option>
				<option value="2017">2017</option>
				<option value="2016">2016</option>
				<option value="2015">2015</option>
				<option value="2014">2014</option>
				<option value="2013">2013</option>
				<option value="2012">2012</option>
				<option value="2011">2011</option>
				<option value="2010">2010</option>
				<option value="2009">2009</option>
				<option value="2008">2008</option>
				<option value="2007">2007</option>	
			</select>

			<br><br>

			<input type="submit" class="cadastrar_input" value="UPDATE Education Data">

			<br><br>
		    <h3><a href="<?php echo BASE_URL;?>registered"><< Back</a></h3>
		    <br><br>

	</form>

</div>