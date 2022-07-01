async function GetData() {
  const response = await fetch(
    "https://ecommerceoracle.herokuapp.com/productos"
  );
  let Data = await response.json();
  return Data;
}

GetData().then((Data) => {
  let StarWars = Data[0].categorias[0].starwars;
  let Consolas = Data[0].categorias[1].consolas;
  let Diversos = Data[0].categorias[2].diversos;

  if (cont == 1) {
    StarWars.map((data, index) => {
      document.getElementById("StarWars").innerHTML += `
                <div class="Card"  key={${index}}>
                  <img
                    src="${data.urlimagen}"
                    class="ImgCard"
                  />
                  <h1 class="h1name">${data.nombre}</h1>
                  <h1 class="h1price">$ ${data.precio}.00</h1>
                  <button class="btnCard">Ver Producto</button>
                </div>
              `;
    });
  } else if (cont == 2) {
    Consolas.map((data, index) => {
      document.getElementById("Consolas").innerHTML += `
              <div class="Card"  key={${index}}>
                <img
                  src="${data.urlimagen}"
                  class="ImgCard"
                />
                <h1 class="h1name">${data.nombre}</h1>
                <h1 class="h1price">$ ${data.precio}.00</h1>
                <button class="btnCard">Ver Producto</button>
              </div>
            `;
    });
  } else if (cont == 3) {
    Diversos.map((data, index) => {
      document.getElementById("Diversos").innerHTML += `
            <div class="Card"  key={${index}}>
              <img
                src="${data.urlimagen}"
                class="ImgCard"
              />
              <h1 class="h1name">${data.nombre}</h1>
              <h1 class="h1price">$ ${data.precio}.00</h1>
              <button class="btnCard">Ver Producto</button>
            </div>
          `;
    });
  }
});

const RedirectHome = () => {
  window.location.assign("http://127.0.0.1:5500/index.html");
};
