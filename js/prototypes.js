/**
 * Construindo com Function Object
 */
function fieldsetEducation() {
  this.elRadioEducation = document.getElementById("schooling");
  this.elSpanErrorRadioEducation = document.getElementById("errorSchooling");
  this.attrRadioEducationChecked = false;
  this.textNodeEducation; // undefined 
}

// create prototype method to verify if elRadioEducation is checked
fieldsetEducation.prototype.verifyIfElementRadioEducationIsChecked = function(){
	for(let i = 0; i < this.elRadioEducation.length; i++){
		if(this.elRadioEducation[i].checked){
			this.attrRadioEducationChecked = true;
			break;
		}
	}
	if(!this.attrRadioEducationChecked){
		this.elSpanErrorRadioEducation.innerHTML = "You need to choose a option below!";
	}
}