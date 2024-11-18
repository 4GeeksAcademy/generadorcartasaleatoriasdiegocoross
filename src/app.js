function generarCartaAleatoria() {
  // Palos y valores de la baraja
  const palos = ["♥", "♦", "♣", "♠"]; // Corazones, Diamantes, Tréboles, Picas
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Indices aleatorios
  const randomPaloIndex = Math.floor(Math.random() * palos.length);
  const randomValorIndex = Math.floor(Math.random() * valores.length);

  // Elegir palo y  valor
  const palo = palos[randomPaloIndex];
  const valor = valores[randomValorIndex];

  // Asigna valores a los elementos de la carta
  const paloClass = palo === "♥" || palo === "♦" ? "red" : "black";

  document.getElementById("top-palos").textContent = palo;
  document.getElementById("top-palos").className = `top-palos ${paloClass}`;

  document.getElementById("center-number").textContent = valor;
  document.getElementById(
    "center-number"
  ).className = `center-number ${paloClass}`;

  document.getElementById("bottom-palos").textContent = palo;
  document.getElementById(
    "bottom-palos"
  ).className = `bottom-palos ${paloClass}`;
}

window.onload = function() {
  // Genera una carta inicialmente
  generarCartaAleatoria();

  const card = document.querySelector("#card");
  card.addEventListener("click", generarCartaAleatoria); // Genera nueva carta al hacer clic
};
