document.addEventListener('DOMContentLoaded', function() {
    const passwordToggles = document.querySelectorAll('.password-toggle i');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    document.getElementById('switch-to-signup')?.addEventListener('click', function() {
        document.querySelector('.auth-container').classList.add('signup-active');
    });

    document.getElementById('switch-to-login')?.addEventListener('click', function() {
        document.querySelector('.auth-container').classList.remove('signup-active');
    });
});