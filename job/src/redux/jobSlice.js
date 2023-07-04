import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs:[],
    filtredJobs:[],
    initialized: false
}

const jobSlice = createSlice({
    name:"jobSlice",
    initialState,
    reducers: {
        setJobs:(state,action) => {
            state.jobs = action.payload;
            state.filtredJobs = action.payload;
            state.initialized = true;
        },
        addNewJob:(state,action) => {
            state.jobs.unshift(action.payload);
        },
        filterByStatus:(state,action) => {
            const filtredJobs = state.jobs.filter(
                (job) => job.status === action.payload
            );
            state.filtredJobs = filtredJobs;
        },
        
        filterByType:(state,action) => {
            const filtredArr = state.jobs.filter(
                (job) => job.type === action.payload
            );
            state.filtredJobs = filtredArr;
        },

        handleSort:(state,action) => {
            switch(action.payload){
                case 'A-Z':
                    state.filtredJobs.sort((a,b) => {
                        if(a.company < b.company) return -1;
                        if(a.company > b.company) return 1;
                        return 0;
                    });
                    break;
                case 'Z-A':
                    state.filtredJobs.sort((a,b) => {
                        if(a.company < b.company) return 1;
                        if(a.company > b.company) return -1;
                        return 0;
                    });
                    break;
                case 'Newest':
                    state.filtredJobs.sort((a,b) => 
                        new Date(b.date) - new Date(a.date));
                    break;
                case 'Oldest':
                    state.filtredJobs.sort((a,b) => 
                        new Date(a.date) - new Date(b.date));
                    break;
                default:
                    break;
            }
        },

        handleSearch:(state,action) => {
            const query = action.payload.toLowerCase();
            const filtredArr = state.jobs.filter((job) => 
            job.company.toLowerCase().includes(action.payload));

            state.filtredJobs = filtredArr;

            
        },

        handleClear:(state,action) => {
            state.filtredJobs = state.jobs
        }
       
    },

});

export const {setJobs, addNewJob, filterByStatus, filterByType, handleSearch, handleSort, handleClear } = jobSlice.actions
export default jobSlice.reducer