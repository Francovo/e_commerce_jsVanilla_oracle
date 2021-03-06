const RedirectLogin = () => {
	window.location.assign('https://e-commerce-js-vanilla.vercel.app/Login.html');
};

//Metodo POST envio de datos
function envioPost() {
	const envio = {
		usuario: document.getElementById('nombre').value,
		correo: document.getElementById('email').value,
		contraseña: document.getElementById('password').value,
	};

	fetch('https://ecommerceoracle.herokuapp.com/usuarios', {
		method: 'POST',
		body: JSON.stringify(envio),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.catch((error) => console.error('Error:', error))
		.then((response) => console.log('Enviado:', response), RedirectLogin());

	console.log(envio);
}
