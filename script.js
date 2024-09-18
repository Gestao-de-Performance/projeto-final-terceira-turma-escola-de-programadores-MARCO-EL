// script.js

// Função para abrir e fechar o menu
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("open");
}

// Função para enviar formulário de contato
function sendContactForm() {
  const form = document.querySelector(".contact-form");
  const nome = form.nome.value;
  const email = form.email.value;
  const mensagem = form.mensagem.value;

  // Enviar formulário para o servidor
  fetch("/enviar-contato", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      email,
      mensagem,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// Adicionar evento de clique ao botão de menu
document.querySelector(".menu-button").addEventListener("click", toggleMenu);

// Adicionar evento de envio ao formulário de contato
document
  .querySelector(".contact-form")
  .addEventListener("submit", sendContactForm);
// Select the dropdown button and the submenu
const dropdownButton = document.querySelector("#servicos");
const submenu = document.querySelector("#submenu");

// Add an event listener to the dropdown button
dropdownButton.addEventListener("click", () => {
  // Toggle the visibility of the submenu
  submenu.classList.toggle("show");
});

let currentBox = 1;

function showBox(boxNumber) {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    box.style.display = index + 1 === boxNumber ? "block" : "none";
  });
}

function showPreviousBox() {
  currentBox = currentBox === 1 ? 3 : currentBox - 1;
  showBox(currentBox);
}

function showNextBox() {
  currentBox = currentBox === 3 ? 1 : currentBox + 1;
  showBox(currentBox);
}

document.addEventListener("DOMContentLoaded", () => {
  showBox(currentBox);
});
function navigateTo(url) {
  window.location.href = url;
}
// Exemplo de como adicionar um efeito hover usando JavaScript
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "red";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});
