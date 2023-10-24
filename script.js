const moveButton = document.getElementById("moveButton");

moveButton.addEventListener("click", () => {
    const maxX = window.innerWidth - moveButton.clientWidth;
    const maxY = window.innerHeight - moveButton.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    moveButton.style.left = randomX + "px";
    moveButton.style.top = randomY + "px";
});
normalButton.addEventListener("click", () => {
    // Adicione a lógica que desejar para o botão normal
    alert("Finalmente se assumiu!");
});