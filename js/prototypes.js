/**
 * ValidateCurricumForms
 */
// function object ValidateCurriculumForms
function ValidateCurriculumForms(){
	this.newTopDivElementsRegistered = document.getElementById("div_data_send");
}

// function object ValidateCurriculumForms method
ValidateCurriculumForms.prototype = {
	removeAttributeHidden: function(){
        this.newTopDivElementsRegistered.removeAttribute("hidden");
    }
}

// function object ValidateCurriculumForms static method
function cleanDivJavaScriptElementsRegistered(){
    const objectValidateCurriculumForms = new ValidateCurriculumForms();

    while (objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild) {
        objectValidateCurriculumForms.newTopDivElementsRegistered.removeChild(objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild);
    }
}

// function object ValidateCurriculumForms static method
function verifyCurriculumForms(){
    verifyFieldSetPersonal();
    stringifyAndStoragePersonalFieldsetValues();

    verifyFieldSetAddress();
    stringifyAndStorageAddressFieldsetValues();

    verifyFieldSetJobInterest();
    stringifyAndStorageJobInterestFieldsetValues();

    verifyFieldSetEducation();
    stringifyAndStorageEducationFieldsetValues();

    verifyFieldsetProfessionalExperience();
    stringifyAndStorageProfessionalFieldsetValues();
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
}

function stringifyAndStoragePersonalFieldsetValues(){
    let objectFieldsetPersonal = new FieldsetPersonal();
    let PersonalValuesJSON = JSON.stringify(objectFieldsetPersonal);
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
    }
}

function verifyFieldSetAddress(){
    const objectFieldsetAddress = new FieldsetAddress();
    objectFieldsetAddress.verifyIfStreetHasValue();
    objectFieldsetAddress.verifyIfNeighborhoodHasValue();
    objectFieldsetAddress.verifyIfResidenceNumberHasValue();
}

function stringifyAndStorageAddressFieldsetValues(){
    let objectFieldsetAddress = new FieldsetAddress();
    let AddressValuesJSON = JSON.stringify(objectFieldsetAddress);
    localStorage.setItem("AddressValuesJSON", AddressValuesJSON);
}

/**
 * JOB INTEREST
 */
function FieldsetJobInterest(){
	this.getElementsRadioNamePost = document.getElementsByName("post");
    this.getElementsRadioExperience = document.getElementsByName("experience");
    this.getElementsOptionInterestRegion = document.getElementById("interestRegion");
    this.getElementSalaryPretension = document.getElementById("salaryPretension");
}

FieldsetJobInterest.prototype = {
	verifyIfPostNameIsChecked: function(){
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
    verifyIfExperienceIsChecked: function(){
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
    verifyIfInterestRegionHasValue: function(){
        if(this.getElementsOptionInterestRegion.value == ''){
            document.getElementById("errorInterestRegion").innerHTML = "You need to choose a region interest below!";
        } else {
            document.getElementById("errorInterestRegion").innerHTML = "";
        }
    },
    verifyIfSalaryPretensionHasValue: function(){
        if(this.getElementSalaryPretension.value == ""){
            document.getElementById("errorSalaryPretension").innerHTML = "You need to enter a salary pretension!";
        } else {
            document.getElementById("errorSalaryPretension").innerHTML = "";
        }
    }
}

function verifyFieldSetJobInterest(){
    cleanDivJavaScriptElementsRegistered();
    const objectFieldsetJobInterest = new FieldsetJobInterest();
    objectFieldsetJobInterest.verifyIfPostNameIsChecked();
    objectFieldsetJobInterest.verifyIfExperienceIsChecked();
    objectFieldsetJobInterest.verifyIfInterestRegionHasValue();
    objectFieldsetJobInterest.verifyIfSalaryPretensionHasValue();
}

function stringifyAndStorageJobInterestFieldsetValues(){
    let objectFieldsetJobInterest = new FieldsetJobInterest();
    let JobInterestValuesJSON = JSON.stringify(objectFieldsetJobInterest);
    localStorage.setItem("JobInterestValuesJSON", JobInterestValuesJSON);
}


function FieldsetEducation() {
  	this.getElementDivEducation = document.getElementById("div_education");

    this.getElementsRadioSchooling = document.getElementsByName("schooling");
    this.getSpanErrorSchooling = document.getElementById("errorSchooling");
    
    this.attrRadioSchoolingChecked = false;
    
    this.textNodeEducation; // undefined

    this.getCourseName = document.getElementById("courseName");
    this.getSpanErrorCourseName = document.getElementById("errorCourseName");
    
    this.getElementInstitutionName = document.getElementById("institutionName");
    this.getSpanErrorInstitutionName = document.getElementById("errorInstitutionName");
    
    this.getGraduate = document.getElementById("graduate");
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
    verifyIfCourseNameHasValue: function(){
        if(this.getCourseName.value == ""){
            this.getSpanErrorCourseName.innerHTML = "You need to enter your course name!";
        } else {
        	this.getSpanErrorCourseName.innerHTML = "";
        }
    },
    verifyIfGraduateIsChecked: function(){
      	if(this.getGraduate.value == ''){
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
    // this method shows all the values registered in top div
    showElementsEducationRegistered: function(){

      const objectValidateCurriculumForms = new ValidateCurriculumForms();

      // show radio education checked
      for(let i = 0; i <  this.getElementsRadioSchooling.length; i++){
          if(this.getElementsRadioSchooling[i].checked){
              this.newElementParagraphSchoolingRegistered.innerHTML = `Schooling: ${this.getElementsRadioSchooling.value}`;
              break;
          }
      }
      objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

      // show graduate year value
      this.newElementParagraphGraduateYearRegistered.innerHTML = `Graduate Year: ${this.getGraduate.value}`;
      objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphGraduateYearRegistered);

      // show graduate Course Name and Institution Name
      if(!this.getElementIncompleteSchool.checked || 
         !this.getElementCompleteSchool.checked){

          // show course name registered
          this.newElementParagraphSchoolingRegistered.innerHTML = `Course Name: ${this.getCourseName.value}`;
          objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

          // show institution name registered
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
}

function stringifyAndStorageEducationFieldsetValues(){
  	const objectFieldsetEducation = new FieldsetEducation();
  	let EducationValuesJSON = JSON.stringify(objectFieldsetEducation);
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

    // new paragraph elements who will show in top div
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

	verifyProfessionalExperienceValues: function(){

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
    showElementsProfessionalExperienceRegistered: function(){

        let objectValidateCurriculumForms = new ValidateCurriculumForms();

        if(!this.getElementDoestNotHasProfessionalExperience.checked){

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
}

function stringifyAndStorageProfessionalFieldsetValues(){
    const objectFieldsetProfessional = new FieldsetProfessional();
    let ProfessionalValuesJSON = JSON.stringify(objectFieldsetProfessional);
    localStorage.setItem("ProfessionalValuesJSON", ProfessionalValuesJSON);
}

function hiddenCompanyExperience(){
	const objectFieldsetProfessional = new FieldsetProfessional();
    objectFieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
}