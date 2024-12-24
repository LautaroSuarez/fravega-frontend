import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importo los estilos por defecto del carrusel

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  color: #0064e0;
  margin-bottom: 10px;
`;

const CarouselContainer = styled.div`
  margin-bottom: 40px; 
  /* Espacio inferior para separarlo del lorem */
`;

const LoremBlock = styled.div`
  margin: 40px 0;
  line-height: 1.6;
  color: #333;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Bienvenido a Fravega</Title>
      <p>Encuentra las mejores ofertas en electrodomésticos, tecnología y mucho más.</p>
      
      {/* Primer Carrusel */}
      <CarouselContainer>
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
          <div>
            <img src="https://picsum.photos/800/300?random=101" alt="Imagen 1" />
            <p className="legend">Promo 1</p>
          </div>
          <div>
            <img src="https://picsum.photos/800/300?random=102" alt="Imagen 2" />
            <p className="legend">Oferta Destacada 2</p>
          </div>
          <div>
            <img src="https://picsum.photos/800/300?random=103" alt="Imagen 3" />
            <p className="legend">Promo 3</p>
          </div>
        </Carousel>
      </CarouselContainer>

      {/*Texto Lorem*/}
      <LoremBlock>
        <h2>Nuestras Sucursales</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis 
          turpis at sapien convallis, a finibus dui laoreet. Etiam sed bibendum ligula. 
          Nulla eget felis est. Cras in malesuada sapien. Integer vulputate, nisl non 
          hendrerit fringilla, neque ex cursus mauris, eget blandit turpis erat at mauris.
        </p>
        <p>
          Sed at sollicitudin metus. Ut varius laoreet augue, at ornare nulla aliquam nec. 
          Praesent aliquam mattis elit et ultricies. Phasellus et fringilla enim. Pellentesque 
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Morbi blandit velit id vestibulum sagittis.
        </p>
      </LoremBlock>

      {/* Segundo Carrusel */}
      <CarouselContainer>
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3500}>
          <div>
            <img src="https://picsum.photos/800/300?random=104" alt="Imagen 4" />
            <p className="legend">¡Nuevos Lanzamientos!</p>
          </div>
          <div>
            <img src="https://picsum.photos/800/300?random=105" alt="Imagen 5" />
            <p className="legend">Electrodomésticos en Oferta</p>
          </div>
          <div>
            <img src="https://picsum.photos/800/300?random=106" alt="Imagen 6" />
            <p className="legend">Tecnología al Mejor Precio</p>
          </div>
        </Carousel>
      </CarouselContainer>

      {/*Relleno el home con lorem para una visualización más completa*/}
      <LoremBlock>
        <h2>Más Sobre Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis 
          sem vel felis venenatis, at commodo mi blandit. Nulla ullamcorper odio eu 
          finibus porta. Mauris vestibulum nisl sed dui blandit, a ultricies orci 
          dictum. Quisque efficitur, est non venenatis rutrum, nunc quam porta ante, 
          nec tempus turpis nisi non nisi.
        </p>
        <p>
          Aliquam eleifend lorem non lorem viverra, sed ornare eros facilisis. Etiam 
          cursus quam quis diam gravida, vitae suscipit velit viverra. Pellentesque 
          eu maximus nisl. Donec imperdiet, sem at placerat pellentesque, augue velit 
          imperdiet elit, in hendrerit massa mauris id tellus.
        </p>
      </LoremBlock>
    </HomeContainer>
  );
}

export default Home;
