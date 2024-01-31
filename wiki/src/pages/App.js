import './App.css';
import GitLogo from '../assets/github.png';
import '../components/input';
import '../components/Button';
import ItemRepo from '../components/ItemRepo';
import '../components/ItemRepo'
import { useState } from 'react';
import { api } from '../services/api';

function App() {
  
  const [currentRepos, setCurrentRepos] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepos = async () => {
    const {data} = await api.get(`repos/${currentRepos}`)

    if(data.id){
      setRepos(prev => [...prev, data]);
    }
  }

  return (
    <div className="App">
      <img src={GitLogo} alt='Logo da github' className='img'/>
      <input value={currentRepos} onChange={(e) => setCurrentRepos(e.target.value)} />
      <button onClick={handleSearchRepos} />
      {repos.map(repos => <ItemRepo repos={repos} />)}
    </div>
  );
}

export default App;