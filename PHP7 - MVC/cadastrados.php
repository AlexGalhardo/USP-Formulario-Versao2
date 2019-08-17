<?php

/**
 * Projeto Desenvolvido para a Atividade 1 - Formulário de Cadastro
 *
 * Curso Sistemas Interativos WEB
 *
 * Prof. Rudinei Goularte (rudinei@icmc.usp.br)
 *
 * ICMC USP 2018
 *
 * Prewview Project: https://galhardoo.com
 *
 * Source Code: https://github.com/AlexGalhardo/Trabalho-Formulario
 *
 * Alex Galhardo Vieira
 * Github: https://github.com/AlexGalhardo	
 * Email: aleexgvieira@gmail.com / alexgalhardo@usp.br
 * Site: https://galhardoo.com
 */

/**
 * Inclua dados do arquivo da classe
 */
require_once "dadosFormulario.class.php";

/**
 * Instancie um novo objeto da classe
 */
$cadastro = new FormsData();

/**
 * Pegue os dados da pessoa
 */

if(isset($_POST['nome']) && !empty($_POST['nome'])

   /**
   isset($_POST['email']) && !empty($_POST['email']) &&
   isset($_POST['celular']) && !empty($_POST['celular']) &&
   isset($_POST['genero']) && !empty($_POST['genero']) &&
   isset($_POST['estadoCivil']) && !empty($_POST['celular']) &&
   isset($_POST['nacionalidade']) && !empty($_POST['nacionalidade']) &&
   isset($_POST['cpf']) && !empty($_POST['cpf'])**/){

	echo "<div class='div-main'>";
	echo "<h1 style='text-align: center;'>Dados Cadastrados Pelo Método POST</h1>";
	/**
	 * Adicionar dados pessoais no Banco de Dados
	 */
	echo "<hr><br><strong>O nome do POST é: </strong>" . $_POST['nome'] . "<br><br>";
	echo "<hr><br><strong>O celular do POST é: </strong>" . $_POST['celular'] . "<br><br>";
	echo "<hr><br><strong>O email do POST é: </strong>" . $_POST['email'] . "<br><br>";
	echo "<hr><br><strong>O genero do POST é: </strong>" . $_POST['genero'] . "<br><br>";
	echo "<hr><br><strong>O estadoCivil do POST é: </strong>" . $_POST['estadoCivil'] . "<br><br>";
	echo "<hr><br><strong>O nacionalidade do POST é: </strong>" . $_POST['nacionalidade'] . "<br><br>";
	echo "<hr><br><strong>O cpf do POST é: </strong>" . $_POST['cpf'] . "<br><br>";

	$cadastro->adicionarDadosPessoais($_POST['nome'],
	                                  $_POST['email'],
	                                  $_POST['celular'],
	                                  $_POST['genero'],
	                                  $_POST['estadoCivil'],
	                                  $_POST['nacionalidade'],
	                                  $_POST['cpf']);

	/**
	 * Adicionar dados de Endereço no Banco de Dados
	 */
	echo "<hr><br><strong>A rua do POST é: </strong>" . $_POST['rua'] . "<br><br>";
	echo "<hr><br><strong>O bairro do POST é: </strong>" . $_POST['bairro'] . "<br><br>";
	echo "<hr><br><strong>O numero de Residencia do POST é: </strong>" . $_POST['numeroResidencia'] . "<br><br>";

	$cadastro->adicionarDadosEndereco($_POST['rua'], 
		                              $_POST['bairro'], 
		                              $_POST['numeroResidencia']);

	/**
	 * Adicionar dados de Interesse de Vaga no Banco de Dados
	 */
	echo "<hr><br><strong>O cargo do POST é: </strong>" . $_POST['cargo'] . "<br><br>";
	echo "<hr><br><strong>A experiencia do POST é: </strong>" . $_POST['experiencia'] . "<br><br>";
	echo "<hr><br><strong>A regiaoInteresse do POST é: </strong>" . $_POST['regiaoInteresse'] . "<br><br>";
	echo "<hr><br><strong>A pretensao salarial do POST é: </strong>" . $_POST['pretensaoSalarial'] . "<br><br>";

	$cadastro->adicionarDadosInteresseVaga($_POST['cargo'], 
		                              $_POST['experiencia'], 
		                              $_POST['regiaoInteresse'], 
		                              $_POST['pretensaoSalarial']);

	/**
	 * Adicionar dados de Educação no Banco de Dados
	 */
	
	/**
	 * Se o usuário não ingressou no ensino superior,
	 * sete a variavel ensinoSuperior para FALSE
	 */
	echo "<hr><br><strong>A escolaridade do POST é: </strong>" . $_POST['escolaridade'] . "<br><br>";
	echo "<hr><br><strong>O ano de formação do POST é: </strong>" . $_POST['anoFormacao'] . "<br><br>";
	echo "<hr><br><strong>O nome da instituicao do POST é: </strong>" . $_POST['nomeInstituicao'] . "<br><br>";
	echo "<hr><br><strong>O nome do curso do POST é: </strong>" . $_POST['nomeCurso'] . "<br><br>";

	/**
	 * $ensinoSuperior, 
	   $escolaridade, 
	   $anoFormacao, 
	   $nomeInstituicao, 
	   $nomeCurso
	 */
	$cadastro->adicionarDadosEducacao( $_POST['escolaridade'], 
	                                   $_POST['anoFormacao'], 
	                                   $_POST['nomeInstituicao'],
	                                   $_POST['nomeCurso']);

	/**
	 * Adicionar dados de Experiência Profissional no Banco de Dados
	 */
	echo "<hr><br><strong>O possuiExperiencia do POST é: </strong>" . $_POST['possuiExperiencia'] . "<br><br>";
	echo "<hr><br><strong>A nomeInstituicao do POST é: </strong>" . $_POST['nomeInstituicao'] . "<br><br>";
	echo "<hr><br><strong>O inicioMes do POST é: </strong>" . $_POST['inicioMes'] . "<br><br>";
	echo "<hr><br><strong>O inicioAno do POST é: </strong>" . $_POST['inicioAno'] . "<br><br>";
	echo "<hr><br><strong>O fimMes do POST é: </strong>" . $_POST['fimMes'] . "<br><br>";
	echo "<hr><br><strong>O fimAno do POST é: </strong>" . $_POST['fimAno'] . "<br><br>";
	echo "<hr><br><strong>O segmentoDaEmpresa do POST é: </strong>" . $_POST['segmentoDaEmpresa'] . "<br><br>";
	echo "<hr><br><strong>O cargoQueOcupou do POST é: </strong>" . $_POST['cargoQueOcupou'] . "<br><br>";
	echo "<hr><br><strong>O textoResponsabilidades do POST é: </strong>" . $_POST['textoResponsabilidades'] . "<br><br>";

	echo "<h1 style='text-align: center;'>Resultados READ do Banco de Dados</h1>";

	echo "</div>";

	/**
	$possuiExperiencia, 
	$nomeInstituicao, 
	$inicioMes, 
	$inicioAno, 
	$fimMes, 
	$fimAno, 
	$segmentoDaEmpresa, 
	$cargoQueOcupou, 
	$textoResponsabilidades
	 */
	$cadastro->adicionarDadosExperienciasProfissionais($_POST['possuiExperiencia'], 
					                                   $_POST['nomeInstituicao'], 
					                                   $_POST['inicioMes'], 
					                                   $_POST['inicioAno'],
					                                   $_POST['fimMes'],
					                                   $_POST['fimAno'], 
					                                   $_POST['segmentoDaEmpresa'], 
					                                   $_POST['cargoQueOcupou'],
					                                   $_POST['textoResponsabilidades']);

}

?>

<!DOCTYPE html>

<html lang="pt-BR">

	<head>
		<meta charset="utf-8">
		<title>Dados Cadastrados no Banco de Dados</title>
		<meta name=description content="Projeto realizado durante o curso de Sistemas Interativos WEB - USP 2018">
		<meta name=viewport content="width=device-width, initial-scale=1">
		<script src="main.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="icon" href="images/favicon.png" type="image/png">
		<style>
			
		</style>
	</head>

	<body>
		
		<div class="div-main">
			<h1 style="text-align: center;">Dados do Banco de Dados</h1>
			<br>
			<h3 style="text-align: center;"><a href="index.php">Cadastrar Novos Dados</a></h3>
			<br>
			<h2>Dados Pessoais Cadastrados</h2>
			<table border='1' width="1200">

	            <tr>
	                <th>ID</th>
	                <th>Nome</th>
	                <th>Email</th>
	                <th>Celular</th>
	                <th>Gênero</th>
	                <th>Estado Civil</th>
	                <th>Nacionalidade</th>
	                <th>CPF</th>
	                <th>Update</th>
	                <th>Delete</th>
	            </tr>

				<?php
		            $dadosPessoaisCadastrados = $cadastro->getDadosPessoaisCadastrados();
				    foreach($dadosPessoaisCadastrados as $dadoPessoalCadastrado):
				?>
				<tr>
	                <td><?php echo $dadoPessoalCadastrado['id']; ?></td>
	                <td><?php echo $dadoPessoalCadastrado['nome']; ?></td>
	                <td><?php echo $dadoPessoalCadastrado['email']; ?></td>
	                <td><?php echo $dadoPessoalCadastrado['celular']; ?></td>
	                <td><?php echo $dadoPessoalCadastrado['genero']; ?></td>
	                <td><?php echo $dadoPessoalCadastrado['estadoCivil']; ?></td>
	                <td><?php echo $dadoPessoalCadastrado['nacionalidade']; ?></td>
	                <td><?php echo $dadoPessoalCadastrado['cpf']; ?></td>
	                <td><a href="update-pessoal.php?id=<?php echo $dadoPessoalCadastrado['id']; ?>">UPDATE</a></td>
                    <td><a href="delete-pessoal.php?id=<?php echo $dadoPessoalCadastrado['id']; ?>">DELETE</a></td>
	            </tr>

	            <?php endforeach; ?>

			</table>
			<br>
			

			<h2>Dados Endereco Cadastrados</h2>
			<table border='1' width="1200">

	            <tr>
	                <th>ID</th>
	                <th>Rua</th>
	                <th>Bairro</th>
	                <th>Número Residencia</th>
	                <th>Update</th>
	                <th>Delete</th>
	            </tr>

				<?php
		            $dadosEnderecosCadastrados = $cadastro->getDadosEnderecoCadastrados();
				    foreach($dadosEnderecosCadastrados as $dadoEnderecoCadastrado):
				?>
				<tr>
	                <td><?php echo $dadoEnderecoCadastrado['id']; ?></td>
	                <td><?php echo $dadoEnderecoCadastrado['rua']; ?></td>
	                <td><?php echo $dadoEnderecoCadastrado['bairro']; ?></td>
	                <td><?php echo $dadoEnderecoCadastrado['numeroResidencia']; ?></td>
	                <td><a href="update-endereco.php?id=<?php echo $dadoEnderecoCadastrado['id']; ?>">UPDATE</a></td>
                    <td><a href="delete-endereco.php?id=<?php echo $dadoEnderecoCadastrado['id']; ?>">DELETE</a></td>
	            </tr>

	            <?php endforeach; ?>

			</table>
			<br>

			<h2>Dados Interesse Vaga Cadastrados</h2>
			<table border='1' width="1200">

	            <tr>
	                <th>ID</th>
	                <th>Cargo</th>
	                <th>Experiencia</th>
	                <th>Região Interesse</th>
	                <th>Pretensão Salarial</th>
	                <th>Update</th>
	                <th>Delete</th>
	            </tr>

				<?php
		            $dadosInteresseDeVagaCadastrados = $cadastro->getInteresseDeVagaCadastrados();
				    foreach($dadosInteresseDeVagaCadastrados as $dadoInteresseVagaCadastrado):
				?>
				<tr>
	                <td><?php echo $dadoInteresseVagaCadastrado['id']; ?></td>
	                <td><?php echo $dadoInteresseVagaCadastrado['cargo']; ?></td>
	                <td><?php echo $dadoInteresseVagaCadastrado['experiencia']; ?></td>
	                <td><?php echo $dadoInteresseVagaCadastrado['regiaoInteresse']; ?></td>
	                <td><?php echo $dadoInteresseVagaCadastrado['pretensaoSalarial']; ?></td>
	                <td><a href="update-interesse.php?id=<?php echo $dadoInteresseVagaCadastrado['id']; ?>">UPDATE</a></td>
                    <td><a href="delete-interesse.php?id=<?php echo $dadoInteresseVagaCadastrado['id']; ?>">DELETE</a></td>
	            </tr>

	            <?php endforeach; ?>

			</table>
			<br>

			<h2>Dados Educação Cadastrados</h2>
			<table border='1' width="1200">

	            <tr>
	                <th>ID</th>
	                <th>Escolaridade</th>
	                <th>Ano Formação</th>
	                <th>Nome Instituição</th>
	                <th>Nome Curso</th>
	                <th>Update</th>
	                <th>Delete</th>
	            </tr>

				<?php
		            $dadosEducacaoCadastrados = $cadastro->getEducacaoCadastrados();
				    foreach($dadosEducacaoCadastrados as $dadoEducacaoCadastrado):
				?>
				<tr>
	                <td><?php echo $dadoEducacaoCadastrado['id']; ?></td>
	                <td><?php echo $dadoEducacaoCadastrado['escolaridade']; ?></td>
	                <td><?php echo $dadoEducacaoCadastrado['anoFormacao']; ?></td>
	                <td><?php echo $dadoEducacaoCadastrado['nomeInstituicao']; ?></td>
	                <td><?php echo $dadoEducacaoCadastrado['nomeCurso']; ?></td>
	                <td><a href="update-educacao.php?id=<?php echo $dadoEducacaoCadastrado['id']; ?>">UPDATE</a></td>
                    <td><a href="delete-educacao.php?id=<?php echo $dadoEducacaoCadastrado['id']; ?>">DELETE</a></td>
	            </tr>

	            <?php endforeach; ?>

			</table>
			<br>			

			<h2>Dados Experiências Profissionais Cadastrados</h2>
			
			<table border='1' width="1200">

	            <tr>
	                <th>ID</th>
	                <th>Possui Experiência?</th>
	                <th>Nome da Empresa</th>
	                <th>Do Mês</th>
	                <th>Do Ano</th>
	                <th>Até Mês</th>
	                <th>Até Ano</th>
	                <th>Segmento Empresa</th>
	                <th>Cargo Que Ocupou</th>
	                <th>Responsabilidades</th>
	                <th>Update</th>
	                <th>Delete</th>
	            </tr>

				<?php
		            $dadosExperienciasProfissionaisCadastrados = $cadastro->getExperienciasProfissionaisCadastrados();
				    foreach($dadosExperienciasProfissionaisCadastrados as $dadoExperienciaProfissionalCadastrado):
				?>
				<tr>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['id']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['possuiExperiencia']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['nomeEmpresa']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['inicioMes']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['inicioAno']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['fimMes']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['fimAno']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['segmentoDaEmpresa']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['cargoQueOcupou']; ?></td>
	                <td><?php echo $dadoExperienciaProfissionalCadastrado['textoResponsabilidades']; ?></td>
	                <td><a href="update-profissional.php?id=<?php echo $dadoExperienciaProfissionalCadastrado['id']; ?>">UPDATE</a></td>
                    <td><a href="delete-profissional.php?id=<?php echo $dadoExperienciaProfissionalCadastrado['id']; ?>">DELETE</a></td>
	            </tr>

	            <?php endforeach; ?>

			</table>
			
			<br><br>
			<h4 style="text-align: center;">© 2018 <a href="https://galhardoo.com">Alex Galhardo</a> - ICMC USP 2018</h4>
			<br><br>

		</div>

	</body>

</html>