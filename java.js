let data = new Date();
let month = Math.floor(data.getMonth()+1);
//console.log(data.getUTCDate()); // dzień
//console.log(data.getUTCMonth()); // miesiąc
//console.log(data.getUTCFullYear()); // rok

$('.arrow').on("click", function() {
    let dmy = document.getElementsByClassName("dmy").value;
    let y = document.getElementById("yy").value;
    let m = document.getElementById("mm").value;
    let d = document.getElementById("dd").value;

    if (d == "") {
        document.getElementById("wynik1").innerHTML="This field is required";
        
        $("#dd").removeClass("dd").addClass("ddd");
        $("#d").removeClass("d").addClass("dr");
        
    } else if (m == ""){
        document.getElementById("wynik2").innerHTML="This field is required";

        $("#mm").removeClass("dd").addClass("ddd");
        $("#m").removeClass("d").addClass("dr");

    } else if (y == "") {
        document.getElementById("wynik3").innerHTML="This field is required";

        $("#yy").removeClass("dd").addClass("ddd");
        $("#y").removeClass("d").addClass("dr");

    } else if (d > 31) {
        document.getElementById("wynik1").innerHTML="Must be a valid day";

        $("#dd").removeClass("dd").addClass("ddd");
        $("#d").removeClass("d").addClass("dr");

    } else if (m > 12) {
        document.getElementById("wynik2").innerHTML="Must be a valid month";

        $("#mm").removeClass("dd").addClass("ddd");
        $("#m").removeClass("d").addClass("dr");

    } else if (y > data.getUTCFullYear()) {
        document.getElementById("wynik3").innerHTML="Must be in the past";

        $("#yy").removeClass("dd").addClass("ddd");
        $("#y").removeClass("d").addClass("dr");

    } else if (d == 31 && m == 4 && y == 1991) {
        document.getElementById("wynik1").innerHTML="Must be a valid date";

        $("#dd").removeClass("dd").addClass("ddd");
        $("#d").removeClass("d").addClass("dr");

    } else {
        document.getElementById("wynik1").innerHTML="";
        document.getElementById("wynik2").innerHTML="";
        document.getElementById("wynik3").innerHTML="";

        $("#dd").removeClass("ddd").addClass("dd");
        $("#d").removeClass("dr").addClass("d");

        $("#mm").removeClass("ddd").addClass("dd");
        $("#m").removeClass("dr").addClass("d");

        $("#yy").removeClass("ddd").addClass("dd");
        $("#y").removeClass("dr").addClass("d");

    //console.log("dupa");
    document.getElementById('m1').innerHTML = document.getElementById('yy').value = Math.floor(data.getUTCFullYear() - yy.value);

    document.getElementById('m2').innerHTML = document.getElementById('mm').value = Math.floor(month - mm.value);

    document.getElementById('m3').innerHTML = document.getElementById('dd').value = Math.floor(data.getDate() - dd.value);
}

});

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function addElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.appendChild(elem);
}