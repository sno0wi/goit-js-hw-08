const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", () => {
    const inputValue = textInput.value.trim();
    output.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
