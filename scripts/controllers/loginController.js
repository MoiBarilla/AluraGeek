const loginForm = document.querySelector("[data-login]");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginEmail = document.querySelector("[data-loginemail]");
    const loginPassword = document.querySelector("[data-loginpassword]");

    const validation = (loginEmail.length > 3 && loginPassword.length > 3);

    if(validation) { }
});
