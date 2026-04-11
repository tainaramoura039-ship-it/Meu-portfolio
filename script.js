// Mensagem no console (teste)
console.log("Portfólio carregado com sucesso!");

// Exemplo de interação simples
const projetos = document.querySelectorAll("#lista-projetos li");

projetos.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Você clicou em " + item.textContent);
  });
});
