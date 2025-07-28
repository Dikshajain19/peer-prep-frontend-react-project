import { useState } from "react";

const dummyPeers = [
  { name: "Aman", topic: "Arrays" },
  { name: "Sneha", topic: "Graphs" },
  { name: "Kunal", topic: "Trees" },
  { name: "Pooja", topic: "LinkedList" },
  { name: "Raj", topic: "Graphs" },
];

export default function MatchPeers() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Arrays");
  const [match, setMatch] = useState(null);

  const handleMatch = () => {
    const possibleMatches = dummyPeers.filter((peer) => peer.topic === topic);
    const randomMatch =
      possibleMatches[Math.floor(Math.random() * possibleMatches.length)];
    setMatch(randomMatch);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Find Your Peer Match 🎯</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-2 text-black"
      />
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 text-black"
      >
        <option value="Arrays">Arrays</option>
        <option value="Graphs">Graphs</option>
        <option value="Trees">Trees</option>
        <option value="LinkedList">LinkedList</option>
      </select>
      <button
        onClick={handleMatch}
        className="bg-purple-600  px-4 py-2 rounded hover:bg-purple-700 text-white"
      >
        Match Me
      </button>

      {match && (
        <div className="mt-6 text-lg text-green-700">
          🎉 Hi {name}, your peer for <strong>{topic}</strong> is{" "}
          <strong>{match.name}</strong>!
        </div>
      )}
    </div>
  );
}
