import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        tilte: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)
    const [jobs, setJobs] = useState([])

    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    useEffect(() => {
        fetchJobs()
    }, [])
     
    const value = {
        searchFilter, setSearchFilter, 
        isSearched, setIsSearched, jobs
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
              {/*children các phần tử nằm trong */}
        </AppContext.Provider>
    )
}

