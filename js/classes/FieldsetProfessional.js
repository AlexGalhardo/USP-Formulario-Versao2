export default class FieldsetProfessional {

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
