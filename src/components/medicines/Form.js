import { Fragment, useState , useContext} from 'react';
import classes from './form.module.css';
import MedicineContext from '../../store/medicine-context';

const Form = () => {
    const Medctx = useContext(MedicineContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
   
   
    const submitHandler = (event) => {
        if(name.trim().length <1 || description.trim().length <1 || price.trim().length < 1){
         alert('Please Enter Valid Details');
        return;
        }
        event.preventDefault();
        const newMedicine ={
            name : name,
            description: description,
            price: price, 
        }
      

        Medctx.addMedicine(newMedicine);
        setName('');
        setDescription('');
        setPrice('');
    }

    return (
        <Fragment >
            <form onSubmit={submitHandler} className={classes.form}>      
        <div className={classes.name}>
        <label htmlFor="name">Medicine Name: </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className={classes.desc}>
        <label htmlFor="desc"> Description: </label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
        </div>   
        <div className={classes.price}>
        <label htmlFor="price"> Price: </label>
        <input type="number"value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <button className={classes.btn} type="submit">Add Product</button>
        
        </form> 

        </Fragment>
       
        
        
    )
};

export default Form;