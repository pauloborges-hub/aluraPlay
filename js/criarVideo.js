const formulario = document.querySelector('[data-formulario]');

function criarVideo() {
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titutlo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();
}

formulario.addEventListener('submit', evento => criarVideo(evento));