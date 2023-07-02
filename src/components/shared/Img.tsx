'use client'

import React from 'react';
import styled from "styled-components";
import Image from "next/image";

const Img = ({src, height, width, alt}) => {
  return (
    <StyledImage className="image" height={height} width={width}>
      <Image src={src} alt={alt} height={height} width={width}/>
    </StyledImage>
  );
};

const StyledImage = styled.div`
  position: relative;
  padding-top: ${props => `calc(${props.height} / ${props.width} * 100%)`};

  img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export default Img;