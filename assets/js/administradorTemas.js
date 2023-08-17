
function mainTemas(){
   guardarTema();
}

function guardarTema(){
   const miFormulario = document.querySelector('form');
   const divLogin = document.getElementById('login-error-message');
   const token = localStorage.getItem('token');

   miFormulario.addEventListener('submit', ( e ) => {
      e.preventDefault();
      const formData = {};

      for( let el of miFormulario.elements ) {
         if ( el.name.length > 0 ) 
            formData[el.name] = el.value;
      }

      formData['token'] = token;
      formData['usuario'] = localStorage.getItem('usuario');

      fetch( e.target.action, {
         method: 'POST',
         body: JSON.stringify( formData ),
         headers: { 
            'Content-Type': 'application/json',
            'x-token': token
         }
      })
      .then( res =>  res.json())
      .then( ( { msg, status } ) => {
         if ( msg ) {
            const errorMessage = `
            <div class="alert alert-danger" role="alert">
                ${ msg }
            </div>
            `;

            divLogin.innerHTML = errorMessage;

        } else {
            const errorMessage = `
            <div class="alert alert-success" role="alert">
               El tema ha sido guardado correctamente.
            </div>
            `;

            divLogin.innerHTML = errorMessage;

            document.getElementById("titulo").value = "";
            document.getElementById("autor").value = "";
            document.getElementById("url").value = "";
            document.getElementById("precio").value = "";

        }
      }).catch( ( error )  => {
         const errorMessage = `
         <div class="alert alert-danger" role="alert">
             ${error}
         </div>
         `;

         divLogin.innerHTML = errorMessage;
      })
   })
}

// Funcion Mostrar Temas
function mostrarTemas(){
   fetch( '/temas/obtener', {
      method: 'GET',
      headers: { 
         'Content-Type': 'application/json'
      }
   })
   .then((response) => {
      return response.json();
    })
    .then(({temas}) => {
      const tblTemas = document.querySelector('#tblTemas');
      let tbody;
      let trNuevaFila;
      let tdTitulo;
      let tdAutor;
      let tdBotones;

      tbody = document.createElement('tbody');

      temas.forEach(tema => {
         trNuevaFila = document.createElement('tr');
         tdTitulo = document.createElement('td');
         tdAutor = document.createElement('td');
         tdBotones = document.createElement('td');

         tdTitulo.innerText = tema.titulo;
         tdTitulo.style.verticalAlign = 'buttom';

         tdAutor.innerText = tema.autor;
         tdAutor.style.verticalAlign = 'buttom';
         
         tdBotones.innerHTML = ``;

         trNuevaFila.appendChild(tdTitulo);
         trNuevaFila.appendChild(tdAutor);
         trNuevaFila.appendChild(tdBotones);

         tbody.appendChild(trNuevaFila)
      });

      tblTemas.appendChild(tbody);
      
    })
    .catch((error) => {
       console.log(error);
    })
}

mainTemas();
