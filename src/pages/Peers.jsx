const peers = [
  { name: 'Aditi Sharma', skill: 'React & System Design', status: 'Available' },
  { name: 'Karan Mehta', skill: 'DSA & C++', status: 'Busy' },
  { name: 'Priya Verma', skill: 'Java Backend', status: 'Available' },
];

function Peers() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">Available Peers</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {peers.map((peer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-4 border hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-black">{peer.name}</h3>
            <p className="text-sm text-gray-600">{peer.skill}</p>
            <p className={`mt-2 text-sm font-medium ${peer.status === 'Available' ? 'text-green-600' : 'text-red-500'}`}>{peer.status}</p>
            <button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Peers;