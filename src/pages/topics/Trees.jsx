import React from 'react';

const questions = [
  'Inorder, Preorder, Postorder traversals',
  'Check if tree is balanced',
  'Lowest Common Ancestor (LCA)',
  'Convert Binary Tree to BST'
];

const Trees = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Tree Questions</h2>
      <ul className="list-disc pl-5 space-y-2 text-black">
        {questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trees;