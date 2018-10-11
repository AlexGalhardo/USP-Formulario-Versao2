const ValidateCurriculumForms = {
	newTopDivElementsRegistered: document.getElementById("div_data_send"),
	removeAttributeHidden(){
        this.newTopDivElementsRegistered.removeAttribute("hidden");
    }
}

// function object ValidateCurriculumForms static method
function cleanDivJavaScriptElementsRegistered(){
    while (ValidateCurriculumForms.newTopDivElementsRegistered.firstChild) {
        ValidateCurriculumForms.newTopDivElementsRegistered.removeChild(ValidateCurriculumForms.newTopDivElementsRegistered.firstChild);
    }
}

// function object ValidateCurriculumForms static method
function verifyCurriculumForms(){

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
}

/**
 * PERSONAL
 */
// when I create a object like this, I can't use this format like a class
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
			 * Regex para verificar se o email é válido
			 *
			 * Referência: http://jsfiddle.net/ghvj4gy9/embedded/result,js/
			 */
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			/**
			 * Se o retorno da Regex for falso, avise o erro
			 */
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
        } else {
            this.getSpanErrorNumberID.innerHTML = "";
        }
    },
    showElementsPersonalRegistered(){
    	// company name
        this.newElementParagraphCompleteName.innerHTML = `Complete Name: ${this.getElementCompleteName.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCompleteName);

        // start month
        this.newElementParagraphEmail.innerHTML = `Email: ${this.getElementEmail.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEmail);

        // end month
        this.newElementParagraphCellphone.innerHTML = `Cellhpone: ${this.getElementCellphone.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCellphone);

        // start year
        this.newElementParagraphGender.innerHTML = `Gender: ${this.getElementsRadioGender.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphGender);

        // end year
        this.newElementParagraphMaritalStatus.innerHTML = `Marital Status: ${this.getElementsOptionMaritalStatus.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphMaritalStatus);

        // bussines segment
        this.newElementParagraphNationality.innerHTML = `Nationality: ${this.getElementsOptionNationality.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphNationality);

        // position held
        this.newElementParagraphNumberID.innerHTML = `Number ID: ${this.getElementNumberID.value}`;
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
	} catch(e){
		console.log(e);
	}
}

function stringifyAndStoragePersonalFieldsetValues(){
    let PersonalValuesJSON = JSON.stringify(FieldsetPersonal);
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
    	// company name
        this.newElementParagraphStreet.innerHTML = `Street: ${this.getElementStreet.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStreet);

        // start month
        this.newElementParagraphNeighborhood.innerHTML = `Neighborhood: ${this.getElementNeighborhood.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphNeighborhood);

        // end month
        this.newElementParagraphResidenceNumber.innerHTML = `Residence Number: ${this.getElementResidenceNumber.value}`;
        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphResidenceNumber);
    }
}

function verifyFieldSetAddress(){
	try {
	    FieldsetAddress.verifyIfStreetHasValue();
	    FieldsetAddress.verifyIfNeighborhoodHasValue();
	    FieldsetAddress.verifyIfResidenceNumberHasValue();
	} 
	catch(error){
		console.log(error);
	}
}

function stringifyAndStorageAddressFieldsetValues(){
    let AddressValuesJSON = JSON.stringify(FieldsetAddress);
    localStorage.setItem("AddressValuesJSON", AddressValuesJSON);
}

/**
 * Job Interest
 */
const FieldsetJobInterest = {
	getElementsRadioNamePost: document.getElementsByName("post"),
    getElementsRadioExperience: document.getElementsByName("experience"),
    getElementsOptionInterestRegion: document.getElementById("interestRegion"),
    getElementSalaryPretension: document.getElementById("salaryPretension"),
    verifyIfPostNameIsChecked(){
        let postNameChecked = false;
        for(let i = 0; i < this.getElementsRadioNamePost.length; i++){
            if(this.getElementsRadioNamePost[i].checked){
                postNameChecked = true;
                break;
            }
        }
        if(!postNameChecked){
            document.getElementById("errorPostName").innerHTML = "You need to select a post below!";
        } else {
            document.getElementById("errorPostName").innerHTML = "";
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
            document.getElementById("errorPostExperience").innerHTML = "You need to select a experience below!";
        } else {
            document.getElementById("errorPostExperience").innerHTML = "";
        }
    },
    verifyIfInterestRegionHasValue(){
        if(this.getElementsOptionInterestRegion.value == ''){
            document.getElementById("errorInterestRegion").innerHTML = "You need to choose a region interest below!";
        } else {
            document.getElementById("errorInterestRegion").innerHTML = "";
        }
    },
    verifyIfSalaryPretensionHasValue(){
        if(this.getElementSalaryPretension.value == ""){
            document.getElementById("errorSalaryPretension").innerHTML = "You need to enter a salary pretension!";
        } else {
            document.getElementById("errorSalaryPretension").innerHTML = "";
        }
    }
}

function verifyFieldSetJobInterest(){
    cleanDivJavaScriptElementsRegistered();
    FieldsetJobInterest.verifyIfPostNameIsChecked();
    FieldsetJobInterest.verifyIfExperienceIsChecked();
    FieldsetJobInterest.verifyIfInterestRegionHasValue();
    FieldsetJobInterest.verifyIfSalaryPretensionHasValue();
}

function stringifyAndStorageJobInterestFieldsetValues(){
    let JobInterestValuesJSON = JSON.stringify(FieldsetJobInterest);
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
    getCourseName: document.getElementById("courseName"),
    getSpanErrorCourseName: document.getElementById("errorCourseName"),
    getElementInstitutionName: document.getElementById("institutionName"),
    getSpanErrorInstitutionName: document.getElementById("errorInstitutionName"),
    getGraduate: document.getElementById("graduate"),
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
    verifyIfCourseNameHasValue(){
        if(this.getCourseName.value == ""){
            this.getSpanErrorCourseName.innerHTML = "You need to enter your course name!";
        } else {
        	this.getSpanErrorCourseName.innerHTML = "";
        }
    },
    verifyIfGraduateIsChecked(){
      	if(this.getGraduate.value == ''){
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
    // this method shows all the values registered in top div
    showElementsEducationRegistered(){

	    // show radio education checked
	    for(let i = 0; i <  this.getElementsRadioSchooling.length; i++){
	        if(this.getElementsRadioSchooling[i].checked){
	            this.newElementParagraphSchoolingRegistered.innerHTML = `Schooling: ${this.getElementsRadioSchooling.value}`;
	            break;
	        }
	    }
	    ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

	    // show graduate year value
	    this.newElementParagraphGraduateYearRegistered.innerHTML = `Graduate Year: ${this.getGraduate.value}`;
	    ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphGraduateYearRegistered);

	    // show graduate Course Name and Institution Name
	    if(!this.getElementIncompleteSchool.checked || 
	        !this.getElementCompleteSchool.checked){

	        // show course name registered
	        this.newElementParagraphSchoolingRegistered.innerHTML = `Course Name: ${this.getCourseName.value}`;
	        ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

	        // show institution name registered
	        this.newElementPagragraphInstitutionNameRegistered.innerHTML = `Instituion Name:  ${this.getElementInstitutionName.value}`;
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
}

function stringifyAndStorageEducationFieldsetValues(){
  	let EducationValuesJSON = JSON.stringify(FieldsetEducation);
  	localStorage.setItem("EducationValuesJSON", EducationValuesJSON);
}


/**
 * PROFESSIONAL
 */
const FieldsetProfessional = {
	getElementCompanyName: document.getElementById("companyName"),
    getElementStartMonth: document.getElementsByName("monthStart")[0],
    getElementEndMonth: document.getElementsByName("endMonth")[0],
    getElementStartYear: document.getElementsByName("yearStart")[0],
    getElementEndYear: document.getElementsByName("endYear")[0],
    getElementsBusinessSegment: document.getElementsByName("businessSegment"),
    getElementPositionHeld: document.getElementById("positionHeld"),
    getElementJobResponsabilities: document.getElementById("jobResponsabilities"),
    getSpanErrorCompanyName: document.getElementById("errorCompanyName"),
    getSpanErrorPositionHeld: document.getElementById("errorPositionHeld"),
    getSpanErrorBusinessSegment: document.getElementById("errorBusinessSegment"),
    getSpanErrorJobResponsabilites: document.getElementById("errorJobResponsabilities"),
    businessSegmentChecked: false,
    getElementHasProfessionalExperience: document.getElementById("hasExperience"),
    getElementDoestNotHasProfessionalExperience: document.getElementById("doesNotHasExperience"),
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

        // candidate has professional experience?
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
    showElementsProfessionalExperienceRegistered(){

        if(!this.getElementDoestNotHasProfessionalExperience.checked){

            // has professional experience
            this.newElementParagraphHasExperiencie.innerHTML = "The candidate HAS professional experience.";
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphHasExperiencie);
            
            // company name
            this.newElementParagraphCompanyName.innerHTML = `Company Name: ${this.getElementCompanyName.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphCompanyName);

            // start month
            this.newElementParagraphStartMonth.innerHTML = `Start Month: ${this.getElementStartMonth.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStartMonth);

            // end month
            this.newElementParagraphEndMonth.innerHTML = `End Month: ${this.getElementEndMonth.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEndMonth);

            // start year
            this.newElementParagraphStartYear.innerHTML = `Start Year: ${this.getElementStartYear.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphStartYear);

            // end year
            this.newElementParagraphEndYear.innerHTML = `End Year: ${this.getElementEndYear.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphEndYear);

            // bussines segment
            this.newElementParagraphBusinessSegment.innerHTML = `Business Segment: ${this.getElementBusinessSegment}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphBusinessSegment);

            // position held
            this.newElementParagraphPositionHeld.innerHTML = `Position Held: ${this.getElementPositionHeld.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphPositionHeld);

            // job responsabilites
            this.newElementParagraphJobResponsabilites.innerHTML = `Job Responsabilites: ${this.getElementJobResponsabilities.value}`;
            ValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphJobResponsabilites);

        } else {
            this.newElementParagraphHasExperiencie.innerHTML = "The candidate DOESN\'T has professional experience.";
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
    if(FieldsetProfessional.getElementDoestNotHasProfessionalExperience.checked){
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
}

function stringifyAndStorageProfessionalFieldsetValues(){
    let ProfessionalValuesJSON = JSON.stringify(FieldsetProfessional);
    localStorage.setItem("ProfessionalValuesJSON", ProfessionalValuesJSON);
}

function hiddenCompanyExperience(){
    FieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
}