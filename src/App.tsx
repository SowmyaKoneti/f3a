import styles from '@/App.module.scss';
import { Card3 } from '@/components/Card3';
import TeamMembers from '@/components/Card3/TeamMembers';
import { Navbar } from '@/components/Navbar';
import { About } from '@/pages/About';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => (
  <div className={styles.App}>
    {/* Navbar */}
    <Navbar>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/card">Teams</Link>
      <Link to="/standings">Standings</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/rulesform">Rules form</Link>
    </Navbar>

    {/* Pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/card" element={<Card3 />} />
      <Route path="/team/Team1" element={<TeamMembers teamName="Team1" />} />
      <Route path="/team/Team2" element={<TeamMembers teamName="Team2" />} />
      <Route path="/team/Team3" element={<TeamMembers teamName="Team3" />} />
      <Route path="/team/Team4" element={<TeamMembers teamName="Team4" />} />
    </Routes>
  </div>
);
