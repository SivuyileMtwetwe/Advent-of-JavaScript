
    const eye = document.getElementById("eye");
    const password = document.getElementById("pwd");

    eye.addEventListener('click', () => {
        const type = password.type === 'password' ? 'text' : 'password';
        password.type = type;

        if (type === 'text') {
            eye.src = "assets/eye.svg";
        } else {
            eye.src = "assets/eye.svg";
        }
    });
