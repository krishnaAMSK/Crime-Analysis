document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  });
  function handleLogin() {
    window.location.href = "landing.html";
  }
  var loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", handleLogin);