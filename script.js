
const habilidades = document.querySelectorAll('.habilidade');

function revelarAoScroll() {
  habilidades.forEach((el) => {
    const topoElemento = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight * 0.85;

    if (topoElemento < alturaTela) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revelarAoScroll);
revelarAoScroll();

const projetos = document.querySelectorAll(".projeto");

  function mostrarProjetos() {
    projetos.forEach(proj => {
      const top = proj.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        proj.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", mostrarProjetos);

  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  menuToggle.onclick = () => {
    navbar.classList.toggle('active');
  };

  // Fecha o menu ao clicar em um link (modo mobile)
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

const btnTop = document.getElementById("btnTop");

  // Mostra o botão ao rolar para baixo
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  };

  // Ao clicar, volta ao topo com animação suave
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });