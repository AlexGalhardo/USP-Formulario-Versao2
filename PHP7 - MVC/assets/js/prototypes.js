/**
 * Projeto Desenvolvido para a Atividade 2 - Formulário de Cadastro
 *
 * Curso Sistemas Interativos WEB
 *
 * Prof. Rudinei Goularte (rudinei@icmc.usp.br)
 *
 * ICMC USP 2018
 *
 * Versão PROTOTYPES
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




/**
 * ValidateCurricumForms
 */
function ValidateCurriculumForms(){
	this.newTopDivElementsRegistered = document.getElementById("div_data_send");
}

ValidateCurriculumForms.prototype = {
	removeAttributeHidden: function(){
        this.newTopDivElementsRegistered.removeAttribute("hidden");
    }
}

function cleanDivJavaScriptElementsRegistered(){

    const objectValidateCurriculumForms = new ValidateCurriculumForms();

    while (objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild) {
        objectValidateCurriculumForms.newTopDivElementsRegistered.removeChild(objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild);
    }
}

function stringifyAndStorageAllFieldsetValues(){

    const objectFieldsetPersonal = new FieldsetPersonal();
    const objectFieldsetAddress = new FieldsetAddress();
    const objectFieldsetJobInterest = new FieldsetJobInterest();
    const objectFieldsetEducation = new FieldsetEducation();
    const objectFieldsetProfessional = new FieldsetProfessional();

    const objectAllFieldsetValues = {

        completeName: objectFieldsetPersonal.getElementCompleteName.value,  
        email: objectFieldsetPersonal.getElementEmail.value,
        cellphone: objectFieldsetPersonal.getElementCellphone.value,
        gender: objectFieldsetPersonal.getGender(),  
        maritalStatus: objectFieldsetPersonal.getElementsOptionMaritalStatus.value,
        nationality: objectFieldsetPersonal.getElementsOptionNationality.value,
        numberID: objectFieldsetPersonal.getElementNumberID.value,

        street: objectFieldsetAddress.getElementStreet.value,  
        neighborhood: objectFieldsetAddress.getElementNeighborhood.value,
        residenceNumber: objectFieldsetAddress.getElementResidenceNumber.value,

        jobPost: objectFieldsetJobInterest.getPostName(),  
        jobExperience: objectFieldsetJobInterest.getJobExperience(),
        startMonth: objectFieldsetJobInterest.getElementsOptionInterestRegion.value,
        startYear: objectFieldsetJobInterest.getElementSalaryPretension.value,

        schooling: objectFieldsetEducation.getSchoolingValue(),  
        graduate: objectFieldsetEducation.getElementGraduate.value,
        courseName: objectFieldsetEducation.getElementCourseName.value,
        institutionName: objectFieldsetEducation.getElementInstitutionName.value,

        hasExperience: objectFieldsetProfessional.hasProfessionalExperience,  
        companyName: objectFieldsetProfessional.getElementCompanyName.value,
        startMonth: objectFieldsetProfessional.getElementStartMonth.value,
        startYear: objectFieldsetProfessional.getElementStartYear.value,
        endMonth: objectFieldsetProfessional.getElementEndMonth.value,
        endYear: objectFieldsetProfessional.getElementEndYear.value,
        businessSegment: objectFieldsetProfessional.getBusinessSegmentValue(), 
        positionHeld: objectFieldsetProfessional.getElementPositionHeld.value,
        jobResponsabilities: objectFieldsetProfessional.getElementJobResponsabilities.value
    }

    const AllFormsValuesJSON = JSON.stringify(objectAllFieldsetValues);

    localStorage.setItem("AllFormsValuesJSON", AllFormsValuesJSON);
}

function verifyCurriculumForms(){

    cleanDivJavaScriptElementsRegistered();

    const objectFieldsetPersonal = new FieldsetPersonal();
    const objectFieldsetAddress = new FieldsetAddress();
    const objectFieldsetJobInterest = new FieldsetJobInterest();
    const objectFieldsetEducation = new FieldsetEducation();
    const objectFieldsetProfessional = new FieldsetProfessional();

    verifyFieldSetPersonal();
    objectFieldsetPersonal.showElementsPersonalRegistered();
    stringifyAndStoragePersonalFieldsetValues();

    verifyFieldSetAddress();
    objectFieldsetAddress.showElementsAddressRegistered();
    stringifyAndStorageAddressFieldsetValues();

    verifyFieldSetJobInterest();
    objectFieldsetJobInterest.showElementsJobInterestRegistered();
    stringifyAndStorageJobInterestFieldsetValues();

    verifyFieldSetEducation();
    objectFieldsetEducation.showElementsEducationRegistered();
    stringifyAndStorageEducationFieldsetValues();

    verifyFieldsetProfessionalExperience();
    objectFieldsetProfessional.showElementsProfessionalExperienceRegistered();
    stringifyAndStorageProfessionalFieldsetValues();

    stringifyAndStorageAllFieldsetValues();
}




/**
 * PERSONAL
 */
function FieldsetPersonal(){

	this.getElementCompleteName = document.getElementById("completeName");
    this.getSpanErrorCompleteName = document.getElementById("errorCompleteName");

    this.getElementEmail = document.getElementById("email");
    this.getSpanErrorEmail = document.getElementById("errorEmail");

    this.getElementCellphone = document.getElementById("cellphone");
    this.getSpanErrorCellphone = document.getElementById("errorCellphone");

    this.getElementsRadioGender = document.getElementsByName("gender");
    this.getSpanErrorGender = document.getElementById("errorGender");

    this.getElementsOptionMaritalStatus = document.getElementById("maritalStatus");
    this.getSpanErrorMaritalStatus = document.getElementById("errorMaritalStatus")

    this.getElementsOptionNationality = document.getElementById("nationality");
    this.getSpanErrorNationality = document.getElementById("errorNationality");

    this.getElementNumberID = document.getElementById("numberID");
    this.getSpanErrorNumberID = document.getElementById("errorNumberID");

    this.newElementParagraphCompleteName = document.createElement("p");
    this.newElementParagraphEmail = document.createElement("p");
    this.newElementParagraphCellphone = document.createElement("p");
    this.newElementParagraphGender = document.createElement("p");
    this.newElementParagraphMaritalStatus = document.createElement("p");
    this.newElementParagraphNationality = document.createElement("p");
    this.newElementParagraphNumberID = document.createElement("p");
}

FieldsetPersonal.prototype = {

	verifyIfCompleteNameHasValue: function(){
		if(this.getElementCompleteName.value == ''){
            this.getSpanErrorCompleteName.innerHTML = "You need to enter a name!";
        } else {
            this.getSpanErrorCompleteName.innerHTML = "";
        }
	},

	verifyIfEmailHasValue: function(){
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
                this.getSpanErrorEmail.innerHTML = "";
            }
        } else {
            this.getSpanErrorEmail.innerHTML = "";
        }
    },

    verifyIfCellphoneHasValue: function(){
        if(this.getElementCellphone.value == ''){
            this.getSpanErrorCellphone.innerHTML = "You need to enter a cellphone number!";
        } else {
            this.getSpanErrorCellphone.innerHTML = "";
        }
    },

    verifyIfGenderIsChecked: function(){
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

    verifyIfMaritalStatusIsSelected: function(){
        if(this.getElementsOptionMaritalStatus.value == ''){
            this.getSpanErrorMaritalStatus.innerHTML = "You need to select a marital status below!";
        } else {
            this.getSpanErrorMaritalStatus.innerHTML = "";
        }
    },

    verifyIfNationalityWasSelected: function(){
        if(this.getElementsOptionNationality.value == ''){
            this.getSpanErrorNationality.innerHTML = "You need to select a nationality below!";
        } else {
            this.getSpanErrorNationality.innerHTML = "";
        }
    },

    verifyIfNumberIDHasValue: function(){
        if(this.getElementNumberID.value == ''){
            this.getSpanErrorNumberID.innerHTML = "You need to enter your number ID!";
        } else {
            this.getSpanErrorNumberID.innerHTML = "";
        }
    },

    getGender(){
        for(let i = 0; i < this.getElementsRadioGender.length; i++){
            if(this.getElementsRadioGender[i].checked){
                return this.getElementsRadioGender[i].value;
            }
        }
    },

    showElementsPersonalRegistered: function(){

        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        this.newElementParagraphCompleteName.innerHTML = `<strong>Complete Name:</strong> ${this.getElementCompleteName.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCompleteName);

        this.newElementParagraphEmail.innerHTML = `<strong>Email:</strong> ${this.getElementEmail.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEmail);

        this.newElementParagraphCellphone.innerHTML = `<strong>Cellhpone:</strong> ${this.getElementCellphone.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCellphone);

        this.newElementParagraphGender.innerHTML = `<strong>Gender:</strong> ${this.getGender()}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphGender);

        this.newElementParagraphMaritalStatus.innerHTML = `<strong>Marital Status:</strong> ${this.getElementsOptionMaritalStatus.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphMaritalStatus);

        this.newElementParagraphNationality.innerHTML = `<strong>Nationality:</strong> ${this.getElementsOptionNationality.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphNationality);

        this.newElementParagraphNumberID.innerHTML = `<strong>Number ID:</strong> ${this.getElementNumberID.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphNumberID);
    }
}

function verifyFieldSetPersonal(){

    const objectFieldsetPersonal = new FieldsetPersonal();
    objectFieldsetPersonal.verifyIfCompleteNameHasValue();
    objectFieldsetPersonal.verifyIfEmailHasValue();
    objectFieldsetPersonal.verifyIfCellphoneHasValue();
    objectFieldsetPersonal.verifyIfGenderIsChecked();
    objectFieldsetPersonal.verifyIfMaritalStatusIsSelected();
    objectFieldsetPersonal.verifyIfNationalityWasSelected();
    objectFieldsetPersonal.verifyIfNumberIDHasValue();
    objectFieldsetPersonal.showElementsPersonalRegistered();
    stringifyAndStoragePersonalFieldsetValues();
}

function stringifyAndStoragePersonalFieldsetValues(){
    
    const objectFieldsetPersonal = new FieldsetPersonal();

    const objectFieldsetPersonalValues = {
        completeName: objectFieldsetPersonal.getElementCompleteName.value,  
        email: objectFieldsetPersonal.getElementEmail.value,
        cellphone: objectFieldsetPersonal.getElementCellphone.value,
        gender: objectFieldsetPersonal.getGender(),  
        maritalStatus: objectFieldsetPersonal.getElementsOptionMaritalStatus.value,
        nationality: objectFieldsetPersonal.getElementsOptionNationality.value,
        numberID: objectFieldsetPersonal.getElementNumberID.value
    }

    const PersonalValuesJSON = JSON.stringify(objectFieldsetPersonalValues);

    localStorage.setItem("PersonalValuesJSON", PersonalValuesJSON);
}



/**
 * ADDRESS
 */
function FieldsetAddress() {
	this.getElementStreet = document.getElementById("street");
    this.getSpanErrorStreet = document.getElementById("errorStreet");

    this.getElementNeighborhood = document.getElementById("neighborhood");
    this.getSpanErrorNeighborhood = document.getElementById("errorNeighborhood");

    this.getElementResidenceNumber = document.getElementById("residenceNumber");
    this.getSpanErrorResidenceNumber = document.getElementById("errorResidenceNumber");

    this.newElementParagraphStreet = document.createElement("p");
    this.newElementParagraphNeighborhood = document.createElement("p");
    this.newElementParagraphResidenceNumber = document.createElement("p");
}

FieldsetAddress.prototype = {

	verifyIfStreetHasValue: function(){
        if(this.getElementStreet.value == ''){
            this.getSpanErrorStreet.innerHTML = "You need to enter a street name!";
        } else {
        	this.getSpanErrorStreet.innerHTML = "";
        }
    },

    verifyIfNeighborhoodHasValue: function(){
        if(this.getElementNeighborhood.value == ''){
            this.getSpanErrorNeighborhood.innerHTML = "You need enter a neighborhood name!";
        } else {
        	this.getSpanErrorNeighborhood.innerHTML = "";
        }
    },

    verifyIfResidenceNumberHasValue: function(){
        if(this.getElementResidenceNumber.value == ''){
            this.getSpanErrorResidenceNumber.innerHTML = "You need to enter a residence number!";
        } else {
        	this.getSpanErrorResidenceNumber.innerHTML = "";
        }
    },

    showElementsAddressRegistered: function(){

        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        this.newElementParagraphStreet.innerHTML = `<strong>Street:</strong> ${this.getElementStreet.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStreet);

        this.newElementParagraphNeighborhood.innerHTML = `<strong>Neighborhood:</strong> ${this.getElementNeighborhood.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphNeighborhood);

        this.newElementParagraphResidenceNumber.innerHTML = `<strong>Residence Number:</strong> ${this.getElementResidenceNumber.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphResidenceNumber);
    }
}

function verifyFieldSetAddress(){

    const objectFieldsetAddress = new FieldsetAddress();
    objectFieldsetAddress.verifyIfStreetHasValue();
    objectFieldsetAddress.verifyIfNeighborhoodHasValue();
    objectFieldsetAddress.verifyIfResidenceNumberHasValue();
    objectFieldsetAddress.showElementsAddressRegistered();
    stringifyAndStorageAddressFieldsetValues();
}

function stringifyAndStorageAddressFieldsetValues(){
    
    const objectFieldsetAddress = new FieldsetAddress();

    const objectFieldsetAddressValues = {
        street: objectFieldsetAddress.getElementStreet.value,  
        neighborhood: objectFieldsetAddress.getElementNeighborhood.value,
        residenceNumber: objectFieldsetAddress.getElementResidenceNumber.value
    }

    const AddressValuesJSON = JSON.stringify(objectFieldsetAddressValues);

    localStorage.setItem("AddressValuesJSON", AddressValuesJSON);
}




/**
 * JOB INTEREST
 */
function FieldsetJobInterest(){
	
    this.getElementsRadioPostName = document.getElementsByName("post");
    this.getSpanErrorNamePost = document.getElementById("errorPostName");

    this.getElementsRadioExperience = document.getElementsByName("experience");
    this.getSpanErrorExperience = document.getElementById("errorPostExperience");

    this.getElementsOptionInterestRegion = document.getElementById("interestRegion");
    this.getSpanErrorInterestRegion = document.getElementById("errorInterestRegion");

    this.getElementSalaryPretension = document.getElementById("salaryPretension");
    this.getSpanErrorSalaryPretension = document.getElementById("errorSalaryPretension");

    this.newElementParagraphPostName = document.createElement("p");
    this.newElementParagraphExperience = document.createElement("p");
    this.newElementParagraphInterestRegion = document.createElement("p");
    this.newElementParagraphSalaryPretension = document.createElement("p");
}

FieldsetJobInterest.prototype = {

	verifyIfPostNameIsChecked: function(){
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

    verifyIfExperienceIsChecked: function(){
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

    verifyIfInterestRegionHasValue: function(){
        if(this.getElementsOptionInterestRegion.value == ''){
            this.getSpanErrorInterestRegion.innerHTML = "You need to choose a region interest below!";
        } else {
            this.getSpanErrorInterestRegion.innerHTML = "";
        }
    },

    verifyIfSalaryPretensionHasValue: function(){
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

        const objectFieldsetJobInterest = new FieldsetJobInterest();
        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        objectFieldsetJobInterest.newElementParagraphPostName.innerHTML = `<strong>Post Name:</strong> ${objectFieldsetJobInterest.getPostName()}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetJobInterest.newElementParagraphPostName);
                
        objectFieldsetJobInterest.newElementParagraphExperience.innerHTML = `<strong>Experience:</strong> ${objectFieldsetJobInterest.getJobExperience()}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetJobInterest.newElementParagraphExperience);
                
        objectFieldsetJobInterest.newElementParagraphInterestRegion.innerHTML = `<strong>Interest Region:</strong> ${objectFieldsetJobInterest.getElementsOptionInterestRegion.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetJobInterest.newElementParagraphInterestRegion);
    
        objectFieldsetJobInterest.newElementParagraphSalaryPretension.innerHTML = `<strong>Salary Pretension:</strong> ${objectFieldsetJobInterest.getElementSalaryPretension.value} / month`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetJobInterest.newElementParagraphSalaryPretension);
    }
}

function verifyFieldSetJobInterest(){

    const objectFieldsetJobInterest = new FieldsetJobInterest();

    objectFieldsetJobInterest.verifyIfPostNameIsChecked();
    objectFieldsetJobInterest.verifyIfExperienceIsChecked();
    objectFieldsetJobInterest.verifyIfInterestRegionHasValue();
    objectFieldsetJobInterest.verifyIfSalaryPretensionHasValue();
    objectFieldsetJobInterest.showElementsJobInterestRegistered();
    stringifyAndStorageJobInterestFieldsetValues();
}

function stringifyAndStorageJobInterestFieldsetValues(){
    
    const objectFieldsetJobInterest = new FieldsetJobInterest();

    let objectFieldsetJobInterestValues = {
        jobPost: objectFieldsetJobInterest.getPostName(),  
        jobExperience: objectFieldsetJobInterest.getJobExperience(),
        interestRegion: objectFieldsetJobInterest.getElementsOptionInterestRegion.value,
        salaryPretension: objectFieldsetJobInterest.getElementSalaryPretension.value
    }

    const JobInterestValuesJSON = JSON.stringify(objectFieldsetJobInterestValues);

    localStorage.setItem("JobInterestValuesJSON", JobInterestValuesJSON);
}



/**
 * EDUCATION
 */
function FieldsetEducation() {

  	this.getElementDivEducation = document.getElementById("div_education");

    this.getElementsRadioSchooling = document.getElementsByName("schooling");
    this.getSpanErrorSchooling = document.getElementById("errorSchooling");
    
    this.attrRadioSchoolingChecked = false;

    this.getElementCourseName = document.getElementById("courseName");
    this.getSpanErrorCourseName = document.getElementById("errorCourseName");
    
    this.getElementInstitutionName = document.getElementById("institutionName");
    this.getSpanErrorInstitutionName = document.getElementById("errorInstitutionName");
    
    this.getElementGraduate = document.getElementById("graduate");
    this.getSpanErrorGraduate = document.getElementById("errorGraduate");

    this.getElementIncompleteSchool = document.getElementById("incompleteHighSchool");
    this.getElementCompleteSchool = document.getElementById("completeHighSchool");

    this.newElementParagraphSchoolingRegistered = document.createElement("p");
    this.newElementParagraphGraduateYearRegistered = document.createElement("p");
    this.newElementParagraphCourseNameRegistered = document.createElement("p");
    this.newElementPagragraphInstitutionNameRegistered = document.createElement("p");
}

FieldsetEducation.prototype = {

	verifyIfElementRadioEducationIsChecked: function(){
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

    verifyIfCourseNameHasValue: function(){
        if(this.getElementCourseName.value == ""){
            this.getSpanErrorCourseName.innerHTML = "You need to enter your course name!";
        } else {
        	this.getSpanErrorCourseName.innerHTML = "";
        }
    },

    verifyIfGraduateIsChecked: function(){
      	if(this.getElementGraduate.value == ''){
         	this.getSpanErrorGraduate.innerHTML = "You need to check some option below!";
      	} else {
      		this.getSpanErrorGraduate.innerHTML = "";
      	}
    },

    verifyIfInstitutionNameHasValue: function(){
      if(this.getElementInstitutionName.value == ""){
          this.getSpanErrorInstitutionName.innerHTML = "You need to enter a institution name!";
      } else {
          this.getSpanErrorInstitutionName.innerHTML = "";
      }
    },


    showElementsEducationRegistered: function(){

        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        this.newElementParagraphSchoolingRegistered.innerHTML = `Schooling: ${this.getSchoolingValue()}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

        this.newElementParagraphGraduateYearRegistered.innerHTML = `Graduate Year: ${this.getElementGraduate.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphGraduateYearRegistered);

        if(!this.getElementIncompleteSchool.checked || 
            !this.getElementCompleteSchool.checked){

            this.newElementParagraphSchoolingRegistered.innerHTML = `Course Name: ${this.getElementCourseName.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

            this.newElementPagragraphInstitutionNameRegistered.innerHTML = `Instituion Name:  ${this.getElementInstitutionName.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementPagragraphInstitutionNameRegistered);
        }
    }
}

function showEducationDiv(){
  	const objectFieldsetEducation = new FieldsetEducation();
  	if(!objectFieldsetEducation.getElementIncompleteSchool.checked && 
     	!objectFieldsetEducation.getElementCompleteSchool.checked){
      	objectFieldsetEducation.getElementDivEducation.removeAttribute("hidden");
  	}
}

function hiddenEducationDiv(){
 	const objectFieldsetEducation = new FieldsetEducation();
  	objectFieldsetEducation.getElementDivEducation.setAttribute("hidden", "true");
}

function verifyFieldSetEducation(){

  	const objectFieldsetEducation = new FieldsetEducation();
  	objectFieldsetEducation.verifyIfElementRadioEducationIsChecked();
  	objectFieldsetEducation.verifyIfGraduateIsChecked();
  	objectFieldsetEducation.verifyIfInstitutionNameHasValue();
  	objectFieldsetEducation.verifyIfCourseNameHasValue();
  	objectFieldsetEducation.showElementsEducationRegistered();
    stringifyAndStorageEducationFieldsetValues();
}

function stringifyAndStorageEducationFieldsetValues(){
  	
    const objectFieldsetEducation = new FieldsetEducation();

    const objectFieldEducationValues = {
        schooling: objectFieldsetEducation.getSchoolingValue(),  
        graduate: objectFieldsetEducation.getElementGraduate.value,
        courseName: objectFieldsetEducation.getElementCourseName.value,
        institutionName: objectFieldsetEducation.getElementInstitutionName.value
    }

    const EducationValuesJSON = JSON.stringify(objectFieldEducationValues);

    localStorage.setItem("EducationValuesJSON", EducationValuesJSON);
}



/**
 * PROFESSIONAL
 */
function FieldsetProfessional(){

	this.getElementCompanyName = document.getElementById("companyName");
    this.getElementStartMonth = document.getElementsByName("monthStart")[0];
    this.getElementEndMonth = document.getElementsByName("endMonth")[0];
    this.getElementStartYear = document.getElementsByName("yearStart")[0];
    this.getElementEndYear = document.getElementsByName("endYear")[0];
    this.getElementsBusinessSegment = document.getElementsByName("businessSegment");
    this.getElementPositionHeld = document.getElementById("positionHeld");
    this.getElementJobResponsabilities = document.getElementById("jobResponsabilities");

    this.getSpanErrorCompanyName = document.getElementById("errorCompanyName");
    this.getSpanErrorPositionHeld = document.getElementById("errorPositionHeld");
    this.getSpanErrorBusinessSegment = document.getElementById("errorBusinessSegment");
    this.getSpanErrorJobResponsabilites = document.getElementById("errorJobResponsabilities");

    this.businessSegmentChecked = false;

    this.getElementHasProfessionalExperience = document.getElementById("hasExperience");
    this.getElementDoestNotHasProfessionalExperience = document.getElementById("doesNotHasExperience");
    this.getElementButtonAddExperience = document.getElementById("button_add_professional_exp");
    this.getElementDivHasProfessionalExperience = document.getElementById("div_has_professional_exp");;

    this.newElementParagraphHasProfessionalExperience = document.createElement("p");
    this.newElementParagraphCompanyName = document.createElement("p");
    this.newElementParagraphStartMonth = document.createElement("p");
    this.newElementParagraphStartYear = document.createElement("p");
    this.newElementParagraphEndMonth = document.createElement("p");
    this.newElementParagraphEndYear = document.createElement("p");
    this.newElementParagraphBusinessSegment = document.createElement("p");
    this.newElementParagraphPositionHeld = document.createElement("p");
    this.newElementParagraphJobResponsabilites = document.createElement("p");
    this.newElementParagraphHasExperiencie = document.createElement("p");
}

FieldsetProfessional.prototype = {

    getBusinessSegmentValue(){
        for(let i = 0; i < this.getElementsBusinessSegment.length; i++){
            if(this.getElementsBusinessSegment[i].checked){
                return this.getElementsBusinessSegment[i].value;
            }
        }
    },

	verifyProfessionalExperienceValues: function(){

        if(!this.getElementDoestNotHasProfessionalExperience.checked){
            
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

    showElementsProfessionalExperienceRegistered: function(){

        let objectValidateCurriculumForms = new ValidateCurriculumForms();

        if(!this.getElementDoestNotHasProfessionalExperience.checked){

            if(objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild){
                cleanDivJavaScriptElementsRegistered();
            }

            // has professional experience
            this.newElementParagraphHasExperiencie.innerHTML = "The candidate HAS professional experience.";
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphHasExperiencie);
            
            // company name
            this.newElementParagraphCompanyName.innerHTML = `Company Name: ${this.getElementCompanyName.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCompanyName);

            // start month
            this.newElementParagraphStartMonth.innerHTML = `Start Month: ${this.getElementStartMonth.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStartMonth);

            // end month
            this.newElementParagraphEndMonth.innerHTML = `End Month: ${this.getElementEndMonth.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEndMonth);

            // start year
            this.newElementParagraphStartYear.innerHTML = `Start Year: ${this.getElementStartYear.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStartYear);

            // end year
            this.newElementParagraphEndYear.innerHTML = `End Year: ${this.getElementEndYear.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEndYear);

            // bussines segment
            this.newElementParagraphBusinessSegment.innerHTML = `Business Segment: ${this.getElementBusinessSegment}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphBusinessSegment);

            // position held
            this.newElementParagraphPositionHeld.innerHTML = `Position Held: ${this.getElementPositionHeld.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphPositionHeld);

            // job responsabilites
            this.newElementParagraphJobResponsabilites.innerHTML = `Job Responsabilites: ${this.getElementJobResponsabilities.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphJobResponsabilites);

        } else {
            this.newElementParagraphHasExperiencie.innerHTML = "The candidate DOESN\'T has professional experience.";
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphHasExperiencie);
        }
    }
}

function showButtonAddProfessionalExperience(){
    let objectFieldsetProfessional = new FieldsetProfessional();
    if(objectFieldsetProfessional.getElementHasProfessionalExperience.checked){
        objectFieldsetProfessional.getElementButtonAddExperience.removeAttribute("hidden");
    } 
}

function hiddenButtonAddProfessionalExperience(){
    let objectFieldsetProfessional = new FieldsetProfessional();
    if(objectFieldsetProfessional.getElementDoestNotHasProfessionalExperience.checked){
    	hiddenCompanyExperience();
        objectFieldsetProfessional.getElementButtonAddExperience.setAttribute("hidden", "true");
    }
}

function hiddenButtonAddExperinceData(){
    const objectFieldsetProfessional = new FieldsetProfessional();
    objectFieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
}

function showDivAddExperienceData(){
    const objectFieldsetProfessional = new FieldsetProfessional();
    objectFieldsetProfessional.getElementDivHasProfessionalExperience.removeAttribute("hidden");
}

function verifyFieldsetProfessionalExperience(){

    const objectFieldsetProfessional = new FieldsetProfessional();
    objectFieldsetProfessional.verifyProfessionalExperienceValues();
    objectFieldsetProfessional.showElementsProfessionalExperienceRegistered();
    stringifyAndStorageProfessionalFieldsetValues();
}

function stringifyAndStorageProfessionalFieldsetValues(){
    
    const objectFieldsetProfessional = new FieldsetProfessional();

    const objectFieldsetProfessionalValues = {
        hasExperience: objectFieldsetProfessional.hasProfessionalExperience,  
        companyName: objectFieldsetProfessional.getElementCompanyName.value,
        startMonth: objectFieldsetProfessional.getElementStartMonth.value,
        startYear: objectFieldsetProfessional.getElementStartYear.value,
        endMonth: objectFieldsetProfessional.getElementEndMonth.value,
        endYear: objectFieldsetProfessional.getElementEndYear.value,
        businessSegment: objectFieldsetProfessional.getBusinessSegmentValue(), 
        positionHeld: objectFieldsetProfessional.getElementPositionHeld.value,
        jobResponsabilities: objectFieldsetProfessional.getElementJobResponsabilities.value
    }

    const ProfessionalValuesJSON = JSON.stringify(objectFieldsetProfessionalValues);

    localStorage.setItem("ProfessionalValuesJSON", ProfessionalValuesJSON);
}

function hiddenCompanyExperience(){
	const objectFieldsetProfessional = new FieldsetProfessional();
    objectFieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
}