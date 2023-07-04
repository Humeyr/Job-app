import { useDispatch } from 'react-redux'
import { statusOptions, typeOptions, sortOptions } from '../constants'
import { filterByStatus, filterByType, handleSearch, handleSort, handleClear } from '../redux/jobSlice';
import { useRef } from 'react';

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(handleSearch(e.target.value))
    }

    const handleStatusChange = (e) => {
        dispatch(filterByStatus(e.target.value));
    }

    const handleTypeChange = (e) => {
       dispatch(filterByType(e.target.value));
    }

    const handleSortChange = (e) => {
        dispatch(handleSort(e.target.value))
    }

    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.value = '';
        dispatch(handleClear(e.target.value));
    }

    const inputRef = useRef();

  return (
   <section className='filter-sec'>
    <h2>Filter Form</h2>
    <form>
        <div className='input-field'>
            <label>Search</label>
            <input  ref={inputRef} onChange={handleChange} type='text'/>
        </div>
        <div className='input-field'>
            <label>Status</label>
           <select onChange={handleStatusChange}>
            {statusOptions.map((opt) => (
                <option value={opt.label}>{opt.label}</option>
            ))}
           </select>
        </div>
        <div className='input-field'>
            <label>Type</label>
           <select onChange={handleTypeChange}>
            {typeOptions.map((opt) => (
                <option value={opt.label}>{opt.label}</option>
            ))}
           </select>
        </div>
        <div className='input-field'>
            <label>Sort</label>
           <select onChange={handleSortChange}>
            {sortOptions.map((opt) => (
                <option value={opt}>{opt}</option>
            ))}
           </select>
        </div>
        <button onClick={handleClick}>Clear</button>
    </form>
   </section>
  )
}

export default Filter
