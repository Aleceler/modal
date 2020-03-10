import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: 
    -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);  
  opacity: 1;
  visibility: visible;
`;

const Modal = ({show}) => {
    return show ? <ModalStyle>Modal</ModalStyle> : null
    
}
export default Modal;