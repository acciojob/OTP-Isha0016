//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
    code.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(-1);

        if (e.target.value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !code.value && index > 0) {
            codes[index - 1].focus();
        }
    });

    code.addEventListener("focus", () => {
        code.select();
    });
});