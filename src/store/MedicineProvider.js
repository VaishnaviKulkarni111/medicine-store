import React,{useEffect, useState} from 'react'
import MedicineContext from './medicine-context';
import axios from 'axios';

const MedicineProvider = (props) => {
  const url = "https://crudcrud.com/api/4e78268dbacd45829f7749eb924845f5/medicines"
    const [medicines, setMedicines] = useState([]);
    const addMedicine = async (newMedicine) => {
    try{
      const response = await axios.post(url, { ...newMedicine });
      setMedicines([...medicines, response.data]);
      
      //setMedicines((prevmedicines) => [...prevmedicines, newMedicine]);

    }catch(error){
      console.log(error)
    }         
   };

      const medicineValue = {
        medicines,
        addMedicine,
      };

      
    const getItem = async () => {
      try {
        const response = await axios.get(url);
         setMedicines( response.data);
  
      } catch (error) {
        console.log("error fetching cart cart items", error);
      }
    };
    useEffect(() => {
      getItem();
    }, []);
    
      return (
        <MedicineContext.Provider value={medicineValue}>
          {props.children}
        </MedicineContext.Provider>
      );
};

export default MedicineProvider;
