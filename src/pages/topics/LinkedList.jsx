import React from 'react';

const questions = [
  'Reverse a linked list',
  'Detect a cycle in a linked list',
  'Find the middle element of a linked list',
  'Merge two sorted linked lists'
];

const LinkedLists = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Linked List Questions</h2>
      <ul className="list-disc pl-5 space-y-2 text-black">
        {questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default LinkedLists;