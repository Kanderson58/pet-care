import './App.css';
import PetProfile from './PetProfiles/PetProfile';
import petData from "./sampleData/petData.json" with { type: "json" };
import { useEffect, useState } from 'react';

function App() {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    setPetList(petData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          {petList && petList.map((pet) => <PetProfile key={pet.name} pet={pet} />)}
      </header>
    </div>
  );
}

export default App;