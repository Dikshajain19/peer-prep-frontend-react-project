import React, { useState } from 'react';

const questions = [
  {
    question: 'Find the maximum subarray sum (Kadane’s Algorithm)',
    options: ['O(N^2)', 'O(N)', 'O(logN)', 'O(N^3)'],
    answer: 'O(N)',
  },
  {
    question: 'Rotate the array by K positions',
    options: ['Use stack', 'Use reverse method', 'Use sorting', 'Use queue'],
    answer: 'Use reverse method',
  },
  {
    question: 'Sort 0s, 1s, and 2s without sorting',
    options: ['Bubble Sort', 'Dutch National Flag', 'Heap Sort', 'Selection Sort'],
    answer: 'Dutch National Flag',
  },
  {
    question: 'Find the missing number from 1 to N',
    options: ['XOR Method', 'Brute Force', 'Use Sorting', 'Count Duplicates'],
    answer: 'XOR Method',
  },
];

const Arrays = () => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [peerScore, setPeerScore] = useState(0);

  const handleOptionChange = (index, selected) => {
    const updated = [...userAnswers];
    updated[index] = selected;
    setUserAnswers(updated);
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (q.answer === userAnswers[i]) s += 1;
    });
    const fakePeerScore = Math.floor(Math.random() * (questions.length + 1));
    setScore(s);
    setPeerScore(fakePeerScore);
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">LinkedList MCQs</h2>

      {questions.map((q, i) => (
        <div key={i} className="mb-6">
          <p className="font-semibold text-black mb-2">{q.question}</p>
          {q.options.map((opt, j) => (
            <div key={j} className="flex items-center gap-2">
              <input
                type="radio"
                name={`q-${i}`}
                value={opt}
                disabled={submitted}
                checked={userAnswers[i] === opt}
                onChange={() => handleOptionChange(i, opt)}
              />
              <label className="text-black">{opt}</label>
            </div>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleSubmit}
        >
          Submit Answers
        </button>
      ) : (
        <div className="mt-6 text-black">
          <p>Your Score: <span className="font-bold">{score}/{questions.length}</span></p>
          <p>Peer Score: <span className="font-bold">{peerScore}/{questions.length}</span></p>
          <p className="mt-2 font-bold text-green-600">
            {score > peerScore ? 'You Win 🎉' : score < peerScore ? 'Peer Wins 🧠' : 'It\'s a Tie 🤝'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Arrays;