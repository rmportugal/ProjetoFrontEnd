function enviarMensagem() {

	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var mensagem = document.getElementById("mensagem").value;

	if (nome === '' || email === '' || mensagem === '') {
		alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
		return;
	}
	
	enviarEmail(nome, email, mensagem, "SEU_ENDERECO_DE_EMAIL");

	var dados = {
		nome: nome,
		email: email,
		mensagem: mensagem
	};
	var dadosJSON = JSON.stringify(dados);
	localStorage.setItem('mensagem_' + Date.now(), dadosJSON);

	document.getElementById("nome").value = "";
	document.getElementById("email").value = "";
	document.getElementById("mensagem").value = "";

	alert("Sua mensagem foi enviada e armazenada. Obrigado!");
}

function enviarEmail(nome, email, mensagem, destinatario) {
	console.log("Enviando e-mail para " + destinatario + " de " + nome + " <" + email + ">: " + mensagem);
}
