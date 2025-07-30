// src/pages/Result.jsx
import { useLocation } from "react-router-dom";
import { mockPeerScores } from "../assets/mockPeers";

export default function Result() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const topic = params.get("topic");
  const userScore = parseInt(params.get("score"));
  const peer = mockPeerScores[topic];

  const winner = userScore >= peer.score ? "You" : peer.name;

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Result for {topic}</h2>
      <div className="flex justify-around">
        <div>
          <p className="font-bold">You</p>
          <p>Score: {userScore}</p>
        </div>
        <div>
          <p className="font-bold">{peer.name}</p>
          <img src={peer.avatar} alt="peer" className="w-16 h-16 mx-auto rounded-full" />
          <p>Score: {peer.score}</p>
        </div>
      </div>
      <h3 className="mt-6 text-lg">🏆 Winner: {winner}</h3>
    </div>
  );
}
