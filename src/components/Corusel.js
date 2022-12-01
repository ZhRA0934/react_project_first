import CoruselImgOne from "./img/corusel_katana.jpg";
import CoruselImgTwo from "./img/corusel_evro_sword.webp";
import CoruselImgThree from "./img/corusel_star.jpg";
function Corusel() {
    return (
        <div>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={CoruselImgOne}/>
                        <div className="carousel-caption"><h3>Японские</h3><p>Катаны!</p></div>
                    </div>
                    <div className="carousel-item">
                        <img src={CoruselImgTwo}/>
                        <div className="carousel-caption"><h3>Европейские</h3><p>Мечи!</p></div> 
                    </div>
                    <div className="carousel-item">
                        <img src={CoruselImgThree}/>
                        <div className="carousel-caption"><h3>Световые</h3><p>Мeчи!</p></div>  
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev"><span className="carousel-control-prev-icon delete__span"></span></button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next"><span className="carousel-control-next-icon delete__span"></span></button>
            </div>

        </div>
    );
}

export default Corusel;