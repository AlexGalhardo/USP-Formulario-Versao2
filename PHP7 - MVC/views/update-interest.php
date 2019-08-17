<div class="div_update">
	<h1>UPDATE Interest Data</h1>
	<form method="POST">

		<input type="hidden" name="id" value="<?php echo $_GET['id']; ?>">

		<h3><strong>ID: </strong><?php echo $_GET['id']; ?></h3><br>

		<label><strong>Cargo</strong></label>
			<br>
			<input type="radio" value="Desenvolver Front-End" name="cargo" checked>
			 Desenvolver Front-End<br>
			<input type="radio" value="Desenvolver Back-End" name="cargo">
			 Desenvolver Back-End<br>
			<input type="radio" value="Administrador Banco de Dados" name="cargo">
			 Administrador Banco de Dados<br>
			<input type="radio" value="Analista Marketing Digital" name="cargo">
			 Analista Marketing Digital<br>
			 <input type="radio" value="Design" name="cargo">
			 Design<br>
			<input type="radio" value="Recursos Humanos" name="cargo">
			 Recursos Humanos<br>
			<input type="radio" value="Administrativo Financeiro" name="cargo">
			 Administrativo Financeiro<br>
			<br><br>

			<label>Experiência no Cargo: </label>
			<br>
			<input type="radio" name="experiencia" value="Júnior" checked> Júnior<br>
			<input type="radio" name="experiencia" value="Pleno"> Pleno<br>
			<input type="radio" name="experiencia" value="Sênior"> Sênior<br>
			<input type="radio" name="experiencia" value="Mestre Yoda">  Mestre Yoda<br>
			<br><br>

			<label for="regiao-interesse">Região de Interesse:  </label>
			<select name="regiaoInteresse">
				<option value="SP">SP</option>
				<option value="RJ">RJ</option>
				<option value="MG">MG</option>
				<option value="PR">PR</option>
				<option value="SC">SC</option>
				<option value="AC">AC</option>
				<option value="AM">AM</option>
				<option value="RS">RS</option>
			</select>
			<br><br>

			<label for="pretensaoSalarial">Pretensão Salarial: R$
			<input name="pretensaoSalarial" id="pretensaoSalarial" type="number"> / mês
			<br><br>

			<input type="submit" class="cadastrar_input" value="UPDATE Interest Data">

			<br><br>
		    <h3><a href="<?php echo BASE_URL; ?>registered"><< Voltar</a></h3>

	</form>

</div>