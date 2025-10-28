
  document.addEventListener('DOMContentLoaded', () => {


  /* ================= REVEAL DE PROJETOS ================= */
  const projetos = document.querySelectorAll('.projeto');
  if (projetos.length > 0) {
    function mostrarProjetos() {
      projetos.forEach(proj => {
        const top = proj.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) proj.classList.add('visible');
      });
    }
    window.addEventListener('scroll', mostrarProjetos, { passive: true });
    mostrarProjetos();
  }

  /* ================= MENU TOGGLE (mobile) ================= */
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => navbar.classList.toggle('active'));
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => navbar.classList.remove('active'));
    });
  }

  /* ================= BOTÃO VOLTAR AO TOPO ================= */
  const btnTop = document.getElementById('btnTop');
  if (btnTop) {
    window.addEventListener('scroll', () => {
      const sc = document.documentElement.scrollTop || document.body.scrollTop;
      btnTop.style.display = (sc > 200) ? 'block' : 'none';
    }, { passive: true });

    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ================= SOFTSKILLS SEQUENCIAL ================= */
  const softskills = document.querySelectorAll('.softskill');
  if (softskills.length > 0) {
    function revelarSoftskillsSequencial() {
      softskills.forEach((skill, index) => {
        const top = skill.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.85;
        if (top < alturaTela && !skill.classList.contains('visible')) {
          setTimeout(() => skill.classList.add('visible'), index * 120);
        }
      });
    }
    window.addEventListener('scroll', revelarSoftskillsSequencial, { passive: true });
    revelarSoftskillsSequencial();
  }

  const contactForm = document.getElementById('contactMeForm');
const feedback = document.querySelector('.form-feedback');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_siolqo4', 'template_aga59jr', this, 's-sbJF4qeji1BPQQY')
        .then(() => {
            feedback.textContent = 'Mensagem enviada com sucesso! ✅';
            feedback.style.color = '#04ff04';
            contactForm.reset();
        })
        .catch(() => {
            feedback.textContent = 'Erro ao enviar. Tente novamente.';
            feedback.style.color = 'red';
        });
});


}); // end DOMContentLoaded
