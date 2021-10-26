import React from 'react';

function StafForm() {
  return (
    <div>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Staff Type
            </label>

            <select
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
              //   className='input-styl'
              name='cars'
              id='cars'
            >
              <option value='volvo'>Click to Select</option>
              <option value='saab'>Call Team, Forms</option>

              <option value='mercedes'>Seinor Attorney</option>
              <option value='mercedes'>Junior Attorney</option>

              <option value='mercedes'>Data Entry</option>
              <option value='mercedes'>Paralegal</option>
              <option value='mercedes'>Law Clerk</option>
              <option value='mercedes'>Co counsel</option>
              {/* <option value='audi'>Audi</option> */}
            </select>
          </div>
        </div>
      </div>

      <div className='w-full lg:w-6/12 px-4'>
        <div className='relative w-full mb-3'>
          <label
            className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            Hire Formate
          </label>
          <select
            className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            //   className='input-styl'
            name='cars'
            id='cars'
          >
            <option value='volvo'>Click to Select</option>
            <option value='saab'>Contract- One Time</option>
            <option value='saab'>Contract- Recurring</option>
            <option value='audi'>Temporary</option>
            <option value='audi'>Permanent</option>
          </select>
        </div>
      </div>

      <div className='w-full lg:w-6/12 px-4'>
        <div className='relative w-full mb-3'>
          <label
            className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            Unit{' '}
            <input
              type='email'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10 ease-linear transition-all duration-150'
              defaultValue='1'
            />{' '}
            Volume Discount
          </label>
          <input
            type='email'
            className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            defaultValue=''
          />
        </div>
      </div>

      <div className='w-full lg:w-6/12 px-4'>
        <div className='relative w-full mb-3'>
          <label
            className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
            htmlFor='grid-password'
          >
            LAw of Area
          </label>
          <select
            className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            //   className='input-styl'
            name='cars'
            id='cars'
          >
            <option value='volvo'>Click to Select</option>
            <option value='saab'>Contract- One Time</option>
            <option value='saab'>Contract- Recurring</option>
            <option value='audi'>Temporary</option>
            <option value='audi'>Permanent</option>
          </select>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              {' '}
              <input
                type='email'
                className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10 ease-linear transition-all duration-150'
                defaultValue='1'
              />
              Rate =
              <input
                type='email'
                className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10 ease-linear transition-all duration-150'
                defaultValue='1'
              />{' '}
              + 3.5% Admin Fee
              <input
                type='email'
                className='border-0 px-3 py-3 mt-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10 ease-linear transition-all duration-150'
                defaultValue='1'
              />
            </label>
            Total :
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Name
            </label>
            <input
              type='text'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
              // defaultValue="jesse@example.com"
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Phone Number
            </label>
            <input
              type='number'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
              // defaultValue="jesse@example.com"
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Email
            </label>
            <input
              type='email'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
              // defaultValue="jesse@example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StafForm;
