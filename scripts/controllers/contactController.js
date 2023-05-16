const contactForm = document.querySelector("[data-contact]");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const contactName = document.querySelector("[data-formnombre]").value;
    const contactEmail = document.querySelector("[data-formemail]").value;
    const contactMessage = document.querySelector("[data-formmensaje]").value;
    // const = document.querySelector("[]");

    const validation = ( contactName.length > 3 && contactEmail.length > 3 && contactMessage.length > 3 )

    if(validation) { }
});