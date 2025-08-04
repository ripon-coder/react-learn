import { useEffect, useState } from "react";
import "./Quiz.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Rome"],
    answer: "Paris",
    time: 10,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
    time: 5,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(questions[0].time);
  const finish = current === questions.length - 1;
  useEffect(() => {
    if (showResult || selected) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          nextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [current, showResult]);

  const handleOptionClick = (opt) => {
    setSelected(opt);
  };

  const nextQuestion = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected("");
      setTimeLeft(questions[current + 1].time);
    } else {
      setShowResult(true);
    }
  };

  // Keep all your existing imports and questions array
  // The React component logic remains exactly the same
  // Only the JSX structure needs minor adjustments for responsiveness

  return (
    <div className="container">
      <div className="main-quiz">
        {!showResult ? (
          <>
            <div className="questionSection">
              <h1>
                <span className="questionNumber">Q{current + 1}.</span>
                <span className="questionText">
                  {questions[current].question}
                </span>
              </h1>
              <p className="timer">
                Time Left: <span>{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
              </p>
            </div>
            <div className="mainOptionSection">
              <div className="optionSection">
                {questions[current].options.map((opt, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name="answer"
                      value={opt}
                      onChange={() => handleOptionClick(opt)}
                      checked={selected === opt}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            <button className="next_btn btn" onClick={nextQuestion}>
              {finish ? "Finish" : "Next"}
            </button>
          </>
        ) : (
          <h2 className="result">Your Score: {score} / {questions.length}</h2>
        )}
      </div>
    </div>
  );
}
