const buttons = document.querySelectorAll(".tecla");

buttons.forEach((elemento) => {
  elemento.addEventListener("click", (button) => {
    const className = button.target.classList[1];

    document.querySelector(`#som_${className}`).play();

    button.target.onkeydown = (evento) => {
      if (evento.code === "Space" || evento.code === "Enter") {
        button.target.classList.add('ativa');
      }
    };

    button.target.onkeyup = (evento) => {
      if (evento.code === "Space" || evento.code === "Enter") {
        button.target.classList.remove('ativa');
      }
    };
  });
});