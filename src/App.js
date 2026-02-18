import './App.css';
import PetProfile from './PetProfiles/PetProfile';
import PetProfilePage from './PetProfiles/PetProfilePage';
import petData from "./sampleData/petData.json" with { type: "json" };
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    setPetList(petData);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className="App-header">
              {petList ? 
                petList.map((pet) => <Link key={pet.name} to={`/pet/${pet.name.toLowerCase()}`}><PetProfile pet={pet} /></Link>) :
                <div>Loading...</div>
              }
            </div>
          </div>
        } />
        <Route path="/pet/:name" element={<PetProfilePage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;