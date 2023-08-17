
function main(){
    const miFormulario = document.querySelector('form');
    const divLogin = document.getElementById('login-error-message');

    miFormulario.addEventListener('submit', ( e ) => {
        e.preventDefault();
        const formData = {};

        for( let el of miFormulario.elements ) {
            if ( el.name.length > 0 )
                formData[el.name]= el.value;
        }

        console.log("token:", localStorage.getItem('token'));

        fetch( e.target.action, {
            method: 'POST',
            body: JSON.stringify( formData ),
            headers: { 
                'Content-Type': 'application/json',
            }
        })
        .then( res => res.json())
        .then( ( { msg, token, usuario } ) => {

            if ( msg ) {
                const errorMessage = `
                <div class="alert alert-danger" role="alert">
                    ${ msg }
                </div>
                `;
    
                divLogin.innerHTML = errorMessage;

            } else {
                localStorage.setItem( 'token', token );
                localStorage.setItem( 'usuario', usuario.nombre );
                window.location = window.location.origin;
            }


        }).catch( ( error ) => { 
            const errorMessage = `
            <div class="alert alert-danger" role="alert">
                ${error}
            </div>
            `;

            divLogin.innerHTML = errorMessage;
         })
    })
}

main()