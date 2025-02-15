function atualizarPadding() {
    var alturaNavbar = document.getElementById("navbar").offsetHeight;
    var bodyElement = document.getElementById("bodyPage");
    bodyElement.style.paddingTop = alturaNavbar + "px";
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Evita o comportamento padrão
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var targetPosition = targetElement.offsetTop - alturaNavbar; // Ajuste com a altura da navbar
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth" // Faz a rolagem ser suave
                });
            }
        });
    });
}
window.addEventListener("resize", atualizarPadding)
document.addEventListener("DOMContentLoaded", atualizarPadding)