


function login() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");

   // x.style.left = "4px";
   // y.style.right = "-520px";
   y.style.opacity = 0;
    setTimeout( function() {
        y.style.display= "none";
        x.style.opacity = 1;
    },500);
    
    
}
function register() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");

   // x.style.left = "-510px";
  //  y.style.right = "5px";
    x.style.opacity = 0;
    y.style.display= "flex";
    y.style.opacity = 0;
    setTimeout( function() {
        y.style.opacity = 1;
    },500);
    
    
}

function validateRegister() {
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var color = document.getElementById("color-picker");
    var radio = document.getElementById("radio");
    var datePicker = document.getElementById("date-picker");
    
    var isValid = true;

    // Ellenőrizze, hogy minden mező ki legyen töltve
    if (firstName.value.trim() === "") {
        firstName.style.border = "2px solid red";
        isValid = false;
    } else {
        firstName.style.border = ""; // Alaphelyzet visszaállítása
    }

    if (lastName.value.trim() === "") {
        lastName.style.border = "2px solid red";
        isValid = false;
    } else {
        lastName.style.border = ""; // Alaphelyzet visszaállítása
    }

    // Ellenőrizze az email formátumát
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.style.border = "2px solid red";
        isValid = false;
    } else {
        email.style.border = ""; // Alaphelyzet visszaállítása
    }

    // Ellenőrizze, hogy a jelszó legalább 6 karakter hosszú legyen
    if (password.value.length < 6) {
        password.style.border = "2px solid red";
        isValid = false;
    } else {
        password.style.border = ""; // Alaphelyzet visszaállítása
    }

    // Color Picker ellenőrzése
    if (color.value === "") {
        color.style.border = "2px solid red";
        isValid = false;
    } else {
        color.style.border = ""; // Alaphelyzet visszaállítása
    }

    // Radio Button ellenőrzése
    if (!radio.checked) {
        radio.parentNode.style.color = "red"; // A rádiógomb szövegszíne
        isValid = false;
    } else {
        radio.parentNode.style.color = ""; // Alaphelyzet visszaállítása
    }

    // Date Picker ellenőrzése
    if (datePicker.value === "") {
        alert("szar");
        datePicker.style.border = "2px solid red";
        isValid = false;
    } else {
        datePicker.style.border = ""; // Alaphelyzet visszaállítása
    }


    // Ha van bármelyik hiba, akkor ne küldje el az űrlapot
    if (!isValid) {
        return false;
    }
}

function validateLogin() {
    var email = document.getElementById("login-email");
    var password = document.getElementById("login-passwd");
    
    var isValid = true;

   
    if (email.value === "") {
        email.style.border = "2px solid red";
        isValid = false;
    } else {
        email.style.border = ""; // Alaphelyzet visszaállítása
    }

    if (password.value === "") {
        password.style.border = "2px solid red";
        isValid = false;
    } else {
        password.style.border = ""; // Alaphelyzet visszaállítása
    }

    // Ha van bármelyik hiba, akkor ne küldje el az űrlapot
    if (!isValid) {
        return false;
    }
}