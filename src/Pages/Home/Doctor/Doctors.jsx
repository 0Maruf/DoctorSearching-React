import React, { useState } from 'react';
import { useLoaderData } from 'react-router'; 
import Doctor from './Doctor';

const Doctors = () => {
    const data = useLoaderData(); 
    const [doctors, setDoctors] = useState(data); 

    const handleSearchDoctors = (e) => {
        e.preventDefault();
        const searchTexts = e.target.search.value.toLowerCase().trim(); 
        const allMatches = data.filter((doctor) => 
            doctor.name.toLowerCase().includes(searchTexts)
        );
        let finalResult = [];
        
        if (allMatches.length > 0) {
        
            finalResult = [allMatches[0]]; 
        }

        setDoctors(finalResult);
    }

    return (
        <div className='my-10'>
            <div className='my-5 p-5 font-bold text-5xl text-center'>
                <h1> Our Hospital's Doctors : {doctors.length}</h1>
            </div>
            
            <div className='p-5 w-full'>
                <form onSubmit={handleSearchDoctors} className='flex flex-col justify-center items-center gap-10'>
                    <input className='outline outline-black w-6/12 py-4 px-5 rounded-xl' type="search" name="search" placeholder='Search here' />
                    <button className='btn btn-primary btn-outline w-3/12' type="submit"> Submit </button>
                </form>
            </div>
            
            <div className='grid grid-cols-3  gap-5  justify-items-center mt-10'>
                {
                    doctors.map((doctor) => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
                
                {doctors.length === 0 && <p className='text-xl col-span-3 text-red-500'>No doctor found matching your search.</p>}

            </div>
        </div>
    );
};

export default Doctors;