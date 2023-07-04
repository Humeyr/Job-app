import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from '../redux/jobSlice';
import axios from 'axios';
import Filter from '../components/Filter';

const JobList = () => {
    const dispatch = useDispatch()
    const state = useSelector((store) => store.jobReducer)
    useEffect(()=>{
        axios.get("http://localhost:3060/jobs")
        .then((res) => dispatch(setJobs(res.data)))
    },[])
  return (
    <>
    <Filter/>
      <h3 className='job-count'>{state.filtredJobs.length} jobs finded</h3>
      <section className='list-section'>
        {!state.initialized ? <p>Loading..</p> : (state.filtredJobs.map((job) => (
            <div className='job-card'>
                <div className='head'>
                    <div className='letter'>
                        <p>{job.company[0]} </p>
                    </div>
                    <div className='info'>
                        <p>{job.position} </p>
                        <p>{job.company} </p>
                    </div>
                </div>
                <div className='body'>
                    <div className='field'>
                        <img src="/images/location.png" />
                        <p>{job.location}</p>
                    </div>
                    <div className='field'>
                        <img src="/images/calendar.png" />
                        <p>{job.date}</p>
                    </div>
                    <div className='field'>
                        <img src="/images/suitcase.png" />
                        <p>{job.type}</p>
                    </div>
                    <div className='status'>
                        <img src="" />
                        <span className={job.status} >{job.status}</span>
                    </div>
                </div>
            </div>
        )))}

      </section>
    </>
  )
}

export default JobList
