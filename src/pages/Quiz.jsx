// src/pages/Quiz.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const questionsData = {
  Arrays: [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "Which data structure supports dynamic resizing?",
      options: ["Array", "LinkedList", "Stack", "Vector"],
      answer: "Vector",
    },
    // Add more
  ],
};

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const topic = new URLSearchParams(location.search).get("topic");

  const questions = questionsData[topic] || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else navigate(`/result?topic=${topic}&score=${score + (option === questions[current].answer ? 1 : 0)}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Topic: {topic}</h2>
      <p className="mb-2">{questions[current].question}</p>
      {questions[current].options.map((opt, idx) => (
        <button key={idx} className="block my-1 bg-blue-100 p-2 rounded" onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}
