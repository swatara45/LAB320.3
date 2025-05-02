import "./app.css";
import React, { useState } from "react";
import { learnersData } from "./data.js";

// Score component
function Score({ score }) {
  return (
    <p>
      <strong>Date:</strong> {score.date} | <strong>Score:</strong>{" "}
      {score.score}
    </p>
  );
}

// Learner component
function Learner({ learner }) {
  return (
    <div className="learner">
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h3>Scores:</h3>
      {learner.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
}

export default function App() {
  // Store the array directly
  const [learners] = useState(learnersData);

  return (
    <div className="App">
      <h1>Learners</h1>
      {learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
}
