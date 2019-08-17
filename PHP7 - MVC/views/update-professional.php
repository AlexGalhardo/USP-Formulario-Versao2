<div class="div_update">

	<h1>UPDATE Professional Experience</h1>
	
	<br>
	
	<form method="POST">

		<input type="hidden" name="id" value="<?php echo $_GET['id']; ?>">

		<h3><strong>ID: </strong><?php echo $_GET['id']; ?></h3>

		<br>
		
		<input type="radio" name="hasExperience" value="Has Professional Experience" id="hasExperience" onclick="showAdicionarEmpresa()"> Has Professional Experience

		<input type="radio" name="possuiExperiencia" value="Doesn't Has Professional Experience" checked onclick="hiddenAdicionarEmpresa()"> Doesn't Has Professional Experience

		<div id="button_add_professional_exp" hidden>
			<br><br>
			<input onclick="showAdicionarDadosEmpresa()" type="button" value="Add Professional Experience"></input>
		</div>
		
		
		<div id="div_professional_exp" hidden>
			<br><br>
			<hr>
			<span id="errorCompanyName"></span><br>
			<label>Company Name:</label>
			<input type="text" placeholder="Digit company name" id="companyName" name="companyName">
			<br><br>

			<strong>Start:</strong> Month: 
			<select name="monthStart">
				<option value="Janeiro">Janeiro</option>
				<option value="Feveiro">Feveiro</option>
				<option value="Março">Março</option>
				<option value="Abril">Abril</option>
				<option value="Maio">Maio</option>
				<option value="Junho">Junho</option>
				<option value="Julho">Julho</option>
				<option value="Agosto">Agosto</option>
				<option value="Setembro">Setembro</option>
				<option value="Outubro">Outubro</option>
				<option value="Novembro">Novembro</option>
				<option value="Dezembro">Dezembro</option>	
			</select>
			Year:
			<select name="yearStart">
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
			<label> <br><br>
			<strong>End:</strong>
			<select name="endMonth">
				<option value="Janeiro">Janeiro</option>
				<option value="Feveiro">Feveiro</option>
				<option value="Março">Março</option>
				<option value="Abril">Abril</option>
				<option value="Maio">Maio</option>
				<option value="Junho">Junho</option>
				<option value="Julho">Julho</option>
				<option value="Agosto">Agosto</option>
				<option value="Setembro">Setembro</option>
				<option value="Outubro">Outubro</option>
				<option value="Novembro">Novembro</option>
				<option value="Dezembro">Dezembro</option>		
			</select>
			Year:
			<select name="endYear">
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
			<label>Business Segment</label>:<br>
			<input type="radio" value="Tecnologia e Informática" name="businessSegment" checked>  Technology <br>
			<input type="radio" value="Human Resources" name="businessSegment">  Human Resources <br>
			<input type="radio" value="Varejo de Produtos Físicos" name="businessSegment">  Retail of Physical Products <br>
			<input type="radio" value="Marketing Digital" name="businessSegment">  Digital Marketing <br>
			<input type="radio" value="Food Trade" name="businessSegment">  Food Trade <br>
			<input type="radio" value="Entertainment" name="businessSegment">  Entertainment <br>
			<input type="radio" value="General Services" name="businessSegment">  General Services

			<br><br>
			<span id="errorPositionHeld"></span><br>
			<label>Position Held:</label>
			<input type="text" placeholder="Digit your position held in this experience" id="positionHeld" name="positionHeld"><br><br>

			<span id="errorJobResponsabilities"></span><br>

			<label>Enter your main duties and responsibilities in the position held: </label><br>
			<textarea rows="10" cols="70" name="jobResponsabilities"></textarea>
			<br><br>
			<input type="submit" onclick="hiddenAdicionarDadosEmpresa()" value="Delete This Experience">

		<br><br>

	    <input type="submit" class="cadastrar_input" value="UPDATE Professional Data">

	</form>

</div>

	<br><br>
	<h3><a href="<?php echo BASE_URL; ?>registered"><< Voltar</a></h3>
