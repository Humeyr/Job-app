import {useState} from 'react'
import { statusOptions, typeOptions } from '../constants';
import { useDispatch } from 'react-redux';
import { addNewJob } from '../redux/jobSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJob = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAdd = (e) => {
        e.preventDefault();

        //Controlling the form areas

        if(!formState.position || !formState.company || !formState.location){
            toast.warn("Please fill all blank areas");
            return;
        }
        axios.post("http://localhost:3060/jobs",formState)
        .then(() => {
            dispatch(addNewJob(formState));
            navigate("/");
            toast("Addition Succesfull ")
        })
        .catch((err) => console.log(err));
    };

    const [formState, setFormState] = useState({
        id: new Date().getTime(),
        position: "",
        company:"",
        location:"",
        status:"Interview",
        type:"Full-time",
        date: new Date().toLocaleDateString()

    });

  return (
    <section className='add-sec'>
      <h2>Add a New Position</h2>
      <form onSubmit={handleAdd}>
        <div className='input-field'>
            <label>
                Position
            </label>
            <input type='text' onChange={(e) => setFormState({
                ...formState, 
                position:e.target.value})}
            />
        </div>
        <div className='input-field'>
            <label>
                Company
            </label>
            <input type='text' onChange={(e) => setFormState({
                ...formState, 
                company:e.target.value})}
            />
        </div>
        <div className='input-field'>
            <label>
                Location
            </label>
            <input type='text' onChange={(e) => setFormState({
                ...formState, 
                location:e.target.value})}
            />
        </div>
        <div className='input-field'>
            <label>
                State
            </label>
           <select onChange={(e) => setFormState({
                ...formState, 
                status:e.target.value})}>
            {statusOptions.map((opt) => (
                <option value={opt.label} >{opt.label} </option>
            ))}
           </select>
        </div>
        <div className='input-field'>
            <label>
                Type
            </label>
            <select onChange={(e) => setFormState({
                ...formState, 
                type:e.target.value})}>
            {typeOptions.map((opt) => (
                <option value={opt.label} >{opt.label} </option>
            ))}
           </select>
        </div>
        <button >Add</button>
        
      </form>
    </section>
  )
}

export default AddJob
