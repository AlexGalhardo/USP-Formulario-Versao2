//import '' from './classes/';

class ValidateCurriculumForms {

    constructor(){
        this.newTopDivElementsRegistered = document.getElementById("div_data_send");
    }

    removeAttributeHidden(){
        this.newTopDivElementsRegistered.removeAttribute("hidden");
    }

    static cleanDivJavaScriptElementsRegistered(){
        
        const objectValidateCurriculumForms = new ValidateCurriculumForms();

        while (objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild) {
            objectValidateCurriculumForms.newTopDivElementsRegistered.removeChild(objectValidateCurriculumForms.newTopDivElementsRegistered.firstChild);
        }
    }

    static verifyCurriculumForms(){
        FieldsetPersonal.verifyFieldSetPersonal();
        FieldsetPersonal.stringifyAndStoragePersonalFieldsetValues();

        FieldsetAddress.verifyFieldSetAddress();
        FieldsetAddress.stringifyAndStorageAddressFieldsetValues();

        FieldsetJobInterest.verifyFieldSetJobInterest();
        FieldsetJobInterest.stringifyAndStorageJobInterestFieldsetValues();

        FieldsetEducation.verifyFieldSetEducation();
        FieldsetEducation.stringifyAndStorageEducationFieldsetValues();

        FieldsetProfessional.verifyFieldsetProfessionalExperience();
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
        } else {
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
        } else {
            this.getSpanErrorNumberID.innerHTML = "";
        }
    }

    static verifyFieldSetPersonal(){
        const objectFieldsetPersonal = new FieldsetPersonal();
        objectFieldsetPersonal.verifyIfCompleteNameHasValue();
        objectFieldsetPersonal.verifyIfEmailHasValue();
        objectFieldsetPersonal.verifyIfCellphoneHasValue();
        objectFieldsetPersonal.verifyIfGenderIsChecked();
        objectFieldsetPersonal.verifyIfMaritalStatusIsSelected();
        objectFieldsetPersonal.verifyIfNationalityWasSelected();
        objectFieldsetPersonal.verifyIfNumberIDHasValue();
    }

    static stringifyAndStoragePersonalFieldsetValues(){
        let objectFieldsetPersonal = new FieldsetPersonal();
        let PersonalValuesJSON = JSON.stringify(objectFieldsetPersonal);
        localStorage.setItem("PersonalValuesJSON", PersonalValuesJSON);
    }
}

class FieldsetAddress {

    constructor(){
        this.getElementStreet = document.getElementById("street");
        this.getSpanErrorStreet = document.getElementById("errorStreet");

        this.getElementNeighborhood = document.getElementById("neighborhood");
        this.getSpanErrorNeighborhood = document.getElementById("errorNeighborhood");

        this.getElementResidenceNumber = document.getElementById("residenceNumber");
        this.getSpanErrorResidenceNumber = document.getElementById("errorResidenceNumber");
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
        let objectFieldsetAddress = new FieldsetAddress();
        let AddressValuesJSON = JSON.stringify(objectFieldsetAddress);
        localStorage.setItem("AddressValuesJSON", AddressValuesJSON);
    }
}

class FieldsetJobInterest {

    constructor(){
        this.getElementsRadioNamePost = document.getElementsByName("post");
        this.getElementsRadioExperience = document.getElementsByName("experience");
        this.getElementsOptionInterestRegion = document.getElementById("interestRegion");
        this.getElementSalaryPretension = document.getElementById("salaryPretension");
    }

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
        ValidateCurriculumForms.cleanDivJavaScriptElementsRegistered();
        const objectFieldsetJobInterest = new FieldsetJobInterest();
        objectFieldsetJobInterest.verifyIfPostNameIsChecked();
        objectFieldsetJobInterest.verifyIfExperienceIsChecked();
        objectFieldsetJobInterest.verifyIfInterestRegionHasValue();
        objectFieldsetJobInterest.verifyIfSalaryPretensionHasValue();
    }

    static stringifyAndStorageJobInterestFieldsetValues(){
        let objectFieldsetJobInterest = new FieldsetJobInterest();
        let JobInterestValuesJSON = JSON.stringify(objectFieldsetJobInterest);
        localStorage.setItem("JobInterestValuesJSON", JobInterestValuesJSON);
    }
}


class FieldsetEducation {
  
    constructor(){
    
        this.getElementDivEducation = document.getElementById("div_education");

        this.getElementsRadioSchooling = document.getElementsByName("schooling");
        this.elSpanErrorSchooling = document.getElementById("errorSchooling");
        
        this.attrRadioSchoolingChecked = false;
        
        this.textNodeEducation; // undefined

        this.elCourseName = document.getElementById("courseName");
        this.elSpanErrorCourseName = document.getElementById("errorCourseName");
        
        this.getElementInstitutionName = document.getElementById("institutionName");
        this.elSpanErrorInstitutionName = document.getElementById("errorInstitutionName");
        
        this.elGraduate = document.getElementById("graduate");
        this.elSpanErrorGraduate = document.getElementById("errorGraduate");

        this.getElementIncompleteSchool = document.getElementById("incompleteHighSchool");
        this.getElementCompleteSchool = document.getElementById("completeHighSchool");

        this.newElementParagraphSchoolingRegistered = document.createElement("p");
        this.newElementParagraphGraduateYearRegistered = document.createElement("p");
        this.newElementParagraphCourseNameRegistered = document.createElement("p");
        this.newElementPagragraphInstitutionNameRegistered = document.createElement("p");
    }

    verifyIfElementRadioEducationIsChecked(){
        for(let i = 0; i < this.getElementsRadioSchooling.length; i++){
            if(this.getElementsRadioSchooling[i].checked){
                this.attrRadioSchoolingChecked = true;
                break;
            }
        }
        
        if(!this.attrRadioSchoolingChecked){
            document.getElementById("errorSchooling").innerHTML = "You need to choose a option below!";
        }
    }

    verifyIfCourseNameHasValue(){
        if(this.elCourseName.innerHTML == ""){
            document.getElementById("errorCourseName").innerHTML = "You need to enter your course name!";
        }
    }

    verifyIfGraduateIsChecked(){
      if(this.elGraduate.value == ''){
          this.elSpanErrorGraduate.innerHTML = "You need to check some option below!";
      }
    }

    verifyIfInstitutionNameHasValue(){
      if(this.getElementInstitutionName.value == ""){
          this.elSpanErrorInstitutionName.innerHTML = "You need to enter a institution name!";
      } else {
          this.elSpanErrorInstitutionName.innerHTML = "";
      }
    }

    // this method shows all the values registered in top div
    showElementsEducationRegistered(){

      let objectValidateCurriculumForms = new ValidateCurriculumForms();

      // show radio education checked
      for(let i = 0; i <  this.getElementsRadioSchooling.length; i++){
          if(this.getElementsRadioSchooling[i].checked){
              this.newElementParagraphSchoolingRegistered.innerHTML = `Schooling: ${this.getElementsRadioSchooling.value}`;
              break;
          }
      }
      objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

      // show graduate year value
      this.newElementParagraphGraduateYearRegistered.innerHTML = `Graduate Year: ${this.elGraduate.value}`;
      objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphGraduateYearRegistered);

      // show graduate Course Name and Institution Name
      if(!this.getElementIncompleteSchool.checked || 
         !this.getElementCompleteSchool.checked){

          // show course name registered
          this.newElementParagraphSchoolingRegistered.innerHTML = `Course Name: ${this.elCourseName.value}`;
          objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

          // show institution name registered
          this.newElementPagragraphInstitutionNameRegistered.innerHTML = `Instituion Name:  ${this.getElementInstitutionName.value}`;
          objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.newElementPagragraphInstitutionNameRegistered);
      }
    }

    static showEducationDiv(){
      let objectFieldsetEducation = new FieldsetEducation();
      if(!objectFieldsetEducation.getElementIncompleteSchool.checked && 
         !objectFieldsetEducation.getElementCompleteSchool.checked){
          objectFieldsetEducation.getElementDivEducation.removeAttribute("hidden");
      }
    }

    static hiddenEducationDiv(){
      let objectFieldsetEducation = new FieldsetEducation();
      objectFieldsetEducation.getElementDivEducation.setAttribute("hidden", "true");
    }

    static verifyFieldSetEducation(){
      const objectFieldsetEducation = new FieldsetEducation();
      objectFieldsetEducation.verifyIfElementRadioEducationIsChecked();
      objectFieldsetEducation.verifyIfGraduateIsChecked();
      objectFieldsetEducation.verifyIfInstitutionNameHasValue();
      objectFieldsetEducation.verifyIfCourseNameHasValue();
      objectFieldsetEducation.showElementsEducationRegistered();
    }

    static stringifyAndStorageEducationFieldsetValues(){
      let objectFieldsetEducation = new FieldsetEducation();
      let EducationValuesJSON = JSON.stringify(objectFieldsetEducation);
      localStorage.setItem("EducationValuesJSON", EducationValuesJSON);
    }
}


class FieldsetProfessional {

    constructor(){

        this.getElementCompanyName = document.getElementById("companyName");
        this.getElementStartMonth = document.getElementsByName("monthStart")[0];
        this.getElementEndMonth = document.getElementsByName("endMonth")[0];
        this.getElementStartYear = document.getElementsByName("yearStart")[0];
        this.getElementEndYear = document.getElementsByName("endYear")[0];
        this.getElementsBusinessSegment = document.getElementsByName("businessSegment");
        this.getElementPositionHeld = document.getElementById("positionHeld");
        this.getElementJobResponsabilities = document.getElementById("jobResponsabilities");

        this.getSpanErrorPositionHeld = document.getElementById("errorPositionHeld");
        this.getSpanErrorBusinessSegment = document.getElementById("errorBusinessSegment");
        this.getSpanErrorJobResponsabilites = document.getElementById("jobResponsabilities");

        this.businessSegmentChecked = false;

        this.getElementHasProfessionalExperience = document.getElementById("hasExperience");
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

    static showButtonAddProfessionalExperience(){
        let objectFieldsetProfessional = new FieldsetProfessional();
        if(objectFieldsetProfessional.getElementHasProfessionalExperience.checked){
            objectFieldsetProfessional.getElementButtonAddExperience.removeAttribute("hidden");
        } 
    }

    static hiddenButtonAddProfessionalExperience(){
        let objectFieldsetProfessional = new FieldsetProfessional();
        if(!objectFieldsetProfessional.getElementHasProfessionalExperience.checked){
            objectFieldsetProfessional.getElementButtonAddExperience.setAttribute("hidden", "true");
        }
    }

    static hiddenButtonAddExperinceData(){
        let objectFieldsetProfessional = new FieldsetProfessional();
        objectFieldsetProfessional.getElementDivHasProfessionalExperience.setAttribute("hidden", "true");
    }

    static showDivAddExperienceData(){
        let objectFieldsetProfessional = new FieldsetProfessional();
        objectFieldsetProfessional.getElementDivHasProfessionalExperience.removeAttribute("hidden");
    }

    static verifyFieldsetProfessionalExperience(){
        const objectFieldsetProfessional = new FieldsetProfessional();
        objectFieldsetProfessional.verifyProfessionalExperienceValues();
        objectFieldsetProfessional.showElementsProfessionalExperienceRegistered();
    }

    verifyProfessionalExperienceValues(){

        // candidate has professional experience?
        if(this.getElementHasProfessionalExperience.checked){
            
            // position held has value?
            if(this.getElementPositionHeld.value == ''){
                this.getSpanErrorPositionHeld.innerHTML = "Você precisa adicionar o último cargo que ocupou!";
            }

            // company name has value?
            if(this.getElementCompanyName.value == ''){
                this.getSpanErrorPositionHeld.innerHTML = "Você precisa adicionar o nome da última em que trabalhou!";
            }

            // business segment checked?
            for(let i = 0; i < this.getElementsBusinessSegment.length; i++){
                if(this.getElementsBusinessSegment[i].checked){
                    this.businessSegmentChecked = true;
                    break;
                }
            }
            if(!this.businessSegmentChecked){
                this.getSpanErrorBusinessSegment.innerHTML = "Você precisa selecionar um dos segmentos abaixo!";
            } 

            // job responsabilites has value?
            if(this.getElementJobResponsabilities.value == ''){
                this.getSpanErrorJobResponsabilites.innerHTML = "Por favor, diga nos um pouco mais das suas atribuições e responsabilidades do último cargo exercido."
            } else if(this.getElementJobResponsabilities.value.toString().length < 50){
                this.getSpanErrorJobResponsabilites.innerHTML = "Digite uma resposta válida com pelo menos 50 caracteres!"
            } else {
                this.getSpanErrorJobResponsabilites.innerHTML = "";
            }
        }
    }

    showElementsProfessionalExperienceRegistered(){

        let objectValidateCurriculumForms = new ValidateCurriculumForms();

        if(this.getElementHasProfessionalExperience.checked){

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
            this.getElementHasProfessionalExperience.innerHTML = "The candidate DOESN\'T has professional experience.";
            objectValidateCurriculumForms.newTopDivElementsRegistered.appendChild(this.getElementHasProfessionalExperience);
        }
    }

    static stringifyAndStorageProfessionalFieldsetValues(){
        let objectFieldsetProfessional = new FieldsetProfessional();
        let ProfessionalValuesJSON = JSON.stringify(objectFieldsetProfessional);
        localStorage.setItem("ProfessionalValuesJSON", ProfessionalValuesJSON);
    }
}



/*
function MyClass(){
    // atributo privado
    this._attr = "foo";
}
// prototype para criar um método para esse objeto
MyClass.prototype = {
  getAttr: function(){
    return this._attr;
  }
};

var myClass = new MyClass();
var json = JSON.stringify(myClass);
var newMyClass = JSON.parse(json);
newMyClass.__proto__ = MyClass.prototype;
console.log(newMyClass instanceof MyClass, newMyClass.getAttr());

//Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;



In JSON, functions are not allowed as object values.

The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:

This can be omitted if you convert your functions into strings before running the JSON.stringify() function.

var obj = { name: "John", age: function () {return 30;}, city: "New York" };
obj.age = obj.age.toString();
var myJSON = JSON.stringify(obj);

document.getElementById("demo").innerHTML = myJSON;
*/