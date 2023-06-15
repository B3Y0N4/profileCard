import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me.jpg" alt="Abduljalal " />;
}

function Intro() {
  return (
    <div>
      <h1> Abduljalal </h1>
      <p>
        Front end developer currently learning react and also working on a
        robotics project using Ros
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👊" color="blue" />
      <Skill skill="Html+Css" emoji="💪" color="red" />
      <Skill skill="Ros" emoji="👶" color="purple" />
      <Skill skill="Ruby" emoji="💪" color="green" />
      <Skill skill="Python" emoji="💪" color="yellow" />
      <Skill skill="JavaScript" emoji="💪" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
