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

  jogadoras.forEach((j, index) => {
    const card = document.createElement("div");
    card.className = "card";
    
    const estrelaIcon = j.favorita ? "★" : "☆";
    const estrelaClass = j.favorita ? "favorita" : "";
    
    card.innerHTML = `
      <img src="${j.foto}" alt="${j.nome}">
      <h3>${j.nome}</h3>
      <p><strong>Posição:</strong> ${j.posicao}</p>
      <p><strong>Clube:</strong> ${j.clube}</p>
      <p><strong>Gols:</strong> ${j.gols} | <strong>Assistências:</strong> ${j.assistencias} | <strong>Jogos:</strong> ${j.jogos}</p>
      <div class="botoes">
        <button class="btn-favorita ${estrelaClass}" onclick="favoritarJogadora(${index})">${estrelaIcon}</button>
        <button onclick="editarJogadora(${index})">Editar</button>
        <button onclick="removerJogadora(${index})">Remover</button>
      </div>
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


function favoritarJogadora(index) {
  const jogadoras = getJogadoras();
  jogadoras[index].favorita = !jogadoras[index].favorita;
  salvarJogadoras(jogadoras);
  renderizarJogadoras();
}


let jogadoraEditando = -1;

function editarJogadora(index) {
  const jogadoras = getJogadoras();
  const jogadora = jogadoras[index];
  
  jogadoraEditando = index;
  
  document.getElementById("edit-nome").value = jogadora.nome;
  document.getElementById("edit-posicao").value = jogadora.posicao;
  document.getElementById("edit-clube").value = jogadora.clube;
  document.getElementById("edit-gols").value = jogadora.gols;
  document.getElementById("edit-assistencias").value = jogadora.assistencias;
  document.getElementById("edit-jogos").value = jogadora.jogos;
  document.getElementById("edit-foto").value = jogadora.foto;
  
  document.getElementById("edicao").style.display = "block";
  document.getElementById("cadastro").style.display = "none";
}

function cancelarEdicao() {
  document.getElementById("edicao").style.display = "none";
  document.getElementById("cadastro").style.display = "block";
  jogadoraEditando = -1;
}

document.getElementById("form-edicao").addEventListener("submit", function(e) {
  e.preventDefault();
  
  if (jogadoraEditando === -1) return;
  
  const jogadoras = getJogadoras();
  
  jogadoras[jogadoraEditando] = {
    nome: document.getElementById("edit-nome").value,
    posicao: document.getElementById("edit-posicao").value,
    clube: document.getElementById("edit-clube").value,
    gols: Number(document.getElementById("edit-gols").value),
    assistencias: Number(document.getElementById("edit-assistencias").value),
    jogos: Number(document.getElementById("edit-jogos").value),
    foto: document.getElementById("edit-foto").value,
    favorita: jogadoras[jogadoraEditando].favorita
  };
  
  salvarJogadoras(jogadoras);
  renderizarJogadoras();
  cancelarEdicao();
  
  alert("Jogadora editada com sucesso!");
});

