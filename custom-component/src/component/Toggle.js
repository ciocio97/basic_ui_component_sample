import React,{ useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-itemx: center;
`
const ToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 30px;
  border-radius: 50px;
  transition: .5s;
  -webkit-transition: .5s;
  -ms-transition: .5s;
  background: #C5C5C5;
  ${props => props.on &&`
    background-color: #4100CA;
  `}
`
const ToggleCircle = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: .4s;
  -webkit-transition: .4s;
  -ms-transition: .4s;
  background-color: white;
  ${props => props.on &&`
    transform: translate(40px);
    -webkit-transform: translate(40px);
    -ms-transform: translate(40px);
  `}
`
const ToggleChecked = styled.input`
  opacity: 0;
  
`
const Text = styled.p`
  margin: 10px 0px;
`

function Toggle (){
  const [toggleState, setToggleState] = useState(false);
  const handleToggle = () => {
    setToggleState((prev) => !prev);
  }
  return (
    <>
      <Container>
        <ToggleButton on={toggleState}>
          <ToggleChecked type="checkbox"/>
          <ToggleCircle on={toggleState} onClick={handleToggle}/>
        </ToggleButton >   
        <Text>Toggle Switch {toggleState ? 'ON' : 'OFF'}</Text>
      </Container>
    </>
  )
};

export default Toggle;
