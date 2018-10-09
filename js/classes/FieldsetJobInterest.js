export default class FieldsetJobInterest {

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