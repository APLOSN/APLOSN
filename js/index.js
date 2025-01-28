function typeWriter() {
    if (i < txt.length) {
        document.getElementById("content_html").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, self.typing.speed);
    }
}

function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
}

typeWriter();