import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  interface FormData {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    rememberMe: boolean;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left text-white py-5 flex flex-col gap-5 rounded-lg w-full font-sans">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className={`block text-sm font-normal ${errors.email ? 'text-red-500' : ''}`}
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className={`w-full rounded-md border p-2 bg-transparent h-11 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Please enter your email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <div className='flex gap-2 w-full'>
        <div className="space-y-2 flex-1">
          <label
            htmlFor="firstName"
            className={`block text-sm font-normal ${errors.firstName ? 'text-red-500' : ''}`}
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className={`w-full rounded-md border p-2 bg-transparent h-11 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Please enter your first name"
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
        </div>
        <div className="space-y-2 flex-1">
          <label
            htmlFor="lastName"
            className={`block text-sm font-normal ${errors.lastName ? 'text-red-500' : ''}`}
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className={`w-full rounded-md border p-2 bg-transparent h-11 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Please enter your last name"
            {...register('lastName', { required: 'Last name is required' })}
          />
          {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
        </div>
      </div>

      <div className="space-y-2 relative">
        <label
          htmlFor="password"
          className={`block text-sm font-normal ${errors.password ? 'text-red-500' : ''}`}
        >
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
            }
          })}
        />
        <div
          className="absolute top-8 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </div>
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>
      <div className="space-y-2 relative">
        <label
          htmlFor="password"
          className={`block text-sm font-normal ${errors.password ? 'text-red-500' : ''}`}
        >
          Password Confirmation
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          className={`w-full rounded-md border p-2 bg-transparent h-11 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Password Confirmation"
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[A-Z]).{6,}$/,
              message: 'Password must be at least 6 characters long and contain at least one uppercase letter'
            }
          })}
        />
        <div
          className="absolute top-8 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </div>
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>
      <div className='flex justify-between items-center'>
        <div className="flex items-center space-x-2">
          <input
            id="rememberMe"
            type="checkbox"
            className="custom-checkbox"
            {...register('rememberMe')}
          />
          <label htmlFor="rememberMe" className="text-sm font-normal">
           I agree to the<span className='underline text-primary-100'> terms and conditions </span>
          </label>
        </div>
       
      </div>
      <button
        type="submit"
        className="w-full bg-primary-100 text-black py-2 px-4 mt rounded-md hover:bg-primary-200"
      >
        Sign up
      </button>
    </form>
  );
};

export default Signup;