function mudarTexto() {
  const paragrafo = document.getElementById("role");
  paragrafo.textContent = "Frontend";
}

const roles = document.getElementById("role");

setTimeout(() => {
  roles.textContent = "Frontend";
}, 2000);

setTimeout(() => {
  roles.textContent = "Backend";
}, 2000);