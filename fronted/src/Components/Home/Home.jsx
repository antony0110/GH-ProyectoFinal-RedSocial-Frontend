import React from 'react'
import './Home.scss'
import foto from './fondo.jpg'
import foto2 from './fondo2.jpg'
import foto3 from './fondo3.jpg'
import Footer from '../Footer/Footer'
const Home = () => {
return(
    <div>
    <div id="carouselExampleCaptions"  className="carousel slide"  data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={foto2} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 className='F2'  >Conectate con el mundo</h5>
          <p className='f2'>Comparte con tus amigos todos tus fotos, viajes , fiestas, etc.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={foto3} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5  className='F3'  >Registrate y disfruta</h5>
          <p className='f3' >Registrate y disfruta de la mejor red social de los ultimos tiempos</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
 
  <Footer/>
</div>

)

}
    export default Home;