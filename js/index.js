let i = 0;
const txt = 'Your text here'; // Define your text
const typingSpeed = 100; // Define typing speed in milliseconds

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("content_html").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
}

typeWriter();

