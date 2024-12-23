import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Tabs from '../../../components/Tabs';

const ForgotPasswordIndex: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [activeTab, setActiveTab] = useState('Phone number');
  const navigate = useNavigate();

  const onSubmit = () => {
   navigate('/forgot-password/otp');
  };

  return (
    <>
      <div>
        <h1 className='text-base md:text-2xl font-black text-primary-100 w-full text-left'>Did you forget your password?</h1>
        <p className='text-sm md:text-xl font-light text-white text-start w-full'>We will send you an OTP through your email or phone number to get it back.</p>
      </div>
      <div>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} button1Title='Phone number' button2Title='Email' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {activeTab === 'Phone number' ? (
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className={`block text-sm font-normal`}
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              className={`w-full rounded-md border p-2 bg-transparent h-11 border-gray-300`}
              placeholder="Please enter your phone number"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone?.message && typeof errors.phone.message === 'string' && (
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <label
              htmlFor="email"
              className={`block text-sm font-normal`}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={`w-full rounded-md border p-2 bg-transparent h-11 border-gray-300`}
              placeholder="Please enter your email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
              })}
            />
            {errors.email?.message && typeof errors.email.message === 'string' && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
        )}
         <button type="submit" className="w-full bg-primary-100 text-black py-2 px-4 mt-5 rounded-full hover:bg-primary-200 max-md:absolute max-md:bottom-10 max-md:right-5 max-md:max-w-[328px]">
        Send OTP
      </button>
      </form>
    </>
  );
};

export default ForgotPasswordIndex;