import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

interface FormData {
  password: string;
  confirmPassword: string;
}

const Newpassword: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, clearErrors, watch } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: FormData) => {
    console.log('New Password:', data.password);
   navigate('/success')
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      <h1 className='text-primary-100 font-black text-2xl text-left w-full'>Reset your password</h1>
      <p className='text-white text-xl font-light text-left w-full'>All done, Write your new password.</p>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full mt-5 gap-5'>
        <div className="space-y-2 relative w-full">
          <label htmlFor="password" className={`block text-sm font-normal ${errors.password ? 'text-red-500' : ''}`}>
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className={`w-full rounded-md border p-2 bg-transparent h-11 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Please enter your password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Z]).{6,}$/,
                message: 'Password must be at least 6 characters long and contain at least one uppercase letter'
              },
              onChange: () => clearErrors('password')
            })}
          />
          <div
            className="absolute top-8 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
          {errors.password?.message && typeof errors.password.message === 'string' && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>
        
        <div className="space-y-2 relative w-full">
          <label htmlFor="confirm-password" className={`block text-sm font-normal ${errors.confirmPassword ? 'text-red-500' : ''}`}>
            Password Confirmation
          </label>
          <input
            id="confirm-password"
            type={showPassword ? "text" : "password"}
            className={`w-full rounded-md border p-2 bg-transparent h-11 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Confirm your password"
            {...register('confirmPassword', {
              required: 'Password confirmation is required',
              validate: value => value === watch('password') || 'Passwords do not match',
              onChange: () => clearErrors('confirmPassword')
            })}
          />
          <div
            className="absolute top-8 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
          {errors.confirmPassword?.message && typeof errors.confirmPassword.message === 'string' && (
            <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
          )}
        </div>

        <button type="submit" className="w-full bg-primary-100 text-black py-2 px-4 mt-5 rounded-md hover:bg-primary-200">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Newpassword;