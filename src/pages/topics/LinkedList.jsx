
import React, { useState } from 'react';
import useStore from '../../store/useStore';
const questions = [
  {
    question: 'Which technique is used to detect a cycle in a linked list?',
    options: ['Recursion', 'Hashing', 'Floyd’s Cycle Detection', 'Binary Search'],
    answer: 'Floyd’s Cycle Detection',
  },
  {
    question: 'What is the time complexity to reverse a singly linked list?',
    options: ['O(1)', 'O(logN)', 'O(N)', 'O(N^2)'],
    answer: 'O(N)',
  },
  {
    question: 'Which pointer is used to delete a node without the head pointer?',
    options: ['Previous node', 'Next node', 'Tail pointer', 'Random pointer'],
    answer: 'Next node',
  },
  {
    question: 'How to find the middle of a linked list efficiently?',
    options: ['Use recursion', 'Use two pointers', 'Use stack', 'Use queue'],
    answer: 'Use two pointers',
  },
];


const LinkedList = () => {
  const mode = useStore((state) => state.mode); // ✅ CORRECT usage
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
    setScore(s);

    if (mode === 'match') {
      const fakePeerScore = Math.floor(Math.random() * (questions.length + 1));
      setPeerScore(fakePeerScore);
    }

    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Trees MCQs</h2>

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
          {mode === 'match' && (
            <>
              <p>Peer Score: <span className="font-bold">{peerScore}/{questions.length}</span></p>
              <p className="mt-2 font-bold text-green-600">
                {score > peerScore ? 'You Win 🎉' : score < peerScore ? 'Peer Wins 🧠' : 'It\'s a Tie 🤝'}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkedList;
