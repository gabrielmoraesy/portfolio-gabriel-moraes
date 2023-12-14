function animateLinks(navLinks) {
  navLinks.forEach((link, index) => {
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`);
  });
}

function handleClick(mobileMenu, navList, navLinks, activeClass, event) {
  const target = event.target;
  if (target.tagName.toLowerCase() === "li") {
    navList.classList.remove(activeClass);
    mobileMenu.classList.remove(activeClass);
  } else {
    navList.classList.toggle(activeClass);
    mobileMenu.classList.toggle(activeClass);
    animateLinks(navLinks);
  }
}

function addClickEvent(mobileMenu, navList, navLinks, handleClickBound) {
  mobileMenu.addEventListener("click", handleClickBound);
  navLinks.forEach((link) => {
    link.addEventListener("click", handleClickBound);
  });
}

function init(mobileMenuSelector, navListSelector, navLinksSelector) {
  const mobileMenu = document.querySelector(mobileMenuSelector);
  const navList = document.querySelector(navListSelector);
  const navLinks = document.querySelectorAll(navLinksSelector);
  const activeClass = "active";

  if (mobileMenu) {
    const handleClickBound = handleClick.bind(
      null,
      mobileMenu,
      navList,
      navLinks,
      activeClass
    );
    addClickEvent(mobileMenu, navList, navLinks, handleClickBound);
  }
}

init(".mobile-menu", ".nav-list", ".nav-list li");

// Descrição nas Habilidades
const divHabilidades = document.querySelector(".skills-icons");
const iconsHabilidades = document.querySelectorAll(".icon");
const divResultado = document.querySelector(".description-icon");

const descricaoIcons = {
  htmlIcon:
    "HTML5 é linguagem de marcação de hipertexto usada para criar páginas web.",
  cssIcon: "CSS3 é linguagem de estilo usada para estilizar elementos HTML.",
  jsIcon:
    "JavaScript é uma linguagem de programação usada principalmente em aplicações web.",
  tsIcon:
    "TypeScript é uma linguagem de programação que amplia o JavaScript, adicionando recursos de tipagem estática para criar código mais seguro e legível.",
  reactIcon:
    "React é uma biblioteca JavaScript para criar interfaces de usuário.",
  nextjsIcon:
    "Next.js é um framework React que simplifica o desenvolvimento de aplicativos web rápidos, escaláveis e eficientes, com suporte para renderização do lado do servidor (SSR) e do lado do cliente (CSR), rotas dinâmicas e otimização de imagens.",
  githubIcon:
    "GitHub é uma plataforma de hospedagem de código-fonte e controle de versão.",
  gitIcon: "O Git é um sistema que permite fazer o versionamento de projetos.",
  figmaIcon:
    "Figma é uma ferramenta de design de interface de usuário baseada na web.",
  styledComponentsIcon:
    "Styled Components é uma biblioteca para estilizar componentes em aplicações React de forma elegante e fácil de manter. Ele permite que você escreva estilos diretamente no seu código JavaScript ou TypeScript, tornando o desenvolvimento de UI mais modular e flexível.",
};

iconsHabilidades.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    const descricao = descricaoIcons[icon.classList[1]];
    divResultado.innerHTML = descricao;
  });

  icon.addEventListener("mouseout", () => {
    divResultado.innerHTML =
      "Passe o mouse ou clique sobre o ícone para aparecer sua descrição.";
  });

  icon.addEventListener("touchstart", () => {
    const descricao = descricaoIcons[icon.classList[1]];
    divResultado.innerHTML = descricao;
  });
});
