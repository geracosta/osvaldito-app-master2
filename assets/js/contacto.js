const form = document.getElementById('contact-form');

function sendEmail( nombre, email, mensaje) {
    const options = {
      method: "POST",
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: nombre,
      email: email,
      mensaje: mensaje
    })
    };

  return fetch( "/contacto", options )
    .then( res => {
      if( res.status === 200 ){
        Swal.fire({
        icon: 'success',
        title: 'Tu mensaje ha sido enviado satisfactoriamente!',
        })
        form.reset()
      }else{
        Swal.fire({
        icon: 'error',
        title: 'Error, por favor intentá denuevo!',
        })
        }
      })
      .catch(error => console.error(error))
};

const formEvent = form.addEventListener( "submit", ( event ) => {

  event.preventDefault();
  const nombre    = form.getElementsByTagName('input')[0].value;
  const email     = form.getElementsByTagName('input')[1].value;
  const mensaje   = form.getElementsByTagName('textarea')[0].value;

  console.log(nombre, email, mensaje)
  sendEmail( nombre, email, mensaje );

});

