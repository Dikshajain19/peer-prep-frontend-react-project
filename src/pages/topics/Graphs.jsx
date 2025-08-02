
import React, { useState } from 'react';
import useStore from '../../store/useStore';
const questions = [
  {
    question: 'Which algorithm is used to find the shortest path in a weighted graph?',
    options: ['DFS', 'BFS', 'Dijkstra\'s Algorithm', 'Prim\'s Algorithm'],
    answer: 'Dijkstra\'s Algorithm',
  },
  {
    question: 'Which algorithm is used to detect cycles in a directed graph?',
    options: ['Kruskal\'s Algorithm', 'DFS with Recursion Stack', 'BFS', 'Bellman-Ford'],
    answer: 'DFS with Recursion Stack',
  },
  {
    question: 'What is used to detect strongly connected components in a graph?',
    options: ['Dijkstra\'s Algorithm', 'Topological Sort', 'Kosaraju’s Algorithm', 'Prim\'s Algorithm'],
    answer: 'Kosaraju’s Algorithm',
  },
  {
    question: 'Which algorithm is used to find the Minimum Spanning Tree (MST)?',
    options: ['Floyd-Warshall', 'Prim\'s Algorithm', 'Johnson\'s Algorithm', 'Tarjan\'s Algorithm'],
    answer: 'Prim\'s Algorithm',
  },
];


const Graphs = () => {
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

export default Graphs;
