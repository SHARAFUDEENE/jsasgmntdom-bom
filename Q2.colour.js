function changecolor() {
    const colorSelect = document.getElementById("colorSelect");
    const selectedColor = colorSelect.value;
    const selectertext = document.getElementById("selectertext");
    selectertext.style.color = selectedColor;
}
