const donor_first = document.getElementById('first_name');
const donor_email = document.getElementById('email');
const donor_password = document.getElementById('password');
const donor_address = document.getElementById('address');
const donor_last = document.getElementById('last_name');
const donor_contact = document.getElementById('contact');
const donor_area = document.getElementById('area');
const donor_governorate = document.getElementById('governorate');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
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
const error = document.getElementById('error'); 
const show_password = document.getElementById("show_password");
const show_password2 = document.getElementById("show_password2");
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
show_password.addEventListener('click',function() {
    if(donor_password.type === 'password'){
        donor_password.type = 'text';
        show_password.innerText = 'hide password';
    }
    else {
        donor_password.type = 'password';
        show_password.innerText = 'show password';
    }
});
show_password2.addEventListener('click',function() {
    if(org_password.type === 'password'){
        org_password.type = 'text';
        show_password.innerText = 'hide password';
    }
    else {
        org_password.type = 'password';
        show_password.innerText = 'show password';
    }
});
function check_empty(...args){
    let is_empty = false;
    error.textContent = "";
    for(let item of args){
        item.style.border = "";
    }
    for(let input_field of args){
        if(input_field.value === ""){
            input_field.style.border = "2px solid red";
            error.textContent = "The highlighted field(s) is empty";
            is_empty = true;
        }
    }
    return is_empty;
}
function validate(userType)
{
    if(userType === 'donor') {
        check_empty(donor_first,donor_email,donor_password,donor_address,donor_last,donor_contact,donor_area,donor_governorate);
    }
    else 
    {
        check_empty(org_first_name,org_email,org_password,org_address,org_name,org_last_name,org_contact,org_area,org_governorate,org_type);
    }
}
function buttonClickHandler() {
    validate(userType);
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
    google.maps.event.addListener(map, "click", function(event) {
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
    
    google.maps.event.addListener(map2, "click", function(event) {
        const newMarkerPosition = event.latLng;
        marker2.setPosition(newMarkerPosition);
        updateMap2(newMarkerPosition);
    });
    
}
initMap();


