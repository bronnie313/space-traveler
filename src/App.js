import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

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
          <Route path="Missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
