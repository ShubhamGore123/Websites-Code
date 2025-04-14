document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Here you can perform login validation, for example, by sending an AJAX request to the server.
    // For the sake of simplicity, let's just log the credentials to the console.
    console.log("Username:", username);
    console.log("Password:", password);
});
