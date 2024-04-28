const donor_first = document.getElementById('first_name');
const donor_email = document.getElementById('email');
const donor_password = document.getElementById('password');
const donor_address = document.getElementById('address');
const donor_last = document.getElementById('last_name');
const donor_contact = document.getElementById('contact');
const donor_area = document.getElementById('area');
const donor_governorate = document.getElementById('governorate');

const org_first_name = document.getElementById('org_first_name');
const org_email = document.getElementById('org_email');
const org_password = document.getElementById('org_password');
const org_address = document.getElementById('org_address');
const org_name = document.getElementById('org_name');
const org_last_name = document.getElementById('org_last_name');
const org_contact = document.getElementById('org_contact');
const org_area = document.getElementById('org_area');
const org_governorate = document.getElementById('org_governorate');
const org_type = document.getElementById('org_type'); 

var userType = getQueryVariable('type');
const donor = document.getElementById('donor');
const Organization = document.getElementById('Organization');
if (userType === 'donor') { 
    Organization.style.display = "none";
} 
else{
    donor.style.display = "none";
} 
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return null;
}
function check_empty(...args){
    for(let input_field of args){
        if(input_field.value === ""){
            return true;
        }
    }
    return false;
}
function validate(userType){
    if(userType === 'donor') {
        let is_empty = check_empty(donor_first,donor_email,donor_password,donor_address,donor_last,donor_contact,donor_area,donor_governorate);
        console.log(is_empty);
    }
    else {
        let is_empty = check_empty(org_first_name,org_email,org_password,org_address,org_name,org_last_name,org_contact,org_area,org_governorate,org_type);
        console.log(is_empty);
    }
}
function buttonClickHandler() {
    validate(userType);
}