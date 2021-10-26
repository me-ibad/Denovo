import React from 'react';

function PaymentForm() {
  return (
    <div>
      <div className='text-black text-lg font-bold underline '>
        Payment Authorization Form
      </div>
      <div>
        I authorize De Novo Review LLC to charge my credit card below before and
        after services are rendered. I acknowledge receipt of services from De
        Novo Review and agree to perform the obligations set forth in the
        Cardholder’s agreement with the Issuer. This authorization also applies
        to any charge or credit to this account for additional logged hours
        arising from this staff request. I authorize De Novo Review to keep
        credit card on file for payment of future projects
      </div>
      <div className='flex flex-wrap mt-6'>
        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Cardholder Name
            </label>
            <input
              type='text'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Credit Card Number
            </label>
            <input
              type='email'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Expiration Date
            </label>
            <input
              type='date'
              value='2017-06-01'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              CVV
            </label>
            <input
              type='number'
              value='2017-06-01'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-20 ease-linear transition-all duration-150'
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Type of Card
            </label>
            <label className='inline-flex items-center cursor-pointer'>
              <input
                id='customCheckLogin'
                type='checkbox'
                className='form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150'
              />
              <span className='ml-2 text-sm font-semibold text-blueGray-600'>
                Visa
              </span>
            </label>

            <label className='inline-flex items-center ml-2 cursor-pointer'>
              <input
                id='customCheckLogin'
                type='checkbox'
                className='form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150'
              />
              <span className='ml-2 text-sm font-semibold text-blueGray-600'>
                MC
              </span>
            </label>

            <label className='inline-flex items-center ml-2 cursor-pointer'>
              <input
                id='customCheckLogin'
                type='checkbox'
                className='form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150'
              />
              <span className='ml-2 text-sm font-semibold text-blueGray-600'>
                Discover
              </span>
            </label>

            <label className='inline-flex items-center ml-2 cursor-pointer'>
              <input
                id='customCheckLogin'
                type='checkbox'
                className='form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150'
              />
              <span className='ml-2 text-sm font-semibold text-blueGray-600'>
                Amex
              </span>
            </label>
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Billing address
            </label>
            <input
              type='text'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
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
              type='text'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Email address to send Credit Card Receipt to
            </label>
            <input
              type='text'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Signature:
            </label>
            <input
              type='text'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            />
          </div>
        </div>

        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Date
            </label>
            <input
              type='date'
              value='2017-06-01'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
