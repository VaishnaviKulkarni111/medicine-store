import React from "react";

const MedicineContext = React.createContext({
 medicineValue:[],
 newMedicine: '',
 addMedicine: (medicine) => {}
      
     
});



export default MedicineContext;