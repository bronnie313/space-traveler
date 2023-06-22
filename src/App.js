import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from './components/Navigation/Navigation';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missionslist';
import Profile from './components/Profile';
import NotFound from './components/NotFound/NotFound';
import { fetchRockets } from './redux/rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
