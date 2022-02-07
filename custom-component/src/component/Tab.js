import React, { useState } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-colums: repeat(3, 1fr);
  grid-auto-rows: minMax(50px, auto);
`
const TabBox = styled.div`
  grid-column: ${props => Number(props.num)};
  grid-row: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
  color: gray;
  background-color: #E0E0E0;
  ${props => props.click &&`
    color: white;
    background-color: #4100CA;
  `}
`
const MainBody = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`


function Tab (){
  const TabInfo = [
    {num: 1, name: 'ONE'},
    {num: 2, name: 'TWO'},
    {num: 3, name: 'THREE'},
  ]
  const [currentTab, setCurrentTab] = useState(null);
  const handleCurrentTab = (num) => {
    setCurrentTab(num);
  }
  return (
    <>
      <TabContainer>
        {TabInfo.map((info, idx) => {
          return (
            <TabBox
              key={idx} 
              num={info.num}
              click={currentTab === info.num ? true : false}
              onClick={() => handleCurrentTab(info.num)}
            >
              Tab{info.num}
            </TabBox>    
          )
        })}
      </TabContainer>
      {currentTab === null ? <MainBody>Tab menu ONE</MainBody> : null}
      {TabInfo.map((info, idx) => {
        return currentTab === info.num ? (
          <MainBody key={idx}>Tab menu {info.name}</MainBody>
        ) : null;
      })}
    </>
  )
};

export default Tab;