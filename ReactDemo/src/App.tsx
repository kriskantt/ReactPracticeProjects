import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

function App() {
  let [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <header>
        <img src="react-logo-xs.png"></img>
        <div id="header">
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tab">
        <div id="buttons">
          <button className="btn btn-primary" onClick={() => setActiveIndex(0)}>
            Why React?
          </button>
          <button className="btn btn-primary" onClick={() => setActiveIndex(1)}>
            Core Features
          </button>
          <button className="btn btn-primary" onClick={() => setActiveIndex(2)}>
            Related Resources
          </button>
        </div>
        <div id="content">
          <ul>
            {content[activeIndex].map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
