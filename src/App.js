import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Rockets from './components/Rockets/Rockets';

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="container">
        <Routes>
          <Route index element={<Rockets />} />
          <Route path="rockets" element={<Rockets />} />
          {/* <Route path="mission" element={<Missions />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
