

  <script>
    function login() {
      var email = document.getElementById("emailInput").value;
      var password = document.getElementById("passwordInput").value;

      // Assume the necessary login credentials for testing
      var validEmail = "test@example.com";
      var validPassword = "password";

      if (email === validEmail && password === validPassword) {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid email or password. Please try again.");
      }
    }
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha
