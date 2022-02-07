import React, { useState } from 'react';
import styled from 'styled-components';

const ModalButton = styled.button`
  padding: 15px 15px;
  outline: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  vertical-align: center;
  background-color: #4100CA;
`
const ModalPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  overflow: none;
  background-color: rgba(0, 0, 0, 0.5);
`
const ModalWindow = styled.div`
  position: relative;
  padding: 50px 80px;
  border-radius: 10px;
  color: #4100CA;
  background-color: white;
`
export const CloseButton = styled.div`
  display: inline;
  width: 10px;
  height: 10px;
  cursor: pointer;
  color: black;
  ${props => props.modal &&`
    display: block;
    position: absolute;
    top: 7px;
    right: 10px;
  `}
  ${props => props.tag &&`
    padding: 1px 5px;
    border-radius: 50%;
    margin-left: 7px;
    background-color: white;
  `}
  ${props => props.search &&`
    display: block;
    position: absolute;
    top: 16px;
    right: 7px;
  `}
`

function Modal (){
  const [modalState, setModalState] = useState(false);
  const handleModal = () => {
    setModalState((prev) => !prev);
  }
  return (
    <>
      {!modalState ? null : 
        <ModalPage onClick={handleModal}>
          <ModalWindow onClick={(event) => event.stopPropagation()}>
            <CloseButton onClick={handleModal} modal>&times;</CloseButton>
            HELLO CODESTATES!
          </ModalWindow>
        </ModalPage>
      }
      <ModalButton onClick={handleModal}>{modalState ? 'Close' : 'Open'} Modal</ModalButton>
    </>
  )
};

export default Modal;