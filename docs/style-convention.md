# Style Conventions

> yeramdri 레포지토리의 스타일(css) 컨벤션

## css properties order

> 스타일의 외각에서부터 내부 순서로 작성합니다. [참조](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

> flex box 의 children 에 들어가는 프로퍼티(flex:1, flex-basis: 200px ...) 는 Display 에 포함됩니다.

1. Positioning
2. Display & Box Model
3. Color
4. Text
5. Other

```css
/* Positioning */
position: absolute;
z-index: 10;
top: 0;
right: 0;

/* Display & Box Model */
display: inline-block;
overflow: hidden;
box-sizing: border-box;
width: 100px;
height: 100px;
padding: 10px;
border: 10px solid #333;
margin: 10px;

/* Color */
background: #000;
color: #fff
  
/* Text */
font-family: sans-serif;
font-size: 16px;
line-height: 1.4;
text-align: right;

/* Other */
cursor: pointer;
transition: all 0.3s;
```

## img alt Attribute

- 인증없이 접근 가능한 페이지에 들어가는 이미지만 `alt` 요소를 추가합니다.
- 항상 영어로 작성합니다.

## Related

- [스타일 프로퍼티 작성 순서](#css-properties-order) - https://css-tricks.com/poll-results-how-do-you-order-your-css-properties
