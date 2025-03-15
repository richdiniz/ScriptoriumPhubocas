// Aplica o tema ANTES da página carregar
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Aplica o tema novamente após a DOM carregar
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Atualiza o texto do botão
    updateButtonText();

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateButtonText();
    });

    function updateButtonText() {
        themeToggle.textContent = body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Escuro";
    }
});


/*
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Verifica se há um tema salvo no localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Modo Claro";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Salva a preferência no localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Modo Claro";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Modo Escuro";
        }
    });
})
*/