const dadosIniciais = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://static.corinthians.com.br/uploads/17340952198d8818c8e140c64c743113f563cf750f.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://ds-images.bolavip.com/news/image/800/800/?src=https://images.bolavip.com/webp/br/full/BBR_20241120_BBR_1044804_Dayana-Rodriguez-Gremio-1-e1732064611820.webp",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  }
];

if (!localStorage.getItem("jogadoras")) {
  localStorage.setItem("jogadoras", JSON.stringify(dadosIniciais));
}

function getJogadoras() {
  return JSON.parse(localStorage.getItem("jogadoras")) || [];
}

function salvarJogadoras(lista) {
  localStorage.setItem("jogadoras", JSON.stringify(lista));
}

function renderizarJogadoras() {
  const container = document.getElementById("lista-jogadoras");
  container.innerHTML = "";

  const jogadoras = getJogadoras();

  jogadoras.forEach(j => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${j.foto}" alt="${j.nome}">
      <h3>${j.nome}</h3>
      <p><strong>Posição:</strong> ${j.posicao}</p>
      <p><strong>Clube:</strong> ${j.clube}</p>
      <p><strong>Gols:</strong> ${j.gols} | <strong>Assistências:</strong> ${j.assistencias} | <strong>Jogos:</strong> ${j.jogos}</p>
      <button onclick="removerJogadora(${jogadoras.indexOf(j)})">Remover</button>
    `;
    container.appendChild(card);
  });
}

document.getElementById("form-jogadora").addEventListener("submit", function(e) {
  e.preventDefault();

  const nova = {
    nome: document.getElementById("nome").value,
    posicao: document.getElementById("posicao").value,
    clube: document.getElementById("clube").value,
    gols: Number(document.getElementById("gols").value),
    assistencias: Number(document.getElementById("assistencias").value),
    jogos: Number(document.getElementById("jogos").value),
    foto: document.getElementById("foto").value,
    favorita: false
  };

  const jogadoras = getJogadoras();
  jogadoras.push(nova);
  salvarJogadoras(jogadoras);

  alert("Jogadora adicionada com sucesso!");
  renderizarJogadoras();
  this.reset();
});

renderizarJogadoras();

function removerJogadora(index) {
  const confirmar = confirm("Tem certeza que deseja remover esta jogadora?");
  if (confirmar) {
    const jogadoras = getJogadoras();
    jogadoras.splice(index, 1);
    salvarJogadoras(jogadoras);
    renderizarJogadoras();
    alert("Jogadora removida com sucesso!");
  }
}
