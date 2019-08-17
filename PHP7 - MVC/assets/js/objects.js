/**
 * Projeto Desenvolvido para a Atividade 2 - Formulário de Cadastro
 *
 * Curso Sistemas Interativos WEB
 *
 * Prof. Rudinei Goularte (rudinei@icmc.usp.br)
 *
 * ICMC USP 2018
 *
 * Versão OBJECTS
 *
 * Preview Project: https://forms.galhardoo.com/version2
 *
 * Source Code: https://github.com/AlexGalhardo/forms.galhardoo.com-version2
 *
 * Alex Galhardo Vieira
 * Github: https://github.com/AlexGalhardo  
 * Email: aleexgvieira@gmail.com / alexgalhardo@usp.br
 * Site: https://galhardoo.com
 */

const ValidateCurriculumForms = {
	newTopDivElementsRegistered: document.getElementById("div_data_send"),
}

function cleanDivJavaScriptElementsRegistered(){
    while (ValidateCurriculumForms.newTopDivElementsRegistered.firstChild) {
        ValidateCurriculumForms.newTopDivElementsRegistered.removeChild(ValidateCurriculumForms.newTopDivElementsRegistered.firstChild);
    }
}

function stringifyAndStorageAllFieldsetValues(){

    const objectAllFieldsetValues = {

        completeName: FieldsetPersonal.getElementCompleteName.value,  
        email: FieldsetPersonal.getElementEmail.value,
        cellphone: FieldsetPersonal.getElementCellphone.value,
        gender: FieldsetPersonal.getGender(),  
        maritalStatus: FieldsetPersonal.getElementsOptionMaritalStatus.value,
        nationality: FieldsetPersonal.getElementsOptionNationality.value,
        numberID: FieldsetPersonal.getElementNumberID.value,

        street: FieldsetAddress.getElementStreet.value,  
        neighborhood: FieldsetAddress.getElementNeighborhood.value,
        residenceNumber: FieldsetAddress.getElementResidenceNumber.value,

        jobPost: FieldsetJobInterest.getPostName(),  
        jobExperience: FieldsetJobInterest.getJobExperience(),
        startMonth: FieldsetJobInterest.getElementsOptionInterestRegion.value,
        startYear: FieldsetJobInterest.getElementSalaryPretension.value,

        schooling: FieldsetEducation.getSchoolingValue(),  
        graduate: FieldsetEducation.getElementGraduate.value,
        courseName: FieldsetEducation.getElementCourseName.value,
        institutionName: FieldsetEducation.getElementInstitutionName.value,

        hasExperience: FieldsetProfessional.hasProfessionalExperience,  
        companyName: FieldsetProfessional.getElementCompanyName.value,
        startMonth: FieldsetProfessional.getElementStartMonth.value,
        startYear: FieldsetProfessional.getElementStartYear.value,
        endMonth: FieldsetProfessional.getElementEndMonth.value,
        endYear: FieldsetProfessional.getElementEndYear.value,
        businessSegment: FieldsetProfessional.getBusinessSegmentValue(), 
        positionHeld: FieldsetProfessional.getElementPositionHeld.value,
        jobResponsabilities: FieldsetProfessional.getElementJobResponsabilities.value
    }

    const AllFormsValuesJSON = JSON.stringify(objectAllFieldsetValues);

    localStorage.setItem("AllFormsValuesJSON", AllFormsValuesJSON);
}

function verifyCurriculumForms(){

    cleanDivJavaScriptElementsRegistered();

    verifyFieldSetPersonal();
    FieldsetPersonal.showElementsPersonalRegistered();
    stringifyAndStoragePersonalFieldsetValues();

    verifyFieldSetAddress();
    FieldsetAddress.showElementsAddressRegistered();
    stringifyAndStorageAddressFieldsetValues();

    verifyFieldSetJobInterest();
    FieldsetJobInterest.showElementsJobInterestRegistered();
    stringifyAndStorageJobInterestFieldsetValues();

    verifyFieldSetEducation();
    FieldsetEducation.showElementsEducationRegistered();
    stringifyAndStorageEducationFieldsetValues();

    verifyFieldsetProfessionalExperience();
    FieldsetProfessional.showElementsProfessionalExperienceRegistered();
    stringifyAndStorageProfessionalFieldsetValues();

    stringifyAndStorageAllFieldsetValues();
}





/**
 * PERSONAL
 */
const FieldsetPersonal = {

	getElementCompleteName: document.getElementById("completeName"),
	getSpanErrorCompleteName: document.getElementById("errorCompleteName"),

    getElementEmail: document.getElementById("email"),
    getSpanErrorEmail: document.getElementById("errorEmail"),

    getElementCellphone: document.getElementById("cellphone"),
    getSpanErrorCellphone: document.getElementById("errorCellphone"),

    getElementsRadioGender: document.getElementsByName("gender"),
    getSpanErrorGender: document.getElementById("errorGender"),

    getElementsOptionMaritalStatus: document.getElementById("maritalStatus"),
    getSpanErrorMaritalStatus: document.getElementById("errorMaritalStatus"),

    getElementsOptionNationality: document.getElementById("nationality"),
    getSpanErrorNationality: document.getElementById("errorNationality"),

    getElementNumberID: document.getElementById("numberID"),
    getSpanErrorNumberID: document.getElementById("errorNumberID"),

    newElementParagraphCompleteName: document.createElement("p"),
    newElementParagraphEmail: document.createElement("p"),
    newElementParagraphCellphone: document.createElement("p"),
    newElementParagraphGender: document.createElement("p"),
    newElementParagraphMaritalStatus: document.createElement("p"),
    newElementParagraphNationality: document.createElement("p"),
    newElementParagraphNumberID: document.createElement("p"),

    verifyIfCompleteNameHasValue(){
		if(this.getElementCompleteName.value == ''){
            this.getSpanErrorCompleteName.innerHTML = "You need to enter a name!";
        } else {
            this.getSpanErrorCompleteName.innerHTML = "";
        }
	},

	verifyIfEmailHasValue(){
        if(this.getElementEmail.value == ''){
            this.getSpanErrorEmail.innerHTML = "You need to enter a email!";
        } else if (this.getElementEmail.value != ''){
			/**
			 * Reference: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
			 */
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			if(!re.test(String(this.getElementEmail.value).toLowerCase())){
				this.getSpanErrorEmail.innerHTML = "Enter a valid email!";
			} else {
				this.getSpanErrorEmail.innerHTML = ""
			}
		} else {
            this.getSpanErrorEmail.innerHTML = "";
        }
    },

    verifyIfCellphoneHasValue(){
        if(this.getElementCellphone.value == ''){
            this.getSpanErrorCellphone.innerHTML = "You need to enter a cellphone number!";
        } else {
            this.getSpanErrorCellphone.innerHTML = "";
        }
    },

    verifyIfGenderIsChecked(){
        let genderChecked = false;
        for(let i = 0; i < this.getElementsRadioGender.length; i++){
            if(this.getElementsRadioGender[i].checked){
                genderChecked = true;
                break;
            }
        }

        if(!genderChecked){
            this.getSpanErrorGender.innerHTML = "You need to check a gender below!";
        } else {
            this.getSpanErrorGender.innerHTML = "";
        }
    },

    getGender(){
        for(let i = 0; i < this.getElementsRadioGender.length; i++){
            if(this.getElementsRadioGender[i].checked){
                return this.getElementsRadioGender[i].value;
            }
        }
    },

    verifyIfMaritalStatusIsSelected(){
        if(this.getElementsOptionMaritalStatus.value == ''){
            this.getSpanErrorMaritalStatus.innerHTML = "You need to select a marital status below!";
        } else {
            this.getSpanErrorMaritalStatus.innerHTML = "";
        }
    },

    verifyIfNationalityWasSelected(){
        if(this.getElementsOptionNationality.value == ''){
            this.getSpanErrorNationality.innerHTML = "You need to select a nationality below!";
        } else {
            this.getSpanErrorNationality.innerHTML = "";
        }
    },

    verifyIfNumberIDHasValue(){

        if(this.getElementNumberID.value == ''){

            this.getSpanErrorNumberID.innerHTML = "You need to enter your number ID!";
        
        } else if (this.getElementNumberID.value.toString().length < 11 
        	      || 
        	      this.getElementNumberID.value.toString().length > 11){

			this.spanErrorCPF.innerHTML = "You need digit a valid numberID with at least 11 characters!";
		
		} else {
			this.getSpanErrorNumberID.innerHTML = "";
    	}
    },

    showElementsPersonalRegistered(){

        this.newElementParagraphCompleteName.innerHTML = `<strong>Complete Name:</strong> ${this.getElementCompleteName.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCompleteName);

        this.newElementParagraphEmail.innerHTML = `<strong>Email:</strong> ${this.getElementEmail.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEmail);

        this.newElementParagraphCellphone.innerHTML = `<strong>Cellhpone:</strong> ${this.getElementCellphone.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCellphone);

        this.newElementParagraphGender.innerHTML = `<strong>Gender:</strong> ${this.getGender()}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphGender);

        this.newElementParagraphMaritalStatus.innerHTML = `<strong>Marital Status:</strong> ${this.getElementsOptionMaritalStatus.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphMaritalStatus);

        this.newElementParagraphNationality.innerHTML = `<strong>Nationality:</strong> ${this.getElementsOptionNationality.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphNationality);

        this.newElementParagraphNumberID.innerHTML = `<strong>Number ID:</strong> ${this.getElementNumberID.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphNumberID);
    }
}

function verifyFieldSetPersonal(){
	try {
	    FieldsetPersonal.verifyIfCompleteNameHasValue();
	    FieldsetPersonal.verifyIfEmailHasValue();
	    FieldsetPersonal.verifyIfCellphoneHasValue();
	    FieldsetPersonal.verifyIfGenderIsChecked();
	    FieldsetPersonal.verifyIfMaritalStatusIsSelected();
	    FieldsetPersonal.verifyIfNationalityWasSelected();
	    FieldsetPersonal.verifyIfNumberIDHasValue();
	    FieldsetPersonal.showElementsPersonalRegistered();
        stringifyAndStoragePersonalFieldsetValues();
	} catch(e){
		console.log(e);
	}
}

function stringifyAndStoragePersonalFieldsetValues(){
        
    const objectFieldsetPersonalValues = {
        completeName: FieldsetPersonal.getElementCompleteName.value,  
        email: FieldsetPersonal.getElementEmail.value,
        cellphone: FieldsetPersonal.getElementCellphone.value,
        gender: FieldsetPersonal.getGender(),  
        maritalStatus: FieldsetPersonal.getElementsOptionMaritalStatus.value,
        nationality: FieldsetPersonal.getElementsOptionNationality.value,
        numberID: FieldsetPersonal.getElementNumberID.value
    }

    const PersonalValuesJSON = JSON.stringify(objectFieldsetPersonalValues);

    localStorage.setItem("PersonalValuesJSON", PersonalValuesJSON);
}




/**
 * ADDRESS
 */
const FieldsetAddress = {

	getElementStreet: document.getElementById("street"),
    getSpanErrorStreet: document.getElementById("errorStreet"),

    getElementNeighborhood: document.getElementById("neighborhood"),
    getSpanErrorNeighborhood: document.getElementById("errorNeighborhood"),

    getElementResidenceNumber: document.getElementById("residenceNumber"),
    getSpanErrorResidenceNumber: document.getElementById("errorResidenceNumber"),

    newElementParagraphStreet: document.createElement("p"),
    newElementParagraphNeighborhood: document.createElement("p"),
    newElementParagraphResidenceNumber: document.createElement("p"),

    verifyIfStreetHasValue(){
        if(this.getElementStreet.value == ''){
            this.getSpanErrorStreet.innerHTML = "You need to enter a street name!";
        } else {
        	this.getSpanErrorStreet.innerHTML = "";
        }
    },

    verifyIfNeighborhoodHasValue(){
        if(this.getElementNeighborhood.value == ''){
            this.getSpanErrorNeighborhood.innerHTML = "You need enter a neighborhood name!";
        } else {
        	this.getSpanErrorNeighborhood.innerHTML = "";
        }
    },

    verifyIfResidenceNumberHasValue(){
        if(this.getElementResidenceNumber.value == ''){
            this.getSpanErrorResidenceNumber.innerHTML = "You need to enter a residence number!";
        } else {
        	this.getSpanErrorResidenceNumber.innerHTML = "";
        }
    },

    showElementsAddressRegistered(){

        this.newElementParagraphStreet.innerHTML = `<strong>Street:</strong> ${this.getElementStreet.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStreet);

        this.newElementParagraphNeighborhood.innerHTML = `<strong>Neighborhood:</strong> ${this.getElementNeighborhood.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphNeighborhood);

        this.newElementParagraphResidenceNumber.innerHTML = `<strong>Residence Number:</strong> ${this.getElementResidenceNumber.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphResidenceNumber);
    }
}

function verifyFieldSetAddress(){

	try {
	    FieldsetAddress.verifyIfStreetHasValue();
	    FieldsetAddress.verifyIfNeighborhoodHasValue();
	    FieldsetAddress.verifyIfResidenceNumberHasValue();
	    FieldsetAddress.showElementsAddressRegistered();
        stringifyAndStorageAddressFieldsetValues();
	} 
	catch(error){
		console.log(error);
	}
}

function stringifyAndStorageAddressFieldsetValues(){
        
    const objectFieldsetAddressValues = {
        street: FieldsetAddress.getElementStreet.value,  
        neighborhood: FieldsetAddress.getElementNeighborhood.value,
        residenceNumber: FieldsetAddress.getElementResidenceNumber.value
    }

    const AddressValuesJSON = JSON.stringify(objectFieldsetAddressValues);

    localStorage.setItem("AddressValuesJSON", AddressValuesJSON);    
}




/**
 * Job Interest
 */
const FieldsetJobInterest = {

	getElementsRadioPostName: document.getElementsByName("post"),
	getSpanErrorNamePost: document.getElementById("errorPostName"),

    getElementsRadioExperience: document.getElementsByName("experience"),
    getSpanErrorExperience: document.getElementById("errorPostExperience"),

    getElementsOptionInterestRegion: document.getElementById("interestRegion"),
    getSpanErrorInterestRegion: document.getElementById("errorInterestRegion"),

    getElementSalaryPretension: document.getElementById("salaryPretension"),
    getSpanErrorSalaryPretension: document.getElementById("errorSalaryPretension"),

    newElementParagraphPostName: document.createElement("p"),
    newElementParagraphExperience: document.createElement("p"),
    newElementParagraphInterestRegion: document.createElement("p"),
    newElementParagraphSalaryPretension: document.createElement("p"),

    verifyIfPostNameIsChecked(){
        let postNameChecked = false;
        for(let i = 0; i < this.getElementsRadioPostName.length; i++){
            if(this.getElementsRadioPostName[i].checked){
                postNameChecked = true;
                break;
            }
        }
        if(!postNameChecked){
            this.getSpanErrorNamePost.innerHTML = "You need to select a post below!";
        } else {
            this.getSpanErrorNamePost.innerHTML = "";
        }
    },

    verifyIfExperienceIsChecked(){
        let experienceChecked = false;
        for(let i = 0; i < this.getElementsRadioExperience.length; i++){
            if(this.getElementsRadioExperience[i].checked){
                experienceChecked = true;
                break;
            }
        }
        if(!experienceChecked){
            this.getSpanErrorExperience.innerHTML = "You need to select a experience below!";
        } else {
            this.getSpanErrorExperience.innerHTML = "";
        }
    },

    verifyIfInterestRegionHasValue(){
        if(this.getElementsOptionInterestRegion.value == ''){
            this.getSpanErrorInterestRegion.innerHTML = "You need to choose a region interest below!";
        } else {
            this.getSpanErrorInterestRegion.innerHTML = "";
        }
    },

    verifyIfSalaryPretensionHasValue(){
        if(this.getElementSalaryPretension.value == ""){
            this.getSpanErrorSalaryPretension.innerHTML = "You need to enter a salary pretension!";
        } else {
            this.getSpanErrorSalaryPretension.innerHTML = "";
        }
    },

    getPostName(){
        for(let i = 0; i < this.getElementsRadioPostName.length; i++){
            if(this.getElementsRadioPostName[i].checked){
                return this.getElementsRadioPostName[i].value;
            }
        }
    },

    getJobExperience(){
        for(let i = 0; i < this.getElementsRadioExperience.length; i++){
            if(this.getElementsRadioExperience[i].checked){
                return this.getElementsRadioExperience[i].value;
            }
        }
    },

    showElementsJobInterestRegistered(){

        for(let i = 0; i < this.getElementsRadioPostName.length; i++){
            if(this.getElementsRadioPostName[i].checked){
                this.newElementParagraphPostName.innerHTML = `<strong>Post Name:</strong> ${this.getElementsRadioPostName[i].value}`;
        		ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphPostName);
                break;
            }
        }
        
        for(let i = 0; i < this.getElementsRadioExperience.length; i++){
            if(this.getElementsRadioExperience[i].checked){
                this.newElementParagraphExperience.innerHTML = `<strong>Experience:</strong> ${this.getElementsRadioExperience[i].value}`;
        		ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphExperience);
                break;
            }
        }

        this.newElementParagraphInterestRegion.innerHTML = `<strong>Interest Region:</strong> ${this.getElementsOptionInterestRegion.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphInterestRegion);
    
        this.newElementParagraphSalaryPretension.innerHTML = `<strong>Salary Pretension:</strong> ${this.getElementSalaryPretension.value} / month`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSalaryPretension);
    }
}

function verifyFieldSetJobInterest(){
    FieldsetJobInterest.verifyIfPostNameIsChecked();
    FieldsetJobInterest.verifyIfExperienceIsChecked();
    FieldsetJobInterest.verifyIfInterestRegionHasValue();
    FieldsetJobInterest.verifyIfSalaryPretensionHasValue();
    FieldsetJobInterest.showElementsJobInterestRegistered();
    stringifyAndStorageJobInterestFieldsetValues();
}

function stringifyAndStorageJobInterestFieldsetValues(){
        
    let objectFieldsetJobInterestValues = {
        jobPost: FieldsetJobInterest.getPostName(),  
        jobExperience: FieldsetJobInterest.getJobExperience(),
        interestRegion: FieldsetJobInterest.getElementsOptionInterestRegion.value,
        salaryPretension: FieldsetJobInterest.getElementSalaryPretension.value
    }

    const JobInterestValuesJSON = JSON.stringify(objectFieldsetJobInterestValues);

    localStorage.setItem("JobInterestValuesJSON", JobInterestValuesJSON);
}



/**
 * EDUCATION 
 */
const FieldsetEducation = {

	getElementDivEducation: document.getElementById("div_education"),

    getElementsRadioSchooling: document.getElementsByName("schooling"),
    getSpanErrorSchooling: document.getElementById("errorSchooling"),

    attrRadioSchoolingChecked: false,

    getElementCourseName: document.getElementById("courseName"),
    getSpanErrorCourseName: document.getElementById("errorCourseName"),

    getElementInstitutionName: document.getElementById("institutionName"),
    getSpanErrorInstitutionName: document.getElementById("errorInstitutionName"),

    getElementGraduate: document.getElementById("graduate"),
    getSpanErrorGraduate: document.getElementById("errorGraduate"),

    getElementIncompleteSchool: document.getElementById("incompleteHighSchool"),
    getElementCompleteSchool: document.getElementById("completeHighSchool"),

    newElementParagraphSchoolingRegistered: document.createElement("p"),
    newElementParagraphGraduateYearRegistered: document.createElement("p"),
    newElementParagraphCourseNameRegistered: document.createElement("p"),
    newElementPagragraphInstitutionNameRegistered: document.createElement("p"),

    verifyIfElementRadioEducationIsChecked(){
        for(let i = 0; i < this.getElementsRadioSchooling.length; i++){
            if(this.getElementsRadioSchooling[i].checked){
                this.attrRadioSchoolingChecked = true;
                break;
            }
        }
        if(!this.attrRadioSchoolingChecked){
            this.getSpanErrorSchooling.innerHTML = "You need to choose a option below!";
        } else {
        	this.getSpanErrorSchooling.innerHTML = "";
        }
    },

    getSchoolingValue(){
        for(let i = 0; i < this.getElementsRadioSchooling.length; i++){
            if(this.getElementsRadioSchooling[i].checked){
                return this.getElementsRadioSchooling[i].value;
            }
        }
    },

    verifyIfCourseNameHasValue(){
        if(this.getElementCourseName.value == ""){
            this.getSpanErrorCourseName.innerHTML = "You need to enter your course name!";
        } else {
        	this.getSpanErrorCourseName.innerHTML = "";
        }
    },

    verifyIfGraduateIsChecked(){
      	if(this.getElementGraduate.value == ''){
         	this.getSpanErrorGraduate.innerHTML = "You need to check some option below!";
      	} else {
      		this.getSpanErrorGraduate.innerHTML = "";
      	}
    },

    verifyIfInstitutionNameHasValue(){
	    if(this.getElementInstitutionName.value == ""){
	        this.getSpanErrorInstitutionName.innerHTML = "You need to enter a institution name!";
	    } else {
	        this.getSpanErrorInstitutionName.innerHTML = "";
	    }
    },
    
    showElementsEducationRegistered(){

	    for(let i = 0; i <  this.getElementsRadioSchooling.length; i++){
	        if(this.getElementsRadioSchooling[i].checked){
	            this.newElementParagraphSchoolingRegistered.innerHTML = `<strong>Schooling:</strong> ${this.getElementsRadioSchooling.value}`;
	            break;
	        }
	    }
	    ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

	    this.newElementParagraphGraduateYearRegistered.innerHTML = `<strong>Graduate Year:</strong> ${this.getElementGraduate.value}`;
	    ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphGraduateYearRegistered);

	    if(!this.getElementIncompleteSchool.checked || 
	        !this.getElementCompleteSchool.checked){

	    	for(let i = 0; i < this.getElementsRadioSchooling.length; i++){
	            if(this.getElementsRadioSchooling[i].checked){
	                this.newElementParagraphSchoolingRegistered.innerHTML = `<strong>Schooling:</strong> ${this.getElementsRadioSchooling[i].value}`;
	                ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);
	                break;
	            }
	        }

	        this.newElementParagraphCourseNameRegistered.innerHTML = `<strong>Course Name:</strong> ${this.getElementCourseName.value}`;
	        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCourseNameRegistered);

	        this.newElementPagragraphInstitutionNameRegistered.innerHTML = `<strong>Institution Name: </strong> ${this.getElementInstitutionName.value}`;
	        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementPagragraphInstitutionNameRegistered);
	    }
    }
}

function showEducationDiv(){
  	if(!FieldsetEducation.getElementIncompleteSchool.checked 
  	   && 
       !FieldsetEducation.getElementCompleteSchool.checked){

      	FieldsetEducation.getElementDivEducation.removeAttribute("hidden");
  	}
}

function hiddenEducationDiv(){
  	FieldsetEducation.getElementDivEducation.setAttribute("hidden", "true");
}

function verifyFieldSetEducation(){
  	FieldsetEducation.verifyIfElementRadioEducationIsChecked();
  	FieldsetEducation.verifyIfGraduateIsChecked();
  	FieldsetEducation.verifyIfInstitutionNameHasValue();
  	FieldsetEducation.verifyIfCourseNameHasValue();
  	FieldsetEducation.showElementsEducationRegistered();
    stringifyAndStorageEducationFieldsetValues();
}

function stringifyAndStorageEducationFieldsetValues(){

	const objectFieldEducationValues = {
        schooling: FieldsetEducation.getSchoolingValue(),  
        graduate: FieldsetEducation.getElementGraduate.value,
        courseName: FieldsetEducation.getElementCourseName.value,
        institutionName: FieldsetEducation.getElementInstitutionName.value
    }

    const EducationValuesJSON = JSON.stringify(objectFieldEducationValues);

    localStorage.setItem("EducationValuesJSON", EducationValuesJSON);
}




/**
 * PROFESSIONAL
 */
const FieldsetProfessional = {

	getElementCompanyName: document.getElementById("companyName"),
	getSpanErrorCompanyName: document.getElementById("errorCompanyName"),

    getElementStartMonth: document.getElementsByName("monthStart")[0],
    getElementEndMonth: document.getElementsByName("endMonth")[0],
    getElementStartYear: document.getElementsByName("yearStart")[0],
    getElementEndYear: document.getElementsByName("endYear")[0],

    getElementsBusinessSegment: document.getElementsByName("businessSegment"),
    getSpanErrorBusinessSegment: document.getElementById("errorBusinessSegment"),

    getElementPositionHeld: document.getElementById("positionHeld"),
    getSpanErrorPositionHeld: document.getElementById("errorPositionHeld"),

    getElementJobResponsabilities: document.getElementById("jobResponsabilities"),
    getSpanErrorJobResponsabilites: document.getElementById("errorJobResponsabilities"),

    businessSegmentChecked: false,
    getElementHasProfessionalExperience: document.getElementById("hasExperience"),
    getElementDoesNotHasProfessionalExperience: document.getElementById("doesNotHasExperience"),

    getElementButtonAddExperience: document.getElementById("button_add_professional_exp"),
    getElementDivHasProfessionalExperience: document.getElementById("div_has_professional_exp"),

    newElementParagraphHasProfessionalExperience: document.createElement("p"),
    newElementParagraphCompanyName: document.createElement("p"),
    newElementParagraphStartMonth: document.createElement("p"),
    newElementParagraphStartYear: document.createElement("p"),
    newElementParagraphEndMonth: document.createElement("p"),
    newElementParagraphEndYear: document.createElement("p"),
    newElementParagraphBusinessSegment: document.createElement("p"),
    newElementParagraphPositionHeld: document.createElement("p"),
    newElementParagraphJobResponsabilites: document.createElement("p"),
    newElementParagraphHasExperiencie: document.createElement("p"),

    verifyProfessionalExperienceValues(){

        if(!this.getElementDoesNotHasProfessionalExperience.checked){
            
        	// company name has value?
            if(this.getElementCompanyName.value == ''){
                this.getSpanErrorCompanyName.innerHTML = "You need enter the name of the last company you worked in";
            } else {
            	this.getSpanErrorCompanyName.innerHTML = "";
            }

            // position held has value?
            if(this.getElementPositionHeld.value == ''){
                this.getSpanErrorPositionHeld.innerHTML = "You need to enter a position held!";
            } else {
            	this.getSpanErrorPositionHeld.innerHTML = "";
            }

            // business segment checked?
            for(let i = 0; i < this.getElementsBusinessSegment.length; i++){
                if(this.getElementsBusinessSegment[i].checked){
                    this.businessSegmentChecked = true;
                    break;
                }
            }
            if(!this.businessSegmentChecked){
                this.getSpanErrorBusinessSegment.innerHTML = "You need to choose one option below!";
            } else {
            	this.getSpanErrorBusinessSegment.innerHTML = "";
            }

            // job responsabilites has value?
            if(this.getElementJobResponsabilities.value == ''){
                this.getSpanErrorJobResponsabilites.innerHTML = "Please tell us a little more about your duties and responsibilities for the last position held."
            } else if(this.getElementJobResponsabilities.value.toString().length < 50){
                this.getSpanErrorJobResponsabilites.innerHTML = "Enter a answer with at least 50 characters!"
            } else {
                this.getSpanErrorJobResponsabilites.innerHTML = "";
            }
        } 
    },

    getBusinessSegmentValue(){
        for(let i = 0; i < this.getElementsBusinessSegment.length; i++){
            if(this.getElementsBusinessSegment[i].checked){
                return this.getElementsBusinessSegment[i].value;
            }
        }
    },

    showElementsProfessionalExperienceRegistered(){

        if(!this.getElementDoesNotHasProfessionalExperience.checked){

            if(ValidateCurriculumForms.newTopDivElementsRegistered.firstChild){
                cleanDivJavaScriptElementsRegistered();
            }

            this.newElementParagraphHasExperiencie.innerHTML = "<strong>The candidate HAS professional experience.</strong> ";
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphHasExperiencie);
            
            this.newElementParagraphCompanyName.innerHTML = `<strong>Company Name:</strong> ${this.getElementCompanyName.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCompanyName);

            this.newElementParagraphStartMonth.innerHTML = `<strong>Start Month:</strong> ${this.getElementStartMonth.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStartMonth);

            this.newElementParagraphStartYear.innerHTML = `<strong>Start Year:</strong> ${this.getElementStartYear.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStartYear);

            this.newElementParagraphEndMonth.innerHTML = `<strong>End Month:</strong> ${this.getElementEndMonth.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEndMonth);

            this.newElementParagraphEndYear.innerHTML = `<strong>End Year:</strong> ${this.getElementEndYear.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEndYear);

            for(let i = 0; i < this.getElementsBusinessSegment.length; i++){
                if(this.getElementsBusinessSegment[i].checked){
                    this.newElementParagraphBusinessSegment.innerHTML = `<strong>Business Segment:</strong> ${this.getElementsBusinessSegment[i].value}`;
            		ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphBusinessSegment);
                    break;
                }
            }
            
            this.newElementParagraphPositionHeld.innerHTML = `<strong>Position Held:</strong> ${this.getElementPositionHeld.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphPositionHeld);

            this.newElementParagraphJobResponsabilites.innerHTML = `<strong>Job Responsabilites:</strong> ${this.getElementJobResponsabilities.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphJobResponsabilites);

        } else {
            this.newElementParagraphHasExperiencie.innerHTML = "<strong>The candidate DOESN\'T has professional experience.</strong> ";
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphHasExperiencie);
        }
    }
}

function showButtonAddProfessionalExperience(){
    if(FieldsetProfessional.getElementHasProfessionalExperience.checked){
        FieldsetProfessional.getElementButtonAddExperience.removeAttribute("hidden");
    } 
}

function hiddenButtonAddProfessionalExperience(){
    if(FieldsetProfessional.getElementDoesNotHasProfessionalExperience.checked){
    	hiddenCompanyExperience();
        FieldsetProfessional.getElementButtonAddExperience.setAttribute("hidden", "true");
    }
}

function hiddenButtonAddExperinceData(){
    FieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
}

function showDivAddExperienceData(){
    FieldsetProfessional.getElementDivHasProfessionalExperience.removeAttribute("hidden");
}

function verifyFieldsetProfessionalExperience(){
    FieldsetProfessional.verifyProfessionalExperienceValues();
    FieldsetProfessional.showElementsProfessionalExperienceRegistered();
    stringifyAndStorageProfessionalFieldsetValues();
}

function stringifyAndStorageProfessionalFieldsetValues(){
    
    const objectFieldsetProfessionalValues = {
        hasExperience: FieldsetProfessional.hasProfessionalExperience,  
        companyName: FieldsetProfessional.getElementCompanyName.value,
        startMonth: FieldsetProfessional.getElementStartMonth.value,
        startYear: FieldsetProfessional.getElementStartYear.value,
        endMonth: FieldsetProfessional.getElementEndMonth.value,
        endYear: FieldsetProfessional.getElementEndYear.value,
        businessSegment: FieldsetProfessional.getBusinessSegmentValue(), 
        positionHeld: FieldsetProfessional.getElementPositionHeld.value,
        jobResponsabilities: FieldsetProfessional.getElementJobResponsabilities.value
    }

    const ProfessionalValuesJSON = JSON.stringify(objectFieldsetProfessionalValues);

    localStorage.setItem("ProfessionalValuesJSON", ProfessionalValuesJSON);
}

function hiddenCompanyExperience(){
    FieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
}