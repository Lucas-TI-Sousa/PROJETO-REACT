import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Importa os estilos do Swiper

const CardCarousel = () => {
  return (
    <Swiper
      slidesPerView={3} // Define 3 cards por vez
      loop={true} // Faz o loop dos slides
      navigation={true} // Habilita a navegação com setas
    >
      <SwiperSlide>
        <div className="card">
          <h3>Card 1</h3>
          <p>Conteúdo do Card 1</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <h3>Card 2</h3>
          <p>Conteúdo do Card 2</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <h3>Card 3</h3>
          <p>Conteúdo do Card 3</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <h3>Card 4</h3>
          <p>Conteúdo do Card 4</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <h3>Card 5</h3>
          <p>Conteúdo do Card 5</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <h3>Card 6</h3>
          <p>Conteúdo do Card 6</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CardCarousel;
