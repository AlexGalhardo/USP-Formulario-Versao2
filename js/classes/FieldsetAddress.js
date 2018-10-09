export default class FieldsetAddress {

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