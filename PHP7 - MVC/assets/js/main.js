/**
 * Projeto Desenvolvido para a Atividade 2 - Formulário de Cadastro
 *
 * Curso Sistemas Interativos WEB
 *
 * Prof. Rudinei Goularte (rudinei@icmc.usp.br)
 *
 * ICMC USP 2018
 *
 * Preview Project: https://forms.galhardoo.com/2
 *
 * Source Code: https://github.com/AlexGalhardo/Trabalho-Formulario
 *
 * Alex Galhardo Vieira
 * Github: https://github.com/AlexGalhardo	
 * Email: aleexgvieira@gmail.com / alexgalhardo@usp.br
 * Site: https://galhardoo.com
 */

/**
 * Educação
 *
 * Responsável por cuidar do fieldset Education
 */

function showDivEducacao(){
	if(document.getElementById("incompleteHighSchool").checked == false && document.getElementById("completeHighSchool").checked == false ){
		document.getElementById("div_education").removeAttribute("hidden");
	}
}
function hiddenDivEducacao(){
	document.getElementById("div_education").setAttribute("hidden", "true");
}

/**
 * Experiências profissionais
 *
 * Funções para verificar formulário de experiências profissionais
 *
 * Se o usuário possuir experiência profissional prévia,
 * peça para inserir os cargos e atribuições ocupados no último cargo
 */
function showAdicionarEmpresa(){
	var elPossuiExp = document.getElementById("hasExperience");
	var buttonAdicionarExp = document.getElementById("button_add_professional_exp");
	if(elPossuiExp.checked){
		buttonAdicionarExp.removeAttribute("hidden");
	} 
}

function hiddenAdicionarEmpresa(){
	var elPossuiExp = document.getElementById("div_has_professional_exp");
	var buttonAdicionarExp = document.getElementById("button_add_professional_exp");
	if(!elPossuiExp.checked){
		buttonAdicionarExp.setAttribute("hidden", "true");
	}
	hiddenAdicionarDadosEmpresa();
}

function showAdicionarDadosEmpresa(){
	var elDivDadosEmpresa = document.getElementById("div_has_professional_exp");
	elDivDadosEmpresa.removeAttribute("hidden");
}

function hiddenAdicionarDadosEmpresa(){
	var elDivDadosEmpresa = document.getElementById("div_has_professional_exp");
	elDivDadosEmpresa.setAttribute("hidden", "true");
}

/**
 * Última função a ser chamada
 * Verifica todos os dados inseridos no formulário
 *
 * Se tudo estiver beleza, mande-os para o servidor
 */
function cadastrarDados(){

	/************ Dados Pessoais *************/
	/**
	 * Verifica se o usuário digitou um nome válido
	 */
	var elNome = document.getElementById("completeName");
	var spanErrorNome = document.getElementById("errorName");
	if(elNome.value.toString().length < 8){
		spanErrorNome.innerHTML = "Digit a name with at least 8 characters!";
	} else { spanErrorNome.innerHTML = "";}
	/**
	 *Verifica se o usuário digitou um email válido
	 */
	var elEmail = document.getElementById("email");
	var spanErrorEmail = document.getElementById("errorEmail");
	if(elEmail.value == ''){
		spanErrorEmail.innerHTML = "You need enter a email!";
	}
	else if (elEmail.value != ''){
		/**
		 * Regex para verificar se o email é válido
		 *
		 * Referência: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
		 */
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		/**
		 * Se o retorno da Regex for falso, avise o erro
		 */
		if(!re.test(String(elEmail.value).toLowerCase())){
			spanErrorEmail.innerHTML = "Enter a valid email!";
		}
	} else {
		spanErrorEmail.innerHTML = "" 
	};
	/**
	 * Verifica se o número do celular possui pelo menos 11 digitos
	 */
	var elCelular = document.getElementById("cellphone");
	var spanErrorCelular = document.getElementById("errorCellphone");
	if(elCelular.value.toString().length < 11 || elCelular.value.toString().length > 11){
		spanErrorCelular.innerHTML = "You need digit a valid cellphone with at least 11 integers numbers!";
	} else { spanErrorCelular.innerHTML = ""; }
	/**
	 * Verifica se o gênero foi selecionado
	 */
	var elGenero = document.getElementsByName("gender");
	var spanErrorGenero = document.getElementById("errorGender");
	var generoSelecionado = false;
	for(var i = 0, length = elGenero.length; i < elGenero.length; i++){
		if(elGenero[i].checked){
			generoSelecionado = true;
			break;
		}
	}
	if(!generoSelecionado){
		spanErrorGenero.innerHTML = "You need to choose at least one option below!";
	} else {
		spanErrorGenero.innerHTML = "";
	}
	/**
	 * Verifica se o usuário digitou um CPF válido
	 */
	var elCPF = document.getElementById("numberID");
	var spanErrorCPF = document.getElementById("errorNumberID");
	if(elCPF.value.toString().length < 11 || elCPF.value.toString().length > 11){
		spanErrorCPF.innerHTML = "You need digit a valid numberID with at least 11 characters!";
	} else {
		spanErrorCPF.innerHTML = "";
	}


	/************ Interesse de Vaga *************/
	/**
	 * Verifica se o usuário seleciou algum cargo
	 */
	var elCargo = document.getElementsByName("post");
	var spanErrorCargo = document.getElementById("errorPost");
	var cargoChecked = false;
	for(var i = 0, length = elCargo.length; i < elCargo.length; i++){
		if(elCargo[i].checked){

			cargoChecked = true;
			break;
		}
	}
	if(!cargoChecked){
		spanErrorCargo.innerHTML = "You need to choose at leat a option below!";
	} else {
		spanErrorCargo.innerHTML = ""; 
	}
	/**
	 * Verifica se o usuário seleciou alguma experiência
	 */
	var elExperiencia = document.getElementsByName("positionHeld");
	var spanErrorExperiencia = document.getElementById("errorPositionHeld");
	var experienciaChecked = false;
	for(var i = 0, length = elExperiencia.length; i < elExperiencia.length; i++){
		if(elExperiencia[i].checked){
			experienciaChecked = true;
			break;
		}
	}
	if(!experienciaChecked){
		spanErrorExperiencia.innerHTML = "You need to choose at least one experience below!";
	} else {
		spanErrorCargo.innerHTML = "";
	}
	/**
	 * Verifica se a pretensão salarial esta válido
	 */
	var elPretensaoSalarial = document.getElementById("salaryPretension");
	var spanErrorPretensaoSalarial = document.getElementById("errorSalaryPretension");
	if(elPretensaoSalarial.value <= 0){
		spanErrorPretensaoSalarial.innerHTML = "You need to enter a valid integer number with your salary pretension!";
	} else {
		spanErrorPretensaoSalarial.innerHTML = "";
	}


	/************ Educação *************/
	/**
	 * Verifica se alguma opção de formação academia foi selecionado
	 */
	var elRadioEducacao = document.getElementsByName("schooling");
	var spanErrorEducacao = document.getElementById("errorSchooling");
	var radioEducacaoChecked = false;
	var textNodeEducacao;
	for(var i = 0; i < elRadioEducacao.length; i++){
		if(elRadioEducacao[i].checked){

   			radioEducacaoChecked = true;
   			break;
		}
	}
	if(!radioEducacaoChecked){
		spanErrorEducacao.innerHTML = "You need to choose a option below!";
	}
	/**
	 * Verifica se o nome do curso esta setado
	 */
	if(document.getElementById("courseName").value == ''){
		document.getElementById("errorCourseName").innerHTML = "You need digit your course name!";
	} else {
		document.getElementById("errorCourseName").innerHTML = "";
	}

	/**
	 * Verifica se o nome da instituição de ensino esta setado                                                [description]
	 */
	if(document.getElementById("institutionName").value == ''){
		document.getElementById("errorInstitutionName").innerHTML = "Você precisa dizer o nome da instituição de ensino em que se formou!";
	} else {
		document.getElementById("errorInstitutionName").innerHTML = "";
	}

	/**
	 * Verifica se o ano de formação esta setado                                           [description]
	 */
	if(document.getElementById("graduate").value == ''){
		document.getElementById("errorGraduate").innerHTML = "Você precisa informar o ano de formação!";
	} else { 
		document.getElementById("errorGraduate").innerHTML = "";
	}

	/**
	 * Se o campo "Possui Experiência Profissional" estiver setado
	 * verifica se os campos foram preenchidos
	 */
	if(document.getElementById("hasExperience").checked){
		/**
		 * Verifica se o cargo que ocupou está setado
		 */
		var cargoQueOcupou = document.getElementById("positionHeld");
		if(cargoQueOcupou.value == ''){
			document.getElementById("errorPositionHeld").innerHTML = "Você precisa adicionar o último cargo que ocupou!";
		}
		else {

			document.getElementById("errorPositionHeld").innerHTML = "";
		}

		/**
		 * Verifica se o nome da empresa está setado
		 */
		var nomeEmpresa = document.getElementById("companyName");
		if(nomeEmpresa.value == ''){
			document.getElementById("errorCompanyName").innerHTML = "Você precisa adicionar o nome da última em que trabalhou!";
		}else {
			document.getElementById("errorCompanyName").innerHTML = "";
		}

		/**
		 * Verifica se o usuário selecionou algum segmento
		 */
		var elSegmento = document.getElementsByName("businessSegment");
		var spanErrorSegmento = document.getElementById("errorBusinessSegment");
		var segmentoChecked = false;
		for(var i = 0; i < elSegmento.length; i++){
			if(elSegmento[i].checked){
				segmentoChecked = true;
				break;
			}
		}
		if(!segmentoChecked){
			spanErrorSegmento.innerHTML = "Você precisa selecionar um dos segmentos abaixo!";
		} else {
			spanErrorSegmento.innerHTML = "";
		}

		/**
		 * Verifica se o usuário digitou alguma coisa no campo de responsabilidades profissionais
		 */
		var elResponsabilidades = document.getElementById("jobResponsabilities");
		var spanErrorResponsabilidades = document.getElementById("errorJobResponsabilities");
		if(elResponsabilidades.value == ''){
			spanErrorResponsabilidades.innerHTML = "Por favor, diga nos um pouco mais das suas atribuições e responsabilidades do último cargo exercido."
		} else if(elResponsabilidades.value.toString().length < 50){
			spanErrorResponsabilidades.innerHTML = "Digite uma resposta válida com pelo menos 50 caracteres!"
		} else {
			spanErrorResponsabilidades.innerHTML = "";
		}
	}



	/**
	 * Verifica se a variavel 'formularioValido' é true,
	 * que certifica que todos os campos inseridos do formulário estão corretos
	 */
	// Avise que os dados foram cadastrados com sucesso
	alert("Data Send with JavaScript! See above page to see valid inputs.");
	
	// Cria uma div no topo da página, mostrando os dados inseridos no formulário
	var divDadosInseridos = document.getElementById("div_data_send");
	divDadosInseridos.removeAttribute("hidden");
						/* Dados Pessoais */
	// NOME
	var elPNome = document.createElement("p");
	var stringNome = "Nome: " + document.getElementById("completeName").value;
	var textNodeNome = document.createTextNode(stringNome);
	elPNome.appendChild(textNodeNome);
	divDadosInseridos.appendChild(elPNome);
	// Email
	var elPEmail = document.createElement("p");
	var stringEmail = "Email: " + document.getElementById("email").value;
	var textNodeEmail = document.createTextNode(stringEmail);
	elPEmail.appendChild(textNodeEmail);
	divDadosInseridos.appendChild(elPEmail);
	// Celular
	var elPCelular = document.createElement("p");
	var stringCelular = "Celular: " + document.getElementById("cellphone").value;
	var textNodeCelular = document.createTextNode(stringCelular);
	elPCelular.appendChild(textNodeCelular);
	divDadosInseridos.appendChild(elPCelular);
	// Genero
	var elPGenero = document.createElement("p");
	var elGeneroRadios = document.getElementsByName("gender");
	var textNodeGenero;
	for (var i = 0, length = elGeneroRadios.length; i < length; i++){
		if (elGeneroRadios[i].checked){
	  		textNodeGenero = elGeneroRadios[i].value;
	  		break;
	 	}
	}
	elPGenero.innerHTML = "Gender: " + textNodeGenero;
	divDadosInseridos.appendChild(elPGenero);
	// Estado Civil
	var elPEstadoCivil = document.createElement("p");
	var stringEstadoCivil = "Marital Status: " + document.getElementById("maritalStatus").value;
	var textNodeEstadoCivil = document.createTextNode(stringEstadoCivil);
	elPEstadoCivil.appendChild(textNodeEstadoCivil);
	divDadosInseridos.appendChild(elPEstadoCivil);
	// Nacionalidade
	var elPNacionalidade = document.createElement("p");
	var stringNacionalidade = "Nationality: " + document.getElementById("nationality").value;
	var textNodeNacionalidade = document.createTextNode(stringNacionalidade);
	elPNacionalidade.appendChild(textNodeNacionalidade);
	divDadosInseridos.appendChild(elPNacionalidade);
	// CPF
	var elPCPF = document.createElement("p");
	var stringCPF = "NumberID: " + document.getElementById("numberID").value;
	var textNodeCPF = document.createTextNode(stringCPF);
	elPCPF.appendChild(textNodeCPF);
	divDadosInseridos.appendChild(elPCPF);

						/* Dados de Endereço */
	// Rua
	var elPRua = document.createElement("p");
	var stringRua = "Street: " + document.getElementById("street").value;
	var textNodeRua = document.createTextNode(stringRua);
	elPRua.appendChild(textNodeRua);
	divDadosInseridos.appendChild(elPRua);
	// Bairro
	var elPBairro = document.createElement("p");
	var stringBairro = "Neighborhood: " + document.getElementById("neighborhood").value;
	var textNodeBairro = document.createTextNode(stringBairro);
	elPBairro.appendChild(textNodeBairro);
	divDadosInseridos.appendChild(elPBairro);
	// Numero Residencia
	var elPNumeroResidencia = document.createElement("p");
	var stringNumeroResidencia = "Residence Number: " + document.getElementById("residenceNumber").value;
	var textNodeNumeroResidencia = document.createTextNode(stringNumeroResidencia);
	elPNumeroResidencia.appendChild(textNodeNumeroResidencia);
	divDadosInseridos.appendChild(elPNumeroResidencia);

						/* Dados de Interesse de Vaga */
	// Cargo
	var elPCargo = document.createElement("p");
	var elRadioCargo = document.getElementsByName("post");
	var textNodeCargo;
	for(var i = 0, length = elRadioCargo.length; i < length; i++){
		if(elRadioCargo[i].checked){
			cargoChecked = true;
			textNodeCargo = elRadioCargo[i].value;
			break;
		}
	}
	elPCargo.innerHTML = "Interest Post: " + textNodeCargo;
	divDadosInseridos.appendChild(elPCargo);
	// Experiencia no Cargo
	var elPExperienciaCargo = document.createElement("p");
	var elRadioExperienciaCargo = document.getElementsByName("experience");
	var textNodeExperienciaCargo;
	for(var i = 0, length = elRadioExperienciaCargo.length; i < length; i++){
		if(elRadioExperienciaCargo[i].checked){
			textNodeExperienciaCargo = elRadioExperienciaCargo[i].value;
			break;
		}
	}
	elPExperienciaCargo.innerHTML = "Experience: " + textNodeExperienciaCargo;
	divDadosInseridos.appendChild(elPExperienciaCargo);
	// Regiao de Interesse
	var elPRegiaoInteresse = document.createElement("p");
	var stringRegiaoInteresse = "Interest Region: " + document.getElementById("interestRegion").value;
	var textNodeRegiaoInteresse = document.createTextNode(stringRegiaoInteresse);
	elPRegiaoInteresse.appendChild(textNodeRegiaoInteresse);
	divDadosInseridos.appendChild(elPRegiaoInteresse);
	// Pretensao Salarial
	var elPPretensaoSalarial = document.createElement("p");
	var stringPretensaoSalarial = "Pretensão Salarial: " + document.getElementById("salaryPretension").value;
	var textNodePretensaoSalarial = document.createTextNode(stringPretensaoSalarial);
	elPPretensaoSalarial.appendChild(textNodePretensaoSalarial);
	divDadosInseridos.appendChild(elPPretensaoSalarial);


    					/* Dados de Educação */
    // Formação Acadêmica
	var elPFormacaoAcademica = document.createElement("p");
	var elRadioFormacaoAcademica = document.getElementsByName("education");
	var textNodeFormacaoAcademica;
	for(var i = 0, length = elRadioFormacaoAcademica.length; i < length; i++){
		if(elRadioFormacaoAcademica[i].checked){
			textNodeFormacaoAcademica = elRadioFormacaoAcademica[i].value;
			break;
		}
	}
	elPFormacaoAcademica.innerHTML = "Education: " + textNodeFormacaoAcademica;
	divDadosInseridos.appendChild(elPFormacaoAcademica);
	// Ano de Formação
	var elPAnoFormacao = document.createElement("p");
	var stringAnoFormacao = "Graduate: " + document.getElementById("graduate").value;
	var textNodeAnoFormacao = document.createTextNode(stringAnoFormacao);
	elPAnoFormacao.appendChild(textNodeAnoFormacao);
	divDadosInseridos.appendChild(elPAnoFormacao);
	// verifica se o candidato possui experiência com nível superior, se tiver
	// também diga os dados inseridos
	if(!document.getElementById("incompleteHighSchool").checked || !document.getElementById("incompleteHighSchool").checked){
		// Nome do Curso
		var elPNomeCurso = document.createElement("p");
		var stringNomeCurso = "Course Name: " + document.getElementById("courseName").value;
		var textNodeNomeCurso = document.createTextNode(stringNomeCurso);
		elPNomeCurso.appendChild(textNodeNomeCurso);
		divDadosInseridos.appendChild(elPNomeCurso);

		// Nome da Instituição
		var elPNomeInstituicao = document.createElement("p");
		var stringNomeInstituicao = "Instituion Name: " + document.getElementById("institutionName").value;
		var textNodeNomeInstituicao = document.createTextNode(stringNomeInstituicao);
		elPNomeInstituicao.appendChild(textNodeNomeInstituicao);
		divDadosInseridos.appendChild(elPNomeInstituicao);
	}

						/* Dados Experiencia Profissional */
	// verifica se possui experiencia profissional
	if(document.getElementById("hasExperience").checked){
        // O candidato possui experiencia profissional
		var elPossuiExperienciaProfissional = document.createElement("p");
		var textNodePossuiExperienciaProfissional = document.createTextNode("The candidate HAS professional experience.");
		elPossuiExperienciaProfissional.appendChild(textNodePossuiExperienciaProfissional);
		divDadosInseridos.appendChild(elPossuiExperienciaProfissional);
		// Nome da Empresa
		var elPNomeEmpresa = document.createElement("p");
		var stringNomeEmpresa = "Company Name: " + document.getElementById("companyName").value;
		var textNodeNomeEmpresa = document.createTextNode(stringNomeEmpresa);
		elPNomeEmpresa.appendChild(textNodeNomeEmpresa);
		divDadosInseridos.appendChild(elPNomeEmpresa);
		// Inicio Mes
		var elPInicioMes = document.createElement("p");
		var stringInicioMes = "Inicio Mes: " + document.getElementById("startMonth").value;
		var textNodeInicioMes = document.createTextNode(stringInicioMes);
		elPInicioMes.appendChild(textNodeInicioMes);
		divDadosInseridos.appendChild(elPInicioMes);
		// Inicio Ano
		var elPInicioAno = document.createElement("p");
		var stringInicioAno = "Inicio Ano: " + document.getElementById("startYear").value;
		var textNodeInicioAno = document.createTextNode(stringInicioAno);
		elPInicioAno.appendChild(textNodeInicioAno);
		divDadosInseridos.appendChild(elPInicioAno);
		// Fim Mes
		var elPFimMes = document.createElement("p");
		var stringFimMes = "Fim Mes: " + document.getElementById("endMonth").value;
		var textNodeFimMes = document.createTextNode(stringFimMes);
		elPFimMes.appendChild(textNodeFimMes);
		divDadosInseridos.appendChild(elPFimMes);
		// Fim Ano
		var elPFimAno = document.createElement("p");
		var stringFimAno = "Fim Ano: " + document.getElementById("endYear").value;
		var textNodeFimAno = document.createTextNode(stringFimAno);
		elPFimAno.appendChild(textNodeFimAno);
		divDadosInseridos.appendChild(elPFimAno);
		// Segmento
		var elPSegmento = document.createElement("p");
		var elRadioSegmento = document.getElementsByName("businessSegment");
		var textNodeSegmento;
		for(var i = 0, length = elRadioSegmento.length; i < length; i++){
			if(elRadioSegmento[i].checked){
				textNodeSegmento = elRadioSegmento[i].value;
				break;
			}
		}
		elPSegmento.innerHTML = "Business Segment: " + textNodeSegmento;
		divDadosInseridos.appendChild(elPSegmento);
		// Cargo que ocupou
		var elPCargoOcupou = document.createElement("p");
		var stringCargoOcupou = "Position Held: " + document.getElementById("positionHeld").value;
		var textNodeCargoOcupou = document.createTextNode(stringCargoOcupou);
		elPCargoOcupou.appendChild(textNodeCargoOcupou);
		divDadosInseridos.appendChild(elPCargoOcupou);
		// Responsabilidades no Cargo
		var elPResponsabilidadesCargo = document.createElement("p");
		var stringResponsabilidadesCargo = "Job Responsabilities: " + document.getElementById("jobResponsabilities").value;
		var textNodeResponsabilidadesCargo = document.createTextNode(stringResponsabilidadesCargo);
		elPResponsabilidadesCargo.appendChild(textNodeResponsabilidadesCargo);
		divDadosInseridos.appendChild(elPResponsabilidadesCargo);

	} else {
		var elPExperienciaProfissional = document.createElement("p");
		var textNodeExperienciaProfissional = document.createTextNode("The candidate DOESN\'T has professional experience.");
		elPExperienciaProfissional.appendChild(textNodeExperienciaProfissional);
		divDadosInseridos.appendChild(elPExperienciaProfissional);
	}
	

	var HR = document.createElement("hr");
	divDadosInseridos.appendChild(HR);
}