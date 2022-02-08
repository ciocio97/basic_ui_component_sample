# wanted_pre_onboarding

모든 컴포넌트는 `React`와 `Styled-component`를 사용하여 제작하였습니다.

<br />

Toggle
------

<p align="center">
  <img src= https://user-images.githubusercontent.com/80025242/152874365-f164f972-d953-4daa-972d-c5db9dd5ed9c.gif />
</p>

<br />

- *구현한 방법 & 이유*

  ```
  Toggle버튼은 On/Off 2가지 상태만 가지기 때문에, "형태만 다른 체크 박스"라고 생각했습니다.
  input태그의 Check-box는 설문조사나 선호도를 표시할 때 주로 사용하는데, 
  이때 label태그와 함께 사용해 Check-box의 특성이나 속성을 명시해줍니다.
  또한 label태그는 input태그와 for과 id로 연결되어 input태그를 포커싱하거나 활성화시킬 수 있고, css를 자유롭게 적용할 수 있습니다.
  input태그의 Check-box 속성은 살리면서 css를 원하는대로 변경하고 싶었기 때문에 이 방법을 선택하여 구현하였습니다.
  (토글의 상태에 따라 변경되는 요소가 없다면 CSS만 사용해서 구현할 수도 있습니다.)
  ```

- *구현하며 겪었던 문제 & 해결한 방법*
  
  ```
  Toggle버튼을 킬 때와 끌 때 모두 배경색을 변경시켜야 했습니다.
  해당 태그에 class나 id 값을 부여해 css 스타일을 추가해줄 수도 있었지만,
  저는 styled-component의 장점 중 하나인, 부모 속성을 내려받을 수 있다는 점을 이용해
  버튼이 켜졌을 때 true속성을, 버튼이 꺼졌을 때 false 속성을 줌으로써 해당 태그의 스타일을 변경했습니다.
  ```
  
- *실행 방법*

  ```
  동그라미 버튼을 클릭하면 클릭한 곳의 반대 방향으로 이동하며 배경색이 바뀝니다.
  ```

<br />

Modal
-----

<p align="center">
  <img src="https://user-images.githubusercontent.com/80025242/152874431-023ba5ee-0da3-4c65-89f5-51f96c190590.gif" />
</p>

<br />

- *구현한 방법 & 이유*

  ```
  Modal창은 사용자가 현재 페이지에 머물면서 추가적인 정보를 보게끔 유도할 때 사용되는 컴포넌트입니다.
  이 점에 착안해, Modal창 뒷편의 엘리먼트의 위치는 고수하면서 browser에 띄울 수 있게 설계했습니다.
  모달창 뒷 쪽 엘리먼트들이 옅게 보일 수 있게 배경에 투명도를 준 것도 이를 의도한 방법입니다.
  또한, position의 absolute 속성을 부여해 z-index로 레이어 순서를 조정할 수 있게 디자인했습니다. 
  그리고 어떤 엘리먼트의 자식으로 들어가도 높이와 넓이를 맞출 수 있게 % 단위를 사용해 구현했습니다.
  ```

- *구현하며 겪었던 문제 & 해결한 방법*
  
  ```

  ```
  
- *실행 방법*

  ```

  ```

<br />

Tab
---

<p align="center">
  <img src="https://user-images.githubusercontent.com/80025242/152874410-553d13c4-f7c7-4b75-8282-08c73e41b620.gif" />
</p>

<br />

Tag
---

<p align="center">
  <img src="https://user-images.githubusercontent.com/80025242/152874379-7a9d30ae-9a78-4241-81b0-6091ea3bd66f.gif" />
</p>

<br />

AutoComplete
------------

<p align="center">
  <img src="https://user-images.githubusercontent.com/80025242/152874473-1ca257e0-fc4a-46b8-bc6a-ef24bc2a8f3b.gif" />
</p>

<br />

ClickToEdit
-----------

<p align="center">
  <img src="https://user-images.githubusercontent.com/80025242/152874447-27cb083a-1655-4842-9d9b-353eba9ca369.gif" />
</p>

<br />
