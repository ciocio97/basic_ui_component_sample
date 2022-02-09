import React from 'react';
import styled from 'styled-components';
import Toggle from '../src/component/Toggle';
import Modal from '../src/component/Modal';
import Tab from '../src/component/Tab';
import Tag from '../src/component/Tag';
import AutoComplete from '../src/component/AutoComplete';
import ClickToEdit from '../src/component/ClickToEdit';
import './App.css';

const Container = styled.div `
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const RenderContainer = styled.div `
  position: relative;
  width: 90%;
  height: 400px;
  margin: 20px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(105, 105, 105, 0.2);
`
const Title = styled.p `
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin: 0;
  font-size: 1.5em;
  font-weight: 700;
`

function App() {
    const componentsName = [
        { name: 'Toggle', element: <Toggle /> , },
        { name: 'Modal', element: <Modal /> , },
        { name: 'Tab', element: <Tab /> , },
        { name: 'Tag', element: <Tag /> , },
        { name: 'AutoComplete', element: <AutoComplete /> , },
        { name: 'ClickToEdit', element: <ClickToEdit /> , },
    ];
    return ( 
       <> 
       {
            componentsName.map((item, idx) => ( 
                <Container key = { idx }>
                <RenderContainer>
                <Title> { item.name } </Title> 
                { item.element } 
                </RenderContainer> 
                </Container>    
            ))
        } 
       </>
    )
}

export default App;
