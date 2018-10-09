export default class FieldsetPersonal {

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