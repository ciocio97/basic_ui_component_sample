import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { CloseButton } from './Modal';
import _ from 'lodash';

const dummyData = [
  'alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india',
  'juliet', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa', 'quebec', 'romeo', 'sierra',
  'tango', 'uniform', 'victor', 'wiskey', 'x-ray', 'yankee', 'zulu', 'time', 'person', 'year',
  'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place',
  'work', 'week', 'case', 'point', 'government', 'alligator', 'bee', 'cat', 'dog', 'elephant', 'fox',
  'giraffe', 'hippo', 'iguana', 'jellyfish', 'kangaroo', 'lion', 'monkey', 'nightingale', 'owl', 'penguin',
  'quail', 'raccoon', 'seal', 'turtle', 'unicorn', 'vulture', 'whale', 'x-ray fish', 'yark', 'zebra',
  '무궁화', '장미', '코스모스', '튤립', '기차', '낙하산', '배', '버스', '우유', '주스', '커피', '냉장고',
  '해바라기', '은행잎', '단풍잎', '대나무', '비행기', '오토바이', '자전거', '헬리콥터', '다리미', '선풍기', '세탁기', '전기밥솥',
  '보리', '벼', '선인장', '소나무', '지하철', '화물차', '승용차', '감자튀김', '청소기', '카세트', '텔레비전', '비둘기',
  '닭', '돼지', '기타', '피아노', '붕어빵', '사탕', '샌드위치', '아이스크림', '닭', '까마귀', '까치', '독수리', '우체통',
  '자전거', '경찰차', '구급차', '초콜릿', '치즈', '케이크', '피자', '병아리', '부엉이', '오리', '타조',
];
const sortedDummyData = dummyData.sort();

const Container = styled.div`
  position: relative;
  width: 80%;
  height: auto;
`
const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #E0E0E0;
  outline: none;
  padding-left: 10px;
  border-radius: 10px;
  ${props => props.open &&`
    border-radius: 10px 10px 0px 0px;
  `}
`
const WordContainer = styled.ul`
  visibility: hidden;
  width: 100%;
  padding: 5px 12px 5px 0px;
  margin: 0;
  border: 1px solid #E0E0E0;
  border-style: none solid solid solid;
  border-radius: 0px 0px 10px 10px;
  ${props => props.open &&`
    visibility: visible;
  `}
`
const WordList = styled.li`
  list-style: none;
  height: 20px;
  cursor: pointer;
  padding: 3px 0px 3px 10px;
  &:hover {
    background-color: #E0E0E0;
  }
`

function AutoComplete (){
  const listRef = useRef();
  const [word, setWord] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleWord = (event) => {
    if(event === ''){
      setWord('');
      setIsOpen(false);
    } else if(
      event.target.value.length === 0){
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    setWord(event.target.value);
  }
  return (
    <>
      <Container>
        <CloseButton search onClick={() => handleWord('')}>&times;</CloseButton>
        <Input value={word} onChange={handleWord} open={isOpen}/>
        <WordContainer open={isOpen} ref={listRef}>
        {sortedDummyData.map((item, idx) => {
          if(_.startsWith(item, word) && word !== ''){
            return (
              <WordList 
                key={idx} 
                onClick={() => {setWord(item); setIsOpen(false);}}
              >
                {item}
              </WordList>); 
          } else return false;
        })}
      </WordContainer>
      </Container>   
    </>
  )
};

export default AutoComplete;