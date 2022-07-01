async function GetData() {
  const response = await fetch(
    "https://ecommerceoracle.herokuapp.com/productos"
  );
  let Data = await response.json();
  return Data;
  //     .then((response) => await response.json())
  //     .then((responseData) => (Data = responseData[0]));
  //   console.log(Data.categorias);
}

GetData().then((Data) => {
  let StarWars = Data[0].categorias[0].starwars;
  let Consolas = Data[0].categorias[1].consolas;
  let Diversos = Data[0].categorias[2].diversos;

  StarWars.map((data, index) => {
    if (index <= 5) {
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
    }
  });

  Consolas.map((data, index) => {
    if (index <= 5) {
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
    }
  });

  Diversos.map((data, index) => {
    if (index <= 5) {
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
    }
  });
});

const RedirectAll = () => {
  window.location.assign("http://127.0.0.1:5500/all.html");
};

const RedirectHome = () => {
  window.location.assign("http://127.0.0.1:5500/index.html");
};
