
var elem = [];
var nextindex = 0;
function addElement() {
   // debugger;
    elem[nextindex] = document.getElementById("write").value;
    nextindex++;
    document.getElementById("write").value = '';
}
function showElement() {


    var result = '<ul>';
    for (var i = 0; i < elem.length; i++) {

        result += "<li>"+"Element "+ i +"= "+ elem[i] + "</li>";
    }
    result += '</ul>';
    document.getElementById("show").innerHTML = result;

}