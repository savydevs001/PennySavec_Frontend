import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPIndex = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [activeInput, setActiveInput] = useState(0);
  const [count, setCount] = useState(59);
  const navigate = useNavigate();



  interface HandleChangeEvent {
    target: {
      value: string;
    };
  }

  const handleChange = (e: HandleChangeEvent, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== '' && index < 5) {
        setActiveInput(index + 1);
      }
    }
  };

  interface HandleFocusEvent {
    index: number;
  }

  const handleFocus = (index: HandleFocusEvent['index']) => {
    setActiveInput(index);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('OTP Submitted:', otp.join(''));
    navigate('/forgot-password/new-password');
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      <h1 className='text-primary-100 font-black text-2xl w-full text-left'>Verification Code</h1>
      <p className='text-white text-xl font-light'>We have sent the verification code to your email address</p>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div className='flex gap-6 max-md:gap-2 mt-4'>
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e, index)}
              onFocus={() => handleFocus(index)}
              className={`w-20 h-20 max-md:w-12 max-md:h-14 text-center text-xl font-bold border bg-transparent rounded-md ${
                activeInput === index ? 'border-primary-100 text-primary-100' : 'border-white text-white'
              } focus-visible::border-primary-100 focus:text-primary-100`}
            />
          ))} 
        </div>
        <p className='mt-5'> Didn’t receive your code?</p>
        <p>Resend in <span className='text-primary-100 underline'>{count > 0 ? `00:${count}` : <a href="#" className='text-primary-100 cursor-pointe underline'>Click here</a>}</span> </p>
        <button type="submit" className="w-full bg-primary-100 text-black py-2 px-4 mt-5 rounded-md hover:bg-primary-200">
          Continue
        </button>
      </form>
    </div>
  );
};

export default OTPIndex;