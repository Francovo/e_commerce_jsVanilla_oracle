//FUNCIONES ADMIN
const url = 'https://ecommerceoracle.herokuapp.com/productos/';

const DeleteData = (categoria, index) => {
	console.log(categoria, index);

	fetch(`${url}/${index}`, {
		method: 'DELETE',
	})
		.then((res) => res.json())
		.then((res) => console.log('Se elimino', res))
		.catch((error) => console.log('no funca', error));

	document.getElementById('StarWars').innerHTML = '';
	document.getElementById('Consolas').innerHTML = '';
	document.getElementById('Diversos').innerHTML = '';

	GetData();
};

async function GetData() {
	try {
		const response = await fetch('https://ecommerceoracle.herokuapp.com/productos/');
		const Data = await response.json();

		if (window.localStorage.getItem('Login'))
			document.getElementById('BtnAdmin').innerHTML += `
    <h1>Todos los Productos</h1>
    <button class="btnTypeAdmin" onclick="{RedirectNewProduct()}">
      Agregar Producto
      <ion-icon name="arrow-forward-outline" class="IconArrow"></ion-icon>
    </button>
    `;
		function printItem(categoria, producto) {
			document.getElementById(categoria).innerHTML += `
    <div class="Card"  key=${producto.id}  data-categoria=${producto.categoria}>
      <div class="ContainerBtnAdminnone">
        <ion-icon name="trash" type="button" onclick={DeleteData("${producto.categoria}",${producto.id})}></ion-icon>
      </div>
      <img src="${producto.urlimagen}" class="ImgCard"/>
      <div class="ContainerIconCart">
        <h1 class="h1name">${producto.nombre}</h1>
        <button class="btnCart">
          <ion-icon name="cart-outline" class="IconCart"/>
        </button>
      </div>
      <h1 class="h1price">$${producto.precio}.00</h1>
      <button class="btnCard">Ver Producto</button>
    </div>
    `;
		}
		['StarWars', 'Consolas', 'Diversos'].forEach((categoria) => {
			Data.filter((producto) => producto.categoria == categoria.toLowerCase())
				.slice(0, 5)
				.forEach((producto) => printItem(categoria, producto));
		});
	} catch (e) {
		console.error('Error al cargar los productos, ', e);
	}

	//DEPENDIENDO DE SI ESTA LOGUEADO O NO MUESTRA UNOS BOTONES
	let Log = window.localStorage.getItem('Login');
	console.log(Log);
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

//FUNCION PARA LOGIN Y ASIGNAR AL LOCAL STORAGE EL TRUE O FALSE
async function LoginData() {
	const response = await fetch('https://ecommerceoracle.herokuapp.com/usuarios');
	let DataUser = await response.json();
	let email = document.getElementById('email').value;
	let contraseña = document.getElementById('password').value;

	const valid = DataUser.find((user) => user.correo === email);

	if (valid) {
		valid.contraseña === contraseña ? window.location.assign(`http://127.0.0.1:5500/index.html`) & window.localStorage.setItem('Login', true) : alert('Contraseña Incorrecta');
	} else {
		alert('Usuario no registrado');
	}

	console.log(window.localStorage.getItem('Login'));
	return DataUser;
}
//

const logout = () => {
	window.localStorage.removeItem('Login', false);
	window.location.assign('http://127.0.0.1:5500/Login.html');
};

const RedirectAll = (cont) => {
	//Aqui estoy definiendo los datos que usare luego en el useParams del allJs
	window.location.assign(`http://127.0.0.1:5500/all.html?cont=${cont}`);
};

const RedirectHome = () => {
	window.location.assign('http://127.0.0.1:5500/index.html');
};

const RedirectLogin = () => {
	window.location.assign('http://127.0.0.1:5500/Login.html');
};

const RedirectRegistro = () => {
	window.location.assign('http://127.0.0.1:5500/Registro.html');
};

const RedirectNewProduct = () => {
	window.location.assign('http://127.0.0.1:5500/AgregarProducto.html');
};

const RedirectCarrito = () => {
	window.location.assign('http://127.0.0.1:5500/Carrito.html');
};
