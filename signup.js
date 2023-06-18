<script>
       
        document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            // Get the values entered by the user
            const nameInput = document.querySelector('#floatingInputName').value;
            const emailInput = document.querySelector('#floatingInputEmail').value;
            const passwordInput = document.querySelector('#floatingPassword').value;

            // Validate the inputs (example validation, you can modify it according to your requirements)
            if (nameInput.trim() === '') {
                alert('Please enter your name.');
                return;
            }

            if (emailInput.trim() === '') {
                alert('Please enter your email address.');
                return;
            }

            if (passwordInput.trim() === '') {
                alert('Please enter a password.');
                return;
            }

            window.location.href = 'dashboard.html';

            else {
                alert('Email or password mismatch');
            }

            // If all inputs are valid, proceed with form submission
            // You can add your own code to handle form submission or send data to the server
            alert('Form submitted!\n\nName: ' + nameInput + '\nEmail: ' + emailInput);

            // Optionally, you can reset the form after submission
            document.querySelector('form').reset();
        });
    </script>
</body>

</html>
