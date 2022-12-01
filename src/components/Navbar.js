function Navbar() {
    return (
        <div class="navbar">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div class="container-fluid">
                <a class="navbar-brand logo" href="#">Otaku</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Магазин</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Корзина</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Продажа</a>
                    </li>    
                    <li class="nav-item">
                        <a class="nav-link" href="#">Избранное</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;