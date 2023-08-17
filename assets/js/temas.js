
function mainTemas(){
   mostrarTemas();
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
      let tdUrl;

      // tamaño de los videos
      const width = 200;
      const height = 110;

      tbody = document.createElement('tbody');

      temas.forEach(tema => {
         trNuevaFila = document.createElement('tr');
         tdTitulo = document.createElement('td');
         tdAutor = document.createElement('td');
         tdUrl = document.createElement('td');

         tdTitulo.innerText = tema.titulo;
         tdTitulo.style.verticalAlign = 'buttom';

         tdAutor.innerText = tema.autor;
         tdAutor.style.verticalAlign = 'buttom';
         
         tdUrl.innerHTML = `<iframe width="${width}" height="${height}" src="${tema.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
         tdUrl.style.textAlign = 'center';

         trNuevaFila.appendChild(tdTitulo);
         trNuevaFila.appendChild(tdAutor);
         trNuevaFila.appendChild(tdUrl);

         tbody.appendChild(trNuevaFila)
      });

      tblTemas.appendChild(tbody);

    })
    .catch((error) => {
       console.log(error);
    })
}

mainTemas();
