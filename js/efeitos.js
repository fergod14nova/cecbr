// seleciona todos os links do menu
const menuLinks = document.querySelectorAll('#menu a');

// adiciona um evento de clique em cada link do menu
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    // previne o comportamento padrão do clique no link
    event.preventDefault();
    
    // obtém o elemento associado ao link (seção correspondente)
    const target = document.querySelector(link.hash);

    // faz o scroll da página para a seção desejada, com animação suave
    target.scrollIntoView({behavior: 'smooth'});
  });
});
