export default class FieldsetEducation {
  
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