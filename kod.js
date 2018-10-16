function validateEmail() {
    var emailText = document.getElementById('mce-EMAIL').value;
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(emailText)) {
        return true;
    } else {
        alert('Invalid email address: ' + emailText);
        return false;
    }
}

window.onload = function() {
    document.getElementById('mc-embedded-subscribe-form').onsubmit = validateEmail;
}
