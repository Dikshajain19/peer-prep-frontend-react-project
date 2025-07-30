import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();

  // Example dummy score & topic (replace with real logic)
  const score = 3;
  const topic = "Arrays";

  const handleFinish = () => {
    navigate(`/result?topic=${topic}&score=${score}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz on {topic}</h2>
      {/* Quiz questions and options go here */}

      <button
        onClick={handleFinish}
        className="bg-blue-600 text-white px-4 py-2 mt-6 rounded"
      >
        Submit Quiz
      </button>
    </div>
  );
};
export default Quiz;

