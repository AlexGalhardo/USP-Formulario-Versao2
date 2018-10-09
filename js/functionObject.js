	// colocar em cima da página os valores setados
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



	/**
	 * Verificar se os campos foram preenchidos
	 */
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
 * Construindo com Function Object
 */
function fieldsetEducation() {
  this.elRadioEducation = document.getElementById("schooling");
  this.elSpanErrorRadioEducation = document.getElementById("errorSchooling");
  this.attrRadioEducationChecked = false;
  this.textNodeEducation; // undefined 
}

// create prototype method to verify if elRadioEducation is checked
fieldsetEducation.prototype.verifyIfElementRadioEducationIsChecked = function(){
	for(let i = 0; i < this.elRadioEducation.length; i++){
		if(this.elRadioEducation[i].checked){
			this.attrRadioEducationChecked = true;
			break;
		}
	}
	if(!this.attrRadioEducationChecked){
		this.elSpanErrorRadioEducation.innerHTML = "You need to choose a option below!";
	}
}