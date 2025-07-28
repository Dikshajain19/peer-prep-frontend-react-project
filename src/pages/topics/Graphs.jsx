import React from 'react';

const questions = [
  'Find the number of connected components in an undirected graph',
  'Detect a cycle in a directed graph using DFS',
  'Implement Dijkstra’s algorithm',
  'Check if a graph is bipartite using BFS',
];

const Graphs = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-500">Graph Questions</h2>
      <ul className="list-disc pl-5 space-y-2 text-black">
        {questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default Graphs;
