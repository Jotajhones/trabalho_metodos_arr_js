import { methodsData } from "./data/MethodsData.js";
import { Content } from "./services/Content.js";

const app = new Content(methodsData);

const botoesMenu = document.querySelectorAll('.menuItem');

botoesMenu.forEach(botao => {
  botao.addEventListener('click', (evento) => {
    const metodo = evento.target.getAttribute('data-metodo');
    app.renderContent(metodo);
  });
});

app.renderContent('includes');