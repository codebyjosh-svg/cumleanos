const botonCarta = document.getElementById("botonCarta");
const carta = document.getElementById("carta");

botonCarta.addEventListener("click", () => {
  carta.classList.remove("oculto");
  carta.classList.add("mostrar");

  carta.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  botonCarta.textContent = "Mi carta para ti ❤️";
});