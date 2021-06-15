
    <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-controls">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"
                    style="background-image: url('../../../assets/images/Slider_B_N_0.jpg')"></li>
                <li data-target="#carousel" data-slide-to="1"
                    style="background-image: url('../../../assets/images/Slider_B_N_1.jpg')"></li>
                <li data-target="#carousel" data-slide-to="2"
                    style="background-image: url('../../../assets/images/Slider_B_N_2.jpg')"></li>
                <li data-target="#carousel" data-slide-to="3"
                    style="background-image: url('../../../assets/images/Slider_B_N_3.jpg')"></li>
                <li data-target="#carousel" data-slide-to="4"
                    style="background-image: url('../../../assets/images/Slider_B_N_4.jpg')"></li>
            </ol>

            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <img src="../../../assets/images/left-arrow.svg" alt="prev">
            </a>

            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <img src="../../../assets/images/right-arrow.svg" alt="next">
            </a>

        </div>

        <div class="carousel-inner">
            <div class="carousel-item active" style="background-image: url('../../../assets/images/Slider_B_N_0.jpg')">
                <div class="container">
                    <h2 class="titletattoo">SAY TATTOO!</h2>
                    <p>Descubrir tatuajes y tatuadores creativos</p>
                </div>
            </div>

            <div class="carousel-item" style="background-image: url('../../../assets/images/Slider_B_N_1.jpg')">
                <div class="container">
                    <h2>Say Tattoo!</h2>
                    <p>Descubrir tatuajes y tatuadores creativos</p>
                </div>
            </div>

            <div class="carousel-item" style="background-image: url('../../../assets/images/Slider_B_N_2.jpg')">
                <div class="container">
                    <h2>Say Tattoo!</h2>
                    <p>Descubrir tatuajes y tatuadores creativos</p>
                </div>
            </div>

            <div class="carousel-item" style="background-image: url('../../../assets/images/Slider_B_N_3.jpg')">
                <div class="container">
                    <h2>Say Tattoo!</h2>
                    <p>Descubrir tatuajes y tatuadores creativos</p>
                </div>
            </div>

            <div class="carousel-item" style="background-image: url('../../../assets/images/Slider_B_N_4.jpg')">
                <div class="container">
                    <h2>Say Tattoo!</h2>
                    <p>Descubrir tatuajes y tatuadores creativos</p>
                </div>
            </div>
        </div>

    </div>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="..." alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>




--------------------------------------------
CSS
-----------------------------------------------

/* 
*Añadir la tipogrfía del Logotipo - Iconic-Stencil-Bold-trial.
*/

@font-face {
  font-family: 'Iconic-Stencil-Bold-trial';
  src: url('../../../assets/Iconic/Iconic-Stencil-Bold-trial.ttf') format('truetype')
}
body {
  font-size: 60px;
}

/* 
*Hoja de style del Slider.
*Lo he tenido que dejar a la medida de 79vh, porque de está manera se ve el footer.
*/

.home {
  position: relative;
}

.home .content {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

.home .carousel-item {
min-height: 79vh;
background-position: center;
background-size: cover;
position: relative;
z-index: 1;
}

.home .carousel-item::before {
content: ' ';
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgb(0,0, 0, 0.5);
z-index: -1;
}

.home .carousel-item .container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.home .carousel-item h2{
  font-size: 150px;
  color: #145A8D;
  margin: 0 0 10px;
  opacity: 0;
  font-family: 'Iconic-Stencil-Bold-trial', sans-serif;

}

.home .carousel-item p{
  font-size:15px;
  margin: 0;
  color: #F192AD;
  opacity: 0;
  font-family: 'Karla', sans-serif;
  
}

.home .carousel-item.active h2{
  animation: fadeInLeft 0.5s ease forwards;
}

.home .carousel-item.active p{
  animation: fadeInRight 0.5s ease forwards;
}

@keyframes fadeInLeft {
  0%{
    opacity: 0;
    transform: translateX(-30px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes fadeInRight {
  0%{
    opacity: 0;
    transform: translateX(30px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}


/* 
*Para hacer los styles de los botones de las flechas.
*/

.home .carousel-controls{
  position: absolute;
  left: 50%;
  bottom: 40px;
  z-index: 10;
  transform: translateX(-50%);

}

.home .carousel-indicators{
  position: relative;
  margin: 0;
}

.home .carousel-indicators li {
  height: 70px;
  width: 70px;
  margin: 0 5px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  border: 3px solid transparent;
  transition: all 0.3s ease;
}

.home .carousel-indicators li.active {
  border-color: #F192AD;
  transform: scale(1.2);
}

.home .carousel-control-next,
.home .carousel-control-prev{
  height: 60px;
  width: 60px;
  opacity: 1;
  z-index: 3;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.home .carousel-control-next:hover,
.home .carousel-control-prev:hover{
  box-shadow: 0 0 10px #F192AD;
}

.home .carousel-control-next img,
.home .carousel-control-prev img{
  width: 30px;
}

.home .carousel-control-next{
  right: -90%;
}

.home .carousel-control-prev{
  left: -90%;
}


/* 
*RESPONSIVE - 7678px
 */
@media (orientation: landscape) {
  /* Esto para bloquear la orientación -  sólo se puede ver en Vertical */
}

@media(max-width:768px){
  .home .carousel-control-next, 
  .home .carousel-control-prev {
    display: none;
  }
  .home .carousel-indicators li {
    height: 60px;
    width: 60px;
  }
  .home .carousel-item h2 {
    font-size: 45px;
  }
  .home .carousel-item p {
    font-size: 22px;
  }
}

@media(max-width:1040px){
  .home .carousel-control-next, 
  .home .carousel-control-prev {
    display: relative;
  }

.home .carousel-control-next{
  right: -20%;
}

.home .carousel-control-prev{
  left: -20%;
}
  
}

/*
*Botones de LOGIN & REGÍSTRATE
*/

.content {
  position: relative;
  display: inline-block;
  grid-template-columns: repeat (3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
}

.login{

top: 480px;
right:1200px;
width:120px;
z-index:99;
border-radius: 5px;
background-color: #145A8D;
color: #F2EFE8;
grid-column: 1;
grid-row: 1;
}

.login:hover {
  background-color: #F192AD;
  color: #145A8D;
}

.registrate {

  top: 480px;
  right: 200px;
  width: 120px;
  z-index:99;
  border-radius: 5px;
  background-color: #145A8D;
  color: #F2EFE8;
  grid-column: 1;
  grid-row: 3;
}



