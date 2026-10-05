function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


function sendMessage(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

}