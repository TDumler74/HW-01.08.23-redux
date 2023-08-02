import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './Sandwich.module.css';

export default function Sandwich():JSX.Element {
    
    const dispatch = useDispatch();
    function handleAddCheese():void{
        dispatch({ type: 'addCheese', payload: ' cheese ' });
    }
    function handleAddBread():void{
        dispatch({ type: 'addBread', payload: ' bread ' })
    }
    function handleAddSalami(): void {
        dispatch({ type: 'addSalami', payload:' salami ' })
    }
    function handleClear(): void {
     dispatch({ type: 'handleClear', payload:'Sandwich: ' })  
    }
    const sandwich = useSelector((state: RootState) => state.sandwich.value);
  return (
   <div className={styles.container}>
     <h1>Sandwich</h1>
     <p className={styles.obj}> {sandwich}</p>
    <button className={styles.button} type="button" onClick={handleAddBread} >Add bread</button> 
    <button className={styles.button} type="button" onClick={handleAddCheese}>Add cheese</button>   
    <button className={styles.button} type="button" onClick={handleAddSalami} >Add salami</button>
    <button className={styles.button} type="button" onClick={handleClear} >Reset</button>
  </div>
);
} 
