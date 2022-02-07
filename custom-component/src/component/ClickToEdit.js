import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
`
const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`
const Title = styled.p`
  margin: 0px 10px;
`
const Input = styled.input`
  width: 130px;
  height: 25px;
  text-align: center;
  margin: 0px 10px;
  border-radius: 3px;
  border: 1px solid #E0E0E0;
  &:focus {
    outline: 2px solid #709cfa;
    box-shadow: #709cfa 0px 1px 5px;
  }
`

function ClickToEdit (){
  const nameInput = useRef();
  const ageInput = useRef();
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState('20');
  const [renderValue, setRenderValue] = useState({
    name: '김코딩',
    age: '20',
  });
  const handleInputValue = (event, tagName) => {
    switch(tagName){
      case name:
        setName(event.target.value);
      break;
      case age:
        setAge(event.target.value);
      break;
      default:
      return false;
    }
  };
  const addFocus = (ref) => {
    ref.current.focus();
    ref.current.select();
  };
  const updateText = () => {
    const newValue = {
      name,
      age,
    };
    if(JSON.stringify(newValue) !== JSON.stringify(renderValue)){
      setRenderValue(newValue);
    }
  };
  
  return (
    <>
      <Container onClick={updateText}>
        <InputContainer>
          <Title>이름</Title>
          <Input 
            ref={nameInput} 
            value={name} 
            onChange={(e) => handleInputValue(e, name)}
            onClick={() => addFocus(nameInput)}
          />
        </InputContainer>
        <InputContainer>
          <Title>나이</Title>
          <Input 
            ref={ageInput} 
            value={age} 
            onChange={(e) => handleInputValue(e, age)}
            onClick={() => addFocus(ageInput)} 
          />
        </InputContainer>
        <InputContainer>이름 {renderValue.name} 나이 {renderValue.age}</InputContainer>
      </Container>      
    </>
  )
};

export default ClickToEdit;