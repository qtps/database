import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreatePost from './pages/CreatePost';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello World!</div>} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;