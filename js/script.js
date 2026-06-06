const animais = [
  {
    id: "thor",
    foto: "./img/cachorro 3.jpg",
    nome: "Thor",
    especie: "Cachorro",
    especieChave: "cachorro",
    raca: "SRD",
    idade: "2 anos",
    porte: "Médio",
    porteChave: "medio",
    sexo: "Macho",
    saude: "Vacinado, vermifugado e castrado",
    local: "Serra - ES",
    descricao: "Thor é carinhoso, brincalhão e cheio de energia. Gosta de passeio, bolinha e gente por perto."
  },
  {
    id: "luna",
    foto: "./img/gato 2.jpg",
    nome: "Luna",
    especie: "Gato",
    especieChave: "gato",
    raca: "SRD",
    idade: "1 ano",
    porte: "Pequeno",
    porteChave: "pequeno",
    sexo: "Fêmea",
    saude: "Vacinada e vermifugada",
    local: "Serra - ES",
    descricao: "Luna é curiosa, delicada e observadora. Quando confia, vira uma companhia doce para lares tranquilos."
  },
  {
    id: "bob",
    foto: "./img/cachorro 2.jpg",
    nome: "Bob",
    especie: "Cachorro",
    especieChave: "cachorro",
    raca: "Labrador mix",
    idade: "3 anos",
    porte: "Grande",
    porteChave: "grande",
    sexo: "Macho",
    saude: "Vacinado e vermifugado",
    local: "Serra - ES",
    descricao: "Bob é leal, dócil com crianças e fica mais feliz em casas com quintal e rotina constante."
  },
  {
    id: "mia",
    foto: "./img/gato1.jpg",
    nome: "Mia",
    especie: "Gato",
    especieChave: "gato",
    raca: "Persa mix",
    idade: "4 anos",
    porte: "Médio",
    porteChave: "medio",
    sexo: "Fêmea",
    saude: "Vacinada, castrada e vermifugada",
    local: "Serra - ES",
    descricao: "Mia é tranquila, independente e prefere ambientes calmos com tutores pacientes."
  },
  {
    id: "rex",
    foto: "./img/cachorro 1.jpg",
    nome: "Rex",
    especie: "Cachorro",
    especieChave: "cachorro",
    raca: "Poodle mix",
    idade: "1 ano",
    porte: "Pequeno",
    porteChave: "pequeno",
    sexo: "Macho",
    saude: "Vacinado",
    local: "Serra - ES",
    descricao: "Rex é esperto, alegre e aprende rápido. Tem porte pequeno e energia de sobra para brincar."
  }
];

const publicacoes = [
  {
    imagem: "./img/cachorro 4.jpg",
    categoria: "Dicas práticas",
    titulo: "Como criar uma rotina que deixa seu pet mais seguro",
    texto: "Horários para alimentação, passeio, descanso e brincadeira reduzem ansiedade.",
    cor: "#FFE0C5"
  },
  {
    imagem: "./img/gato 3.jpg",
    categoria: "Materiais educativos",
    titulo: "Por que castrar ajuda a combater o abandono?",
    texto: "A castração evita ninhadas inesperadas e protege a saúde dos animais.",
    cor: "#FFF5B6"
  },
  {
    imagem: "./img/cachorro lendo.jpg",
    categoria: "Adoção responsável",
    titulo: "O que pensar antes de adotar um animal",
    texto: "Tempo, orçamento, espaço e compromisso precisam entrar na decisão.",
    cor: "#DDF3DF"
  },
  {
    imagem: "./img/familia arca.webp",
    categoria: "Notícias",
    titulo: "Programa Arca aproxima famílias e animais em novo evento",
    texto: "A ação levou orientação sobre guarda responsável, vacinação e adaptação.",
    cor: "#DCE9F8"
  }
];

let temporizadorAdocao;

const botoesPagina = document.querySelectorAll("[data-pagina]");
const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");

function mostrarPagina(id) {
  document.querySelectorAll(".pagina").forEach((pagina) => {
    pagina.classList.toggle("ativa", pagina.id === `pagina-${id}`);
  });

  document.querySelectorAll(".menu button").forEach((botao) => {
    botao.classList.toggle("ativo", botao.dataset.pagina === id);
  });

  menu.classList.remove("aberto");
  botaoMenu.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function criarCartaoAnimal(animal) {
  const seloSaude = animal.saude.toLowerCase().includes("castrad") ? "Castrado" : "Vacinado";

  return `
    <article class="cartao-animal" data-animal="${animal.id}" data-especie="${animal.especieChave}" data-porte="${animal.porteChave}">
      <div class="foto-animal">
        <img src="${animal.foto}" alt="${animal.nome}">
      </div>
      <div class="corpo-animal">
        <h3>${animal.nome}</h3>
        <div class="etiquetas">
          <span>${animal.especie}</span>
          <span>${animal.porte}</span>
          <span class="verde">${seloSaude}</span>
        </div>
        <button class="botao botao-verde completo" type="button">Quero adotar</button>
      </div>
    </article>
  `;
}

function renderizarAnimais() {
  const cartoes = animais.map(criarCartaoAnimal).join("");
  document.querySelector("#animais-inicio").innerHTML = cartoes;
  document.querySelector("#grade-animais").innerHTML = cartoes;
}

function renderizarBlog() {
  document.querySelector("#grade-blog").innerHTML = publicacoes.map((post) => `
    <article class="cartao-blog">
      <div class="imagem-blog" style="background:${post.cor}">
        ${post.imagem
          ? `<img src="${post.imagem}" alt="${post.titulo}">`
          : (post.icone || "")}
      </div>
      <div class="corpo-blog">
        <span class="categoria-blog">${post.categoria}</span>
        <h3>${post.titulo}</h3>
        <p>${post.texto}</p>
      </div>
    </article>
  `).join("");
}

function renderizarCalendario() {
  const grade = document.querySelector("#grade-calendario");
  const rotulos = ["D", "S", "T", "Q", "Q", "S", "S"];
  const diasAnteriores = [29, 30, 31];
  const diasDoMes = Array.from({ length: 30 }, (_, indice) => indice + 1);

  grade.innerHTML = [
    ...rotulos.map((rotulo) => `<div class="rotulo-calendario">${rotulo}</div>`),
    ...diasAnteriores.map((dia) => `<button class="dia-calendario desabilitado" type="button" disabled>${dia}</button>`),
    ...diasDoMes.map((dia) => `<button class="dia-calendario ${dia === 21 ? "selecionado" : ""}" type="button">${dia}</button>`)
  ].join("");
}

function abrirModalAnimal(id) {
  const animal = animais.find((item) => item.id === id);
  const modal = document.querySelector("#modal-animal");

  if (!animal) return;

  document.querySelector("#foto-modal").innerHTML = `<img src="${animal.foto}" alt="${animal.nome}">`;
  document.querySelector("#nome-modal").textContent = animal.nome;
  document.querySelector("#descricao-modal").textContent = animal.descricao;
  document.querySelector("#campos-modal").innerHTML = [
    ["Espécie", animal.especie],
    ["Raça", animal.raca],
    ["Idade", animal.idade],
    ["Porte", animal.porte],
    ["Sexo", animal.sexo],
    ["Saúde", animal.saude],
    ["Local", animal.local]
  ].map(([rotulo, valor]) => `
    <div class="campo">
      <small>${rotulo}</small>
      <strong>${valor}</strong>
    </div>
  `).join("");

  reiniciarFluxoAdocao();
  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
}

function fecharModalAnimal() {
  clearInterval(temporizadorAdocao);
  const modal = document.querySelector("#modal-animal");
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
}

function mostrarEtapaAdocao(idEtapa) {
  document.querySelectorAll(".etapa-adocao").forEach((etapa) => {
    etapa.classList.toggle("ativa", etapa.id === idEtapa);
  });
}

function reiniciarFluxoAdocao() {
  clearInterval(temporizadorAdocao);
  document.querySelector("#termos-adocao").checked = false;
  document.querySelector("#barra-progresso").style.width = "0%";
  mostrarEtapaAdocao("etapa-inicio");
}

function iniciarAdocao() {
  const termos = document.querySelector("#termos-adocao");
  const barra = document.querySelector("#barra-progresso");

  if (!termos.checked) {
    alert("Por favor, aceite os termos de adoção para continuar.");
    return;
  }

  let largura = 0;
  mostrarEtapaAdocao("etapa-analise");
  barra.style.width = "0%";

  temporizadorAdocao = setInterval(() => {
    largura += 5;
    barra.style.width = `${largura}%`;

    if (largura >= 100) {
      clearInterval(temporizadorAdocao);
      mostrarEtapaAdocao("etapa-sucesso");
    }
  }, 90);
}

function filtrarAnimais(filtro) {
  document.querySelectorAll(".filtros button").forEach((botao) => {
    botao.classList.toggle("ativo", botao.dataset.filtro === filtro);
  });

  document.querySelectorAll("#grade-animais .cartao-animal").forEach((cartao) => {
    const aparece = filtro === "todos" || cartao.dataset.especie === filtro || cartao.dataset.porte === filtro;
    cartao.style.display = aparece ? "" : "none";
  });
}

function confirmarCastracao() {
  if (!document.querySelector("#termos-castracao").checked) {
    alert("Por favor, aceite os termos de agendamento.");
    return;
  }

  alert("Agendamento confirmado! Enviamos o comprovante para o seu e-mail.");
  mostrarPagina("ajudar");
}


function moverCarrosselAnimais(direcao) {
  const carrossel = document.querySelector("#animais-inicio");
  const cartao = carrossel.querySelector(".cartao-animal");

  if (!cartao) return;

  const espacoEntreCards = 16;
  const distancia = cartao.offsetWidth + espacoEntreCards;

  carrossel.scrollBy({
    left: direcao * distancia,
    behavior: "smooth"
  });
}

botoesPagina.forEach((botao) => {
  botao.addEventListener("click", () => mostrarPagina(botao.dataset.pagina));
});

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
});


document.querySelector(".seta-esquerda").addEventListener("click", (evento) => {
  evento.stopPropagation();
  moverCarrosselAnimais(-1);
});

document.querySelector(".seta-direita").addEventListener("click", (evento) => {
  evento.stopPropagation();
  moverCarrosselAnimais(1);
});

document.addEventListener("click", (evento) => {
  const cartaoAnimal = evento.target.closest(".cartao-animal");
  const botaoFechar = evento.target.closest("[data-fechar-modal], .fechar-modal");

  if (cartaoAnimal) {
    abrirModalAnimal(cartaoAnimal.dataset.animal);
  }

  if (botaoFechar || evento.target.id === "modal-animal") {
    fecharModalAnimal();
  }
});

document.querySelectorAll(".filtros button").forEach((botao) => {
  botao.addEventListener("click", () => filtrarAnimais(botao.dataset.filtro));
});

document.querySelector("#grade-calendario").addEventListener("click", (evento) => {
  if (!evento.target.classList.contains("dia-calendario") || evento.target.disabled) return;

  document.querySelectorAll(".dia-calendario.selecionado").forEach((dia) => dia.classList.remove("selecionado"));
  evento.target.classList.add("selecionado");
});

document.querySelector("#iniciar-adocao").addEventListener("click", iniciarAdocao);
document.querySelector("#cancelar-adocao").addEventListener("click", reiniciarFluxoAdocao);
document.querySelector("#confirmar-castracao").addEventListener("click", confirmarCastracao);

renderizarAnimais();
renderizarBlog();
renderizarCalendario();
