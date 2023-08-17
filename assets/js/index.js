function main(){
    if (localStorage.getItem('usuario') != null){
        const element = document.getElementById('ulIngresar');
        const ulContainer = document.getElementById('ul-container');

        element.remove();

        // Elemento para poner el nombre del usuario
        let h5 = document.createElement("h5");

        // Elementos para el nuevo link de 
        let ul = document.createElement("ul");
        let liSaludo = document.createElement("li");
        let liSalir = document.createElement("li");
        let a = document.createElement("a");

        ul.classList.add("navbar-nav", "w-100", "justify-content-end")
        liSaludo.classList.add("nav-item");
        liSalir.classList.add("nav-item");
        a.classList.add("link-dark");
        a.href = "#";
        a.textContent = "Salir"

        a.onclick = function salir() {
            localStorage.clear();
            window.location.reload();
        } ;
        h5.textContent = `Hola ${ localStorage.getItem('usuario') }`;
        
        h5.classList.add("mr-1");
        liSaludo.appendChild(h5);
        liSalir.appendChild(a);
        ul.appendChild(liSaludo);
        ul.appendChild(liSalir);

        ulContainer.appendChild(ul);

        const minutos = 15; // para limpiar el localStorage en 15 min de ausencia.
        var ahora = new Date().getTime();
        var horaCorte = localStorage.getItem('horaCorte');
        if (horaCorte == null) {
            localStorage.setItem('horaCorte', ahora)
        } else {
            console.log("ahora- horacorte ", ahora-horaCorte);
            console.log("minutos ", minutos);
            console.log(ahora-horaCorte ," ", minutos*60*1000);
            if(ahora-horaCorte > minutos*60*1000) {
                localStorage.clear()
                localStorage.setItem('horaCorte', ahora);
            }
}

    }

}

main();