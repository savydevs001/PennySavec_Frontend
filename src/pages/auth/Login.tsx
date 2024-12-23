import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  interface FormData {
    email: string;
    password: string;
    rememberMe?: boolean;
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
    className={`w-full rounded-md border p-2 bg-transparent h-11 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-100 border-opacity-50 focus:border-transparent'}`}
    placeholder="Please enter your email"
    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
      onChange: () => clearErrors('email')
    })}
  />
  {errors.email && <span className="text-red-500 text-sm">enter valid email please!</span>}
</div>
<div className="space-y-2 relative">
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
      <div className='flex justify-between items-center'>
      <div className="flex items-center space-x-2">
  <input
    id="rememberMe"
    type="checkbox"
    className="custom-checkbox"
    {...register('rememberMe')}
  />
  <label htmlFor="rememberMe" className="text-sm font-normal text-primary-100">
    Remember me
  </label>
</div>
        <Link to="/forgot-password" className="text-primary-100 text-sm font-normal underline">
          Forget password?
        </Link>
      </div>
      <button
        type="submit"
        className="w-full bg-primary-100 text-black py-2 px-4 mt rounded-md hover:bg-primary-200"
      >
        Sign in
      </button>
    </form>
  );
};

export default Login;