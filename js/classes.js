class ValidateCurriculumForms {

    constructor(){
        this.newTopDivElementsRegistered = document.getElementById("div_data_send");
    }

    removeAttributeHidden(){
        newTopDivElementsRegistered.removeAttribute("hidden");
    }

    static cleanDivJavaScriptElementsRegistered(){
        
        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        while (objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild) {
            objectValidateCurriculumForms.newTopDivElementsRegistered.removeChild(objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild);
        }
    }

    static verifyCurriculumForms(){

        ValidateCurriculumForms.cleanDivJavaScriptElementsRegistered();

        FieldsetPersonal.verifyFieldSetPersonal();
        FieldsetPersonal.showElementsPersonalRegistered();
        FieldsetPersonal.stringifyAndStoragePersonalFieldsetValues();

        FieldsetAddress.verifyFieldSetAddress();
        FieldsetAddress.showElementsAddressRegistered();
        FieldsetAddress.stringifyAndStorageAddressFieldsetValues();

        FieldsetJobInterest.verifyFieldSetJobInterest();
        FieldsetJobInterest.showElementsJobInterestRegistered();
        FieldsetJobInterest.stringifyAndStorageJobInterestFieldsetValues();

        FieldsetEducation.verifyFieldSetEducation();
        FieldsetEducation.showElementsEducationRegistered();
        FieldsetEducation.stringifyAndStorageEducationFieldsetValues();

        FieldsetProfessional.verifyFieldsetProfessionalExperience();
        FieldsetProfessional.showElementsProfessionalExperienceRegistered();
        FieldsetProfessional.stringifyAndStorageProfessionalFieldsetValues();
    }
}


class FieldsetPersonal {

    constructor(){
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

    verifyIfCompleteNameHasValue(){
        if(this.getElementCompleteName.value == ''){
            this.getSpanErrorCompleteName.innerHTML = "You need to enter a name!";
        } else {
            this.getSpanErrorCompleteName.innerHTML = "";
        }
    }

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
                this.getSpanErrorEmail.innerHTML = "";
            }
        }else {
            this.getSpanErrorEmail.innerHTML = "";
        }
    }

    verifyIfCellphoneHasValue(){
        if(this.getElementCellphone.value == ''){
            this.getSpanErrorCellphone.innerHTML = "You need to enter a cellphone number!";
        } else {
            this.getSpanErrorCellphone.innerHTML = "";
        }
    }

    // input type radio
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
    }

    // select option 
    verifyIfMaritalStatusIsSelected(){
        if(this.getElementsOptionMaritalStatus.value == ''){
            this.getSpanErrorMaritalStatus.innerHTML = "You need to select a marital status below!";
        } else {
            this.getSpanErrorMaritalStatus.innerHTML = "";
        }
    }

    verifyIfNationalityWasSelected(){
        if(this.getElementsOptionNationality.value == ''){
            this.getSpanErrorNationality.innerHTML = "You need to select a nationality below!";
        } else {
            this.getSpanErrorNationality.innerHTML = "";
        }
    }

    verifyIfNumberIDHasValue(){
        
        if(this.getElementNumberID.value == ''){
            this.getSpanErrorNumberID.innerHTML = "You need to enter your number ID!";
        } 
        else if (this.getElementNumberID.value.toString().length < 11 
                  || 
                  this.getElementNumberID.value.toString().length > 11){

            this.getSpanErrorNumberID.innerHTML = "You need digit a valid numberID with at least 11 characters!";
        
        } else {
            this.getSpanErrorNumberID.innerHTML = "";
        }
    }

    static verifyFieldSetPersonal(){
        try {
            const objectFieldsetPersonal = new FieldsetPersonal();
            objectFieldsetPersonal.verifyIfCompleteNameHasValue();
            objectFieldsetPersonal.verifyIfEmailHasValue();
            objectFieldsetPersonal.verifyIfCellphoneHasValue();
            objectFieldsetPersonal.verifyIfGenderIsChecked();
            objectFieldsetPersonal.verifyIfMaritalStatusIsSelected();
            objectFieldsetPersonal.verifyIfNationalityWasSelected();
            objectFieldsetPersonal.verifyIfNumberIDHasValue();
            FieldsetPersonal.showElementsPersonalRegistered();
        } catch(error){
            console.log(error);
        }
    }

    static stringifyAndStoragePersonalFieldsetValues(){
        const objectFieldsetPersonal = new FieldsetPersonal();
        let PersonalValuesJSON = JSON.stringify(objectFieldsetPersonal);
        localStorage.setItem("PersonalValuesJSON", PersonalValuesJSON);
    }

    static showElementsPersonalRegistered(){

        const objectFieldsetPersonal = new FieldsetPersonal();
        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        objectFieldsetPersonal.newElementParagraphCompleteName.innerHTML = `<strong>Complete Name:</strong> ${objectFieldsetPersonal.getElementCompleteName.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetPersonal.newElementParagraphCompleteName);

        objectFieldsetPersonal.newElementParagraphEmail.innerHTML = `<strong>Email:</strong> ${objectFieldsetPersonal.getElementEmail.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetPersonal.newElementParagraphEmail);

        objectFieldsetPersonal.newElementParagraphCellphone.innerHTML = `<strong>Cellhpone:</strong> ${objectFieldsetPersonal.getElementCellphone.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetPersonal.newElementParagraphCellphone);

        objectFieldsetPersonal.newElementParagraphGender.innerHTML = `<strong>Gender:</strong> ${objectFieldsetPersonal.getElementsRadioGender.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetPersonal.newElementParagraphGender);

        objectFieldsetPersonal.newElementParagraphMaritalStatus.innerHTML = `<strong>Marital Status:</strong> ${objectFieldsetPersonal.getElementsOptionMaritalStatus.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetPersonal.newElementParagraphMaritalStatus);

        objectFieldsetPersonal.newElementParagraphNationality.innerHTML = `<strong>Nationality:</strong> ${objectFieldsetPersonal.getElementsOptionNationality.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetPersonal.newElementParagraphNationality);

        objectFieldsetPersonal.newElementParagraphNumberID.innerHTML = `<strong>Number ID:</strong> ${objectFieldsetPersonal.getElementNumberID.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetPersonal.newElementParagraphNumberID);
    }
}

/**
 * ADDRESS
 */

class FieldsetAddress {

    constructor(){
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

    verifyIfStreetHasValue(){
        if(this.getElementStreet.value == ''){
            this.getSpanErrorStreet.innerHTML = "You need to enter a street name!";
        }
    }

    verifyIfNeighborhoodHasValue(){
        if(this.getElementNeighborhood.value == ''){
            this.getSpanErrorNeighborhood.innerHTML = "You need enter a neighborhood name!";
        }
    }

    verifyIfResidenceNumberHasValue(){
        if(this.getElementResidenceNumber.value == ''){
            this.getSpanErrorResidenceNumber.innerHTML = "You need to enter a residence number!";
        }
    }

    static verifyFieldSetAddress(){
        const objectFieldsetAddress = new FieldsetAddress();
        objectFieldsetAddress.verifyIfStreetHasValue();
        objectFieldsetAddress.verifyIfNeighborhoodHasValue();
        objectFieldsetAddress.verifyIfResidenceNumberHasValue();
    }

    static stringifyAndStorageAddressFieldsetValues(){
        const objectFieldsetAddress = new FieldsetAddress();
        let AddressValuesJSON = JSON.stringify(objectFieldsetAddress);
        localStorage.setItem("AddressValuesJSON", AddressValuesJSON);
    }

    static showElementsAddressRegistered(){

        const objectFieldsetAddress = new FieldsetAddress();
        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        objectFieldsetAddress.newElementParagraphStreet.innerHTML = `<strong>Street:</strong> ${objectFieldsetAddress.getElementStreet.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetAddress.newElementParagraphStreet);

        objectFieldsetAddress.newElementParagraphNeighborhood.innerHTML = `<strong>Neighborhood:</strong> ${objectFieldsetAddress.getElementNeighborhood.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetAddress.newElementParagraphNeighborhood);

        objectFieldsetAddress.newElementParagraphResidenceNumber.innerHTML = `<strong>Residence Number:</strong> ${objectFieldsetAddress.getElementResidenceNumber.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetAddress.newElementParagraphResidenceNumber);
    }
}



/**
 * JOB INTEREST
 */
class FieldsetJobInterest {

    constructor(){

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

    verifyIfPostNameIsChecked(){
        let postNameChecked = false;
        for(let i = 0; i < this.getElementsRadioPostName.length; i++){
            if(this.getElementsRadioPostName[i].checked){
                postNameChecked = true;
                break;
            }
        }
        if(!postNameChecked){
            document.getElementById("errorPostName").innerHTML = "You need to select a post below!";
        } else {
            document.getElementById("errorPostName").innerHTML = "";
        }
    }

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
    }

    verifyIfInterestRegionHasValue(){
        if(this.getElementsOptionInterestRegion.value == ''){
            document.getElementById("errorInterestRegion").innerHTML = "You need to choose a region interest below!";
        } else {
            document.getElementById("errorInterestRegion").innerHTML = "";
        }
    }

    verifyIfSalaryPretensionHasValue(){
        if(this.getElementSalaryPretension.value == ""){
            document.getElementById("errorSalaryPretension").innerHTML = "You need to enter a salary pretension!";
        } else {
            document.getElementById("errorSalaryPretension").innerHTML = "";
        }
    }

    static verifyFieldSetJobInterest(){
        const objectFieldsetJobInterest = new FieldsetJobInterest();
        objectFieldsetJobInterest.verifyIfPostNameIsChecked();
        objectFieldsetJobInterest.verifyIfExperienceIsChecked();
        objectFieldsetJobInterest.verifyIfInterestRegionHasValue();
        objectFieldsetJobInterest.verifyIfSalaryPretensionHasValue();
    }

    static stringifyAndStorageJobInterestFieldsetValues(){
        const objectFieldsetJobInterest = new FieldsetJobInterest();
        let JobInterestValuesJSON = JSON.stringify(objectFieldsetJobInterest);
        localStorage.setItem("JobInterestValuesJSON", JobInterestValuesJSON);
    }

    static showElementsJobInterestRegistered(){

        const objectFieldsetJobInterest = new FieldsetJobInterest();
        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        for(let i = 0; i < objectFieldsetJobInterest.getElementsRadioPostName.length; i++){
            if(objectFieldsetJobInterest.getElementsRadioPostName[i].checked){
                objectFieldsetJobInterest.newElementParagraphPostName.innerHTML = `<strong>Post Name:</strong> ${objectFieldsetJobInterest.getElementsRadioPostName[i].value}`;
                objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetJobInterest.newElementParagraphPostName);
                break;
            }
        }
        
        for(let i = 0; i < objectFieldsetJobInterest.getElementsRadioExperience.length; i++){
            if(objectFieldsetJobInterest.getElementsRadioExperience[i].checked){
                objectFieldsetJobInterest.newElementParagraphExperience.innerHTML = `<strong>Experience:</strong> ${objectFieldsetJobInterest.getElementsRadioExperience[i].value}`;
                objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetJobInterest.newElementParagraphExperience);
                break;
            }
        }

        objectFieldsetJobInterest.newElementParagraphInterestRegion.innerHTML = `<strong>Interest Region:</strong> ${objectFieldsetJobInterest.getElementsOptionInterestRegion.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetJobInterest.newElementParagraphInterestRegion);
    
        objectFieldsetJobInterest.newElementParagraphSalaryPretension.innerHTML = `<strong>Salary Pretension:</strong> ${objectFieldsetJobInterest.getElementSalaryPretension.value} / month`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetJobInterest.newElementParagraphSalaryPretension);
    }
}



/**
 * EDUCATION
 */
class FieldsetEducation {
  
    constructor(){

        this.getElementDivEducation = document.getElementById("div_education");

        this.getElementsRadioSchooling = document.getElementsByName("schooling");
        this.schoolingValue;
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

    getSchoolingValue(){
        let i;
        for(i = 0; i < this.getElementsRadioSchooling.length; i++){
            if(this.getElementsRadioSchooling[i].checked){
                this.attrRadioSchoolingChecked = true;
                break;
            }
        }
        return this.getElementsRadioSchooling[i].value;
    }

    verifyIfElementRadioEducationIsChecked(){
        for(let i = 0; i < this.getElementsRadioSchooling.length; i++){
            if(this.getElementsRadioSchooling[i].checked){
                this.attrRadioSchoolingChecked = true;
                break;
            }
        }
        if(!this.attrRadioSchoolingChecked){
            this.getSpanErrorSchooling.innerHTML = "You need to choose a option below!";
        }
    }

    verifyIfCourseNameHasValue(){
        if(this.getElementCourseName.innerHTML == ""){
            this.getSpanErrorCourseName.innerHTML = "You need to enter your course name!";
        } else {
            this.getSpanErrorCourseName.innerHTML = "";
        }
    }

    verifyIfGraduateIsChecked(){
        if(this.getElementGraduate.value == ''){
            this.getSpanErrorGraduate.innerHTML = "You need to check some option below!";
        } else {
            this.getSpanErrorGraduate.innerHTML = "";
        }
    }

    verifyIfInstitutionNameHasValue(){
      if(this.getElementInstitutionName.value == ""){
          this.getSpanErrorInstitutionName.innerHTML = "You need to enter a institution name!";
      } else {
          this.getSpanErrorInstitutionName.innerHTML = "";
      }
    }

    static showEducationDiv(){

        const objectFieldsetEducation = new FieldsetEducation();
        
        if(!objectFieldsetEducation.getElementIncompleteSchool.checked && 
           !objectFieldsetEducation.getElementCompleteSchool.checked){
            
            objectFieldsetEducation.getElementDivEducation.removeAttribute("hidden");
        
        }
    }

    static hiddenEducationDiv(){
        const objectFieldsetEducation = new FieldsetEducation();
        objectFieldsetEducation.getElementDivEducation.setAttribute("hidden", "true");
    }

    static verifyFieldSetEducation(){
        const objectFieldsetEducation = new FieldsetEducation();
        objectFieldsetEducation.verifyIfElementRadioEducationIsChecked();
        objectFieldsetEducation.verifyIfGraduateIsChecked();
        objectFieldsetEducation.verifyIfInstitutionNameHasValue();
        objectFieldsetEducation.verifyIfCourseNameHasValue();
        FieldsetEducation.showElementsEducationRegistered();
        FieldsetEducation.stringifyAndStorageEducationFieldsetValues();
    }

    static showElementsEducationRegistered(){

        const objectFieldsetEducation = new FieldsetEducation();
        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        for(let i = 0; i <  objectFieldsetEducation.getElementsRadioSchooling.length; i++){
            if(objectFieldsetEducation.getElementsRadioSchooling[i].checked){
                objectFieldsetEducation.newElementParagraphSchoolingRegistered.innerHTML = `<strong>Schooling</strong>: ${objectFieldsetEducation.getElementsRadioSchooling[i].value}`;
                objectFieldsetEducation.schoolingValue = objectFieldsetEducation.getElementsRadioSchooling[i].value;
                break;
            }
        }
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetEducation.newElementParagraphSchoolingRegistered);

        objectFieldsetEducation.newElementParagraphGraduateYearRegistered.innerHTML = `<strong>Graduate Year</strong>: ${objectFieldsetEducation.getElementGraduate.value}`;
        objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetEducation.newElementParagraphGraduateYearRegistered);

        if(!objectFieldsetEducation.getElementIncompleteSchool.checked || 
            !objectFieldsetEducation.getElementCompleteSchool.checked){

            objectFieldsetEducation.newElementParagraphSchoolingRegistered.innerHTML = `<strong>Course Name</strong>: ${objectFieldsetEducation.getElementCourseName.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetEducation.newElementParagraphSchoolingRegistered);

            objectFieldsetEducation.newElementPagragraphInstitutionNameRegistered.innerHTML = `<strong>Institution Name</strong>:  ${objectFieldsetEducation.getElementInstitutionName.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetEducation.newElementPagragraphInstitutionNameRegistered);
        }
    }

    static stringifyAndStorageEducationFieldsetValues(){
        
        const objectFieldsetEducation = new FieldsetEducation();
        
        // get education values into a object
        let objectFieldEducationValues = {
            schooling: objectFieldsetEducation.getSchoolingValue(),  
            graduate: objectFieldsetEducation.getElementGraduate.value,
            courseName: objectFieldsetEducation.getElementCourseName.value,
            institutionName: objectFieldsetEducation.getElementInstitutionName.value
        }

        // stringify object to string JSON format
        const EducationValuesJSON = JSON.stringify(objectFieldEducationValues);
        // storage in browser
        localStorage.setItem("EducationValuesJSON", EducationValuesJSON);
    }
}


/**
 * PROFESSIONAL
 */
class FieldsetProfessional {

    constructor(){

        this.getElementCompanyName = document.getElementById("companyName");
        this.getSpanErrorCompanyName = document.getElementById("errorCompanyName");

        this.getElementStartMonth = document.getElementsByName("monthStart")[0];
        this.getElementEndMonth = document.getElementsByName("endMonth")[0];
        this.getElementStartYear = document.getElementsByName("yearStart")[0];
        this.getElementEndYear = document.getElementsByName("endYear")[0];

        this.getElementsBusinessSegment = document.getElementsByName("businessSegment");
        this.getSpanErrorBusinessSegment = document.getElementById("errorBusinessSegment");

        this.getElementPositionHeld = document.getElementById("positionHeld");
        this.getSpanErrorPositionHeld = document.getElementById("errorPositionHeld");

        this.getElementJobResponsabilities = document.getElementById("jobResponsabilities");
        this.getSpanErrorJobResponsabilites = document.getElementById("errorJobResponsabilities");

        this.businessSegmentChecked = false;

        this.hasProfessionalExperience = false;

        this.getElementHasProfessionalExperience = document.getElementById("hasExperience");
        this.getElementDoesNotHasProfessionalExperience = document.getElementById("doesNotHasExperience");
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

    static showButtonAddProfessionalExperience(){
        let objectFieldsetProfessional = new FieldsetProfessional();
        if(objectFieldsetProfessional.getElementHasProfessionalExperience.checked){
            objectFieldsetProfessional.getElementButtonAddExperience.removeAttribute("hidden");
        } 
    }

    static hiddenButtonAddProfessionalExperience(){
        const objectFieldsetProfessional = new FieldsetProfessional();
        if(objectFieldsetProfessional.getElementDoesNotHasProfessionalExperience.checked){
            FieldsetProfessional.hiddenCompanyExperience();
            objectFieldsetProfessional.getElementButtonAddExperience.setAttribute("hidden", "true");
        }
    }

    static hiddenButtonAddExperinceData(){
        const objectFieldsetProfessional = new FieldsetProfessional();
        objectFieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
    }

    static showDivAddExperienceData(){
        const objectFieldsetProfessional = new FieldsetProfessional();
        objectFieldsetProfessional.getElementDivHasProfessionalExperience.removeAttribute("hidden");
    }

    static verifyFieldsetProfessionalExperience(){
        const objectFieldsetProfessional = new FieldsetProfessional();
        objectFieldsetProfessional.verifyProfessionalExperienceValues();
        FieldsetProfessional.showElementsProfessionalExperienceRegistered();
        FieldsetProfessional.stringifyAndStorageProfessionalFieldsetValues();
    }

    static hiddenCompanyExperience(){
        const objectFieldsetProfessional = new FieldsetProfessional();
        objectFieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
    }

    getBusinessSegmentValue(){
        let i;
        for(i = 0; i < this.getElementsBusinessSegment.length; i++){
            if(this.getElementsBusinessSegment[i].checked){
                this.businessSegmentChecked = true;
                break;
            }
        }
        return this.getElementsBusinessSegment[i].value;
    }

    verifyProfessionalExperienceValues(){

        // candidate has professional experience?
        if(!this.getElementDoesNotHasProfessionalExperience.checked){
            
            this.hasProfessionalExperience = true;

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
    }

    static showElementsProfessionalExperienceRegistered(){

        const objectFieldsetProfessional = new FieldsetProfessional();
        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        if(!objectFieldsetProfessional.getElementDoesNotHasProfessionalExperience.checked){

            if(objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild){
                ValidateCurriculumForms.cleanDivJavaScriptElementsRegistered();
            }

            objectFieldsetProfessional.newElementParagraphHasExperiencie.innerHTML = "The candidate HAS professional experience.</strong>";
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphHasExperiencie);
            
            objectFieldsetProfessional.newElementParagraphCompanyName.innerHTML = `<strong>Company Name</strong>: ${objectFieldsetProfessional.getElementCompanyName.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphCompanyName);

            // start month
            objectFieldsetProfessional.newElementParagraphStartMonth.innerHTML = `<strong>Start Month</strong>: ${objectFieldsetProfessional.getElementStartMonth.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphStartMonth);

            // end month
            objectFieldsetProfessional.newElementParagraphEndMonth.innerHTML = `<strong>End Month</strong>: ${objectFieldsetProfessional.getElementEndMonth.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphEndMonth);

            // start year
            objectFieldsetProfessional.newElementParagraphStartYear.innerHTML = `<strong>Start Year</strong>: ${objectFieldsetProfessional.getElementStartYear.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphStartYear);

            // end year
            objectFieldsetProfessional.newElementParagraphEndYear.innerHTML = `<strong>End Year: ${objectFieldsetProfessional.getElementEndYear.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphEndYear);

            // bussines segment
            objectFieldsetProfessional.newElementParagraphBusinessSegment.innerHTML = `<strong>Business Segment</strong>: ${objectFieldsetProfessional.getBusinessSegmentValue()}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphBusinessSegment);

            // position held
            objectFieldsetProfessional.newElementParagraphPositionHeld.innerHTML = `<strong>Position Held</strong>: ${objectFieldsetProfessional.getElementPositionHeld.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphPositionHeld);

            // job responsabilites
            objectFieldsetProfessional.newElementParagraphJobResponsabilites.innerHTML = `<strong>Job Responsabilites</strong>: ${objectFieldsetProfessional.getElementJobResponsabilities.value}`;
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.newElementParagraphJobResponsabilites);

        } else {
            objectFieldsetProfessional.getElementHasProfessionalExperience.innerHTML = "<strong>The candidate DOESN\'T has professional experience.</strong>";
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(objectFieldsetProfessional.getElementHasProfessionalExperience);
        }
    }

    static stringifyAndStorageProfessionalFieldsetValues(){
        
        const objectFieldsetProfessional = new FieldsetProfessional();
        
        // get education values into a object
        let objectFieldsetProfessionalValues = {
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

        // stringify object to string JSON format
        const ProfessionalValuesJSON = JSON.stringify(objectFieldsetProfessionalValues);
        // storage in browser
        localStorage.setItem("ProfessionalValuesJSON", ProfessionalValuesJSON);
    }
}

