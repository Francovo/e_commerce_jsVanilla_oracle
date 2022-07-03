{/* <script
type="text/javascript"
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
></script> */}

const SendEmail = () => {
  let templateParams = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("mensaje").value,
  };

  console.log({templateParams})

  emailjs
    .send(
      "service_sd01888",
      "template_ycvv64p",
      templateParams,
      "YBV0_Hv0-KOZqeMtz"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    )
    .then(
      document.getElementById("nombre").value = "",
      document.getElementById("email").value = "",
      document.getElementById("mensaje").value = "",
    );
};
