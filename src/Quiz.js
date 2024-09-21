import React, { useState, useEffect } from "react";

function Quiz({ beer, onComplete, handleRestart, addTotal }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [correct, setCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false); // Track if the question is answered
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Store selected answer
  const [shuffledOptions, setShuffledOptions] = useState([]); // Store shuffled options

  const currentQuestion = beer.questions[currentQuestionIndex];

  // Fisher-Yates Shuffle to randomize array
  const shuffleArray = (array) => {
    let shuffledArray = [...array]; // Copy the array to avoid mutating the original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Shuffle the options when the component renders or when a new question is loaded
  useEffect(() => {
    setShuffledOptions(shuffleArray(currentQuestion.options));
  }, [currentQuestion]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === currentQuestion.answer) {
      setScore(score + 1);
      setCorrect(true);
      setFeedback("Correct!");
    } else {
      setFeedback(`Incorrect! The correct answer was: ${currentQuestion.answer}`);
      setCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setFeedback("");
    setIsAnswered(false);
    setSelectedAnswer(null);
    addTotal()
    if (currentQuestionIndex + 1 < beer.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(score); // Final score sent back to parent when quiz is complete
    }
  };

  return (
    <div className="quiz">
      <h2>{currentQuestion.question}</h2>
      <div className="options">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={isAnswered} // Disable buttons after the question is answered
            className={selectedAnswer === option ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>

      {correct && selectedAnswer != null && (
        <div className="feedback correct">
          <p>{feedback}</p>
        </div>
      )}
      {!correct && selectedAnswer != null && (
        <div className="feedback incorrect">
          <p>{feedback}</p>
        </div>
      )}

      {isAnswered && (
        <button className="next-btn" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}

      {!isAnswered && (
        <button className="next-btn" onClick={handleRestart}>
          Restart Quiz
        </button>
      )}
    </div>
  );
}

export default Quiz;
