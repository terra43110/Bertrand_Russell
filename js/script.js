window.onload = function() {
    window.addEventListener("resize", formatCaptions);
    formatCaptions();
}

function formatCaptions() {
    let commas = document.querySelectorAll(".toggle-comma-newline");
    for (let i = 0; i < commas.length; i++) {
        if (document.documentElement.clientWidth <= 600) {
            commas[i].innerHTML = "<br>";
        }
        else {
            commas[i].innerHTML = ", ";
        }
    }

    let newLines = document.querySelectorAll(".toggle-empty-newline");
    for (let i = 0; i < newLines.length; i++) {
        if (document.documentElement.clientWidth <= 600) {
            newLines[i].innerHTML = "<br>";
        }
        else {
            newLines[i].innerHTML = "";
        }
    }
}
