import React from 'react';

function Result({ score, onRestart, total }) {
  return (
    <div className="result">
      <h2>Quiz Finished!</h2>
      <p>Your score: {score} of {total}</p>
      <button onClick={onRestart}>Restart Quiz</button>

      <p>Quiz made by: <a href="https://www.gamalielburgos.com/" target="_blank">Gamy Burgos</a></p>
    </div>
  );
}

export default Result;
