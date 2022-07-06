class Carrito {
	//Añadir producto al carrito

	obtenerProducto(id) {
		if (!id) return 'No has proporcionado ningún ID';
		const listaCarrrito = window.localStorage.getItem('carrito');
		if (!listaCarrrito) return 'No hay productos en el carrito';
		const data = JSON.parse(listaCarrrito);
		const producto = data.find((p) => id == p.id);
		if (!producto) return `Producto con ID: ${id} no encontrado`;
		return producto;
	}

	eliminarProducto(id) {
		if (!id) return 'No has proporcionado ningún ID';
		const listaCarrrito = window.localStorage.getItem('carrito');
		if (!listaCarrrito) return 'No hay productos en el carrito';
		const data = JSON.parse(listaCarrrito);
		const producto = data.find((p) => id == p.id);
		if (!producto) return `Producto con ID: ${id} no encontrado`;
		this.actualizaProductos(producto, 'eliminar');
		return `Producto con ID: ${id} eliminado`;
	}

	añadirProducto(producto) {
		if (!producto) return 'Producto al carrito no existe';
		this.actualizaProductos(
			{
				imagen: producto.querySelector('img').src,
				nombre: producto.querySelector('.h1name').textContent,
				precio: producto.querySelector('.h1price').textContent,
				categoria: producto.getAttribute('data-categoria'),
				id: producto.getAttribute('key'),
				cantidad: 1,
			},
			'añadir'
		);
	}

	actualizaProductos(producto, accion) {
		const listaCarrrito = window.localStorage.getItem('carrito');
		if (!listaCarrrito) {
			window.localStorage.setItem('carrito', JSON.stringify([producto]));
		} else {
			const data = JSON.parse(listaCarrrito);
			switch (accion) {
				case 'añadir': {
					if (data.find((p) => producto.id == p.id)) {
						const updateData = data.map((p) => {
							if (producto.id == p.id) p.cantidad++;
							return p;
						});
						window.localStorage.setItem('carrito', JSON.stringify(updateData));
					} else {
						data.push(producto);
						window.localStorage.setItem('carrito', JSON.stringify(data));
					}
					break;
				}
				case 'eliminar': {
					const updateData = data.filter((p) => producto.id !== p.id);
					window.localStorage.setItem('carrito', JSON.stringify(updateData));
					break;
				}
			}
		}
	}
	//CARRITOPRINTDATA
	printDataCarrito() {
		const listaCarrrito = window.localStorage.getItem('carrito');
		const data = JSON.parse(listaCarrrito);
		console.log(data);
		if (listaCarrrito)
			data.map(
				(info, index) =>
					(document.getElementById('carrito').innerHTML += `
					<div class="container-carrito">
					<table class="lista-carrito">
					<thead>
					<tr>
					<th>Imagen</th>
					<th>Nombre</th>
					<th>Precio</th>
					<th>Cantidad</th>
					<th></th>
					</tr>
			
				</thead>
				<tbody key=${index}>
			
				<tr >
				<td>
					<img src="${info.imagen}" class="imgCar">
				</td>
				<td>
					${info.nombre}
				</td>			
				<td>
					${info.precio}
				</td>
				<td>
					${info.cantidad}
				</td>
				<td>
				<button onclick="EliminarProducto(${info.id})" class="btnDelete">
					Eliminar
				</button>
				</td>
				</tr>
				</tbody>
				</table>
					</div>
	`)
			);
		else {
			alert('	NO  HAY DATA EN EL LOCAL');
		}

		let Log = window.localStorage.getItem('Login');
		if (Log) {
			const CardDisplaynone = document.querySelectorAll('.ContainerBtnAdminnone');

			CardDisplaynone.forEach((elemento) => {
				elemento.classList.toggle('ContainerBtnAdmin');
			});

			document.getElementById('login').classList.toggle('ContainerBtnAdminnone');
		} else {
			document.getElementById('logout').classList.toggle('ContainerBtnAdminnone');
		}
	}
}
