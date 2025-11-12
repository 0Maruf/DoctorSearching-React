import React from 'react';


const Home = () => {
  return (

    <div className='py-12 px-4 max-w-7xl mx-auto'>

      <div className="card w-full max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden flex flex-col-reverse lg:flex-row">
        <figure className='lg:w-1/2'>
          <img className='w-full h-72 lg:h-full object-cover'
            src="https://images.unsplash.com/photo-1659353886868-753b0c5c5772?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="A confident doctor standing in a clinic"
          />
        </figure>

        <div className="card-body lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="card-title text-3xl md:text-4xl font-extrabold text-primary mb-4">Find Your Best Doctor</h2>
          <p className='text-gray-600 mb-6'>
            Finding the right healthcare provider is now simpler than ever. Browse certified specialists, <br /> view real-time availability, and book your appointment instantly. Quality care is just a click away.
          </p>
          <div className="card-actions justify-start mt-4">
            <button className="btn btn-primary shadow-lg hover:shadow-xl transition duration-300">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;