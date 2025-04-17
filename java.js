filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("col-4");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("container-1");
var btns = btnContainer.getElementsByClassName("column");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



function validate() {
    var name = document.getElementById("fn").value;
    var email = document.getElementById("em").value;
    var textarea = document.getElementById("text").value;
    // alert(name + email);
    var namePattern = /^[A-Za-z ]{4,20}$/;
    var emailPattern = /^[a-zA-Z_.]{3,}[0-9]{0,9}@[a-zA-z]{3,}[.]{1}[a-zA-Z]{2,6}$/;

    if(namePattern.test(name)){
        document.getElementById("fnerror").innerHTML="";
    }else{
        document.getElementById("fnerror").innerHTML = "Name is invalid!";
        document.getElementById("fnerror").style.color = "red";
    }

    if(emailPattern.test(email)){
        document.getElementById("emerror").innerHTML="";
    }else{
        document.getElementById("emerror").innerHTML = "Email is invalid!";
        document.getElementById("emerror").style.color = "red";
    }

    if(textarea != 0 ){
        document.getElementById("taerror").innerHTML="";
    }else if(textarea == 0){
        document.getElementById("taerror").innerHTML = "Write your message";
        document.getElementById("taerror").style.color = "red";
    }
    if(namePattern.test(name) != 0 && emailPattern.test(email) && textarea != 0 ){
        document.getElementById("fn").value = "";
        document.getElementById("em").value = "";
        document.getElementById("text").value = "";
    }


 
}