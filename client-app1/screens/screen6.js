import { router, socket } from "../routes.js";

export default function renderClientApp1() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>4/5</h1>
    <button id="triangle">Reino Hyrule</button>
    <button id="diamond">Reino Champiñón</button>
    <button id="circle">Reino Delfino</button>
    <button id="square">Reino de los Koopa</button>
  `;

  document.getElementById("triangle").addEventListener("click", () => {
    socket.emit("answer", "A"); // Si selecciona Reino Hyrule
  });

  document.getElementById("diamond").addEventListener("click", () => {
    socket.emit("answer", "B"); // Si selecciona Reino Champiñón
  });

  document.getElementById("circle").addEventListener("click", () => {
    socket.emit("answer", "C"); // Si selecciona Reino Delfino
  });

  document.getElementById("square").addEventListener("click", () => {
    socket.emit("answer", "D"); // Si selecciona Reino de los Koopa
  });
}
