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
  let cont = 3;
  if (cont == 1) {
    document.getElementById("Type").innerHTML += `
    <div class="Type">
    <h1>Star Wars</h1>
    </div>
    `;
    StarWars.map((data, index) => {
      document.getElementById("PrintData").innerHTML += `

                <div class="Card"  key={${index}}>
                <div class="ContainerBtnAdminnone">
                <ion-icon name="pencil"></ion-icon>
                <ion-icon name="trash"></ion-icon>
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
    document.getElementById("Type").innerHTML += `
    <div class="Type">
    <h1>Consolas</h1>
    </div>
    `;
    Consolas.map((data, index) => {
      document.getElementById("PrintData").innerHTML += `
              <div class="Card"  key={${index}}>
              <div class="ContainerBtnAdminnone">
              <ion-icon name="pencil"></ion-icon>
              <ion-icon name="trash"></ion-icon>
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
    document.getElementById("Type").innerHTML += `
    <div class="Type">
    <h1>Diversos</h1>
    </div>
    `;
    Diversos.map((data, index) => {
      document.getElementById("PrintData").innerHTML += `
            <div class="Card"  key={${index}}>
            <div class="ContainerBtnAdminnone">
            <ion-icon name="pencil"></ion-icon>
            <ion-icon name="trash"></ion-icon>
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
});

const RedirectHome = () => {
  window.location.assign("http://127.0.0.1:5500/index.html");
};
