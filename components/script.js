
const roles = document.getElementById("role");
const titles = ["Back-end", "Front-end", "Full Stack", "Java", "Node.js", "Python", "PHP"];
let titleIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
const currentTitle = titles[titleIndex];

if (typing) {
    if (charIndex < currentTitle.length) {
    roles.textContent += currentTitle.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100); // velocidade de digitação
    } else {
    typing = false;
    setTimeout(typeEffect, 2000); // pausa após digitar
    }
} else {
    if (charIndex > 0) {
    roles.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeEffect, 50); // velocidade de apagar
    } else {
    typing = true;
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(typeEffect, 400); // pausa antes de começar nova palavra
    }
}
}

document.addEventListener("DOMContentLoaded", typeEffect);