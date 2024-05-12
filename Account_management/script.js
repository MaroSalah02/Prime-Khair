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
        hide_all(admin_password,donor_org_info);
    } else if(userType === "donor"){
        type_of_user.textContent = "Donor";
        admin_card.style.display = "none";
        donor_card.style.display = "flex";
        organization_card.style.display = "none";
        hide_all(donor_email,donor_contact,donor_area,donor_address,donor_governorate,donor_password);
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
var donor_action = "";
var org_action = "";
const edit_icons = document.getElementsByClassName('fa-solid fa-pen-to-square icon');
for (let i = 0; i < edit_icons.length; i++) {
    if(userType === 'admin'){
        const admin_password = document.getElementById("admin_password");
        if (edit_icons[i].id === 'update_password_admin') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(admin_password);
            });
        }
    }
    else if (userType === 'donor') {
        const donor_email = document.getElementById("donor_email");
        const donor_contact = document.getElementById("donor_contact");
        const donor_password = document.getElementById("donor_password");
        const donor_area = document.getElementById("donor_area");
        const donor_address = document.getElementById("donor_address");
        const donor_governorate = document.getElementById("donor_governorate");
        
        if (edit_icons[i].id === 'update_email_donor') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(donor_email,donor_contact,donor_area,donor_address,donor_governorate,donor_password);
                donor_action = "update_email_donor";
            });
        } else if (edit_icons[i].id === 'update_contact_donor') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(donor_contact,donor_email,donor_area,donor_address,donor_governorate,donor_password);
                donor_action = "update_contact_donor";
            });
        } else if (edit_icons[i].id === 'update_password_donor') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(donor_password,donor_email,donor_contact,donor_area,donor_address,donor_governorate);
                donor_action = "update_password_donor";
            });
        } else if (edit_icons[i].id === 'update_area_donor') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(donor_area,donor_email,donor_contact,donor_address,donor_governorate,donor_password);
                donor_action = "update_area_donor";
            });
        } else if (edit_icons[i].id === 'update_address_donor') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(donor_address,donor_email,donor_contact,donor_area,donor_governorate,donor_password);
                donor_action = "update_address_donor";
            });
        } else {
            edit_icons[i].addEventListener('click', function() {
                display_hide(donor_governorate,donor_email,donor_contact,donor_area,donor_address,donor_password);
                donor_action = "update_governorate_donor";
            });
        }

    } else {
        const organization_email = document.getElementById("organization_email");
        const organization_contact = document.getElementById("organization_contact");
        const update_password_organization = document.getElementById("update_password_organization");
        const organization_area = document.getElementById("organization_area");
        const organization_address = document.getElementById("organization_address");
        const organization_governorate = document.getElementById("organization_governorate");

        if (edit_icons[i].id === 'update_email_org') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(organization_email, organization_contact, organization_area, organization_address, organization_governorate, update_password_organization);
            });
        } else if (edit_icons[i].id === 'update_contact_org') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(organization_contact, organization_email, organization_area, organization_address, organization_governorate, update_password_organization);
            });
        } else if (edit_icons[i].id === 'update_password_org') {
            const organization_old_password = document.getElementById("organization_old_password");
            const organization_new_password = document.getElementById("organization_new_password");
            edit_icons[i].addEventListener('click', function() {
                display_hide(update_password_organization, organization_email, organization_contact, organization_area, organization_address, organization_governorate);
            });
            // Add your validation logic here
        } else if (edit_icons[i].id === 'update_area_org') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(organization_area, organization_email, organization_contact, organization_address, organization_governorate, update_password_organization);
            });
        } else if (edit_icons[i].id === 'update_address_org') {
            edit_icons[i].addEventListener('click', function() {
                display_hide(organization_address, organization_email, organization_contact, organization_area, organization_governorate, update_password_organization);
            });
        } else {
            edit_icons[i].addEventListener('click', function() {
                display_hide(organization_governorate, organization_email, organization_contact, organization_area, organization_address, update_password_organization);
            });
        }
    }
}
const icon_table1 = document.getElementById('icon_table1');
icon_table1.addEventListener('click',function(){
    const table1 = document.getElementById('table1');
    table1.style.display = 'none';
});
const icon_table2 = document.getElementById('icon_table2');
icon_table2.addEventListener('click',function(){
    const table2 = document.getElementById('table2');
    table2.style.display = 'none';
});
function show_org_donor(){
    const donor_org_info = document.getElementById('donor_org_info');
    donor_org_info.style.display = 'flex';
}
function update(){
    if(userType === 'admin'){
        const admin_old_password = document.getElementById("admin_old_password");
        const admin_new_password = document.getElementById("admin_new_password");
        const error_admin = document.getElementById('error_admin');
        const admin_password_change = document.getElementById("admin_password_change");
        if("123456" === admin_old_password.value){
            error_admin.textContent = "Password Updated";
            error_admin.style.fontWeight = 'bold';
            admin_password_change.textContent = admin_new_password.value;
        }
        else{
            error_admin.textContent = "Incorrect old password";
            error_admin.style.fontWeight = 'bold';
        }
    }
    else if(userType === 'donor'){
        const donor_email = document.getElementById("donor_email");
        const donor_contact = document.getElementById("donor_contact");
        const donor_area = document.getElementById("donor_area");
        const donor_address = document.getElementById("donor_address");
        const donor_governorate = document.getElementById("donor_governorate");
        const error_donor = document.getElementById('error_donor');
        const donor_email_change = document.getElementById('donor_email_change');
        const donor_contact_change = document.getElementById('donor_contact_change');
        error_donor.style.fontWeight = 'bold';
        if(donor_action === 'update_email_donor'){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(donor_email.querySelector('input').value)) {
                error_donor.textContent = "Invalid email";
            }
            else{
                donor_email_change.textContent = donor_email.querySelector('input').value;
                error_donor.textContent = "Email Updated";
            }
        }
        else if(donor_action === 'update_contact_donor'){
            if(donor_contact.querySelector('input').value.length != 11){
                error_donor.textContent = "Invalid Contact";
            }
            else{
                donor_contact_change.textContent = donor_contact.querySelector('input').value;
                error_donor.textContent = "Contact Updated";
            }
        }
        else if(donor_action === 'update_password_donor'){
            const donor_old_password = document.getElementById("donor_old_password");
            const donor_new_password = document.getElementById("donor_new_password");
            const donor_password_change = document.getElementById("donor_password_change");
            console.log(donor_old_password.querySelector('input').value);
            if("123456" === donor_old_password.querySelector('input').value){
                error_donor.textContent = "Password Updated";
                donor_password_change.textContent = donor_new_password.querySelector('input').value;
            }
            else{
                error_donor.textContent = "Incorrect old password";
            }
        }
        else if(donor_action === 'update_area_donor'){
            const donor_area_change = document.getElementById("donor_area_change");
            if(donor_area.querySelector('input').value === ''){
                error_donor.textContent = "Invalid Area";
            }
            else{
                donor_area_change.textContent = donor_area.querySelector('input').value;
                error_donor.textContent = "Area Updated";
            }
        }
        else if(donor_action === 'update_address_donor'){
            const donor_address_change = document.getElementById("donor_address_change");
            if(donor_address.querySelector('input').value === ''){
                error_donor.textContent = "Invalid Address";
            }
            else{
                donor_address_change.textContent = donor_address.querySelector('input').value;
                error_donor.textContent = "Address Updated";
            }
        }
        else{
            const donor_governorate_change = document.getElementById("donor_governorate_change");
            if(donor_governorate.querySelector('input').value === ''){
                error_donor.textContent = "Invalid Governorate";
            }
            else{
                donor_governorate_change.textContent = donor_governorate.querySelector('input').value;
                error_donor.textContent = "Governorate Updated";
            }
        }
    }
}
function display_hide(element_to_show,...args){
    for(let element of args){
        element.style.display = 'none';
    }
    if(element_to_show === update_password_donor || element_to_show === donor_password || admin_password ){
        element_to_show.style.display = 'flex';
    }
    else {
        element_to_show.style.display = 'flex';
    }
}
function hide_all(...args){
    for(let element of args){
        element.style.display = 'none';
    }
}
check_user_type(userType);