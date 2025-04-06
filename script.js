/* Deixe seu contato */
function abrirFormulario() {
    document.getElementById("formulario-container").style.display = "flex";
}

function fecharFormulario() {
    document.getElementById("formulario-container").style.display = "none";
}

/* ROLAGEM DAS PAGINAS */

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".page");

    function verificarRolagem() {
        sections.forEach((section) => {
            const posicao = section.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicao < alturaTela * 0.75 && posicao > -alturaTela * 0.25) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", verificarRolagem);
    verificarRolagem(); // Garante que as seções visíveis ao carregar já apareçam
});

