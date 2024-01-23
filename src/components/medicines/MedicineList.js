import React ,{ useContext}from "react";
 import MedicineContext from "../../store/medicine-context";
import Card from '../UI/Card'
import classes from'./MedicineList.module.css';
import QuantityForm from "./QuantityForm";

const MedicineList = () => {
  
  const Ctx = useContext(MedicineContext)
  
  return ( 
    <Card className={classes.card}>
      {Ctx.medicines.map((medicine) => (
        <li key={medicine.id} className={classes.li}>
          <span>{medicine.name}  </span>
          <span>{medicine.description}  </span>
          <span>{medicine.price}  </span>
          <span className={classes.Qbtn}>
          <QuantityForm  id={medicine.id} item={medicine} />
          </span>
        
        
        </li>
      ))}
    </Card>
    
  );
};

export default MedicineList;