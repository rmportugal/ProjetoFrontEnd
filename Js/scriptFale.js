function enviarMensagem() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos antes de enviar a mensagem.");
    return;
  }

  enviarEmail(nome, email, mensagem, "SEU_ENDERECO_DE_EMAIL");

  var dados = {
    nome: nome,
    email: email,
    mensagem: mensagem,
  };
  var dadosJSON = JSON.stringify(dados);
  localStorage.setItem("mensagem_" + Date.now(), dadosJSON);

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";

  alert("Sua mensagem foi enviada e armazenada. Obrigado!");
}

function enviarEmail(nome, email, mensagem, destinatario) {
  console.log(
    "Enviando e-mail para " +
      destinatario +
      " de " +
      nome +
      " <" +
      email +
      ">: " +
      mensagem
  );
}

const slider = document.querySelector("#botao");
const titulo = document.querySelector("#titulo");
const paragrafo = document.querySelectorAll("p");
const subtitulo = document.querySelectorAll("h2");
const body = document.body;

slider.onclick = function (event) {
  if (event.target.checked) {
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "white";
    titulo.style.color = "black";
    paragrafo.forEach(i => i.style.color = "black"); 
    subtitulo.forEach(i => i.style.color = "black");
  } else {
    body.style.backgroundImage = "url('https://img.freepik.com/fotos-premium/design-de-plano-de-fundo-gradiente-abstrato_509471-38.jpg?w=900')";
    body.style.backgroundColor = "transparent";
    titulo.style.color = "white";
    paragrafo.forEach(i => i.style.color = "white"); 
    subtitulo.forEach(i => i.style.color = "white");    
  } 
}