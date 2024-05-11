const type_of_user = document.getElementById('type_of_user');
const admin_card = document.getElementById("admin_card");
const donor_card = document.getElementById("donor_card");
const organization_card = document.getElementById("organization_card");
const userType = getQueryVariable("type");
function check_user_type(userType){
    if (userType === "admin") {
        type_of_user.textContent = "Admin";
        admin_card.style.display = "flex";
        donor_card.style.display = "none";
        organization_card.style.display = "none";
    } else if(userType === "donor"){
        type_of_user.textContent = "Donor";
        admin_card.style.display = "none";
        donor_card.style.display = "flex";
        organization_card.style.display = "none";
        hide_all(donor_email,donor_contact,donor_area,donor_address,donor_governorate,update_password_donor);
    }
    else {
        type_of_user.textContent = "Organization";
        organization_card.style.display = "flex";
        admin_card.style.display = "none";
        donor_card.style.display = "none";
        hide_all(organization_email,organization_contact,organization_area,organization_address,organization_governorate,update_password_organization)
    }
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
const operationSelect_admin = document.getElementById('operation_admin');
operationSelect_admin.addEventListener('change',function(){
    const details_for_view = document.getElementById('details_for_view');
    const details_for_password = document.getElementById('details_for_password');
    details_for_view.style.display = 'flex';
    details_for_password.style.display = 'flex';
    var form = document.getElementById("confirmation-form");
    form.classList.remove("invisible");
    const operationSelect = document.getElementById('operation_admin');
    const selectedValue = operationSelect_admin.value; // Value of the selected option
    if(selectedValue === 'update'){
        details_for_view.style.display = 'none';
    }
    else {
        details_for_password.style.display = 'none';
    }
    const scrollPosition =
    (document.documentElement.scrollHeight - window.innerHeight) * 0.7;
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
    });
});

const operationSelect_donor = document.getElementById('operation_donor');
operationSelect_donor.addEventListener('change',function(){
    const selectedValue = operationSelect_donor.value;

    const donor_email = document.getElementById("donor_email");
    const donor_contact = document.getElementById("donor_contact");
    const donor_old_password = document.getElementById("donor_old_password");
    const donor_new_password = document.getElementById("donor_new_password");
    const update_password_donor = document.getElementById("update_password_donor");
    const donor_area = document.getElementById("donor_area");
    const donor_address = document.getElementById("donor_address");
    const donor_governorate = document.getElementById("donor_governorate");

    if(selectedValue === 'update_email'){
        display_hide(donor_email,donor_contact,donor_area,donor_address,donor_governorate,update_password_donor);
    }
    else if(selectedValue === 'update_contact'){
        display_hide(donor_contact,donor_email,donor_area,donor_address,donor_governorate,update_password_donor);
    }
    else if(selectedValue === 'update_password'){
        display_hide(update_password_donor,donor_email,donor_contact,donor_area,donor_address,donor_governorate);
        // some validations here 
    }
    else if(selectedValue === 'update_area'){
        display_hide(donor_area,donor_email,donor_contact,donor_address,donor_governorate,update_password_donor);
    }
    else if(selectedValue === 'update_address'){
        display_hide(donor_address,donor_email,donor_contact,donor_area,donor_governorate,update_password_donor);
    }
    else {
        display_hide(donor_governorate,donor_email,donor_contact,donor_area,donor_address,update_password_donor);
    }
});

const operationSelect_organization = document.getElementById('operation_organization');
operationSelect_organization.addEventListener('change',function(){
    const selectedValue = operationSelect_organization.value;

    const organization_email = document.getElementById("organization_email");
    const organization_contact = document.getElementById("organization_contact");
    const organization_old_password = document.getElementById("organization_old_password");
    const organization_new_password = document.getElementById("organization_new_password");
    const update_password_organization = document.getElementById("update_password_organization");
    const organization_area = document.getElementById("organization_area");
    const organization_address = document.getElementById("organization_address");
    const organization_governorate = document.getElementById("organization_governorate");

    if(selectedValue === 'update_email'){
        display_hide(organization_email,organization_contact,organization_area,organization_address,organization_governorate,update_password_organization);
    }
    else if(selectedValue === 'update_contact'){
        display_hide(organization_contact,organization_email,organization_area,organization_address,organization_governorate,update_password_organization);
    }
    else if(selectedValue === 'update_password'){
        display_hide(update_password_organization,organization_email,organization_contact,organization_area,organization_address,organization_governorate);
        // some validations here 
    }
    else if(selectedValue === 'update_area'){
        display_hide(organization_area,organization_email,organization_contact,organization_address,organization_governorate,update_password_organization);
    }
    else if(selectedValue === 'update_address'){
        display_hide(organization_address,organization_email,organization_contact,organization_area,organization_governorate,update_password_organization);
    }
    else {
        display_hide(organization_governorate,organization_email,organization_contact,organization_area,organization_address,update_password_organization);
    }
});

function update(){

}
function display_hide(element_to_show,...args){
    for(let element of args){
        element.style.display = 'none';
    }
    if(element_to_show === update_password_donor || element_to_show === update_password_organization ){
        element_to_show.style.display = 'flex';
    }
    else {
        element_to_show.style.display = 'block';
    }
}
function hide_all(...args){
    for(let element of args){
        element.style.display = 'none';
    }
}
async function hideForm() {
    var form = document.getElementById("confirmation-form");
    const scrollPosition =
    (document.documentElement.scrollHeight - window.innerHeight) * 0;
    
window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
});

await new Promise((r) => setTimeout(r, 500));
    form.classList.add("invisible");
}
function goBack() {
    window.location.href = "/Donor/donor.html";
}
check_user_type(userType)