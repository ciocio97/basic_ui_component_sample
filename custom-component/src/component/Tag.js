import React, { useState } from 'react';
import styled from 'styled-components';
import { CloseButton } from '../component/Modal';

const TagContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
`
const TagInput = styled.input`
  height: 45px;
  outline: none;
  border: none;
  margin-left: 10px;
  border-radius: 10px;
`
const TagBox = styled.button`
  height: 31px;
  padding: 8px 7px 8px 9px;
  border: none;
  outline: none;
  border-radius: 7px;
  margin: 7px 0px 7px 7px;
  // cursor: pointer; // 나중에 클릭 이벤트 달리면 추가
  color: white;
  background-color: #4100CA;
`

function Tab (){
  const [text, setText] = useState('');
  const [allTags, setAllTags] = useState([]);
  const handleText = (event) => {
    setText(event.target.value);
  }
  const addTag = () => {
    setAllTags((prev) => {
      if(prev.indexOf(text) === -1){
        return prev.concat(text);
      }
      return prev;
    });
    setText('');
  };
  const deleteTag = (idx) => {
    const newTags = allTags.slice();
    newTags.splice(idx, 1);
    setAllTags(newTags);
  }
  return (
    <>
      <TagContainer>
        {allTags.map((text, idx) => {
          return (
            <TagBox key={idx}>
              {text} 
              <CloseButton tag onClick={() => deleteTag(idx)}>&times;</CloseButton>
            </TagBox>
          )
        })}
        <TagInput
          value={text}
          onChange={handleText}
          onKeyPress={(e) => e.key === 'Enter' ? addTag() : null} 
          placeholder='Press Enter to add Tags'
        />
      </TagContainer> 
    </> 
  )
};

export default Tab;