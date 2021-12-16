// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Abertura de Empresa",
    duration: "Abrir uma empresa, criar um CNPJ e a contabilidade completa da mesma.",
    thumb: "images/abertura.jpg",
    video_id: "#"
  },
  {
    title: "Assessoria Contábil",
    duration: "Assessoria no enquadramento fiscal da empresa. Ajuda nas tomadas de decisões financeiras.",
    thumb: "images/assessoria.jpg",
    video_id: "#"
  },
  {
    title: "Consultoria Contábil",
    duration: "Direcionamento nas decisões da empresa, tanto em sua adminstração, quanto na área contábil.",
    thumb: "images/consultoria.jpg",
    video_id: "#"
  },
  {
    title: "Abertura de Filial",
    duration: "Expandir negócios é uma meta para empresas que desejam alcançar o próximo nível, porém, necessita de planejamento.",
    thumb: "images/filial.jpg",
    video_id: "#"
  },
  {
    title: "Assessoria Fiscal",
    duration: "Assessoria preventiva e de acompanhamento. Análise, orientação e controle dos procedimentos fiscais vigentes.",
    thumb: "images/fiscal.jpg",
    video_id: "#"
  },
  {
    title: "Assessoria Trabalhista",
    duration: "Além do compromisso com a folha de pagamentos, monitoramos as relações trabalhistas, cuidando dos eventuais levantamentos de passivos trabalhistas.",
    thumb: "images/trabalhista.jpg",
    video_id: "#"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});


// MENU RESPONSIVO

let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})