import FieldsetPersonal from './FieldsetPersonal.js';
import FieldsetAddress from './FieldsetAddress.js';
import FieldsetJobInterest from './FieldSetJobInterest.js';
import FieldsetEducation from './FieldSetEducation.js';
import FieldsetProfessional from './FieldsetProfessional.js';

export default class ValidateCurriculumForms {

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