import React from "react";

//with jsx
const title = <h1>Hello React.js</h1>;

//without jsx
// const title = React.createElement("h1", null, "Hello React.js");

const list = (
  <ul>
    <li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>
  </ul>
);
// const List = () => (
//   <ul>
//     <li>list item 1</li>
//     <li>list item 2</li>
//     <li>list item 3</li>
//   </ul>
// );
const List = () => {
  let a = 10;

  return (
    // <React.Fragment>
    <>
      <ul>
        <li>list item {a + 1}</li>
        <li>list item 2</li>
        <li>list item 3</li>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit.</p>
    </>
    // </React.Fragment>
  );
};
//react component
// const Title = () => <h1>Hello React component</h1>;

//react props
type TitleProps = {
  title: string;
  // text?: string;
  text: string;
  num: number;
};

const Title = (props: TitleProps) => (
  <>
    <h1>
      Hello {props.text} {props.title}
    </h1>
    <div>{props.num}</div>
  </>
);

// const Title = (props: TitleProps) => {
//   console.log(props);
//   return (
//     <h1>
//       Hello {props.text} {props.title}
//     </h1>
//   );
// };

function App() {
  return (
    <div className="App">
      {/* <Title /> */}
      <List />
      <Title title="App.js" text="Hi!" num={15} />
      <Title title="Test.js" text="Hello!" num={25} />
      {title} {list} {10 + 5}
    </div>
  );
}

export default App;
