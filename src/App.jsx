import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Peers from './pages/Peers';
import Practice from './pages/Practice';
import Chat from './pages/Chat';
import MatchPeers from "./pages/MatchPeers";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";


import Arrays from './pages/topics/Arrays';
import LinkedLists from './pages/topics/LinkedList';
import Trees from './pages/topics/Trees';
import Graphs from './pages/topics/Graphs';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/peers" element={<Peers />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/match" element={<MatchPeers />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />

            
            <Route path="/practice/arrays" element={<Arrays />} />
            <Route path="/practice/linkedlists" element={<LinkedLists />} />
            <Route path="/practice/trees" element={<Trees />} />
            <Route path="/practice/graphs" element={<Graphs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
