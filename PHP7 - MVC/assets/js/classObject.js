/*
class FieldsetPersonal {

    this.newTopDivElementsRegistered = document.getElementById("div_data_send");

}

class FieldsetAddress {

    this.newTopDivElementsRegistered = document.getElementById("div_data_send");

}

class FieldsetInterest {

    this.newTopDivElementsRegistered = document.getElementById("div_data_send");

}
*/


class FieldsetEducation {
  
  constructor(){
    
    this.newTopDivElementsRegistered = document.getElementById("div_data_send");

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

  cleanDivJavaScriptElementsRegistered(){
    while (this.newTopDivElementsRegistered.firstChild) {
        this.newTopDivElementsRegistered.removeChild(this.newTopDivElementsRegistered.firstChild);
    }
  }

  // this method shows all the values registered in top div
  showElementsEducationRegistered(){

    // remove all previous child in top div
    this.cleanDivJavaScriptElementsRegistered();

    // show radio education checked
    for(let i = 0; i <  this.getElementsRadioSchooling.length; i++){
        if(this.getElementsRadioSchooling[i].checked){
            this.textNodeFormacaoAcademica = this.getElementsRadioSchooling[i].value;
            break;
        }
    }
    this.newElementParagraphSchoolingRegistered.innerHTML = `Schooling: ${this.getElementsRadioSchooling.value}`;
    this.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

    // show graduate year value
    this.newElementParagraphGraduateYearRegistered.innerHTML = `Graduate Year: ${this.elGraduate.value}`;
    this.newTopDivElementsRegistered.appendChild(this.newElementParagraphGraduateYearRegistered);

    // show graduate Course Name and Institution Name
    if(!this.getElementIncompleteSchool.checked || 
       !this.getElementCompleteSchool.checked){

        // show course name registered
        this.newElementParagraphSchoolingRegistered.innerHTML = `Course Name: ${this.elCourseName.value}`;
        this.newTopDivElementsRegistered.appendChild(this.newElementParagraphSchoolingRegistered);

        // show institution name registered
        this.newElementPagragraphInstitutionNameRegistered.innerHTML = `Instituion Name:  ${this.getElementInstitutionName.value}`;
        this.newTopDivElementsRegistered.appendChild(this.newElementPagragraphInstitutionNameRegistered);
    }
  }


  setErrorElementRadioEducation(){
    document.getElementById("errorSchooling").innerHTML = "You need to choose a option below!";
  }

  verifyIfElementRadioEducationIsChecked(){
    for(let i = 0; i < this.getElementsRadioSchooling.length; i++){
      if(this.getElementsRadioSchooling[i].checked){
        this.attrRadioSchoolingChecked = true;
        break;
      }
    }
    if(!this.attrRadioSchoolingChecked){
        // alert("Error: attrRadioSchoolingChecked not checked!");
        this.setErrorElementRadioEducation();
    }
  }

  setErrorCourseName(){
    document.getElementById("errorCourseName").innerHTML = "You need to enter your course name!";
  }

  verifyIfCourseNameHasValue(){
    if(this.elCourseName.innerHTML == ""){
        this.setErrorCourseName();
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

  removeAttributeHidden(){
    this.newTopDivElementsRegistered.removeAttribute("hidden");
  }

  static showDivEducacao(){
    let objectFieldsetEducation = new FieldsetEducation();
    if(!objectFieldsetEducation.getElementIncompleteSchool.checked && 
       !objectFieldsetEducation.getElementCompleteSchool.checked){
        objectFieldsetEducation.getElementDivEducation.removeAttribute("hidden");
    }
  }

  static hiddenDivEducacao(){
    let objectFieldsetEducation = new FieldsetEducation();
    objectFieldsetEducation.getElementDivEducation.setAttribute("hidden", "true");
  }

  static verifyFieldSetEducation(){
    
    const objectFieldsetEducation = new FieldsetEducation();
    
    objectFieldsetEducation.verifyIfElementRadioEducationIsChecked();
    objectFieldsetEducation.verifyIfGraduateIsChecked();
    objectFieldsetEducation.verifyIfInstitutionNameHasValue();
    objectFieldsetEducation.verifyIfCourseNameHasValue();

    objectFieldsetEducation.removeAttributeHidden("hidden");
    objectFieldsetEducation.showElementsEducationRegistered();
  }
}



class FieldsetProfessional {

    constructor(){

        // top div registered forms values
        this.newTopDivElementsRegistered = document.getElementById("div_data_send");

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

        if(this.getElementHasProfessionalExperience.checked){

            // has professional experience
            this.newElementParagraphHasExperiencie.innerHTML = "The candidate HAS professional experience.";
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphHasExperiencie);
            
            // company name
            this.newElementParagraphCompanyName.innerHTML = `Company Name: ${this.getElementCompanyName.value}`;
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphCompanyName);

            // start month
            this.newElementParagraphStartMonth.innerHTML = `Start Month: ${this.getElementStartMonth.value}`;
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphStartMonth);

            // end month
            this.newElementParagraphEndMonth.innerHTML = `End Month: ${this.getElementEndMonth.value}`;
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphEndMonth);

            // start year
            this.newElementParagraphStartYear.innerHTML = `Start Year: ${this.getElementStartYear.value}`;
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphStartYear);

            // end year
            this.newElementParagraphEndYear.innerHTML = `End Year: ${this.getElementEndYear.value}`;
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphEndYear);

            // bussines segment
            this.newElementParagraphBusinessSegment.innerHTML = `Business Segment: ${this.getElementBusinessSegment}`;
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphBusinessSegment);

            // position held
            this.newElementParagraphPositionHeld.innerHTML = `Position Held: ${this.getElementPositionHeld.value}`;
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphPositionHeld);

            // job responsabilites
            this.newElementParagraphJobResponsabilites.innerHTML = `Job Responsabilites: ${this.getElementJobResponsabilities.value}`;
            this.newTopDivElementsRegistered.appendChild(this.newElementParagraphJobResponsabilites);

        } else {
            this.getElementHasProfessionalExperience.innerHTML = "The candidate DOESN\'T has professional experience.";
            this.newTopDivElementsRegistered.appendChild(this.getElementHasProfessionalExperience);
        }
    }
}

class ValidateCurriculumForms {

    static verifyCurriculumForms(){
        FieldsetProfessional.verifyFieldsetProfessionalExperience();
        FieldsetEducation.verifyFieldSetEducation();
    }
}