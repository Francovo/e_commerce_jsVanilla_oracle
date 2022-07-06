const carrito = document.getElementById('carrito');
const productos = document.querySelectorAll('.containerCard');
const listaProductos = document.getElementById('lista-carrito');
console.log('Lista', listaProductos);
const carro = new Carrito(listaProductos);
console.log('Carro', carro);

cargarEventos();

function cargarEventos() {
	productos.forEach((p) => {
		p.addEventListener('click', (e) => {
			e.preventDefault();
			if (e.target.classList.contains('IconCart')) {
				//Card del producto seleccionado
				const producto = e.target.parentElement.parentElement.parentElement;
				carro.añadirProducto(producto);
			}
		});
	});
}

function EjecutarPrint() {
	carro.printDataCarrito();
}

function EliminarProducto(id) {
	carro.eliminarProducto(id);
}

function Añadir(info) {
	carro.añadirProducto(info);
}
