class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <nav id="navbar" class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
            <div class="container-fluid">
                <div href="/" class=" d-flex w-50 me-auto"></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ul-container">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="ul-container" class="navbar-collapse collapse w-100">
                    <ul class="navbar-nav w-100 justify-content-center">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contacto">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/temas">Temas</a>
                        </li>
                    </ul>
                    <ul id="ulIngresar" class="nav navbar-nav ms-auto w-100 justify-content-end">
                        <li class="nav-item">
                            <a href="/auth/login" class="link-dark">Ingresar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;

    }

}

customElements.define('header-component', Header);