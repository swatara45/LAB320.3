// src/App.jsx
import { useState } from "react";
import Learner from "./components/Learner";
import { learnersData } from "./data.mjs";
import "./App.css";

function App() {
  const [learners] = useState(learnersData);

  return (
    <div className="App">
      <h1>Learners</h1>
      {learners.map((learner, index) => (
        <Learner key={index} {...learner} />
      ))}
    </div>
  );
}

export default App;
   

// // Learner component
// function Learner({ learner }) {
//   return (
//     <div className="learner">
//       <h2>{learner.name}</h2>
//       <p>{learner.bio}</p>
//       <h3>Scores:</h3>
//       {learner.scores.map((score, index) => (
//         <Score key={index} score={score} />
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   // Store the array directly
//   const [learners] = useState(learnersData);

//   return (
//     <div className="App">
//       <h1>Learners</h1>
//       {learners.map((learner, index) => (
//         <Learner key={index} learner={learner} />
//       ))}
//     </div>
//   );
// }
