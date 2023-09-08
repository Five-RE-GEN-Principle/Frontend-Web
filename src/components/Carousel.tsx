import { useState, useEffect } from "react";
import styled from "styled-components";

import fashion from "@assets/carousel/fashion.jpg";
import beauty from "@assets/carousel/beauty.jpg";
import food from "@assets/carousel/food.jpg";
import restaurant from "@assets/carousel/restaurant.jpg";

const images = [fashion, beauty, food, restaurant];

interface CarouselProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel = ({ currentIndex, setCurrentIndex }: CarouselProps) => {
  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`carousel-image-${idx}`}
          visible={idx === currentIndex}
        />
      ))}
      <Indicators>
        {images.map((_, idx) => (
          <Dot
            key={idx}
            active={idx === currentIndex}
            onClick={() => handleIndicatorClick(idx)}
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 300px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const Image = styled.img<{ visible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  position: absolute; // 이미지를 겹치게 하기 위해 추가
  top: 0;
  left: 0;
  z-index: -1;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "white" : "rgba(255,255,255,0.5)"};
  cursor: pointer;
  transition: background-color 0.3s;
`;

export default Carousel;
