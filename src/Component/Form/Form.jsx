import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        address: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userFormData', JSON.stringify(formData));
        alert('Data saved to local storage');
      };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 border-2 w-[30%] pb-10'>
        <h1 className='text-3xl font-bold pt-5 pb-3'>Regesteration Form</h1>
        <div>
          {/* <label>First Name:</label> */}
          <input 
            type="text" 
            className='border-2 border-black px-3 py-1 w-[250px] rounded-md'
            name="firstName" 
            placeholder='Enter your first name'
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          {/* <label>Last Name:</label> */}
          <input 
            type="text" 
            className='border-2 border-black px-3 py-1 w-[250px] rounded-md'
            name="lastName" 
            placeholder='Enter your last name'
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          {/* <label>Email:</label> */}
          <input 
            type="email" 
            className='border-2 border-black px-3 py-1 w-[250px] rounded-md'
            name="email" 
            placeholder='Enter your email address'
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          {/* <label>Contact Number:</label> */}
          <input 
            type="text" 
            className='border-2 border-black px-3 py-1 w-[250px] rounded-md'
            name="contactNumber" 
            placeholder='Enter your phone number'
            value={formData.contactNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          {/* <label>Address:</label> */}
          <input 
            type="text" 
            className='border-2 border-black px-3 py-1 w-[250px] rounded-md'
            name="address" 
            placeholder='Enter your address'
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-[130px]' type="submit">Submit</button>
      </form>
    </div>
  )
}
