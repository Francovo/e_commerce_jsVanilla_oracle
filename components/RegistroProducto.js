//Metodo POST envio de datos
function envioPost() {
	const envio = {
		categoria: document.getElementById('categoria').value.toLowerCase(),
		urlimagen: document.getElementById('url').value,
		nombre: document.getElementById('name').value,
		precio: document.getElementById('precio').value,
		detalles: document.getElementById('descripcion').value,
	};

	fetch('https://ecommerceoracle.herokuapp.com/productos', {
		method: 'POST',
		body: JSON.stringify(envio),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.catch((error) => console.error('Error:', error))
		.then((response) => console.log('Enviado:', response));

	console.log(envio);
}
