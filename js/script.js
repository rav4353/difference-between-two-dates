// Date difference
let clickButton = document.getElementById("btn");
function days(){
    let olddate = new Date(document.getElementById("olddate").value);

    let today = new Date(document.getElementById("today").value);
let different = parseInt(Math.abs(olddate - today) / (1000*60*60*24));
document.getElementById("output").innerHTML = different;
}
clickButton.addEventListener('click', days);
