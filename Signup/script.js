const donor_first = document.getElementById("first_name");
const donor_last = document.getElementById("last_name");
const donor_email = document.getElementById("email");
const email_error = document.getElementById("email_error");
const donor_password = document.getElementById("password");
const donor_address = document.getElementById("address");
const donor_contact = document.getElementById("contact");
const donor_area = document.getElementById("area");
const donor_governorate = document.getElementById("governorate");
const option_male = document.getElementById("option_male");
const option_female = document.getElementById("option_female");
const option_other = document.getElementById("option_other");

const option_regular = document.getElementById("option_regular");
const option_doctor = document.getElementById("option_doctor");
const option_teacher = document.getElementById("option_teacher");

const clinic_address = document.getElementById("clinic_address");
const clinic_area = document.getElementById("clinic_area");
const clinic_governrate = document.getElementById("clinic_governrate");
const Specialty = document.getElementById("Specialty");
const no_of_cases = document.getElementById("no_of_cases");

const teacher_subjects = document.getElementById("teacher_subjects");
const teacher_classes = document.getElementById("teacher_classes");

const org_first_name = document.getElementById("org_first_name");
const org_email = document.getElementById("org_email");
const org_password = document.getElementById("org_password");
const org_address = document.getElementById("org_address");
const org_name = document.getElementById("org_name");
const org_last_name = document.getElementById("org_last_name");
const org_contact = document.getElementById("org_contact");
const org_area = document.getElementById("org_area");
const org_governorate = document.getElementById("org_governorate");
const org_type = document.getElementById("org_type");
const org_male = document.getElementById("org_male");
const org_female = document.getElementById("org_female");
const org_other = document.getElementById("org_other");

const error = document.getElementById("error");
const error2 = document.getElementById("error2");
const email_error2 = document.getElementById("email_error2");

const donor = document.getElementById("donor");

const inputs_clinic = document.getElementById("inputs_clinic");
const inputs_teacher = document.getElementById("inputs_teacher");

inputs_clinic.style.display = "none";
inputs_teacher.style.display = "none";
Upload.style.display = "none";

let no_error_found = false;

function return_back() {
window.location.href = "../main/main.html";
}
var userType = getQueryVariable("type");
if (userType === "donor") {
    Organization.style.display = "none";
} else {
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
function check_empty(...args) {
    error.textContent = "";
    no_error_found = false;
    if (userType === "donor") 
    {
        for (let item of args) {
        item.style.border = "";
    }
        for (let input_field of args) {
        if (input_field.value === "") {
            input_field.style.border = "2px solid red";
            error.textContent = "The highlighted field(s) is empty";
            no_error_found = true;
        }
        }
    } 
    else 
    {
        for (let item of args) 
        {
            item.style.border = "";
        }
        for (let input_field of args) 
        {
            if (input_field.value === "") 
            {
                input_field.style.border = "2px solid red";
                error2.textContent = "The highlighted field(s) is empty";
                no_error_found = true;
            }
        }
    }
}
option_regular.addEventListener("click", function () {
    inputs_teacher.style.display = "none";
    inputs_clinic.style.display = "none";
    Upload.style.display = "none";
    });
    option_doctor.addEventListener("click", function () {
    inputs_teacher.style.display = "none";
    inputs_clinic.style.display = "flex";
    Upload.style.display = "block";
    });
    option_teacher.addEventListener("click", function () {
    inputs_teacher.style.display = "flex";
    inputs_clinic.style.display = "none";
});
function validate(userType) {
    no_error_found = false;
    email_error.textContent = "";
    if (userType === "donor") {
    check_empty(donor_first,donor_email,donor_password,donor_address,donor_last,donor_contact,donor_area,donor_governorate);
    if (option_doctor.checked) {
        check_empty(
        clinic_address,
        clinic_area,
        clinic_governrate,
        Specialty,
        no_of_cases
        );
    }
    if (option_teacher.checked) {
        check_empty(teacher_subjects, teacher_classes);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donor_email.value)) {
        donor_email.style.border = "2px solid red";
        email_error.textContent = "example: Ali@gmail.com";
        email_error.style.color = "red";
        email_error.style.fontWeight = "bold";
        no_error_found = true;
        if (error.textContent != "") {
            error.appendChild(document.createElement("br"));
            error.appendChild(document.createTextNode("Invalid email format"));
        } else {
            error.appendChild(document.createTextNode("Invalid email format"));
        }
    }
    } else {
    email_error2.textContent = "";
    check_empty(org_first_name,org_email,org_password,org_address,org_name,org_last_name,org_contact,org_area,org_governorate,org_type);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(org_email.value)) {
        org_email.style.border = "2px solid red";
        email_error2.textContent = "example: Ali@gmail.com";
        email_error2.style.color = "red";
        email_error2.style.fontWeight = "bold";
        no_error_found = true;
        if (error2.textContent != "") {
            error2.appendChild(document.createElement("br"));
            error2.appendChild(document.createTextNode("Invalid email format"));
        } else {
            error2.appendChild(document.createTextNode("Invalid email format"));
        }
        }
    }
}
function initMap() {
    const center = { lat: 30.0444, lng: 31.2357 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: center,
});

    const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "Marker Title",
});

function updateMap(markerPosition) {
        map.setCenter(markerPosition);
}
    google.maps.event.addListener(map, "click", function (event) {
        const newMarkerPosition = event.latLng;
        marker.setPosition(newMarkerPosition);
        updateMap(newMarkerPosition);
});

    const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 12,
    center: center,
    });

    const marker2 = new google.maps.Marker({
    position: center,
    map: map2,
    title: "Marker Title",
    });

    function updateMap2(markerPosition) {
    map2.setCenter(markerPosition);
    }

    google.maps.event.addListener(map2, "click", function (event) {
    const newMarkerPosition = event.latLng;
    marker2.setPosition(newMarkerPosition);
    updateMap2(newMarkerPosition);
    });
}
function Donor(){
    this.first_name = donor_first.value;
    this.last_name = donor_last.value;
    this.email = donor_email.value;
    this.contact_info = donor_contact.value;
    this.password = donor_password.value;
    this.area = donor_area.value;
    this.address = donor_address.value;
    this.governorate = donor_governorate.value;
    this.gender = "";
    this.clinic_info = "";
    this.type = "";
    this.teacher_info = "";
    if(option_male.checked){
        this.gender = "Male" ;
    }
    else if(option_female.checked){
        this.gender = "Female" ;
    }
    else if(option_other.checked){
        this.gender = "Other" ;
    }
    if(option_regular.checked){
        this.type = "Regular";
    }
    else if(option_doctor.checked){
        this.type = "Doctor";
        this.clinic_info = "The clinic address: " + clinic_address.value + "\n" +
        "The clinic area: " + clinic_area.value + "\n" +
        "The clinic governrate: " + clinic_governrate.value + "\n" +
        "The clinic Specialty: " + Specialty.value + "\n" +
        "The number of cases: " + no_of_cases.value + "\n";
    }
    else if(option_teacher.checked){
        this.type = "Teacher";
        this.teacher_info = "The teacher subjects: " + teacher_subjects.value + "\n" +
        "The number of classes: " + teacher_classes.value;
    }
    this.full_info = function(){
        let additional = option_doctor.checked ? "The clinic info: " + this.clinic_info : option_teacher.checked ? + "The teacher info: " + this.teacher_info : ""
        return "The donor name: " + donor_first.value + " " + this.last_name + "\n" +
        "The donor email: " + this.email +"\n" +
        "The donor contact: " + this.contact_info + "\n" +
        "The donor password: " + this.password + "\n" +
        "The donor area: " + this.area + "\n" +
        "The donor address: " + this.address + "\n" +
        "The donor governorate: " + this.governorate + "\n" +
        "The donor gender: " + this.gender + "\n" +
        "The donor type: " + this.type + "\n" +
        additional;
    }
}
function Organization_info(){
    this.org_first_name = org_first_name.value;
    this.org_last_name = org_last_name.value;
    this.org_email = org_email.value;
    this.org_contact = org_contact.value;
    this.org_password = org_password.value;
    this.org_area = org_area.value;
    this.org_address = org_address.value;
    this.org_name = org_name.value;
    this.org_area = org_area.value;
    this.org_governorate = org_governorate.value;
    this.org_type = org_type.value;
    this.gender = "";
    if(org_male.checked){
        this.gender = "Male" ;
    }
    else if(org_female.checked){
        this.gender = "Female" ;
    }
    else if(org_other.checked){
        this.gender = "Other" ;
    }
    this.full_info = function(){
        return "The Organization representative name: " + this.org_first_name + " " + this.org_last_name + "\n" +
        "The organization gender: " + this.gender + "\n" +
        "The organization email: " + this.org_email +"\n" +
        "The organization contact: " + this.org_contact + "\n" +
        "The organization password: " + this.org_password + "\n" +
        "The organization name: " + this.org_name + "\n" +
        "The organization type: " + this.org_type + "\n" +
        "The organization governorate: " + this.org_governorate + "\n" +
        "The organization area: " + this.org_area + "\n" +
        "The organization address: " + this.org_address + "\n";
    }
}
function buttonClickHandler() {
    validate(userType);
    if(!no_error_found){
        if(userType == 'donor'){
            let donor = new Donor();
            console.log(donor.full_info());
        }
        else{
            let organization = new Organization_info();
            console.log(organization.full_info());
        }
    }
}