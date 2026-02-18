import ollie from '../sampleData/petImages/ollie.png';
import hodgepodge from '../sampleData/petImages/hodgepodge.png';
import oscar from '../sampleData/petImages/oscar.png';
import vena from '../sampleData/petImages/vena.png';
import fish from '../sampleData/petImages/fish.png';
import './PetProfile.css';

const imageMap = {
    'Ollie': ollie,
    'Hodgepodge': hodgepodge,
    'Oscar': oscar,
    'Vena': vena,
    'Fish': fish
};

function PetProfile({ pet }) {
    const imageSrc = imageMap[pet.name];
    
    return <>
        {imageSrc ? <img src={imageSrc} alt={pet.name} className="profile-pic" /> : <div>No image available</div>}
    </>
}

export default PetProfile;