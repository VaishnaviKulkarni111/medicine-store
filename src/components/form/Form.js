import { Fragment, useState } from 'react';
import classes from './form.module.css';

const Form = (props) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [medicine, setMedicine] = useState(); 
   
    const submitHandler = (event) => {
        event.preventDefault();
        const medicine ={
            name : name,
            description: description,
            price: price, 
        }

        setMedicine((prevMedicines) => [...prevMedicines, medicine]);
        console.log('submitted')
    }

    return (
        <Fragment >
            <form onSubmit={submitHandler} className={classes.form}>      
        <div className={classes.name}>
        <label htmlFor="name"> Name: </label>
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
        <button className={classes.btn} type="submit">Add to Bill</button>
        
        </form> 

        </Fragment>
       
        
        
    )
};

export default Form;