import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  { name: 'Arrays', path: '/practice/arrays' },
  { name: 'Linked Lists', path: '/practice/linkedlists' },
  { name: 'Trees', path: '/practice/trees' },
  { name: 'Graphs', path: '/practice/graphs' },
];

const Practice = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">Choose a Topic</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {topics.map((topic, index) => (
          <Link
            key={index}
            to={topic.path}
            className="bg-white shadow-lg px-6 py-4 rounded-xl text-blue-800 text-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            {topic.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Practice;
