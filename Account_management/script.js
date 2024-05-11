function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebar_info = document.getElementById('side_bar_info');
    if (sidebar.style.width === '250px' || sidebar.style.width === '') {
        sidebar.style.width = '40px';
        sidebar_info.style.display = "none";
    } else {
        sidebar.style.width = '250px';
        sidebar_info.style.display = "flex";
    }
}
const type_of_user = document.getElementById('type_of_user');
var userType = getQueryVariable("type");
if (userType === "admin") {
    type_of_user.textContent = "Admin";
} else if(userType === "donor"){
    type_of_user.textContent = "Donor";
}
else {
    type_of_user.textContent = "Organization";
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