const container = document.getElementById("container");

perguntas.forEach(item => {
  const card = document.createElement("article");
  card.className = "cartao";

  const conteudo = document.createElement("div");
  conteudo.className = "cartao__conteudo";

  const titulo = document.createElement("h3");
  titulo.textContent = item.materia;

  const pergunta = document.createElement("div");
  pergunta.className = "cartao__conteudo__pergunta";
  pergunta.innerHTML = `<p>${item.pergunta}</p>`;

  const resposta = document.createElement("div");
  resposta.className = "cartao__conteudo__resposta";
  resposta.innerHTML = `<p>${item.resposta}</p>`;

  conteudo.appendChild(titulo);
  conteudo.appendChild(pergunta);
  conteudo.appendChild(resposta);
  card.appendChild(conteudo);
  container.appendChild(card);

  card.addEventListener("click", () => {
    resposta.style.display = resposta.style.display === "block" ? "none" : "block";
  });
});