import React,{useState} from 'react'
import MedicineContext from './medicine-context';

const MedicineProvider = (props) => {
    const [medicines, setMedicines] = useState([]);

    const addMedicine = (newMedicine) => {
        
        setMedicines((prevmedicines) => [...prevmedicines, newMedicine]);
      };

      const medicineValue = {
        medicines,
        addMedicine,
      };
    
      return (
        <MedicineContext.Provider value={medicineValue}>
          {props.children}
        </MedicineContext.Provider>
      );
};

export default MedicineProvider;
