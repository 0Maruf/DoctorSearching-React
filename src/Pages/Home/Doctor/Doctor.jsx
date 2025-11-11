import React from 'react';
import { Link } from 'react-router';

const Doctor = ({ doctor }) => {
    const {id, name, image, experience, speciality, workingAt, fees, education} = doctor;
    return (
        <div className='p-2'>
            <div className="card bg-base-100 w-70 shadow-sm  hover:shadow-lg hover:scale-[1.02] transition duration-300 ease-in-out ">
                <figure>
                    <img className='w-96 h-96'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{experience}</div>
                    </h2>
                    <p>{education} - {speciality}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{workingAt}</div>
                        <div className="badge badge-outline">{fees}</div>
                    </div>
                    <div className='mt-2'>
                        <Link className='btn btn-primary w-full' to={`/doctors-details/${id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;