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
};

async function GetDataAll() {
	const response = await fetch('https://ecommerceoracle.herokuapp.com/productos/');
	let Data = await response.json();

	PrintDataAll(Data);
	return Data;
}

const PrintDataAll = (Data) => {
	//Esto es como el useParams; Me permite tomar datos de la barra de navegacion
	const queryString = location.search;
	const params = new URLSearchParams(queryString);
	const cont = parseInt(params.get('cont'));
	if (cont == 1) {
		document.getElementById('Type').innerHTML += `
      <div class="Type">
      <h1>Star Wars</h1>
      </div>
      `;
		Data.filter((dataFiltrada) => dataFiltrada.categoria == 'starwars').map((data) => {
			document.getElementById('PrintData').innerHTML += `
  
                  <div class="Card"  key={${data.id}}>
                  <div class="ContainerBtnAdminnone">
                  <ion-icon name="trash" type="button" onclick={DeleteData("${data.categoria}",${data.id})}></ion-icon>
                  </div>
                    <img
                      src="${data.urlimagen}"
                      class="ImgCard"
                    />
                    <div class="ContainerIconCart">
                    <h1 class="h1name">${data.nombre}</h1>
                    <button class="btnCart">
                    <ion-icon name="cart-outline" class="IconCart"></ion-icon>
                    </button>
                    </div> 
                    <h1 class="h1price">$ ${data.precio}.00</h1>
                    <button class="btnCard">Ver Producto</button>
                  </div>
                `;
		});
	} else if (cont == 2) {
		document.getElementById('Type').innerHTML += `
      <div class="Type">
      <h1>Consolas</h1>
      </div>
      `;
		Data.filter((dataFiltrada) => dataFiltrada.categoria == 'consolas').map((data) => {
			document.getElementById('PrintData').innerHTML += `
                <div class="Card"  key={${data.id}}>
                <div class="ContainerBtnAdminnone">
                <ion-icon name="pencil"></ion-icon>
                <ion-icon name="trash" type="button" onclick={DeleteData("${data.categoria}",${data.id})}></ion-icon>
                </div>
                  <img
                    src="${data.urlimagen}"
                    class="ImgCard"
                  />
                  <div class="ContainerIconCart">
                  <h1 class="h1name">${data.nombre}</h1>
                  <button class="btnCart">
                  <ion-icon name="cart-outline" class="IconCart"></ion-icon>
                  </button>
                  </div>                 
                  <h1 class="h1price">$ ${data.precio}.00</h1>
                  <button class="btnCard">Ver Producto</button>
                </div>
              `;
		});
	} else if (cont == 3) {
		document.getElementById('Type').innerHTML += `
      <div class="Type">
      <h1>Diversos</h1>
      </div>
      `;
		Data.filter((dataFiltrada) => dataFiltrada.categoria == 'diversos').map((data) => {
			document.getElementById('PrintData').innerHTML += `
              <div class="Card"  key={${data.id}}>
              <div class="ContainerBtnAdminnone">
              <ion-icon name="pencil"></ion-icon>
              <ion-icon name="trash" type="button" onclick={DeleteData("${data.categoria}",${data.id})}></ion-icon>
              </div>
                <img
                  src="${data.urlimagen}"
                  class="ImgCard"
                />
                <div class="ContainerIconCart">
                <h1 class="h1name">${data.nombre}</h1>
                <button class="btnCart">
                <ion-icon name="cart-outline" class="IconCart"></ion-icon>
                </button>
                </div>               
                <h1 class="h1price">$ ${data.precio}.00</h1>
                <button class="btnCard">Ver Producto</button>
              </div>
            `;
		});
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
};

const RedirectHome = () => {
	window.location.assign('http://127.0.0.1:5500/index.html');
};

const RedirectLogin = () => {
	window.location.assign('http://127.0.0.1:5500/Login.html');
};

const logout = () => {
	window.localStorage.removeItem('Login', false);
	window.location.assign('http://127.0.0.1:5500/Login.html');
};
