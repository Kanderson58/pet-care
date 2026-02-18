import { useParams } from 'react-router-dom';
import petData from '../sampleData/petData.json';

function PetProfilePage() {
    const { name } = useParams();
    const pet = petData.find(p => p.name.toLowerCase() === name.toLowerCase());

    console.log(pet);
    return <>
        {pet ? (
            <>
                <h2>{pet.name}</h2>
                <p>Species: {pet.species}</p>
                <p>Birthday: {pet.birthday}</p>
            </>
        ) : (
            <div>Pet not found</div>
        )}
    </>
}

export default PetProfilePage;